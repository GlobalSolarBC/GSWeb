/* eslint-disable max-len */
import React from 'react';

import {
  DonutView,
  DonutChartContainer,
  DonutChart,
  DonutChartSegment,
  ChartLabel,
} from './styled';

const Donut = ({ items, onMouseEnter, onMouseLeave, size, hole }: any) => {
  const RADIAN = Math.PI / 180;
  const d2r = (d: number) => d * (Math.PI / 180);
  const r2d = (r: number) => r / (Math.PI / 180);
  const angleForArcLength = (arcLength: number, atRadius: number) =>
    arcLength / atRadius;
  const center = size / 2;
  // const hole = 214;
  const thickness = (size - hole) / 2;
  const radiusOuter = size / 2;
  const radiusInner = radiusOuter - thickness;
  const gapSize = 1;
  const gapAngleOffsetInner = r2d(angleForArcLength(gapSize, radiusInner));
  const gapAngleOffsetOuter = r2d(angleForArcLength(gapSize, radiusOuter));
  const minimumAngleDeg = r2d(angleForArcLength(gapSize * 2, radiusInner));
  const minimumValue = minimumAngleDeg / 360;
  const coords = (deg: number, r: number) => {
    const rad = d2r(deg);
    return [center - Math.cos(rad) * r, center - Math.sin(rad) * r];
  };

  const makeSegment = (
    { paths, subtotal, texts, gradients }: any,
    { percent2, opacity, colors }: any,
    i: number,
  ) => {
    const percent = percent2;

    const startAngle = subtotal * 360 + 120; // +90 so we start at 12 o'clock

    const endAngle = startAngle + percent * 360;
    // no gaps for values beneath the minimum threshold
    const useGap = percent >= minimumValue;
    const innerGap = useGap ? gapAngleOffsetInner : 0;
    const outerGap = useGap ? gapAngleOffsetOuter : 0;

    const startAngleInner = startAngle + innerGap;
    const startAngleOuter = startAngle + outerGap;
    const endAngleInner = endAngle - innerGap;
    const endAngleOuter = endAngle - outerGap;

    const [x1, y1] = coords(startAngleInner, radiusInner); // start point on inner circle
    const [x2, y2] = coords(startAngleOuter, radiusOuter); // start point on outer circle
    const [x3, y3] = coords(endAngleOuter, radiusOuter); // end point on outer circle
    const [x4, y4] = coords(endAngleInner, radiusInner); // end point on inner circle

    const largeArc = percent > 0.5 ? 1 : 0;
    const sweepOuter = 1;
    const sweepInner = 0;

    const commands = [
      // move to start angle coordinate, inner radius
      `M${x1} ${y1}`,

      // line to start angle coordinate, outer radius
      `L${x2} ${y2}`,

      // arc to end angle coordinate, outer radius
      `A${radiusOuter} ${radiusOuter} 0 ${largeArc} ${sweepOuter} ${x3} ${y3}`,

      // line to end angle coordinate, inner radius
      `L${x4} ${y4}`,

      // arc back to start angle coordinate, inner radius
      `A${radiusInner} ${radiusInner} 0 ${largeArc} ${sweepInner} ${x1} ${y1}`,
    ];

    const midAngle = startAngle + (endAngle - startAngle) / 2 + 180;

    const radius = radiusInner + (radiusOuter - radiusInner) * 0.5;
    const x = center + radius * Math.cos(midAngle * RADIAN);
    const y = center + radius * Math.sin(midAngle * RADIAN);

    const onMouseEnterLabel = () => {
      onMouseEnter(i);
    };

    texts.push(
      <>
        <ChartLabel
          onMouseEnter={() => onMouseEnterLabel()}
          x={x}
          y={y}
          textAnchor={'middle'}
          dominantBaseline="central"
          opacity={opacity}
        >
          {i !== 3 ? items[i].allocation : 'Partners'}
        </ChartLabel>
        <br />
        <ChartLabel
          onMouseEnter={() => onMouseEnterLabel()}
          x={x}
          y={y + 16}
          textAnchor={'middle'}
          dominantBaseline="central"
          opacity={opacity}
        >
          {items[i].percent + ' %'}
        </ChartLabel>
      </>,
    );

    for (let idx = 0; idx < colors.length; idx++) {
      const code = `gr${i}_${idx}`;

      gradients.push(
        <linearGradient
          id={code}
          x1="214.5"
          y1="0"
          x2="214.5"
          y2="429"
          gradientUnits="userSpaceOnUse"
        >
          <stop stop-color={colors[idx]} />
          <stop offset="1" stop-color={colors[idx]} stop-opacity="0.2" />
        </linearGradient>,
      );

      const fill = `url(#${code})`;
      const fillProp = fill ? { fill } : {};
      paths.push(
        <DonutChartSegment
          opacity={opacity}
          onMouseOver={
            idx == colors.length - 1
              ? () => {
                  onMouseEnter(i);
                }
              : undefined
          }
          onMouseLeave={onMouseLeave}
          key={i}
          {...fillProp}
          stroke="none"
          d={commands.join(' ')}
        />,
      );
    }

    return {
      paths,
      subtotal: subtotal + percent,
      texts,
      gradients,
    };
  };
  const result = items.reduce(makeSegment, {
    paths: [],
    subtotal: 0,
    texts: [],
    gradients: [],
  });
  // console.log(items)
  return (
    <DonutView>
      <DonutChartContainer>
        <DonutChart>
          <svg
            style={{ cursor: 'pointer' }}
            width={size}
            height={size}
            viewBox={`0 0 ${size} ${size}`}
          >
            {result.paths}
            {result.texts}
            <defs>{result.gradients}</defs>
          </svg>
        </DonutChart>
      </DonutChartContainer>
    </DonutView>
  );
};

export default Donut;

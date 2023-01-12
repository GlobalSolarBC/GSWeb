/* eslint-disable jsx-quotes */
/* eslint-disable no-console */
import React, {useState} from 'react';
import styled from 'styled-components';
import { DATA, NAME_DATA } from './options';
import { AnimationOnScroll } from 'react-animation-on-scroll';
import {
  Allocation,
  Container,
  Div,
  GraPhic,
  Heading,
  MenuList,
  MenuListItem,
  Time,
  Vestings,
  LegenItem,
  LegendSpan,
  LegendText,
  Legend
} from './styled';
import { AreaChart, Area, XAxis, YAxis, Customized, Tooltip, ResponsiveContainer } from 'recharts';
import data from './data.json';


const Vesting = () => {
  const defaultLines ={
    'Private': 'none',
    'Public': 'none',
    'Team': 'none',
    'Partners/Advisors': 'none',
    'Development': 'none',	
    'Marketing': 'none',	
    'Liquidity': 'none',	
    'Community': 'none',
  };

  const backgrounds = {
    'Private': 'linear-gradient(180deg, #90CD38 0%, rgba(144, 205, 56, 0) 100%)',
    'Public': 'linear-gradient(180deg, #90CD38 0%, rgba(144, 205, 56, 0) 100%)',
    'Team': 'linear-gradient(180deg, #90CD38 0%, rgba(144, 205, 56, 0) 100%)',
    'Partners/Advisors': 'linear-gradient(180deg, #90CD38 0%, rgba(144, 205, 56, 0) 100%)',
    'Development': 'linear-gradient(180deg, #90CD38 0%, rgba(144, 205, 56, 0) 100%)',	
    'Marketing': 'linear-gradient(180deg, #DDECC7 0%, rgba(221, 236, 199, 0) 100%)',	
    'Liquidity': 'linear-gradient(177.51deg, #8DC043 0.65%, rgba(141, 192, 67, 0) 97.92%)',	
    'Community': 'linear-gradient(180deg, #F4F9EC 0%, rgba(244, 249, 236, 0) 100%)',
  }
  const [lines, setLines] = useState(defaultLines);
  
  const handleMouseEnter = (key:string) => {
    setLines({...defaultLines, [key]: '#90CD38'})
  };

  const handleMouseLeave = () => {
    setLines(defaultLines);
  };

  return (
    <Container>
      <Heading>Vesting Schedule</Heading>
      <AnimationOnScroll
        animateOnce={true}
        delay={100}
        animateIn="animate__fadeIn"
      >
        <MenuList>
          <MenuListItem>
            <Allocation>Allocation</Allocation>
            <Time>LockUp Time</Time>
            <Vestings>Linear Vesting</Vestings>
          </MenuListItem>
          {DATA.map(({ allocation, time, vesting, id }) => (
            <>
              <MenuListItem key={id} onMouseEnter={()=>handleMouseEnter(allocation)} onMouseLeave={handleMouseLeave} >
                <Allocation>{allocation}</Allocation>
                <Time> {time}</Time>
                <Vestings>{vesting}</Vestings>
              </MenuListItem>
            </>
          ))}
        </MenuList>
      </AnimationOnScroll>
      <Div>
        <ResponsiveContainer  
          width="100%"
          height="100%"        
   
        > 
          <AreaChart
            data={data}
            margin={{
              left: -10,
              top: -10
            }}
          >
            <defs>
              <linearGradient  id="Liquidity" x1="203.858" y1="5.05675e-07" x2="213.751" y2="547.869" gradientUnits="userSpaceOnUse">
                <stop stopColor="#8DC043"/>
                <stop offset="1" stopColor="#8DC043" stopOpacity="0"/>
              </linearGradient>
              <linearGradient id="Public" x1="649.5" y1="0" x2="649.5" y2="538" gradientUnits="userSpaceOnUse">
                <stop stopColor="#90CD38"/>
                <stop offset="1" stopColor="#90CD38" stopOpacity="0"/>
              </linearGradient>
              <linearGradient id="Partners/Advisors" x1="650" y1="0" x2="650" y2="538" gradientUnits="userSpaceOnUse">
                <stop stopColor="#90CD38"/>
                <stop offset="1" stopColor="#90CD38" stopOpacity="0"/>
              </linearGradient>
              <linearGradient id="Team" x1="511" y1="0" x2="511" y2="538" gradientUnits="userSpaceOnUse">
                <stop stopColor="#BBD98E"/>
                <stop offset="1" stopColor="#BBD98E" stopOpacity="0"/>
              </linearGradient>
              <linearGradient id="Development" x1="375" y1="0" x2="375" y2="536" gradientUnits="userSpaceOnUse">
                <stop stopColor="#DDECC7"/>
                <stop offset="1" stopColor="#DDECC7" stopOpacity="0"/>
              </linearGradient>
              <linearGradient id="Marketing" x1="338.25" y1="0" x2="338.25" y2="536" gradientUnits="userSpaceOnUse">
                <stop stopColor="#F4F9EC"/>
                <stop offset="1" stopColor="#F4F9EC" stopOpacity="0"/>
              </linearGradient>
              <linearGradient id="Community" x1="650" y1="0" x2="650" y2="538" gradientUnits="userSpaceOnUse">
                <stop stopColor="#F4F9EC"/>
                <stop offset="1" stopColor="#F4F9EC" stopOpacity="0"/>
              </linearGradient>
           

            </defs>
            <XAxis ticks={['0', '10', '20', '30', '40', '50']} tickMargin={10} tickFormatter={(value) => value == 0 ? value : `${value} months`} />
            <YAxis tickFormatter={(value)=> value==0? '' : `${value}%`}/>
            {/* <Tooltip /> */}
            <Area type="monotone" dataKey="Private"  stroke={lines.Private} strokeWidth={4} fill="url(#Private)" />
            <Area type="monotone" dataKey="Public"  stroke={lines.Public}  strokeWidth={4} fill="url(#Public)" />
            <Area type="monotone" dataKey="Team"  stroke={lines.Team} strokeWidth={4} fill="url(#Team)" />
            <Area type="monotone" dataKey="Partners/Advisors"  
              stroke={lines['Partners/Advisors']} strokeWidth={4} fill="url(#Partners/Advisors)" />
            <Area type="monotone" dataKey="Development" stroke={lines.Development}  strokeWidth={4} fill="url(#Development)" />
            <Area type="monotone" dataKey="Marketing" stroke={lines.Marketing} strokeWidth={4} fill="url(#Marketing)" />
            <Area type="monotone" dataKey="Liquidity" stroke={lines.Liquidity} strokeWidth={4} fill="url(#Liquidity)" />
            <Area type="monotone" dataKey="Community" stroke={lines.Community} strokeWidth={4} fill="url(#Community)" />
          </AreaChart>
        </ResponsiveContainer>
      </Div>
      <Legend>
        {NAME_DATA.map((value) => (
          <>
            <LegenItem onMouseEnter={()=>handleMouseEnter(value)} onMouseLeave={handleMouseLeave}>
              <LegendSpan style={{background: backgrounds[value as keyof typeof backgrounds]}}/>
              <LegendText>{value}</LegendText>
            </LegenItem>
          </>
        ))}
      </Legend>
    </Container>
  );
};

export default Vesting;

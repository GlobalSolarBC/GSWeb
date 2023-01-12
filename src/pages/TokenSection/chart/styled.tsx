import styled from 'styled-components';

export const DonutView = styled.div`
    display: flex;
    justify-content: space-between;
`
export const DonutChartContainer = styled.div`
    flex: 1 1 75%;
    // padding: 2rem;
` 
export const DonutChart = styled.div`
`

export const DonutChartSegment = styled.path`

`

export const ChartLabel = styled.text`
  font-size: 14px;
  color: #000000;
  @media screen and (max-width: 800px) {
    font-size: 12px;
  }
`

export const ChartLabelP = styled.text`
  transform: translateY(14px);
  font-size: 12px;
  color: #000000;
`
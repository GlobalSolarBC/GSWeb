const PERCENTS = [12, 16, 12, 8, 15, 7, 15, 15];
const PRICES = [0.8, 1, '', '', '', '', '', ''];
const TOKENS = [
  '2,400,000',
  '3,200,000',
  '2,400,000',
  '1,600,000',
  '3,000,000',
  '1,400,000',
  '3,000,000',
  '3,000,000',
];

const ALLOCATIONS = [
  'Private',
  'Public',
  'Team',
  'Partners / Advisors',
  'Development',
  'Marketing',
  'Liquidity',
  'Community',
];

// const counts = [
//   1,1,1,1,1,2,2,3
// ]

const COLORS = [
  ['#B3E26F'],
  ['#90CD38'],
  ['#90CD38'],
  ['#90CD38'],
  ['#90CD38'],
  ['#A5A5A5', '#C3EB89'],
  ['#A5A5A5', '#B3E26F'],
  ['#A5A5A5', '#D9D9D9', '#A1DB4C'],
];

const Data = ALLOCATIONS.map((val, idx) => {
  return {
    allocation: val,
    percent: PERCENTS[idx],
    percent2: PERCENTS[idx] / 100,
    token: TOKENS[idx],
    price: PRICES[idx],
    id: idx,
    colors: COLORS[idx],
    opacity: 1,
  };
});
export default Data;

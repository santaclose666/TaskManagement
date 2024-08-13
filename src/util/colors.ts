export const getRandomColor = () => {
  const colors = [
    '#e3f2fd',
    '#bbdefb',
    '#90caf9',
    '#64b5f6',
    '#b2dfdb',
    '#80cbc4',
  ];
  return colors[Math.floor(Math.random() * colors.length)];
};

export const formatWeight = (weight: number): string => {
  return (weight / 1000).toFixed(1) + " кг";
};
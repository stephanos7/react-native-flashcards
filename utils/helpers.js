export const hideOverflow = () => {
  return {overflow:"hidden"}
}

export const calcPercentage = (num, total) => {
  return Math.floor((num/total) * 100);
}
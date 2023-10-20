export const EmptyArr = (data: any) => {
  if (data !== undefined && data !== null && data.length > 0) return false;

  return true;
};

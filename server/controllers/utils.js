export const checkEmptyFields = (obj) => {
  return Object.entries(obj)
    .filter(([_, v]) => typeof v === "string" && v.length === 0)
    .map(([k]) => k);
};

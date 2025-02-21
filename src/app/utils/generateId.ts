export const generateId = (text: string) => {
  return text
    .split(' ')
    .map((word) => word.charAt(0).toLowerCase())
    .join('');
};

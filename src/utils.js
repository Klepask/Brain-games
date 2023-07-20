export const getRandomNumber = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;

export const getRandomIndex = (array) => {
  const length = array.length;
  return Math.floor(Math.random() * length);
}

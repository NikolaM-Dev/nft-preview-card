const toRem = (pixels, context = 16) => {
  pixels = parseFloat(pixels);
  return `${pixels / context}rem`;
};

module.exports = { toRem };

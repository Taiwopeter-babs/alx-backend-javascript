module.exports = function calculateNumber(a, b) {
  const [aRound, bRound] = [Math.round(a), Math.round(b)];
  return aRound + bRound;
}

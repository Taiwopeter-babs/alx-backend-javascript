const Utils = {
  calculateNumber: function calculateNumber(type, a, b) {
    const typeObj = ['SUM', 'SUBTRACT', 'DIVIDE']

    const [aRound, bRound] = [Math.round(a), Math.round(b)];
    if (type === 'SUM') {
      return aRound + bRound;
    } else if (type === 'SUBTRACT') {
      return aRound - bRound;
    } else if (type === 'DIVIDE') {
      if (bRound === 0) {
        return 'Error';
      }
    }
    return aRound / bRound;
  }

}

module.exports = Utils;

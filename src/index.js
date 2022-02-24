module.exports = function check(str, bracketsConfig) {
  if (str.length % 2 !== 0) return false;
  if (str.length === 0) return true;

  let pairsStack = [];

  for (let i = 0; i < str.length; i++) {
    let last = pairsStack[pairsStack.length - 1];

    for (let [open, closed] of bracketsConfig) {
      if (
        (str[i] === open && open !== closed) ||
        (str[i] === open && open === closed && last !== str[i])
      ) {
        pairsStack.push(str[i]);
      } 
      else if (str[i] === closed && last === open) {
        pairsStack.pop();
      }
    }
  }
  return !pairsStack.length;
};
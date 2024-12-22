function checkSpam(str) {
  let l = str[0].toLowerCase() + str.slice(1).toLowerCase();


  if (l.includes("1xbet") || l.includes("xxx")) {
    return true;
  }
  return false;
}

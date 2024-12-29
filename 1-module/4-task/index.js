function checkSpam(str) {
  let l = str[0].toLowerCase() + str.slice(1).toLowerCase();


  return l.includes("1xbet") || l.includes("xxx");
}

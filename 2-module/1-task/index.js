function sumSalary(salaries) {
  let s = 0;

  for (let k in salaries) {

  if (isFinite(salaries[k]) == true) {
      s += salaries[k];
    }
  }
  return s;
}

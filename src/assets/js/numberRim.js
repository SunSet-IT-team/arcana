export const toRim = (number) => {
  if (number === 1) return "I";
  else if (number === 2) return "II";
  else if (number === 3) return "III";
  else if (number === 4) return "IV";
  else if (number === 5) return "V";
  else if (number === 6) return "VI";
  else if (number === 7) return "VII";
  else if (number === 8) return "VIII";
  else if (number === 9) return "IX";
  else if (number === 10) return "X";
  else if (number === 11) return "XI";
  else if (number === 12) return "XII";
  else if (number === 13) return "XIII";
  else if (number === 14) return "XIV";
  else if (number === 15) return "XV";
  else if (number === 16) return "XVI";
  else if (number === 17) return "XVII";
  else if (number === 18) return "XVIII";
  else if (number === 19) return "XIX";
  else if (number === 20) return "XX";
  else if (number === 21) return "XXI";
  else return "XXII";
};

export const fixYear = (year) => {
  const newYear =
    year
      .toString()
      .split("")
      .map((el) => +el)
      .reduce((prev, current, index, array) => prev + +current) % 22;
  return newYear === 0 ? 22 : newYear;
};

export const fixDay = (day) => {
  return day % 22 === 0 ? 22 : day % 22;
};

export const fixNegative = (el1, el2) => {
  if (el1 - el2 >= 0) return (el1 - el2) % 22 === 0 ? 22 : (el1 - el2) % 22;
  else return (el2 - el1) % 22 === 0 ? 22 : (el2 - el1) % 22;
};

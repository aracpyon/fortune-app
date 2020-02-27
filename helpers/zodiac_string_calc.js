module.exports = findZodiac = date => {
  // Get rid of all non-number characters\
  const strippedDate = date.replace(/[^0-9]/g, "");
  // The "1" is so we do not lose leading zeros
  const justMonthsAndDay = parseInt("1" + strippedDate.slice(4));
  if (justMonthsAndDay >= 10000 && justMonthsAndDay <= 10119) {
    return "Capricorn";
  } else if (justMonthsAndDay >= 10120 && justMonthsAndDay <= 10218) {
    return "Aquarius";
  } else if (justMonthsAndDay >= 10219 && justMonthsAndDay <= 10320) {
    return "Pisces";
  } else if (justMonthsAndDay >= 10321 && justMonthsAndDay <= 10419) {
    return "Aries";
  } else if (justMonthsAndDay >= 10420 && justMonthsAndDay <= 10520) {
    return "Taurus";
  } else if (justMonthsAndDay >= 10521 && justMonthsAndDay <= 10620) {
    return "Gemini";
  } else if (justMonthsAndDay >= 10621 && justMonthsAndDay <= 10722) {
    return "Cancer";
  } else if (justMonthsAndDay >= 10723 && justMonthsAndDay <= 10822) {
    return "Leo";
  } else if (justMonthsAndDay >= 10823 && justMonthsAndDay <= 10922) {
    return "Virgo";
  } else if (justMonthsAndDay >= 10923 && justMonthsAndDay <= 11022) {
    return "Libra";
  } else if (justMonthsAndDay >= 11023 && justMonthsAndDay <= 11121) {
    return "Scorpio";
  } else if (justMonthsAndDay >= 11122 && justMonthsAndDay <= 11221) {
    return "Sagitarrius";
  } else if (justMonthsAndDay >= 11222 && justMonthsAndDay <= 99999){
    return "Capricorn";
  }
  else {
    return "Invalid Date";
  }
};

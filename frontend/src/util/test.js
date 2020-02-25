const ZodiacCalc = require('./zodiac_calc_util');

// console.log(Object.keys(ZodiacCalc));
console.log(ZodiacCalc['Aquarius']['Aquarius']);

const user1 = {
  email: "phongngo91@yahoo.com",
  kids: 1,
  marriage: 1,
  personality: 0
};

const user2 = {
  email: "helloworld",
  kids: 1, // 0 or 1
  marriage: 0, // 0 or 1
  personality: 1 // -1, 0, 1
};

let total_per = Math.abs(user1.kids - user2.kids);
total_per += Math.abs(user1.marriage - user2.marriage);
total_per += Math.abs(user1.personality - user2.personality);
console.log(total_per);

const final_score = total_per / 4;
console.log(final_score);
// Combined question bank
// questions_marco.js defines marcoQuestions
// questions_pr6.js defines pr6Questions
// questions_pt5.js defines pt5Questions

const allQuestions = [
  ...(typeof marcoQuestions !== 'undefined' ? marcoQuestions : []),
  ...(typeof pr6Questions   !== 'undefined' ? pr6Questions   : []),
  ...(typeof pt5Questions   !== 'undefined' ? pt5Questions   : [])
];

console.log('APUSH question bank loaded:', allQuestions.length, 'questions');

// Combined question bank
// questions_marco.js defines marcoQuestions
// questions_pr6.js defines pr6Questions

const allQuestions = [
  ...(typeof marcoQuestions !== 'undefined' ? marcoQuestions : []),
  ...(typeof pr6Questions   !== 'undefined' ? pr6Questions   : [])
];

console.log('APUSH question bank loaded:', allQuestions.length, 'questions');

// const translate = require('google-translate-api');
// const { translate } = require('free-translate');
// const translate = require("google-translate-free");

// const changeElementOpacity = (elem: HTMLElement) => {
//   elem.style.opacity = "20%";
// };

// const highlightAnswers = (question: QuizQuestion) => {
//   const questionsElem = getQuestionsElement();
//   const arr: VueElement[] = Array.prototype.slice.call(questionsElem.children);

//   if (Array.isArray(question.structure.answer) && question.structure.answer.length < 1 && question.structure.options) {
//     const answers = question.structure.options.map((option) => option.text).join(" or ");
//     alert(answers);

//     return;
//   }

//   arr.filter((e) => {
//     if (Array.isArray(question.structure.answer) && question.structure.answer.length > 0) {
//       return !(question.structure.answer.some((ansID) => e.__vue__.optionData.actualIndex === ansID));
//     } else if(typeof question.structure.answer == "number") {
//       return e.__vue__.optionData.actualIndex !== question.structure.answer
//     } else {
//       console.error("Fail detecting type of question: ", question);
//     }
//   }).forEach(changeElementOpacity);
// }

const getQuestionInfo = () => {
  const rootObject = document.getElementsByClassName(
    "well--text--2H_p0 well--transition-active--35hDP"
  )[0];
  try {
    return rootObject.textContent;
  } catch (error) {
    return;
  }
};

var subText = "";
let target = 'vi';


const msg = `%c 
    Start script
      `;


(async () => {
  console.log(msg, "color: red;");

  setInterval(() => {
    const questionInfo = getQuestionInfo();
    if (questionInfo && subText != questionInfo) {
      console.log(questionInfo);
      subText = questionInfo;

      // Omit this line if loading form a CDN
      // var translatedText = translate('Hello', {to: 'vi' });

      // console.log(translatedText); // Hello World
    }
  }, 500);
})();

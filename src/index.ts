/*
Quizizz-cheat
Copyright (C) gbaranski

This program is free software: you can redistribute it and/or modify it under the terms of the GNU General Public License as published by the Free Software Foundation, either version 3 of the License, or (at your option) any later version.

This program is distributed in the hope that it will be useful, but WITHOUT ANY WARRANTY; without even the implied warranty of MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the GNU General Public License for more details.

You should have received a copy of the GNU General Public License along with this program. If not, see <https://www.gnu.org/licenses/>.

github repository: https://github.com/gbaranski/quizizz-cheat
email: root@gbaranski.com
*/




import { VueElement, QuizQuestion, QuizInfo } from "./types";

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
  const rootObject = document.getElementsByClassName("well--text--2H_p0 well--transition-active--35hDP")[0].textContent;

  return rootObject;
};


const msg = `%c 
    Script created by gbaranski#5119! 
    https://github.com/gbaranski/quizizz-cheat
      `;

var sub = "";

(async () => {
  console.log(msg, "color: red;");

  setInterval(() => {
    const questionInfo = getQuestionInfo();
    if (questionInfo && sub != questionInfo)
    {
      console.log(questionInfo)
    }
    // if (questionInfo.questionID !== lastQuestionID) {
    //   for (const q of quiz.data.questions) {
    //     if (questionInfo.questionID === q._id) {
    //       console.log({q});
    //       highlightAnswers(q);
    //       lastQuestionID = questionInfo.questionID;
    //     }
    //   }
    // }
  }, 500)

})();

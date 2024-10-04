import { questions } from "./json.js";
const questionDiv = document.getElementById("question");
const timeSpan = document.querySelector("span");
const min = 0;
let score = 0;
let questionTimeout;
let spanInterval;
let data = [...questions];
let max = data.length - 1;

function nextQuestion() {
  let selected = false;
  if (max < 0) {
    timeSpan.textContent = "0";
    return (questionDiv.innerHTML = `Your score is ${score} out of 5`);
  }

  let randIndex = getRandomValue(min,max);
  max--;

  timeSpan.textContent = "5";
  spanInterval = setInterval(() => {
    timeSpan.textContent -= 1;
  }, 1000);

  for(let i=0;i<data[randIndex].options.length/2;i++) {
    const rIndex=getRandomValue(0,data[randIndex].options.length-1);
    [data[randIndex].options[i],data[randIndex].options[rIndex]]= [data[randIndex].options[rIndex],data[randIndex].options[i]]
  }
  let questionHtml = prepareHtml();
  questionDiv.innerHTML = questionHtml;

  const options = document.getElementById("options");

  options.addEventListener("click", (event) => {
    if (event.target.nodeName == "LI" && selected == false) {
      if (data[randIndex].answer == event.target.outerText) {
        score++;
      }
      event.target.style.backgroundColor = "yellow";
      event.target.style.color = "black";

      filterData();
      clearInterval(spanInterval);
      clearTimeout(questionTimeout);
      questionTimeout = setTimeout(() => {
        nextQuestion();
      }, 500);
      selected = true;
      options.classList.add("disable");
    }
  }); //


  questionTimeout = setTimeout(() => {
    filterData();
    clearInterval(spanInterval);
    nextQuestion();
  }, 5000);
  function filterData() {
    data = data.filter((ele, index) => index != randIndex);
  }


  function getRandomValue(minimum,maximum){
   return Math.floor(Math.random() * (maximum - minimum) + minimum)
  }
  function prepareHtml() {
    return `<h2>Question. ${data[randIndex].question}</h2>
            <ul id="options">
            <li>${data[randIndex].options[0]}</li>
            <li>${data[randIndex].options[1]}</li>
            <li>${data[randIndex].options[2]}</li>
            <li>${data[randIndex].options[3]}</li>
            </ul>`;
  }
}
nextQuestion();

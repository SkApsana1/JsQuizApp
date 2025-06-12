const questions = [
  {
    question: "How do you write 'Hello World' in an alert box?",
    answers: [
      { text: "msg('Hello World');", correct: false },
      { text: "alertBox('Hello World');", correct: false },
      { text: "alert('Hello World');", correct: true },
      { text: "msgBox('Hello World');", correct: false }
    ]
  },
  {
    question: "Which company developed JavaScript?",
    answers: [
      { text: "Microsoft", correct: false },
      { text: "Netscape", correct: true },
      { text: "Sun Microsystems", correct: false },
      { text: "Oracle", correct: false }
    ]
  },
  {
    question: "Which of the following is a correct variable declaration?",
    answers: [
      { text: "var 123name;", correct: false },
      { text: "var name123;", correct: true },
      { text: "var name-123;", correct: false },
      { text: "var name 123;", correct: false }
    ]
  },
  
  {
    question: "What is the correct way to create a function in JavaScript?",
    answers: [
      { text: "function = myFunction()", correct: false },
      { text: "function:myFunction()", correct: false },
      { text: "function myFunction()", correct: true },
      { text: "create myFunction()", correct: false }
    ]
  },
    {
    question: "Which keyword is used to declare a constant in JavaScript?",
    answers: [
      { text: "var", correct: false },
      { text: "const", correct: true },
      { text: "let", correct: false },
      { text: "constant", correct: false }
    ]
  },
  {
    question: "What will `typeof null` return in JavaScript?",
    answers: [
      { text: "'null'", correct: false },
      { text: "'undefined'", correct: false },
      { text: "'object'", correct: true },
      { text: "'boolean'", correct: false }
    ]
  },
  {
    question: "Which of the following is NOT a JavaScript data type?",
    answers: [
      { text: "Boolean", correct: false },
      { text: "Undefined", correct: false },
      { text: "Float", correct: true },
      { text: "Number", correct: false }
    ]
  },
  {
    question: "Which method converts a JSON string into a JavaScript object?",
    answers: [
      { text: "JSON.toObject()", correct: false },
      { text: "JSON.parse()", correct: true },
      { text: "JSON.stringify()", correct: false },
      { text: "JSON.convert()", correct: false }
    ]
  },
  {
    question: "What does the `push()` method do in JavaScript?",
    answers: [
      { text: "Removes last element of an array", correct: false },
      { text: "Adds one or more elements to the end of an array", correct: true },
      { text: "Pushes array to database", correct: false },
      { text: "Reverses the array", correct: false }
    ]
  },
  {
  question: "What is the result of '2' + 2 in JavaScript?",
  answers: [
    { text: "'4'", correct: false },
    { text: "'22'", correct: true },
    { text: "4", correct: false },
    { text: "NaN", correct: false }
  ]
},
{
  question: "Which symbol is used for single-line comments in JavaScript?",
  answers: [
    { text: "//", correct: true },
    { text: "/*", correct: false },
    { text: "*", correct: false },
    { text: "#", correct: false }
  ]
},
{
  question: "What is the purpose of the `return` statement in a function?",
  answers: [
    { text: "To pause the function", correct: false },
    { text: "To exit and output a value", correct: true },
    { text: "To declare a variable", correct: false },
    { text: "To call another function", correct: false }
  ]
},
{
  question: "Which method is used to remove the last element of an array?",
  answers: [
    { text: "pop()", correct: true },
    { text: "shift()", correct: false },
    { text: "remove()", correct: false },
    { text: "slice()", correct: false }
  ]
},
{
  question: "Which built-in method returns the length of a string?",
  answers: [
    { text: "length()", correct: false },
    { text: "getLength()", correct: false },
    { text: "size()", correct: false },
    { text: "length", correct: true }
  ]
},
{
  question: "How do you write a conditional statement for executing code if `x` is equal to 5?",
  answers: [
    { text: "if x = 5", correct: false },
    { text: "if x == 5 then", correct: false },
    { text: "if (x == 5)", correct: true },
    { text: "if x != 5", correct: false }
  ]
}


];
const questionElement=document.getElementById("question");
const answerButton=document.getElementById("answer-buttons");
const nextButton=document.getElementById("next-btn");
const startButton = document.getElementById("start-btn");
const quizContainer = document.querySelector(".quiz");

startButton.addEventListener('click', () => {
    startButton.style.display = 'none';
    quizContainer.style.display = 'block';
    startQuiz();
});

// Remove this line: startQuiz();


let currentQuestionIndex=0;
let score=0;
function startQuiz(){
    currentQuestionIndex=0;
    score=0;
    nextButton.innerHTML="Next";
    showQuestion();
}
function showQuestion(){
    resetState();
    let currentQuestion=questions[currentQuestionIndex];
    let questionNo=currentQuestionIndex+1;
    questionElement.innerHTML=questionNo+". "+currentQuestion.question;
 
    // answerButton.innerHTML = ""; 
    currentQuestion.answers.forEach(answer=>{
    const button=document.createElement("button");
    button.innerHTML=answer.text;
    button.classList.add("btn");
    answerButton.appendChild(button);
    if(answer.correct){
        button.dataset.correct=answer.correct;
    }
    button.addEventListener('click',selectAnswer)

})
}
function resetState(){
    nextButton.style.display="none"
    while(answerButton.firstChild){
        answerButton.removeChild(answerButton.firstChild);

    }
}
function selectAnswer(e){
    const selectedBtn=e.target;
    const isCorrect=selectedBtn.dataset.correct==="true";
    if(isCorrect){
        selectedBtn.classList.add("correct");
        score++;
    }else{
        selectedBtn.classList.add('incorrect');
    }
    Array.from(answerButton.children).forEach(button=>{
        if(button.dataset.correct === 'true'){
            button.classList.add('correct');
        }
        button.disabled=true;
    });
    nextButton.style.display="block";
}
function showScore(){
  resetState();
  questionElement.innerHTML=`You Scored ${score} out of ${questions.length}!`;
  nextButton.innerHTML="play Again";
  nextButton.style.display="block";
}
function handleNextButton(){
  currentQuestionIndex++;
  if(currentQuestionIndex<questions.length){
    showQuestion();
  }
  else{
    showScore();
  }
}
nextButton.addEventListener('click',()=>{
  if(currentQuestionIndex<questions.length){
    handleNextButton();
  }
  else{
    startQuiz();
  }
})
// startQuiz()
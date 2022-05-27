const startButton = document.getElementById('start-btn')
const questionButton = document.getElementById('question-btn')
const questionContainerElement = document.getElementById('question-container')
const quizInformationText = document.getElementById('quiz-information-text')
const questionElement = document.getElementById('question')
const answerButtonsElement = document.getElementById('answer-buttons')
const questions=document.getElementById('question')
let shuffledQuestions, currentQuestionIndex
var mainContainer = document.getElementById('main-container');
var answerOptionsElements=document.getElementById('answer-button')
var highscores = document.getElementById('highscores');
var timeleft = 90;
var games = [];

var downloadTimer = setInterval(function(){
  if(timeleft <= 0){
    clearInterval(downloadTimer);
    document.getElementById("countdown").innerHTML = "Finished";
  } else {
    document.getElementById("countdown").innerHTML = timeleft + " sec";
  }
  timeleft -= 1;
}, 1000);

startButton.addEventListener('click', startQuiz)
function startQuiz(){
    console.log('Started')
    startButton.classList.add('hide')
   displayQuestion(questionRound)
 
//     console.log(shuffledQuestions)
    

//functionality true or false

//if statement click on one of the buttons should tell what is the value i that button

    }
    
    questionButton.addEventListener('click',displayQuestion)
    function displayQuestion(round){
    const {question, answers, correctAnswer} = quizQestions[round]
    const questionHTML = `<h3>${question}</h3>`
    var answersHTML = ``;
    answers.forEach((answer)=>{
        answersHTML += `<div><button class='answer-option' data-value=${answer}>${answer}</button><div>`
    })
    mainContainer.innerHTML = `<div>${questionHTML}${answersHTML}</div>`
    answerOptionsElements = document.querySelectorAll(".answer-option");

    answerOptionsElements.forEach(function(elem) {
        elem.addEventListener("click", function() {
            let answer = elem.getAttribute('data-value');
            if(answer == correctAnswer){
                questionRound++;
                if(quizQestions.length == questionRound){
                    clearInterval(downloadTimer)
                    document.getElementById("countdown").innerHTML = "Finished Score: "+timeleft;
                    return
                }
                
                displayQuestion(questionRound);
                
            } else {
                questionRound++;
                if(quizQestions.length == questionRound){
                    clearInterval(downloadTimer)
                    document.getElementById("countdown").innerHTML = "Finished Score: "+timeleft;
                    return
                }
                displayQuestion(questionRound);
                console.log('wrong')
            }
        });
    });
}
 
    
function setNextQuestion() {
  showQuestion(shuffledQuestions[currentQuestionIndex])
}
function showQuestion (question){
    questionElement.innerText = question.question
}

        //FUNCTION DEFINING
function showQuestion(question){
    console.log(question)
    
    questionElement.innerText = question.question //FOR EACH METHOD OF AN ARRAY
    question.answer.forEach(answer => {
        const button = document.createElement('button') //CREATING BUTTON
        button.innerText = answer.text
        button.classList.add('btn')
        
        button.dataset.correct = answer.correct
        
        button.addEventListener('click', selectAnswer)
        answerButtonsElement.appendChild(button)
    })
}


//Selecting Answer
function selectAnswer() {
answerButtonsElement.classList.add(answer.answer)
button.addEventListener('click',selectAnswer)
}



var answerOptionsElements;
var questionRound = 0;
var quizQestions = [
    {
        question:'JavaScript is a ___ -side programming language',
        answers:['Client', 'Server', 'Both', 'None'],
        correctAnswer:'Server'
    },
    {
        question:'Inside which HTML element do we put the JavaScript?',
        answers:['js', 'script', 'javascript', 'scripting',],
        correctAnswer:'script'
    },
   {
        question:'Where is the correct place to insert a JavaScript?',
        answers:['The head section', 'The body section', 'The footer section', 'None'],
        correctAnswer:'the body section'
    },{
        question:'What is the correct way to write a JavaScript array?',
        answers:['var colors=["red", "green", "blue"]', 'var colors=(1:"red", 2:"green", 3:"blue")', 'None'],
        correctAnswer:'var colors=["red", "green", "blue"]'
    },
    {
        question:'How does a FOR loop start?',
        answers:['for(i <=5; i++)', 'for(i=0; i<=5)', 'for(i=0;i<=5;i++)', 'None'],
        correctAnswer:'for(i=0;i<=5;i++)'
    },
   {
        question:'How can you add a comment in a JavaScript?',
        answers:['!--This is a comment--', '//This is a comment', 'This is a comment', 'None'],
        correctAnswer:'//This is a comment'
    }
]



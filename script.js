const questions=[
    {
        question:"Which country has the biggest military in the world ? ",
        answer: [
            {text: "China", correct: false},
            {text: "USA", correct: true},
            {text: "Russia", correct: false},
            {text: "India", correct: false},
        ]
    },

    {
        question:"Who is the president of Nigeria ? ",
        answer: [
            {text: "Dr Goodluck Joahnatan", correct: false},
            {text: "Very DarkMan", correct: false},
            {text: "Ben Carson", correct: false},
            {text: "Dr Bolla Ahamed Tinubu", correct: true},
        ]
    },

    {
        question:"Who is the president of USA ? ",
        answer: [
            {text: "Kamala Herris", correct: false},
            {text: "Donald Trump", correct: true},
            {text: "Vladimir Putin", correct: false},
            {text: "Queen Elizabeth", correct: false},
        ]
    },

    {
        question:"Which country has the largest stock market in the world ? ",
        answer: [
            {text: "United Kingdom", correct: false},
            {text: "USA", correct: false},
            {text: "China", correct: true},
            {text: "Canada", correct: false},
        ]
    },

    {
        question:"Which country in Africa is denoted as the 'Giant Of Africa'? ",
        answer: [
            {text: "South Africa", correct: false},
            {text: "Gahna", correct: false},
            {text: "Nigeria", correct: true},
            {text: "Madagascar", correct: false},
        ]
    },

    {
        question:"Who war was ongoing between USA and China ? ",
        answer: [
            {text: "Tarrif War", correct: true},
            {text: "Death wars", correct: false},
            {text: "China Wars", correct: false},
            {text: "Designer Bags War", correct: false},
        ]
    },

    {
        question:"What was the animal that the American scientist brought back from extinction ? ",
        answer: [
            {text: "Giant Lizards", correct: false},
            {text: "Dragon", correct: false},
            {text: "Dire Wolf", correct: true},
            {text: "Saber-tooth Tiger", correct: false},
        ]
    },

    {
        question:"What is the biggest land mammal ? ",
        answer: [
            {text: "Hippotamus", correct: false},
            {text: "Musk-OX", correct: false},
            {text: "Blue-whale", correct: false},
            {text: "Elephant", correct: true},
        ]
    },

    {
        question:"Who crisis is undergoing in Nigeria till date? ",
        answer: [
            {text: "Poverty, Hunger, Inflation", correct: false},
            {text: "Bad security,Bad roads", correct: false},
            {text: "Ignorance,Bad government", correct: false},
            {text: "ALL OF THE ABOVE", correct: true},
        ]
    },

    {
        question:"Who woiuld win between 100 average men and a fully mature silverback gorilla ? ",
        answer: [
            {text: "The Gorilla", correct: true},
            {text: "The 100 men", correct: false},
            {text: "Tie", correct: false},
            {text: "None Of the above", correct: false},
        ]
    },

    {
        question:"Which is the biggest social media app today ? ",
        answer: [
            {text: "Insatgram", correct: false},
            {text: "Netflix", correct: false},
            {text: "Facebook", correct: false},
            {text: "Tik-tok", correct: true},
        ]
    },

    {
        question:"Who is the current ruler of the Graet Britian ? ",
        answer: [
            {text: "Queen Elizabeth", correct: false},
            {text: "Prince Charles", correct: false},
            {text: "King Charles", correct: true},
            {text: "Queen Elizabeth the 1st", correct: false},
        ]
    },

    {
        question:"Which of these cause the most death world wide ? ",
        answer: [
            {text: "Mosquito", correct: true},
            {text: "Lion", correct: false},
            {text: "Snake", correct: false},
            {text: "Scorpion", correct: false},
        ]
    },

    {
        question:"Who was the First Pope of the Roman Catholic Church ? ",
        answer: [
            {text: "Pope Francis", correct: false},
            {text: "Peter (the disciple of Jesus)", correct: true},
            {text: "Mary(mother Of Jesus)", correct: false},
            {text: "None Of the above", correct: false},
        ]
    },

    {
        question:"Who woiuld win between 100 average men and a fully mature silverback gorilla ? ",
        answer: [
            {text: "The Gorilla", correct: true},
            {text: "The 100 men", correct: false},
            {text: "Tie", correct: false},
            {text: "None Of the above", correct: false},
        ]
    },

    {
        question:"Who woiuld win between 100 average men and a fully mature silverback gorilla ? ",
        answer: [
            {text: "The Gorilla", correct: true},
            {text: "The 100 men", correct: false},
            {text: "Tie", correct: false},
            {text: "None Of the above", correct: false},
        ]
    },

    {
        question:"Who woiuld win between 100 average men and a fully mature silverback gorilla ? ",
        answer: [
            {text: "The Gorilla", correct: true},
            {text: "The 100 men", correct: false},
            {text: "Tie", correct: false},
            {text: "None Of the above", correct: false},
        ]
    },

    {
        question:"Who woiuld win between 100 average men and a fully mature silverback gorilla ? ",
        answer: [
            {text: "The Gorilla", correct: true},
            {text: "The 100 men", correct: false},
            {text: "Tie", correct: false},
            {text: "None Of the above", correct: false},
        ]
    },

    {
        question:"Who woiuld win between 100 average men and a fully mature silverback gorilla ? ",
        answer: [
            {text: "The Gorilla", correct: true},
            {text: "The 100 men", correct: false},
            {text: "Tie", correct: false},
            {text: "None Of the above", correct: false},
        ]
    },

    {
        question:"Who woiuld win between 100 average men and a fully mature silverback gorilla ? ",
        answer: [
            {text: "The Gorilla", correct: true},
            {text: "The 100 men", correct: false},
            {text: "Tie", correct: false},
            {text: "None Of the above", correct: false},
        ]
    },
];

const questionElement = document.getElementById("question");
const answerButtons = document.getElementById("answer-buttons");
const nextButton = document.getElementById("next-btn");

let currentQuestionIndex= 0;
let score= 0;

function startQuiz(){
    currentQuestionIndex= 0;
    score= 0;
    nextButton.innerHTML ="Next";
    showQuestion();
}

function showQuestion(){
    resetState();
    let currentQuestion= questions[currentQuestionIndex];
    let questionNo =currentQuestionIndex + 1;
    questionElement.innerHTML=questionNo + ". " + currentQuestion.question;

    currentQuestion.answer.forEach(answer => {
        const button=document.createElement("button");
        button.innerHTML=answer.text;
        button.classList.add("btn");
        answerButtons.appendChild(button);
        if(answer.correct){
            button.dataset.correct= answer.correct;
        }
        button.addEventListener("click", selectAnswer)
    });
    
}

function resetState(){
    nextButton.style.display = "none";
    while(answerButtons.firstChild){
        answerButtons.removeChild(answerButtons.firstChild);
    }
}

function selectAnswer(e){
    const selectedBtn = e.target;
    const isCorrect= selectedBtn.dataset.correct==="true";
    if(isCorrect){
        selectedBtn.classList.add("correct");
        score++;
    }
    else{
        selectedBtn.classList.add("incorrect");
    }

    Array.from(answerButtons.children).forEach(button => {
        if(button.dataset.correct === "true"){
            button.classList.add("correct");
        }
        button.disabled = true;
    });
    nextButton.style.display = "block";

}

function showScore(){
    resetState();
    questionElement.innerHTML= `Hey You Scored ${score} out of ${questions.length}!`;
    nextButton.innerHTML="Go Again";
    nextButton.style.display = "block";
}

function handleNextButton(){
    currentQuestionIndex++;
    if(currentQuestionIndex <questions.length){
        showQuestion();
    }
    else{
        showScore();
    }
}

nextButton.addEventListener("click", ()=>{
    if(currentQuestionIndex < questions.length){
        handleNextButton();
    }
    else{
        startQuiz();
    }
}
)
startQuiz()
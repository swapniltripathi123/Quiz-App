const startButton = document.getElementById("start-btn")
const nextButton = document.getElementById("next-btn")
const questionContainerElement=document.getElementById('question-container')
const questionElement=document.getElementById('question')
const answerButtonsElement=document.getElementById('answer-buttons')

let shuffleQuestions, currentQuestionIndex

startButton.addEventListener('click' ,startGame)
nextButton.addEventListener('click',()=>{
    currentQuestionIndex++
    setNextQuestion()
})

function startGame(){
    
    startButton.classList.add('hide')
    shuffleQuestions=questions.sort(()=> Math.random() - .5)
    currentQuestionIndex =0
    questionContainerElement.classList.remove('hide')
    setNextQuestion()

}


function setNextQuestion(){
    resetState()
    showQuestion(shuffleQuestions[currentQuestionIndex])

}

function showQuestion(question){
    questionElement.innerText=question.question
    question.answers.forEach(answer =>{
        const button =document.createElement("button")
        button.innerText = answer.text
        button.classList.add('btn')
        if(answer.correct){
            button.dataset.correct = answer.correct
        }
        button.addEventListener('click',selectAnswer)
        answerButtonsElement.appendChild(button)
    })
}

function resetState(){
    nextButton.classList.add('hide')
    while (answerButtonsElement.firstChild){
        answerButtonsElement.removeChild
        (answerButtonsElement.firstChild)
    }
}
function selectAnswer(e){
    const selectedButton =e.target
    const correct=selectedButton.dataset.correct
    setStatusClass(document.body,correct)
    Array.from(answerButtonsElement.children).forEach(button =>{
        setStatusClass(button ,button.dataset.correct)
    })
    if(shuffleQuestions.length>currentQuestionIndex+1){
    nextButton.classList.remove('hide')}
    else{
        startButton.innerText='Restart'
        startButton.classList.remove('hide')
    }

}
function setStatusClass(element,correct){
    clearStatusClass(element)
    if(correct){
        element.classList.add('correct')}
        else{
            element.classList.add('wrong')

        }
    }
function clearStatusClass(element){
    element.classList.remove('correct')
    element.classList.remove('wrong')
}
const questions=[{
question: 'What is 2+2', 
answers:[
    {text: '4',correct:true},
    { text:'23',correct:false},
    {text:'5',correct:false},
    {text:'-4',correct:false}
]
} ,
{
    question: 'What is 2-2', 
    answers:[
        {text: '4',correct:false},
        { text:'0',correct:true},
        {text:'8',correct:false},
        {text:'66',correct:false}
    ]
    } ,
    {
        question: 'What is 10*2', 
        answers:[
            {text: '-20',correct:false},
            { text:'23',correct:false},
            {text:'12',correct:false},
            {text:'20',correct:true}
        ]
        } ,
        {
            question: 'What is 22+22', 
            answers:[
                {text: '44',correct:true},
                { text:'23',correct:false},
                {text:'0',correct:false},
                {text:'6',correct:false}
            ]
            } ,
            {
                question: 'What is 98-2', 
                answers:[
                    {text: '96',correct:true},
                    { text:'100',correct:false},
                    {text:'9',correct:false},
                    {text:'-96',correct:false}
                ]
                } ,
]
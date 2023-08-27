const quiz = [
    {
        question : "what is the largest counrty in the world",
        options : [
            {
                text: 'Bangladesh' , currect : false
            },
            {
                text: 'USA' , currect : false
            },
            {
                text: 'Canada' , currect : false
            },
            {
                text: 'Russia' , currect : true
            }
        ]
    },
    {
        question : "HTTPS full form is?",
        options : [
            {
                text: 'Hyper Text Transper Protocoll' , currect : false
            },
            {
                text: 'Hyper Text Markup Language' , currect : false
            },
            {
                text: 'Happy Text Treansfer service' , currect : false
            },
            {
                text: 'Hyper Text Transfer Protocol Sequred' , currect : true
            }
        ]
    },
    {
        question : "Javascript is a __",
        options : [
            {
                text: 'Proggraming language' , currect : false
            },
            {
                text: 'Scripting language' , currect : false
            },
            {
                text: 'Markup language' , currect : false
            },
            {
                text: 'Mother languange' , currect : true
            }
        ]
    },
]

let quizIndex = 0;
const ansContainer = document.querySelector('#ans-container');
const quizContainer = document.querySelector('#quiz-container');

const displayQuiz = (quizs)=>{
    let currentQuiz = quizs[quizIndex];
    let questionNo = quizIndex + 1;
    const questionContainer = document.createElement('div');
    questionContainer.classList.add('mb-3')
    questionContainer.innerHTML = `
    <h3 class="text-2xl" id="question">${questionNo}. ${currentQuiz.question} </h3>
    `
    quizContainer.appendChild(questionContainer);

    currentQuiz.options.forEach(options => {
        const optionsBtn = document.createElement('button');
        optionsBtn.classList.add('border-2', 'w-full', 'text-start', 'ps-3' , 'py-3', 'mb-3', 'rounded', 'hover:bg-slate-500', 'hover:text-white')
        optionsBtn.innerText = options.text;
        quizContainer.appendChild(optionsBtn);
        if(options.currect){
            optionsBtn.dataset.currect = options.currect;
        }
        optionsBtn.addEventListener('click', selectAns)
    });
}


const selectAns = (e) => {
    const selectBtn = e.target;
    const isCurrect = selectBtn.dataset.currect === 'true';
    if(isCurrect){
        selectBtn.classList.add('bg-green-600', 'text-white')
    }else{
        selectBtn.classList.add('bg-red-400', 'text-white')
    }
}
displayQuiz(quiz);
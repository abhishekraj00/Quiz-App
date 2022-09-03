const quizData = [
    {
        q:"Q.1 National Animal of India?",
        option:["1.Lion","2.Tiger","3.Leopard","4.Puma"],
        answer:"2.Tiger",
    },
    {
        q:"Q.2 National Bird of India? ",
        option:["1.Eagle","2.Peacock","3.Parrot","4.KingFisher"],
        answer:"2.Peacock",
    },
    {
        q:"Q.3 National Fruits of India? ",
        option:["1.Mango","2.Apple","3.Litchi","4.Oranges"],
        answer:"1.Mango",
    }
]

let start = document.querySelector('#question-box');

start.innerHTML = '<h1>Start Quiz</h1><br>Click on Next';
start.style.textAlign = "center"

let score = 0;

function next(i){
    
    let question = document.getElementById('question-box');

    question.textContent = quizData[i].q;

    let optfrag = document.createDocumentFragment();

    for (let key of quizData[i].option) {
        
        let optNew = document.createElement('button');
        optNew.textContent = key;
        
        optNew.addEventListener('click',(e)=>{

            // e.stopPropagation();
            let ans =  quizData[i].answer;
    
            if( e.target.textContent == ans ){
                score++;
            }

            oncall();
            
        });
        optfrag.appendChild(optNew);
    }

    question.appendChild(optfrag);


}


let k=0;
function oncall(){
    if(k<quizData.length){
        next(k);
    }
    if(k == quizData.length){

        let question = document.getElementById('question-box');
        question.innerHTML = "<h2>Congratulation</h2> <br> <p>You Have Successfully Completed the QUIZ </p><br><br><h5>CLICK ON <h4>SUBMIT BUTTON</h4> TO KNOW YOUR SCORE</h5> ";
        question.style.textAlign = 'center';
        
    }    
    k++;
}

function preCall(){
    
    if( k>0){
        k--;
        next(k);
    }
    
}

function submitBtn(){

    let question = document.getElementById('question-box');
    question.innerHTML = "<h4>Your Score<h4>" +score+"/10";
    question.style.textAlign = 'center';
    k=0;
   
}


// console.log(score);









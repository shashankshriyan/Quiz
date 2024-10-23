const questions=[{
    question:"who is the prime minister of india",
    answers:[
        {text:"modi",correct:true},
        {text:"rahul gandhi",correct:false},
        {text:"Sidharamayya",correct:false},
        {text:"kumaarswamy",correct:false},
    

    
    ]
},
{
    question:"which is our national animal",
    answers:[
        {text:"cat",correct:false},
        {text:"dog",correct:false},
        {text:"Tiger",correct:true},
        {text:"cow",correct:false},
    ]
}

]

const qtn=document.getElementById("question");
const choice=document.querySelector(".options")
const btnnext=document.getElementById("next");
let currentIndex=0;
let score=0;
function startQuiz(){
    currentIndex=0;
    score=0;
    btnnext.innerHTML="Next";
    showQuestion();
}

function showQuestion(){
    resetState();
    let currentQuestion=questions[currentIndex];
    let questionno=currentIndex+1;
    qtn.innerHTML=questionno+"."+currentQuestion.question;

    currentQuestion.answers.forEach((answer)=>{
        let option=document.createElement("button");
        option.innerHTML=answer.text;
        option.classList.add("btn");
        choice.appendChild(option);
        if(answer.correct){
            option.dataset.correct=answer.correct;
        }
        option.addEventListener("click",(e)=>{
                const res=e.target;
                if(res.dataset.correct==="true"){

                    res.classList.add("correct");
                    score++;
                }
                else{
                        res.classList.add("incorrect");
                    }
                    

                    Array.from(choice.children).forEach((button)=>{
                        if(button.dataset.correct==="true"){
                            button.classList.add("correct");

                        }
                        button.disabled=true;
                    });
                    btnnext.style.display="block";
                    

                
                
        });
        


    });


}
function resetState(){
    btnnext.style.display="none";
    while(choice.firstChild){
        choice.removeChild(choice.firstChild);

    }
}
btnnext.addEventListener("click",()=>{
    if(currentIndex<questions.length){
        nextQuestion();
    }
    else{
        startQuiz();
    }
})

function nextQuestion(){
 currentIndex++;
 if(currentIndex<questions.length){
    showQuestion();
 }
 else{
    showscore();
 }

}
startQuiz();
function showscore(){
    resetState();
    
    qtn.innerHTML=`you scored ${score} out of ${questions.length}`;
    btnnext.innerHTML="Try Again";
    btnnext.style.display="block";
   
    
    



    
    
}





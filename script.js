let userScore=0;
let computerScore=0;
let userscore_span= document.getElementById("user-score");
let computerscore_span= document.getElementById("computer-score");
let scoreBoard=document.querySelector(".score-board");
let result=document.querySelector(".result > p");
let stone=document.getElementById("r");
let paper= document.getElementById("p");
let scissors= document.getElementById("s");


function compchoice(){
    let numrand=Math.floor(Math.random()*3);
    if(numrand==0){
        return "r";
    }
    if(numrand==1){
        return "p";
    }
    if(numrand==2){
        return "s";
    }
}

function convert(l){
if(l=="r") return "Stone";
if(l=="p") return "Paper";
if(l=="s") return "Scissors";
}

function beats(l){
    if(l=="r") return " crushes ";
    if(l=="p") return " covers ";
    if(l=="s") return " cut ";
}

function win(uc,cc){
    userScore++;
    userscore_span.innerText=userScore;
    console.log(uc+"beats"+cc);
    result.innerHTML=convert(uc)+"user".fontsize(3.5).sub() + beats(uc) + convert(cc)+"comp".fontsize(3.5).sub()  + "  . . . YOU WIN !🔥";
    document.getElementById(uc).classList.add("green") ;
    setTimeout(function(){document.getElementById(uc).classList.remove("green") ;} , 1000);
}

function lose(uc,cc){
    computerScore++;
    computerscore_span.innerText=computerScore;
    console.log(uc+"beats"+cc);
    result.innerHTML=convert(cc)+"comp".fontsize(3.5).sub() + beats(cc) + convert(uc)+ "user".fontsize(3.5).sub() + " . . . YOU LOSE !👎";
    document.getElementById(uc).classList.add("red") ;
    setTimeout(function(){document.getElementById(uc).classList.remove("red") ;} , 1000);
}

function draw(uc,cc){
    console.log(uc+"beats"+cc);
    result.innerHTML="Computer also chose "+convert(cc)+ " ... IT'S A DRAW !";
    document.getElementById(uc).classList.add("gray") ;
    setTimeout(function(){document.getElementById(uc).classList.remove("gray") ;} , 1000);
}

function game(choice){
    let compuchoice=compchoice();
    let fc=choice+compuchoice;
    if(fc=="pr" || fc=="rs" || fc=="sp" ){
        win(choice,compuchoice);
    }
    else if(fc=="rp" || fc=="sr" || fc=="ps"){
        lose(choice,compuchoice);
    }
    else{
        draw(choice,compuchoice);
    }
}

stone.addEventListener('click',function(){
    game("r"); 
})
paper.addEventListener('click',function(){
    game("p"); 
})
scissors.addEventListener('click',function(){
    game("s"); 
})
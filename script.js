const dialog = document.querySelector('.dialog');
const lPanel = document.querySelector('.lPanel');
const rPanel = document.querySelector('.rPanel');
const stage = document.querySelector('#stage');
const rock = document.getElementById('rock');
const paper = document.getElementById('paper');
const scissors = document.getElementById('scissors');
let player;
let comp;
let pScore = 0;
let cScore = 0;
let round = 0;
waitTime = 1000;

function getComputerChoice(){
    let choice = Math.floor(Math.random()*3) + 1 
    if(choice == 1){
        choice = "ROCK"; 
        const log = document.createElement("div");
        log.textContent ="Rock";
        rPanel.appendChild(log);
    }
    else if(choice == 2){ 
        choice = "PAPER"
        const log = document.createElement("div");
        log.textContent ="Paper";
        rPanel.appendChild(log);
    }
    else{ 
        const log = document.createElement("div");
        log.textContent ="Scissors";
        rPanel.appendChild(log);
        choice = "SCISSORS"
    }
    return choice;
}
        

function addHover( a ){
    a.addEventListener('mouseover',() =>{
        a.classList.add('hovered');
    });
    a.addEventListener('mouseout',() =>{
        a.classList.remove('hovered');
    });
}
addHover(rock);
addHover(paper);
addHover(scissors);
rock.addEventListener('click',() =>{
    rock.classList.toggle('selected');
    rock.classList.remove('hovered');
    const log = document.createElement("div");
    log.textContent ="Rock";
    lPanel.appendChild(log);
    player = "ROCK";
    play(getComputerChoice(), player);
    setTimeout(function(){
        removeChoice();
    }, waitTime);
    if(round>=5){
        calculateResult();
    }
    console.log(round);
    
});
paper.addEventListener('click',() =>{
    paper.classList.toggle('selected')
    paper.classList.remove('hovered');
    const log = document.createElement("div");
    log.textContent ="Paper";
    lPanel.appendChild(log);
    player = "PAPER"
    play(getComputerChoice(), player);
    setTimeout(function(){
        removeChoice();
    }, waitTime);
    if(round>=5){
        calculateResult();
    }

});
scissors.addEventListener('click',() =>{
    scissors.classList.toggle('selected')
    scissors.classList.remove('hovered');
    const log = document.createElement("div");
    log.textContent ="Scissors";
    lPanel.appendChild(log);
    player = "SCISSORS"
    play(getComputerChoice(), player);
    setTimeout(function(){
        removeChoice();
    }, waitTime);
    if(round>=5){
        calculateResult();
    }
    
});
function removeChoice(){
    scissors.classList.remove('selected');
    paper.classList.remove('selected');
    rock.classList.remove('selected');
};
function play(computerSelection, playerSelection){
    let result;
    round++;
    console.log(`It is round ${round} and pScore is ${pScore}`)
if(computerSelection.charAt(0) == playerSelection.charAt(0)){
    result = "It's a Tie!";
}
else if(computerSelection.charAt(0) == "R"){
    if(playerSelection.charAt(0) == "P"){ 
        result = "The Player Wins!"; 
        console.log(pScore);
        pScore+=1; 
        console.log(pScore);
    }
    else{
        result = "The Computer Wins!"; 
        cScore++;
    }
}
else if(computerSelection.charAt(0) == "P"){
    if(playerSelection.charAt(0) == "S"){ 
        result = "The Player Wins!"; 
        console.log(pScore);
        pScore+=1; 
        console.log(pScore);
    }
    else{
        result = "The Computer Wins!"; 
        cScore++;}
}
else if(computerSelection.charAt(0) == "S"){
    if(playerSelection.charAt(0) == "R"){ 
        result = "The Player Wins!"; 
        console.log(pScore);
        pScore+=1; 
        console.log(pScore);
    }
    else{result = "The Computer Wins!"; cScore++;}
}
else{result = "Something went wrong..."}
    }
function calculateResult(){
    const resultBox = document.createElement("div");
    if(pScore > cScore){
        resultBox.textContent = "Player Wins! Player:" + `${pScore}` + " PC:" + `${cScore}`;
        
    }
    else if(pScore == cScore){
        resultBox.textContent = "It's a Tie! Player:" + `${pScore}` + " PC:" + `${cScore}`;
    }
    else{
        resultBox.textContent = "Computer Wins! Player:" + `${pScore}` + " PC:" + `${cScore}`;
    }
    setTimeout( () => {
        dialog.appendChild(resultBox);
    }, 1000);
    round = 0;
    pScore = 0;
    cScore = 0;
     
};



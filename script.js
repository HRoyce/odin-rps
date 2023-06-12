//I need event listeners for hover and for click.
//On hover button should enlarge, drop shadow change slightly and color change slightly.
//I want the result of each round to appear on the stage.
function getComputerChoice(){
    let choice = Math.floor(Math.random()*3) + 1 
    if(choice == 1){choice = "ROCK"}
    else if(choice == 2){ choice = "PAPER"}
    else{ choice = "SCISSORS"}
    return choice;
}
function getPlayerChoice(){
let invalidChoice = true;
while(invalidChoice){
    let pchoice = prompt("Please enter Rock, Paper or Scissors", "");
if(pchoice == null){alert("Please enter a valid response.")}
else if(pchoice.toUpperCase() == "ROCK" ||pchoice.toUpperCase() == "PAPER" || pchoice.toUpperCase() == "SCISSORS")
{ return pchoice.toUpperCase()}
else{alert("Please enter a valid response.")}
}

}        
function play(computerSelection, playerSelection){
let result;
if(computerSelection.charAt(0) == playerSelection.charAt(0)){
    result = "It's a Tie!";
}
else if(computerSelection.charAt(0) == "R"){
    if(playerSelection.charAt(0) == "P"){ result = "The Player Wins!"}
    else{result = "The Computer Wins!"}
}
else if(computerSelection.charAt(0) == "P"){
    if(playerSelection.charAt(0) == "S"){ result = "The Player Wins!"}
    else{result = "The Computer Wins!"}
}
else if(computerSelection.charAt(0) == "S"){
    if(playerSelection.charAt(0) == "R"){ result = "The Player Wins!"}
    else{result = "The Computer Wins!"}
}
else{result = "Something went wrong..."}

alert("The Computer chose: " + comp + "." +
     "\nThe Player chose: " + player +".\n" + result);
    }
// let player = getPlayerChoice();
// let comp = getComputerChoice();
// play(comp, player);

const stage = document.querySelector('#stage');
console.log(stage);
//stage.addEventListener('click', (e) =>{
    //stage.classList.toggle('hovered');
    
//});
const rock = document.getElementById('rock');
const paper = document.getElementById('paper');
const scissors = document.getElementById('scissors');
rock.addEventListener('mouseover',() =>{
    rock.classList.add('hovered');
});
rock.addEventListener('mouseout',() =>{
    rock.classList.remove('hovered');
});
paper.addEventListener('mouseover',() =>{
    paper.classList.add('hovered');
});
paper.addEventListener('mouseout',() =>{
    paper.classList.remove('hovered');
});
scissors.addEventListener('mouseover',() =>{
    scissors.classList.add('hovered');
});
scissors.addEventListener('mouseout',() =>{
    scissors.classList.remove('hovered');
});

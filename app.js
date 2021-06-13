/*
GAME RULES:

- The game has 2 players, playing in rounds
- In each turn, a player rolls a dice as many times as he whishes.
  Each result get added to his ROUND score
- BUT, if the player rolls a 1, all his ROUND score gets lost.
  After that, it's the next player's turn
- The player can choose to 'Hold', which means that his ROUND score gets
  added to his GLBAL score. After that, it's the next player's turn
- The first player to reach 100 points on GLOBAL score wins the game

*/

var score,globalScore,dice,dice2,diceBtn,activePlayer,gamePlaying,diceScoreF,winScore;
diceScoreF=0;
winScore=document.getElementById('winScore').value;
document.getElementById('scoreWin').textContent=winScore;

init();


diceBtn.addEventListener('click',function(){
if(gamePlaying){
//var lastScore=diceScoreF;
var diceScore=Math.floor(Math.random()*6)+1;
var diceScore2=Math.floor(Math.random()*6)+1;
//diceScoreF=diceScore;

dice.style.display='block';
dice2.style.display='block';

dice.src='dice-'+diceScore+'.png';
dice2.src='dice-'+diceScore2+'.png';

if(diceScore==1 || diceScore2==1){
	nextPlayer();
}else{
	score=diceScore+diceScore2+score;
//score+=diceScore
document.getElementById('current-'+activePlayer).textContent=score;
}

/*
if (diceScore== 6 && lastScore==6) {

	nextPlayer();

}else if(diceScore==1){
nextPlayer();
} else {

score=diceScore+score;
//score+=diceScore
document.getElementById('current-'+activePlayer).textContent=score;

}
*/




}




});


document.querySelector('.btn-hold').addEventListener('click',function(){
if (gamePlaying) {


globalScore[activePlayer]= score + globalScore[activePlayer];

document.querySelector('#score-'+activePlayer).textContent=globalScore[activePlayer];


if(globalScore[activePlayer] >=winScore){

document.querySelector('#name-'+activePlayer).textContent="Winner";
dice.style.display='none';
dice2.style.display='none';


document.querySelector('.player-'+activePlayer+'-panel').classList.add('winner');
document.querySelector('.player-'+activePlayer+'-panel').classList.remove('active');
gamePlaying=false;
}else{
nextPlayer();	

}

}



});



function nextPlayer(){

activePlayer==0 ? activePlayer=1 : activePlayer=0;
score=0;

document.querySelector('#current-0').textContent=0;
document.querySelector('#current-1').textContent=0;

document.querySelector('.player-0-panel').classList.toggle('active');
document.querySelector('.player-1-panel').classList.toggle('active');

dice.style.display='none';
dice2.style.display='none';
}




document.querySelector('.btn-new').addEventListener('click', init);

function init(){
globalScore=[0,0];
score=0;
activePlayer=0;
gamePlaying=true;

diceBtn=document.querySelector('.btn-roll');
dice=document.querySelector('#dice1');
dice2=document.querySelector('#dice2');

dice.style.display = 'none';
dice2.style.display = 'none';
document.querySelector('#score-0').textContent=0;
document.querySelector('#score-1').textContent=0;
document.querySelector('#current-0').textContent=0;
document.querySelector('#current-1').textContent=0;

document.querySelector('#name-0').textContent="Player 1";
document.querySelector('#name-1').textContent="Player 2";
document.querySelector('.player-0-panel').classList.remove('winner');
document.querySelector('.player-1-panel').classList.remove('winner');
document.querySelector('.player-0-panel').classList.remove('active');
document.querySelector('.player-1-panel').classList.remove('active');
document.querySelector('.player-0-panel').classList.add('active');



}


function winScoref(){
winScore=document.getElementById('winScore').value;
document.getElementById('scoreWin').textContent=winScore;
console.log(winScore);
}


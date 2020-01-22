// arrays
let cards = [ 
{
rank: "queen",
suite: "hearts",
cardImage: "images/queen-of-hearts.png"
},
{
rank: "queen",
suite: "diamonds",
cardImage:"images/queen-of-diamonds.png"
},
{
rank: "king",
suite: "hearts",
cardImage:"images/king-of-hearts.png"
},
{
rank: "king",
suite: "diamonds",
cardImage: "images/king-of-diamonds.png"
}
];

let cardsInPlay = [];
//let cardId =[];

//function that stores all steps that should happen when a user flips a card
function createBoard()
{
	for (var i = 0; i < cards.length; i++)
	{
		let cardElement = document.createElement('img');
		cardElement.setAttribute('src', "images/back.png");
		cardElement.setAttribute('data-id', i);
		cardElement.addEventListener('click', flipCard);
		document.getElementById('game-board').appendChild(cardElement);
	}

};

function checkForMatch()
{	//this.setAttribute('src', cards[cardsInPlay].cardImage);
	if (cardsInPlay.length === 2 && cardsInPlay [0] === cardsInPlay[1]) 
	{ alert("You found a match!");}
	else 
	{ alert("Sorry, try again.");}
};

function flipCard() 
{
	const cardId = parseInt(this.getAttribute('data-id'));
	cardsInPlay.push(cards[cardId].rank);
	console.log("User flipped " + cards[cardId].rank);
	
	/*cardsInPlay.push(cards[cardId].rank);*/
	this.setAttribute('src', cards[cardId].cardImage);
	/*if (cardsInPlay.length === 2)
	{
	}*/
	console.log(cards[cardId].cardImage);
	console.log(cards[cardId].suite);
	checkForMatch();
};
createBoard();

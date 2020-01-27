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

//function that stores all steps that should happen when a user flips a card
function createBoard()
{
	shuffle(cards);
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
{
	if (cardsInPlay.length === 2) {
		if (cardsInPlay [0] === cardsInPlay[1]) 
			{ alert("You found a match!");}
		else
			{ alert("Sorry, try again.");}			
	}	
};

function flipCard() 
{
	const cardId = parseInt(this.getAttribute('data-id'));
	cardsInPlay.push(cards[cardId].rank);
	console.log("User flipped " + cards[cardId].rank);
	this.setAttribute('src', cards[cardId].cardImage);
	console.log(cards[cardId].cardImage);
	console.log(cards[cardId].suite);
	checkForMatch();
};
function shuffle(a) {
    var j, x, i;
    for (i = a.length - 1; i > 0; i--) {
        j = Math.floor(Math.random() * (i + 1));
        x = a[i];
        a[i] = a[j];
        a[j] = x;
    }
    return a;
}
createBoard();

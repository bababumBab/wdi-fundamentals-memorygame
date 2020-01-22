// arrays
let cards = [ 
{
//objects
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
function checkForMatch ()
{

	if (cardsInPlay [0] === cardsInPlay[1]) 
	{
	alert("You found a match!");
	} 
	else 
	{
	alert("Sorry, try again.");
	}
	
};

function flipCard(cardId) 
{

	cardsInPlay.push(cards[cardId]);
	console.log("User flipped " + cards[cardId].rank);
	cardsInPlay.push(cards[cardId].rank);

	if (cardsInPlay.length === 2)
	{
		checkForMatch();
	}
	console.log(cards[cardId].cardImage);
	console.log(cards[cardId].suite);	
};
flipCard(0);
flipCard(2);

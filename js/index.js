
// 
var type = ['TacoCat', 'MelonCat', 'BeardCat']

var createDeck = function() {
	var deck = [];
	for(var i = 1; i < 101; i++){
		var card = {};
		card.type = type[Math.floor(Math.random()*type.length)]
		card.id = i;
		deck.push(card);
	}
	
	return deck;
}

let newDeck = createDeck();

var arr1 = [];

function giveCards(deck, player){
	for(var i = 0; i < 8; i++) {
		let item = Math.floor(Math.random()*deck.length)
		player.push(deck[item]);
		deck.splice(item, 1)
		console.log(item)
	}
}

var drawCard = function(deck) {
	return deck.splice(0,1)
}

// giveCards(newDeck, arr1);

// console.log(arr1)
// console.log(newDeck.length);

// console.log(drawCard(newDeck))
// console.log(newDeck.length)

var playCard = function(card) {
	switch(card.type) {
		case 'TacoCat':
			// console.log('tacos are cool');
			break;
		
	}
}

// create the deck => # of cards based on # of players
// createDeck


// shuffle a deck => puts cards in random order 
// (starting deck or draw pile)
// shuffleDeck


// deal cards => deals cards to each player, based on # of
// players
// dealCards


// alternate turns => allow players to take turns choosing cards
// 


// 

var gameObj = {};
gameObj['players'] = [];
for(var i = 1; i < 5; i++) {
	var player = {};
	player.name = 'Player ' + i;
	player.class = 'player-' + i;
	gameObj.players.push(player);
	player.hand = [];
	for(var j = 0; j < 10; j++) {
		var num = Math.floor(Math.random()*1000)
		player.hand.push(num);
	}
}
console.log(gameObj)
gameObj.players.map(function(player) {
	player.hand.map(function(card) {
		var c = document.createElement('div');
		$(c).addClass('card');
		var cls = '.' + player.class
		$(c).append(card)
		$(cls).append(c);
	})
})

var showHand = function(player, tgt) {
	player.hand.map((card) => {
		var c = document.createElement('div');
		$(c).addClass('card');
		
		var cls = '.' + player.class
		if(tgt != '') {
			cls = tgt;
		}
		$(c).append(card)
		$(c).attr('data-parent',player.class, )
		$(cls).append(c);
					
	});
};


gameObj.currPlayer = 'player-1';
gameObj.cardsPlayed = [];

var loadCards = function(player) {
	$('.player-turn').empty().append(player.name);
	console.log(player);
	$('.player-deck').empty()
	showHand(player, '.player-deck');
	
	
}



loadCards(gameObj.players[0]);


// Event Handler when player clicks on a card
$(document).on('click', '.player-deck .card', function() {
	var parent = $(this).attr('data-parent')
	var card = $(this).html();
	gameObj.cardsPlayed.push(card);
	showCardsPlayed(gameObj)
	
});

var showCardsPlayed = function(obj) {
	$('.cards-played').empty();
	obj.cardsPlayed.map((card) => {
		var c = document.createElement('div');
		$(c).addClass('card');
		$(c).append(card);
		$('.cards-played').append(c)
	})
}

const removeTodo = (list, id) => {
	const removeIndex = list.findIndex(item => item.id === id)
	return [
		...list.slice(0, removeIndex),
		...list.slice(removeIndex+1)
	]
}

var removeCard = function(player, card) {
	var newPlayer = Object.assign({},player);
	delete newPlayer.hand
	console.log(newPlayer)
	
	
	
}

removeCard(gameObj.players[0]);


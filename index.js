function writeCards(namesArray, event){
    let thankYouCards = []
    for (let i=0; i<namesArray.length; i++){
        thankYouCards.push(`Thank you, ${namesArray[i]}, for the wonderful ${event} gift!`)
    }
    return thankYouCards
}

writeCards(['nick'], 'birthday');

function countDown(startingNumber){
    let countDown = 10;
    while (startingNumber>0){
        console.log(startingNumber);
        startingNumber -- ;
    }
    console.log(startingNumber);
}
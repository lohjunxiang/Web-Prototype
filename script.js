var infos = [
    'Because of government regulations, we may be unable to accept white goods/electrical items and mattresses.',
    'It costs The Salvation Army millions of dollars each year to remove rubbish that has been dumped outside Salvos Stores.',
    'We cannot accept things like Children\'s car seats, booster seats and baby capsules without the presence of the Standards Australia logo "AS/NZS 1754-2010"'
]

function newInfo() {
    var randomNumber = Math.floor(Math.random() * (infos.length));
    document.getElementById('randomInfo').innerHTML = infos[randomNumber];
    console.log(randomNumber)
}

setInterval(newInfo, 1000);

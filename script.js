var infos = [
    'Because of government regulations, we may be unable to accept white goods/electrical items and mattresses.',
    'It costs The Salvation Army millions of dollars each year to remove rubbish that has been dumped outside Salvos Stores.',
    'We cannot accept things like Children\'s car seats, booster seats and baby capsules without the presence of the Standards Australia logo "AS/NZS 1754-2010"',
    'We cannot accept any computer monitors, printers, scanners and other hardware, unless they are brand new and still in packaging.'
]

function newInfo() {
    var randomNumber = Math.floor(Math.random() * (infos.length));
    document.getElementById('randomInfo').innerHTML = infos[randomNumber];
    console.log(randomNumber)
}

setTimeout(newInfo, 100);
setInterval(newInfo, 10000);

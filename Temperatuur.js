function celciusFahrenheit(temp, waarde) {
    if (waarde === 'C') {
    console.log(temp * 9/5 + 32 + ' F')
    } else if (waarde === 'F') {
        console.log(Math.round((temp - 32) / 1.8) + ' C');
    } else {
        console.log('Foute waardes ingevoerd.')
    }
};
celciusFahrenheit(35.5, 'C')
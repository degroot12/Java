function celciusFahrenheit(temp, waarde) {
    if (waarde === 'C') {
        return (temp * 9/5 + 32 + ' F');
    } else if (waarde === 'F') {
        return (Math.round((temp - 32) / 1.8) + ' C');
    } else {
        return ('Foute waardes ingevoerd.');
    }
};
console.log(celciusFahrenheit(76.5, 'F'));

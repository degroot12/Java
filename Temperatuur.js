function celciusFahrenheit(temp, waarde) {
    if (waarde === 'C') {
        return temp * 9/5 + 32 + ' F';
    } else if (waarde === 'F') {
        return Math.round((temp - 32) / 1.8) + ' C';
    } else {
        return 'Foute waardes ingevoerd.';
    }
};
 let newTemp = celciusFahrenheit(25.5, 'C');

console.log(newTemp)

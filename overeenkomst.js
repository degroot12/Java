const fiets = ['Wielen: 2', 'Type: transport', 'Kleur: zwart'];
const auto = ['Wielen 4', 'Type: transport', 'Kleur: groen'];
for (let i = 0; i < fiets.length; i++) {
  for (let j = 0; j < auto.length; j++) {
    if (fiets[i] === auto[j]) {
      console.log('Overeenkomst: ' + auto[j])
    }
  }
};

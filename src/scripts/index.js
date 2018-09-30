const title = 'Alphabet radio et position des lettres dans alphabet';
console.log('app : ', title);

let radioAlphabets = ['charlie','echo','delta', 'delta2', 'alpha','foxtrot'];
let letters = [ 
    {'letter' :'b', 'position': '1'}, 
    null,
    {'letter' :'a'},
    {'letter' :'c', 'position': '2'}, 
    {'letter' :'f', 'position': '5'}, 
    undefined,
    {'letter' :'d', 'position': '3'}, 
    {'letter' :'e', 'position': '4'},
    NaN
];

console.log('original | ', letters);

const lettersResult = letters
.filter(letter => letter)
.sort((item1, item2) => item1.letter > item2.letter)
.map(letter => {
  const alphabet = radioAlphabets.filter(radio => letter.letter === [...radio][0]);
  return {
    ...letter,
    position: letter.position ? Number(letter.position) + 1 : 1,
    radioAlphabets: alphabet,
    count: alphabet.length
  };
});

console.log('resultat | ', lettersResult);

/* Resultat attendu :
0: {letter: "a", position: 1, radioAlphabets: ["alpha"], count: 1}
1: {letter: "b", position: 2, radioAlphabets: [], count: 0}
2: {letter: "c", position: 3, radioAlphabets: ["charlie"], count: 1}
3: {letter: "d", position: 4, radioAlphabets: ["delta", "delta2"], count: 2}
4: {letter: "e", position: 5, radioAlphabets: ["echo"], count: 1}
5: {letter: "f", position: 6, radioAlphabets: ["foxtrot"], count: 1}
*/


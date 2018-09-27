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

function doSort (letters) {
    return letters
        .filter(x => x)
        .map((letterObj) => {
            letterObj.position = letterObj.position ? parseInt(letterObj.position) + 1 : 1;
            letterObj.radioAlphabets = [];
            letterObj.count = 0;

            return letterObj;
        })
        .sort((item1, item2)=> item1.position - item2.position);
}

function doAddRadioAlphabet (letters, radioAlphabets) {
    for(let letterId in letters) {
        for(let radioAlphabetId in radioAlphabets) {
            if(radioAlphabets[radioAlphabetId][0].includes(letters[letterId].letter)) {
                letters[letterId].count++;
                letters[letterId].radioAlphabets.push(radioAlphabets[radioAlphabetId]);
            }
        }
    }
    
    return letters;
}

let lettersSorted = doSort(JSON.parse(JSON.stringify( letters )));
console.log('sort & map | ', lettersSorted);

let lettersContentAdded = doAddRadioAlphabet(JSON.parse(JSON.stringify( lettersSorted )), radioAlphabets);
console.log('add content | ', lettersContentAdded);

/* Resultat attendu :
0: {letter: "a", position: 1, radioAlphabets: Array(1), count: 1}
1: {letter: "b", position: 2, radioAlphabets: Array(0), count: 0}
2: {letter: "c", position: 3, radioAlphabets: Array(1), count: 1}
3: {letter: "d", position: 4, radioAlphabets: Array(2), count: 2}
4: {letter: "e", position: 5, radioAlphabets: Array(1), count: 1}
*/
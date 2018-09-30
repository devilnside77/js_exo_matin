# Consigne

A partir des 2 tableaux suivant :
```JS
const radioAlphabets = ['charlie','echo','delta', 'delta2', 'alpha','foxtrot'];
const letters = [ 
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
```

obtenir un taleau affichant le résultat suivant :
```JS
0: {letter: "a", position: 1, radioAlphabets: ["alpha"], count: 1}
1: {letter: "b", position: 2, radioAlphabets: [], count: 0}
2: {letter: "c", position: 3, radioAlphabets: ["charlie"], count: 1}
3: {letter: "d", position: 4, radioAlphabets: ["delta", "delta2"], count: 2}
4: {letter: "e", position: 5, radioAlphabets: ["echo"], count: 1}
5: {letter: "f", position: 6, radioAlphabets: ["foxtrot"], count: 1}
```

Pour celui suivre les étapes :
* supprimer les éléments non adéquate de letters;
* trier les éléments de letters;
* construire le tableau final

# Webpack Frontend Starterkit

A lightweight foundation for your next webpack based frontend project.


### Installation

```
npm install
```

### Start Dev Server

```
npm run dev
```

### Build Prod Version

```
npm run build
```

### Features:

* ES6 Support via [babel-loader](https://github.com/babel/babel-loader)
* SASS Support via [sass-loader](https://github.com/jtangelder/sass-loader)
* Linting via [eslint-loader](https://github.com/MoOx/eslint-loader)

When you run `npm run build` we use the [mini-css-extract-plugin](https://github.com/webpack-contrib/mini-css-extract-plugin) to move the css to a separate file and included in the head of your `index.html`, so that the styles are applied before any javascript gets loaded. We disabled this function for the dev version, because the loader doesn't support hot module replacement.

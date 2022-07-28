# Projekt, na luźno.

## Opis
Projekt ma na celu ułatwić nowym programistom webowym pisanie kodu.
Dokładniej mówiąc, wpisujemy w wyszukiwarkę frazy w tak zwanym języku "na nasze", zadaniem wyszukiwarki będzie podrzucenie kodu, który będzie odpowiadał wizji twórcy.

## Dalej nie kapujesz co jest 5?
### Przykład:
- Janusz internetu wpisuje w wyszukiwarke fraze "Wolne miejsce pomiędzy"
- Wyszukiwarka wypluje mu kod w postaci:
```css
margin
margin-left
margin-right
margin-top
margin-bottom
```
Plus przykład zastosowania.

# Dla developerów:
### Uruchomienie:
1. `npm install`
2. `npm start` -> wystartuje na `localhost:3000`

### Test:
1. `npm run test`

### Dodatkowo:
- zainstaluj Prettier w vscode -> dodaj w settings.json (CTRL/STRG + SHIFT + P --> wpisz "OPEN SETTINGS (JSON)" ):
```json
{
    "editor.formatOnPaste": true,
    "editor.formatOnSave": true,
    "prettier.singleQuote": true,
    "prettier.printWidth": 70,
    "[html]": {
        "editor.defaultFormatter": "esbenp.prettier-vscode"
    },
    "[javascript]": {
        "editor.defaultFormatter": "esbenp.prettier-vscode"
    },
    "[json]": {
        "editor.defaultFormatter": "esbenp.prettier-vscode"
    },
    "[typescriptreact]": {
        "editor.defaultFormatter": "esbenp.prettier-vscode"
    },
    "[typescript]": {
        "editor.defaultFormatter": "esbenp.prettier-vscode",
        "editor.formatOnPaste": true,
        "editor.formatOnSave": true,
    },
}
```
- zainstaluj Eslint w vscode

# Ian's Blackjack Game

A beginner JavaScript project based on Scrimba's **Learn JavaScript — Build a Blackjack Game** module. Built with AI assistance; the code is intentionally small and commented for study.

## Run it

Download the files into one folder and open `index.html` in a browser. No package installation or build step is needed.

## How it works

- **Start Game / New Round** draws two random cards and resets the previous round.
- **New Card** adds one card while the total is below 21.
- Exactly 21 wins; over 21 ends the round.
- Aces always count as 11, face cards as 10. Random draws are independent and cards can repeat, matching the simplified lesson.
- No dealer, betting, payments, or real money.

## Files and concepts

- `index.html`: headings, buttons, game area and instructions.
- `style.css`: green table, readable cards and mobile layout.
- `index.js`: variables, booleans, if/else, arrays, loops, functions, random numbers, an object, and DOM updates.

The DOM is the browser's representation of the HTML page. JavaScript changes the DOM to show the cards, sum and message.

## Deploy to Netlify

Use this folder as the publish directory with no build command, or import the public GitHub repository with the same settings.

## Future practice

Try adding a reset button, choosing the player's name, or making aces count as 1 when 11 would bust. Those are extensions beyond this course version.

## Reference

[Scrimba Learn JavaScript](https://scrimba.com/learn-javascript-c0v)

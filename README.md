# HermesShuffle

This project was a submission for an Engineering Challenge from Altvia.

The goal was to design and implement a card shuffler using "the language of your choice".

## Installation/Set-up steps

Clone down the repository and run `npm install` in your terminal.

To run locally, run `npm start`.

To run tests, run `npm test`.


### Links

[Project Board](https://github.com/holladayian/HermesShuffle/projects/1)


### Languages/Frameworks/Libraries/Tools

```
JavaScript
CSS
React
JSX
Jest
React Testing Library
React Router
```

### In Action


https://user-images.githubusercontent.com/62005294/119351603-e5e67c00-bc5d-11eb-93d0-74b53ae0b482.mov

### Description & Design

With only the two days I gave myself, I knew I had to write code quickly. I have the prompt, now quick! What's the Greek deity of gambling? \**googles** It's Hermes, and that's perfect, because now I can call this application the Hermes Shuffle, a play on the [Cupid Shuffle](https://www.youtube.com/watch?v=h24_zoqu4_Q). From there I looked up a picture of wings to be in the header (I found those on [pngtree.com](https://pngtree.com/)). Next I picked a color palette from [colors.co](https://coolors.co/palettes/trending/gold). Finally I was ready to start!
My initial idea was to make several different ways to shuffle a deck (but due to time constraints I thought it more important to meet the mvp). You can see a second shuffle function (fisherYates) in the CardShiffler.js file. While I really liked the simplicity of it, it wasn't my work. I decided not to implement it, but keep it in the file for future use. 
I also wanted to make all of the functions scalable. Instead of randomizing 52 cards, they work with a variable (card) and it's length. An initial thought of mine was to make several decks, possibly one with jokers, or Go Fish.
It should be noted that the test for the shuffle function has a 1 in 52 chance of failure, due to the nature of randomness.

### What's next?

I had started working on an [overhand shuffle](https://www.thesprucecrafts.com/sleight-of-hand-card-magic-tricks-2266267) function, and I would like to implement a clean version (one that pulls 10 cards off of the top) and a realistic version, that pulls a random handfull off the top to simulate human error. 
I also had the idea to create a [riffle shuffle](https://www.youtube.com/watch?v=o-KBNdbJOGk), with both a clean (1 over 1) and realistic version. 
I think if I got these two done, the next step would be letting a user import/add their own cards or deck, but who knows? There's many ideas out there in the world of programming.


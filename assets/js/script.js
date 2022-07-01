// button to roll the pinny

let headsFlips = 0;
let tailsFlips = 0;
//document.querySelector('DOMConteneLoaded', function () {
document.addEventListener('DOMContentLoaded', function () {
    document.querySelector('#flip').addEventListener('click', () => {
        let flippedHeads = Math.random() < .5;
        if (flippedHeads) {
            //assest was wrong
            document.querySelector('#penny-image').src = '/Users/nadeenalzufari/Desktop/cion/FSI-Implement-Coin-Flipper/assets/images/penny-heads.jpg';
            document.querySelector('#message').textContent = "You Flipped Head!";
            headsFlips++;
        }
        else {
            document.querySelector('#penny-image').src = '/Users/nadeenalzufari/Desktop/cion/FSI-Implement-Coin-Flipper/assets/images/penny-tails.jpg';
            document.querySelector('#message').textContent = "You Flipped tail!";
            tailsFlips++;
        }

        let totalFlips = headsFlips + tailsFlips;

        let percentHeads = 0;
        let percentTails = 0;
        if (totalFlips > 0) {
            percentHeads = Math.round((headsFlips / totalFlips) * 100);
            percentTails = Math.round((tailsFlips / totalFlips) * 100);
        }
        document.querySelector("#heads").textContent = headsFlips;
        document.querySelector("#heads-percent").textContent = percentHeads + '%';
        document.querySelector("#tails").textContent = tailsFlips;
        document.querySelector("#tails-percent").textContent = percentTails + '%';
    })
    // add clear button
    document.querySelector('#clear').addEventListener("click", function () {
        let headsFlips = 0;
        let tailsFlips = 0;
        document.querySelector('#message').textContent = "let's get rolling";

        let totalFlips = headsFlips + tailsFlips;
        let percentHeads = 0;
        let percentTails = 0;

        if (totalFlips > 0) {
            percentHeads = Math.round((headsFlips / totalFlips) * 100);
            percentTailss = Math.round((tailsFlips / totalFlips) * 100);
        }
        document.querySelector("#heads").textContent = headsFlips;
        document.querySelector("#heads-percent").textContent = percentHeads + '%';
        document.querySelector("#tails").textContent = tailsFlips;
        document.querySelector("#tails-percent").textContent = percentTails + '%';



    })
})
//document.querySelector('#flip').addEventListener('click', () => {
  //  let flippedHeads = Math.random() <.5;
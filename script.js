let p1score = 0; // Initial score for Player One
let p2score = 0; // Initial score for Player Two
let winning_score = 3;
let isGameOver = false;

function incrementButton() {
    if (p1score !== winning_score) {
        if (!isGameOver) {
            p1score += 1;
            if (p1score == winning_score) {
                isGameOver = true;
                // alert("Player One wins!!!!");
                document.getElementById('p1score').classList.add("winner");
                document.getElementById('p2score').classList.add("loser");
            }
            document.getElementById('p1score').textContent = p1score;

        }

    }
}

function incrementButton2() {
    if (p2score !== winning_score) {
        if (!isGameOver) {
            p2score += 1;
            if (p2score == winning_score) {
                isGameOver = true;
                // alert("Player Two wins!!!!");
                document.getElementById('p2score').classList.add("winner");
                document.getElementById('p1score').classList.add("loser");
            }
            document.getElementById('p2score').textContent = p2score;
        }

    }
}
function resetButton() {
    isGameOver = false;
    p1score = 0;
    p2score = 0;
    document.getElementById('p1score').textContent = p1score;
    document.getElementById('p2score').textContent = p2score;
    document.getElementById('p1score').classList.remove("winner", "loser");
    document.getElementById('p2score').classList.remove("winner", "loser");
}
const winningScoreSelect = document.querySelector("#playto");
winningScoreSelect.addEventListener('change', function () {
    winning_score = parseInt(this.value);
    resetButton();
});

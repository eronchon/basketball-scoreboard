let homeScoreEl = document.querySelector("#home-score")
let guestScoreEl = document.querySelector("#guest-score")

let homeScoreboardEl = document.querySelector("#home-scoreboard")
let guestScoreboardEl = document.querySelector("#guest-scoreboard")

let homeBtn1 = document.querySelector("#home-1-btn")
let homeBtn2 = document.querySelector("#home-2-btn")
let homeBtn3 = document.querySelector("#home-3-btn")
let guestBtn1 = document.querySelector("#guest-1-btn")
let guestBtn2 = document.querySelector("#guest-2-btn")
let guestBtn3 = document.querySelector("#guest-3-btn")
let newGameBtn = document.querySelector("#new-game-btn")

let homeScore = 0
let guestScore = 0
updateScores()

function startGame() {
    homeScore = 0
    guestScore = 0
    updateScores()
}

function updateScores() {
    homeScoreEl.textContent = homeScore
    guestScoreEl.textContent = guestScore
    checkLeader()
}

function checkLeader() {
    if (homeScore > guestScore) {
        highlightHome()
    } else if (guestScore > homeScore) {
        highlightGuest()
    } else {
        removeHighlights()
    }
}

function highlightHome() {
    homeScoreEl.style.color = "#4ff996"
    homeScoreboardEl.style.backgroundImage = "url('./images/basketball_winning.gif')"
    homeScoreboardEl.style.backgroundSize = "cover"
    guestScoreEl.style.color = "#F94F6D"
    guestScoreboardEl.style.backgroundImage = "none"
}

function highlightGuest() {
    guestScoreEl.style.color = "#4ff996"
    guestScoreboardEl.style.backgroundImage = "url('./images/basketball_winning.gif')"
    guestScoreboardEl.style.backgroundSize = "cover"
    homeScoreEl.style.color = "#F94F6D"
    homeScoreboardEl.style.backgroundImage = "none"
}

function removeHighlights() {
    guestScoreEl.style.color = "#F94F6D"
    guestScoreboardEl.style.backgroundImage = "none"
    homeScoreEl.style.color = "#F94F6D"
    homeScoreboardEl.style.backgroundImage = "none"
}

function incrementScore(increment, team) {
    if (team === "home") {
        homeScore += increment
    } else if (team === "guest") {
        guestScore += increment
    }
    updateScores()
}

homeBtn1.addEventListener("click", function() {
    incrementScore(1, "home")
})
homeBtn2.addEventListener("click", function() {
    incrementScore(2, "home")
})
homeBtn3.addEventListener("click", function() {
    incrementScore(3, "home")
})
guestBtn1.addEventListener("click", function() {
    incrementScore(1, "guest")
})
guestBtn2.addEventListener("click", function() {
    incrementScore(2, "guest")
})
guestBtn3.addEventListener("click", function() {
    incrementScore(3, "guest")
})

newGameBtn.addEventListener("click", function() {
    startGame()
})
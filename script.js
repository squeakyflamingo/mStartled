let cards = [
    xCard, greenCard, a1Card, a2Card, bCard, c1Card, c2Card, dCard, endCard
]

let index = 0;

let loadCard = (c) => {
    text.innerHTML = c.text
    addText.innerHTML = c.addText
    card.style.backgroundColor = c.color
    card.style.color = c.tColor
    
    dual.classList.toggle("d-none", c.response !== "dual")
    single.classList.toggle("d-none", c.response !== "single")
    restart.classList.toggle("d-none", c.response !== "restart")
}

let resetAction = () => {
    window.location.reload()
}

let infoAction = () => {
    loadCard(infoCard)
}

let yesAction = () => {
    loadCard(redCard)
}

let noAction = continueAction = () => {
    if(index === cards.length-1) {
        loadCard(yellowCard)
        return
    } 
    
    loadCard(cards[index++])
}

document.addEventListener("DOMContentLoaded", () => {
    loadCard(cards[index])
})
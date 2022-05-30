

let fruits = ["🍊", "🍎", "🍊", "🍊", "🍎"]
let appleshelf = document.getElementById("apple-el")
let orangeshelf = document.getElementById("orange-el")

function inSide() {
  for (let i = 0; i < fruits.length; i++) {
    if (fruits[i] === "🍊") {
      orangeshelf.textContent += "🍊"
    } else if (fruits[i] === "🍎") {
      appleshelf.textContent += "🍎"
    }
  }
}
inSide()
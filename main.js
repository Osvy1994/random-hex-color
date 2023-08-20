const button = document.getElementById('button-color')
const colorText = document.getElementById('color')

function changeColor() {
  let digits = '0123456789abcdef'
  let colorHex = '#'

  for (let i = 0; i < 6; i++) {
    let randomIndex = Math.floor(Math.random() * 16)
    colorHex += digits[randomIndex]
  }

  return colorHex
}

button.addEventListener('click', () => {
  let randomColor = changeColor()
  colorText.innerText = randomColor
  document.body.style.backgroundColor = randomColor
  button.style.backgroundColor = randomColor
})
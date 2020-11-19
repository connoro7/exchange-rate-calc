const currencyInputEl = document.getElementById('currencyInput')
const currencyOutputEl = document.getElementById('currencyOutput')
const amountInputEl = document.getElementById('amountInput')
const amountOutputEl = document.getElementById('amountOutput')
const rateEl = document.getElementById('rate')
const swapEl = document.getElementById('swap')

// Fetch exchange rates, update DOM
function calculate() {
  const currencyInput = currencyInputEl.value
  const currencyOutput = currencyOutputEl.value
  //   console.log(currencyInput, currencyOutput)

  fetch(`https://api.exchangerate-api.com/v4/latest/${currencyInput}`)
    .then((res) => res.json())
    .then((data) => {
      //   console.log(data)
      const rate = data.rates[currencyOutput]
      //   console.log(rate)
      rateEl.innerText = `1 ${currencyInput} = ${rate} ${currencyOutput}`

      amountOutputEl.value = (amountInputEl.value * rate).toFixed(2)
    })
}

// Event listeners
currencyInputEl.addEventListener('change', calculate)
currencyOutputEl.addEventListener('input', calculate)
amountInput.addEventListener('change', calculate)
amountOutput.addEventListener('input', calculate)
swapEl.addEventListener('click', () => {
  const temp = currencyInputEl.value
  currencyInputEl.value = currencyOutputEl.value
  currencyOutputEl.value = temp
  calculate()
})

calculate()

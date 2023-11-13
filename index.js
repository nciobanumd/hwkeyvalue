const buttonSet = document.getElementById('setButton')
const showButtonValue = document.getElementById('showValue')


const listaProduse = ['Patiserie', 'Cereale', 'Legume', 'Ulei', 'Fructe', 'Verdeturi']


listaProduse.forEach((item) => {
    const buton = document.createElement('button')
    buton.innerText = `${item}`
    buttonSet.appendChild(buton)
    buton.addEventListener('click', () => {
        localStorage.setItem(item, JSON.stringify([item]))

    })

})

listaProduse.forEach((item) => {
    const buton = document.createElement('button')
    buton.innerText = `Value: ${item}`
    showButtonValue.appendChild(buton)
    buton.addEventListener('click', () => {
        const value = JSON.parse(localStorage.getItem(item))
        console.log(value)

    })

})







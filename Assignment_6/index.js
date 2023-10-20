// Task 1

const buttonEl = document.querySelector("#alert-btn")
const dialog = document.querySelector('dialog')
const dialogbtn = document.querySelector('#dialog-btn')

buttonEl.addEventListener("click", ()=> {
    document.body.classList.add('darkenPage')
    dialog.setAttribute("open", "true")
})

dialog.addEventListener("close", ()=> {
    document.body.classList.remove('darkenPage')
})


// Task 2

const changeClr = document.querySelector(".form1")
const validColors = ["red", "blue", "green", "black", "white"]

changeClr.addEventListener("submit", (e)=> {
    e.preventDefault()

    const color = document.querySelector('input[name="color"]')
    if(!color.value){
        alert("Please enter the color")
        color.value = ''
        return
    }

    const [validclr] = validColors.filter(clr => clr === color.value)

    if(!validclr){
        alert("Please choose from these colors: red, blue, green, black, white")
        color.value = ''
        return
    } 

    if(validclr){
        document.body.style.backgroundColor = validclr
        color.value=''
        return
    }
    
})

// Task 3

const average = document.querySelector(".form2")

average.addEventListener("submit", (e)=> {
    e.preventDefault()

    const numbers = document.querySelector('input[name="numbers"]')
    if(!numbers.value){
        alert("Please enter your numbers")
        return
    }

    let sum = 0
    const numArr = numbers.value.split(':')
    numArr.forEach(x => sum += parseInt(x))
    const returnVal = sum / numArr.length

    if(!returnVal){
        alert("Please enter valid numbers")
        return
    } 
    if(returnVal){
        alert(`Your avarage is: ${returnVal.toFixed(2)}`)
        return
    } 
})
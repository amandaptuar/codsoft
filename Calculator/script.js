let btns = document.querySelectorAll('.btn')
let add = document.querySelector('.add')
let subtract = document.querySelector('.subtract')
let clear = document.querySelector('.clear')
let equals = document.querySelector('.equals')
let multiply = document.querySelector('.multiply')
let divide = document.querySelector('.divide')
let input_bar = document.querySelector('.user_input')
let value_1 , value_2 ;
let soln = 0
let operation;

btns.forEach((btn) => {
   btn.addEventListener('click' , () => {
    let value = btn.getAttribute("value")
    let inputvalue = input_bar.getAttribute('value')
    input_bar.setAttribute("value", inputvalue + value)
    
   })
})

add.addEventListener('click' , () => {
operation = 1
value_1  = parseInt(input_bar.getAttribute("value"))
input_bar.setAttribute("value",'')
})


subtract.addEventListener('click' , () => {
 operation = 2
 value_1 = parseInt(input_bar.getAttribute("value"))
input_bar.setAttribute("value",'')
})


multiply.addEventListener('click' , () => {
 operation = 3
 value_1 = parseInt(input_bar.getAttribute("value"))
input_bar.setAttribute("value",'')
})


divide.addEventListener('click' , () => {
 operation = 4
 value_1 = parseInt(input_bar.getAttribute("value"))
input_bar.setAttribute("value",'')
})

equals.addEventListener('click', () => {
    value_2 = parseInt(input_bar.getAttribute("value"))
   if(operation == 1){
      soln = value_1 + value_2
   }else if(operation == 2){
      soln = value_1 - value_2
   }else if(operation == 3){
      soln = value_1 * value_2
   }else if(operation == 4){
      soln = value_1 / value_2
   }
   input_bar.setAttribute("value",soln)
   value_1 = 0
   value_2 = 0
})

clear.addEventListener('click' , () => {
   input_bar.setAttribute("value",'')
})


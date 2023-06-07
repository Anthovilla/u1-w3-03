const input = document.querySelector('input') // *1  va apuntar al input 'add u list'
const addBtn = document.querySelector(".btnAdd")
const empty = document.querySelector('.empty')

addBtn.addEventListener("click", (e) => {
    e.preventDefault()
    addTask()
})

let idCounter = 0 //contador iniziale

let addTask = () => {
    idCounter++ // incremanta di 1 

 //*1   
    let newValue = input.value // voglio solo il valore che entra // poi lo aggiungo a '<label>

    list.innerHTML += `
    <div class="task-continer" id="${idCounter}">
          <label> ${newValue} </label> 
          <i class="fas fa-trash" style="color: #581818"></i>
     </div>
    `
    input.value = ""
}


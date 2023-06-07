const input = document.querySelector('input')
const addBtn = document.querySelector(".btnAdd")
const ul = document.querySelector('ul')
const empty = document.querySelector('.empty')

addBtn.addEventListener("click", (e) => {
    e.preventDefault()

    input.value = ""
    const text = input.value
    
    const li = document.createElement('li') //creo un nuovo elemt
    const p = document.createElement('p')
    p.innerText = text  

    li.appendChild(p)

    li.appendChild(addDeleteBtn())

    ul.appendChild(il)
})

function addDeleteBtn() {
    const deletebtn = document.createElement('button')
    
    deletebtn.innerText = "x"
    deletebtn.className = "btn-delete"

    deletebtn.addEventListener('click', (e) => {
        ul.removeChild(item)
    })
    return deletebtn
}

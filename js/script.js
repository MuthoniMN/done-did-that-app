document.querySelector('#addDate').addEventListener('click', startNewDay)

function startNewDay() {
    document.querySelector('#new').style.display = "none"
    document.querySelector('#list').style.display = "block"
    document.querySelector('h3').innerText = document.querySelector('#date').value
}

let today = new Date()

document.querySelector('h3').innerHTML = `${today.getDate()}/${today.getMonth()}/${today.getFullYear()}`

let task = []

document.querySelector('#addTask').addEventListener('click', addNewTask)

function addNewTask() {
    document.querySelector('#tasks').innerHTML += `<input type="checkbox"class="task" >
    <label>${document.querySelector('#task').value}</label>
`

    task.push(document.querySelector('#task').value)
}
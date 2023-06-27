// creates a new day
document.querySelector('button').addEventListener('click', () => {
    document.querySelector('#new').style.display = "block"
    document.querySelector('#list').style.display = "none"
})

document.querySelector('#addDate').addEventListener('click', startNewDay)

function startNewDay() {
    document.querySelector('#new').style.display = "none"
    document.querySelector('#list').style.display = "block"
    document.querySelector('h3').innerText = document.querySelector('#date').value
}

// creates a to-do list for today
let today = new Date()

document.querySelector('h3').innerHTML = `${today.getDate()}-${today.getMonth()}-${today.getFullYear()}`

let task = []

document.querySelector('#addTask').addEventListener('click', addNewTask)

let num = 1
function addNewTask() {

    document.querySelector('#tasks').innerHTML += `
    <div class="inputwrapper">
    <input type="checkbox"class="task" id="task${num}">
    <label for="task${num}">${document.querySelector('#task').value}</label>
    </div>
`

    task.push(document.querySelector('#task').value)

    document.querySelector('#task').value = ''
    num++
}

// check if the task is done
function getChecked() {
    document.querySelectorAll('.inputwrapper').forEach((a) => {
        a.addEventListener('click', () => {
            a.classList.toggle('done')
        })
})    
}

setInterval(getChecked, 100)
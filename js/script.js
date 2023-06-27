// creates a to-do list for today
let today = new Date()
let month = today.getMonth() < 10 ? `0`+today.getMonth() : today.getMonth()
let todaysDate = `${today.getFullYear()}-${month}-${today.getDate()}`

if (document.querySelector('#day').innerHTML === "") {
    document.querySelector('#day').innerHTML = todaysDate

}


document.querySelector('#addTask').addEventListener('click', addNewTask)

let task = []
let num = 1
function addNewTask() {

    document.querySelector('#tasks').innerHTML += `
    <div class="inputwrapper">
    <input type="checkbox"class="task" id="task${num}">
    <label for="task${num}">${document.querySelector('#task').value}</label>
    </div>
`

    task.push(document.querySelector('#task').value)
    localStorage.setItem(`${document.querySelector('#day').innerHTML}`, task)
    console.log(task);

    document.querySelector('#task').value = ''
    num++
}

// creates a new day
document.querySelector('button').addEventListener('click', () => {
    document.querySelector('#new').style.display = "block"
    document.querySelector('#list').style.display = "none"
})

document.querySelector('#addDate').addEventListener('click', startNewDay)

function startNewDay() {
    let date = document.querySelector('#date').value
    document.querySelector('#new').style.display = "none"
    document.querySelector('#list').style.display = "block"
    document.querySelector('#day').innerHTML = date
    document.querySelector('#tasks').innerHTML = ""

    for (let a = 0; a < localStorage.length; a++) {
        const element = localStorage.key(a);
        if(date === element){
            let tasks = localStorage.getItem(element).split(',')
    
            tasks.forEach((task, num) => {
            document.querySelector('#tasks').innerHTML  +=   `
                <div class="inputwrapper">
                <input type="checkbox"class="task" id="task${num}">
                <label for="task${num}">${task}</label>
                </div>
            `
            })
        }
    }
}

// check if the task is done
function getChecked() {
    document.querySelectorAll('.inputwrapper').forEach((a) => {
        if (a.firstChild.nextSibling.checked) {
            a.lastChild.previousSibling.classList.add('done')
        }else{
            a.lastChild.previousSibling.classList.remove('done')
        }
    })

}

setInterval(getChecked, 100)

// display previous dates and already added tasks
for (let a = 0; a < localStorage.length; a++) {
    let day = document.querySelector('#day').innerHTML

    const element = localStorage.key(a);
    console.log(element);
    if(element !== todaysDate){
        document.querySelector('#history').innerHTML += `
        <h4 class="pastTasks">${element}</h4>
        `
        document.querySelector('#tasks').innerHTML = ""
    } else{
        console.log(`${day}: ${element}`);
        let tasks = localStorage.getItem(element).split(',')

        tasks.forEach((task, num) => {
        document.querySelector('#tasks').innerHTML  +=   `
            <div class="inputwrapper">
            <input type="checkbox"class="task" id="task${num}">
            <label for="task${num}">${task}</label>
            </div>
        `
        })
    }
}
 
// show previous tasks
const previousDates = document.querySelectorAll('.pastTasks')
console.log(previousDates);
previousDates.forEach((a) => {
    let txt = a.innerHTML
    console.log(txt);
    a.addEventListener('click', () => {
        document.querySelector('#day').innerHTML = txt

        const tasks = localStorage.getItem(txt).split(',')

        tasks.forEach((task, num) => {
            document.querySelector('#tasks').innerHTML  +=   `
                <div class="inputwrapper">
                <input type="checkbox"class="task" id="task${num}">
                <label for="task${num}">${task}</label>
                </div>
            `
            })
    })
})
const nameInput = document.getElementById('todo-name-input')
const dateInput = document.getElementById('todo-date-input')
const addButon = document.getElementById('add-btn')
const taskList = document.getElementById('task-list')

addButon.addEventListener('click', () => {
    if(nameInput.value.trim() !== '' && dateInput.value.trim() !== '') {
        const task = document.createElement('div')
        const removeButton = document.createElement('button')
        const taskName = document.createElement('span')
        const date = document.createElement('span')
        date.textContent = dateInput.value
        date.className = 'task-date'
        taskName.textContent = `${nameInput.value}`
        taskName.className = 'task-name'
        removeButton.innerHTML='Delete'
        removeButton.className='remove-btn'
        task.className = 'task'
        task.dataset.date = dateInput.value
        task.appendChild(taskName)
        task.appendChild(date)
        task.appendChild(removeButton)
        taskList.appendChild(task)
        removeButton.addEventListener('click', () => {
            taskList.removeChild(task)
        })

        const tasks = Array.from(taskList.querySelectorAll('.task'))
        tasks.sort((a, b) =>{
            return new Date(a.dataset.date) - new Date(b.dataset.date)
        })
        taskList.innerHTML = ''
        tasks.forEach(task => taskList.appendChild(task))
        nameInput.value = ''
        dateInput.value = ''
    }
    else {console.error('Input is required')}
})

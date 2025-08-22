import { useState, useEffect } from 'react'
function Todo(){
    const [tasks, setTasks] = useState([])
    const [newTask, setNewTask] = useState('')
    const [darkMode, setDarkMode] = useState(true)
    useEffect(() => {
        document.body.className = darkMode ? "dark" : "light";
    }, [darkMode]);

    function addTask(){
        newTask.trim() !== '' ? setTasks([...tasks, {id: Date.now(), text: newTask, done: false}]) : null
        setNewTask('')
}
    function removeTask(taskId){
        setTasks(tasks.filter((task) => task.id !== taskId))
    }

    function moveTask(index, direction){
        let newTasks = [...tasks]
        const targetIndex = index + direction
        if(targetIndex >= 0 && targetIndex < newTasks.length){
            [newTasks[index], newTasks[targetIndex]] = [newTasks[targetIndex], newTasks[index]]
            setTasks(newTasks)
        }
    }
    function completeTask(taskId){
        let newTasks = [...tasks]
        const completedTask = newTasks.find((task) => task.id === taskId)
        newTasks=newTasks.filter((task) => task.id !== taskId)
        completedTask.done = !completedTask.done
        completedTask.done ? setTasks([...newTasks, completedTask]) : setTasks([completedTask, ...newTasks])
    }
    return(
        <>
            <nav className="navbar">
                <button onClick={()=>setDarkMode(!darkMode)} className='darkmode-toggle-btn'>{darkMode ?
                    (<svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" fill="currentColor" class="bi bi-brightness-high" viewBox="0 0 16 16">
                    <path d="M8 11a3 3 0 1 1 0-6 3 3 0 0 1 0 6m0 1a4 4 0 1 0 0-8 4 4 0 0 0 0 8M8 0a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-1 0v-2A.5.5 0 0 1 8 0m0 13a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-1 0v-2A.5.5 0 0 1 8 13m8-5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1 0-1h2a.5.5 0 0 1 .5.5M3 8a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1 0-1h2A.5.5 0 0 1 3 8m10.657-5.657a.5.5 0 0 1 0 .707l-1.414 1.415a.5.5 0 1 1-.707-.708l1.414-1.414a.5.5 0 0 1 .707 0m-9.193 9.193a.5.5 0 0 1 0 .707L3.05 13.657a.5.5 0 0 1-.707-.707l1.414-1.414a.5.5 0 0 1 .707 0m9.193 2.121a.5.5 0 0 1-.707 0l-1.414-1.414a.5.5 0 0 1 .707-.707l1.414 1.414a.5.5 0 0 1 0 .707M4.464 4.465a.5.5 0 0 1-.707 0L2.343 3.05a.5.5 0 1 1 .707-.707l1.414 1.414a.5.5 0 0 1 0 .708"/>
                </svg>)
                    :
                    (<svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" fill="currentColor" class="bi bi-moon-stars-fill" viewBox="0 0 16 16">
                        <path d="M6 .278a.77.77 0 0 1 .08.858 7.2 7.2 0 0 0-.878 3.46c0 4.021 3.278 7.277 7.318 7.277q.792-.001 1.533-.16a.79.79 0 0 1 .81.316.73.73 0 0 1-.031.893A8.35 8.35 0 0 1 8.344 16C3.734 16 0 12.286 0 7.71 0 4.266 2.114 1.312 5.124.06A.75.75 0 0 1 6 .278"/>
                        <path d="M10.794 3.148a.217.217 0 0 1 .412 0l.387 1.162c.173.518.579.924 1.097 1.097l1.162.387a.217.217 0 0 1 0 .412l-1.162.387a1.73 1.73 0 0 0-1.097 1.097l-.387 1.162a.217.217 0 0 1-.412 0l-.387-1.162A1.73 1.73 0 0 0 9.31 6.593l-1.162-.387a.217.217 0 0 1 0-.412l1.162-.387a1.73 1.73 0 0 0 1.097-1.097zM13.863.099a.145.145 0 0 1 .274 0l.258.774c.115.346.386.617.732.732l.774.258a.145.145 0 0 1 0 .274l-.774.258a1.16 1.16 0 0 0-.732.732l-.258.774a.145.145 0 0 1-.274 0l-.258-.774a1.16 1.16 0 0 0-.732-.732l-.774-.258a.145.145 0 0 1 0-.274l.774-.258c.346-.115.617-.386.732-.732z"/>
                    </svg>)}
                </button>
            </nav>
            <div className={`todo ${darkMode ? 'dark' : 'light'}`}>
                <h1>To-do list</h1>
                <div className="input-row">
                    <input
                        type="text"
                        placeholder="Enter the task..."
                        value={newTask}
                        onChange={(e) => setNewTask(e.target.value)}
                        onKeyDown={(e) => {
                            if (e.key === 'Enter') {
                                addTask();}
                        }}
                    />
                    <button onClick={addTask} className='add-btn'>Add task</button>
                </div>
                <ul>
                { tasks.map((task,index) => (
                    <li key={task.id} className={'task'}>
                        <span>{task.done ? (<u>{task.text}</u>) : task.text }</span>
                        <button onClick={()=>removeTask(task.id)} className='remove-btn'>❌</button>
                        <button onClick={()=>completeTask(task.id)} className='complete-btn'>✅</button>
                        <button onClick={()=>moveTask(index, -1)} className='move-up-btn'>⬆️</button>
                        <button onClick={()=>moveTask(index,1)} className='move-down-btn'>⬇️</button>
                    </li>
                )) }
                </ul>
            </div>
        </>
    )
}
export default Todo
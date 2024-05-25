async function fetchTasks()
{
    const response = await fetch("http://localhost:3000/tasks");
    return await response.json()
}

async function fetchSingleTask(id)
{
    const response = await fetch(`http://localhost:3000/tasks/${id}`);
    return await response.json()
}

export {
    fetchTasks, fetchSingleTask
}
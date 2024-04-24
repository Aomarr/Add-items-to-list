list = []
const listTable = document.querySelector(".list-table")
function addNewTask (event) {
    event.preventDefault();
    const newTask = document.querySelector(".new-task")
    list.push(newTask.value)
    const listRow = document.createElement("tr")
    listRow.innerHTML = `
    <td>${list.length-1}</td>
    <td>${newTask.value}</td>
    `
    listTable.appendChild(listRow)
    newTask.value = ""
}
document.querySelector(".add-task").addEventListener("click", addNewTask)


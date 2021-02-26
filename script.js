const submit = document.getElementById('submit')

enterTask.addEventListener('click', function() {
    enterTask.value = ''
})

submit.addEventListener('click', function (event) {
    
    const enterTask = document.getElementById("enterTask").value;
    let li = document.createElement("li");
    document.getElementById("tasks").appendChild(li);
    let label = document.createElement("label")
    label.setAttribute('for', 'check')
    let check = document.createElement("input")
    check.setAttribute('type', 'checkbox')
    let item = document.createTextNode(enterTask);
    li.appendChild(check);
    li.appendChild(item);
    let decor = function() {
        li.style.textDecoration = 'line-through';
        
        check.addEventListener('click', function () {
            li.style.textDecoration = 'none';
            li.style.fontWeight = 'bold'
        })
        
    }
    check.addEventListener('click', decor)
    //зачёркивается только один раз

    
    li.addEventListener('dblclick', function () {
    li.innerHTML = prompt ('enter a new task') 

    //не получилось разделить чекбокс и текст, чтобы при изменении оба элемента отображались, а не только текст

})

})
 
const clear = document.getElementById('delete')
clear.addEventListener('click', function() {
    let del = confirm('Do you want to clear the list?')
    if(del === true) {
    document.getElementById('tasks').innerHTML = ""
    }
})







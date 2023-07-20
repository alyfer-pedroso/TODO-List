(function () {
    'use strict'
    var $ul = document.querySelector('ul');
    var $taskInput = document.getElementById('taskInput');
    var $taskBTN = document.getElementById('taskBTN');

    //CHAMANDO A FUNÇÃO DE INSERIR TAREFA
    $taskBTN.addEventListener('click', addNewTask);
    $taskInput.addEventListener('keyup', function(e) {
        if(e.key === 'Enter') {
            addNewTask();
        }
    });

    //TODA VEZ QUE EU CLICAR EM UM ELEMENTO NA UL, VAI VERIFICAR SE É O BOTAO DELETE E ASSIM CHAMAR A FUNÇÃO DE REMOVER TAREFA OU VERIFICAR SE É A TAREFA E ASSIM RISCAR ELA
    $ul.addEventListener('click', function(e) {
        if (e.target.nodeName == 'IMG') {
            removeThisTask(e.target);
        } else if (e.target.nodeName == 'LI') {
            lineThroughTask(e.target);
        } else {
            return;
        }
    });

    //RISCAR TAREFA
    function lineThroughTask(x) {
        x.classList.toggle('task-done');
    }

    //REMOVER TAREFA
    function removeThisTask(y) {
        y.parentNode.remove(y);
    }

    //INSERIR TAREFA
    function addNewTask() {
        var li = document.createElement('li');
        var liText = document.createTextNode($taskInput.value);
        var liDeleteBTN = document.createElement('img')
        var deleteImgSRC = 'imgs/trash-solid-24.png';
        var taskInputValue = $taskInput.value;

        //PREPRANDO O BOTAO DELETE
        function addDeleteButton() {
            li.appendChild(liDeleteBTN); //Colocando o botão de deletar a tarefa
            liDeleteBTN.src = deleteImgSRC; //Inseriando a imagem
            liDeleteBTN.className = 'delete'; //Adicionando a classe no botao
        }

        //VERIFICAR SE O VALOR DO INPUT NAO ESTÁ VAZIO PARA PODER ADICIONAR A NOVA TAREFA
        if(taskInputValue != '') {
            li.appendChild(liText); //Colocando o nome da tarefa
            $ul.appendChild(li); //Adicionando a tarefa na lista
            addDeleteButton(); //Chamando o botao delete
            $taskInput.value = ''; //Limpando o texto do input
            $taskInput.focus(); //Seleciondo o input de volta 
        } else {
            return;
        }
    }
})()
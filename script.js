document.addEventListener('DOMContentLoaded',function(){
    const formulario = document.getElementById('idform');
    const listadados = document.getElementById('listadados');
    const main = document.getElementById('mainc')

    formulario.addEventListener('submit', function(event){
        event.preventDefault();

        const tarefa = document.getElementById('tarefa').value;
        const descricao = document.getElementById('desc').value;

        const novoItemLista = document.createElement('li');
        
        const tarefaTitulo = document.createElement('h3');
        const tarefaTexto = document.createElement('p');

        tarefaTitulo.innerText = `Tarefa:`
        tarefaTexto.innerText = `${tarefa}`

        const divTitulo = document.createElement('div');

        const descricaoTitulo = document.createElement('h3');
        const descricaoTexto = document.createElement('p');

        const divDiscricao = document.createElement('div');

        divTitulo.classList.add("flex-row")


        divDiscricao.classList.add("flex-row")

        descricaoTitulo.innerText = `Descrição:`
        descricaoTexto.innerText = `${descricao}`

        // novoItemLista.textContent = `Tarefa: ${tarefa} Descrição: ${descricao}`;

        divTitulo.appendChild(tarefaTitulo)
        divTitulo.appendChild(tarefaTexto)

        divDiscricao.appendChild(descricaoTitulo)
        divDiscricao.appendChild(descricaoTexto)

        novoItemLista.appendChild(divTitulo)
        novoItemLista.appendChild(divDiscricao)

        listadados.appendChild(novoItemLista);

        main.addEventListener('click',function(){
            main.classList.contains('colorb')
        })

        novoItemLista.addEventListener('click', function() {
            
            if (novoItemLista.classList.contains('concluido')) {
                novoItemLista.classList.remove('concluido');
            } else {
                novoItemLista.classList.add('concluido');
            }
        console.log('tarefa:',tarefa);
        console.log('descricao:',descricao);

        });
    });
});
// Capturar os elementos HTML
const titulo = document.getElementById('titulo');
const ul = document.querySelector('ul');
const a = document.querySelector('a');
const ol = document.getElementById('lista-ordenada');

// Adicionar conteúdo aos elementos
titulo.innerText = "Título da Página";
a.innerText = "Clique aqui para Proz Educação";

// Adicionar itens à lista não ordenada
ul.innerHTML = `
    <li>Item 1</li>
    <li>Item 2</li>
    <li>Item 3</li>
`;

// Adicionar itens à lista ordenada
ol.innerHTML = `
    <li><a href="https://www.site1.com">Site 1</a></li>
    <li><a href="https://www.site2.com">Site 2</a></li>
    <li><a href="https://www.site3.com">Site 3</a></li>
`;

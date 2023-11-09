//variaveis dos elementos da lista


//Atribuindo o formulario a uam váriavel
const form = document. getElementById('addForm');
//Atribuir a lista a uma variavel
const itemlist = document.getElementById('items');
//Atribução da barra de pesquisa
const filter = document.getElementById('filter');

form.addEventListener('submit', addItem);

itemlist.addEventListener('click', removeItem);

filter.addEventListener('keyup',buscarItems);
function buscarItems(){
    alert('Tecla ativa');
}
function buscarItems(e) {
  console.log(e.target.value.toLowerCase());
  
  let txt = e.target.value.toLowerCase();
  //Buscar todos itens
  let Items =ItemsListgetElementsByTagName('li')
  //converte os itens para arrei
  Array.from(Items).forEach( function(item){
//buscar os itens na lista
let nomeItem = item.firstChild.textContent;
if(nomeItem.toLowerCase().indexOf(txt) != -1){
  item.style.display = 'block' //Mostra o item
}
else{
  item.style.display = 'none'; //oculta o item
}
  });
}

//console.log('Isso nao é um btn')
function removeItem(evento){
  if(evento.target.classList.contains('delete')){
   // console.log('TENHO QUE DELETAR')
   let li = evento.target.parentElement;
   itemlist.removeChild(li);

  }

}



function addItem(evento){
  evento.preventDefault();

  //criar a class li
  let novo_li = document.createElement('li');
  //add a classe para a tag <li class= "list-group-item"
  novo_li . className = 'list-group-item';
  //resgatamos o valor inserido no formulario
  let novoItem = document.getElementById('item').value;

  //Unido o <li> com o nome do item
  novo_li.appendChild(document.createTextNode(novoItem));
  //criar o batão delete
  let deleteBtn = document.createElement('button');
  //atribuindo class ao bnt
  deleteBtn.className = 'btn btn-danger btn-sm float-end delete';
  //acresentando o 'X' ao btn
  deleteBtn.appendChild(document.createTextNode('X'));
  //colocar btn dentro da tag li
  novo_li.appendChild(deleteBtn)
  //adicionando <li> completa a <ul>
  itemlist.appendChild(novo_li);
  form.reset();
  console.log(novo_li);
  console.log(deleteBtn)
  //console.log(evento)
}


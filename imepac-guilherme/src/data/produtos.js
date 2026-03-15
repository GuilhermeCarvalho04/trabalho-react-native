export let listaProdutos = [];

export function adicionarProduto(produto){
listaProdutos.push(produto);
}

export function listarProdutos(){
return listaProdutos;
}
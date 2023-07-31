let imp = document.getElementById("imp")

imp.addEventListener("click",(event)=>{
    window.print()
})




function adicionar(){
    
    var produto = document.getElementById('nom')
    var quantidade = document.getElementById('quant')
    var res = document.getElementById('res')
    

    if(produto.value <= 0){
        window.alert('[Erro] Adicione o Produto e a Quantidade.')
    }else{ 
        res.innerHTML += `*  Produto: <strong>${produto.value}</strong> - Quantidade: <strong>${quantidade.value}</strong><br>` 
    }
    produto.value = ''
    produto.focus()
    quantidade.value = ''
}



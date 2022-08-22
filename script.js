const entradaTexto = document.querySelector("#entradatexto");
const saidaTexto = document.querySelector("#saidaTexto");
const title = document.querySelector("#title");




function encriptar(){
	

    
	var value = entradaTexto.value;

    
    if(value===""){
        entradaTexto.style.border="red 1px solid"
        alert("preencha todos os campos")
    }
    else{
        esconderItens();

        var criptografado = value.replaceAll('e', 'enter')
        .replaceAll('i', 'imes')
        .replaceAll('a', 'ai')
        .replaceAll('o', 'ober')
        .replaceAll('u', 'ufat');
    
        var minusculas = criptografado.toLowerCase();
    
        document.querySelector("#saidaTexto").innerHTML=minusculas;
        document.querySelector("#entradaTexto").value=""
        entradaTexto.style.border="none"
        saidaTexto.classList.add(".formatado")
    
    }

}

function descriptar(){
    var value = entradaTexto.value;

    if(value===""){
        entradaTexto.style.border="red 1px solid"
        alert("preencha todos os campos")
    }
    else{

        esconderItens();

        var criptografado = value.replaceAll('enter', 'e')
        .replaceAll('imes', 'i')
        .replaceAll('ai', 'a')
        .replaceAll('ober', 'o')
        .replaceAll('ufat', 'u');	
        var minusculas = criptografado.toLowerCase();
        document.querySelector("#saidaTexto").innerHTML=minusculas;
    }
	
    

    
}

function esconderItens(){
   document.querySelector("#imagem").style.display="none"
   document.querySelector("#title").style.display="none"
  
  
}
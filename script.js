function gerarLink(){
	s_textoDigitado = document.getElementById("s_campoNumero").value
	s_textoOpcionalDigitado = document.getElementById("s_campoMensagem").value 
	
	if (s_textoDigitado != "") {
		s_baseApiWhatsapp = "https://wa.me/"
		s_ResultadoLink = s_baseApiWhatsapp + s_textoDigitado + "?text=" + s_textoOpcionalDigitado;
		navigator.clipboard.writeText(s_ResultadoLink)
		.then(() => {
			alert("link copiado para a área de transferência")
			limpaDados()
		})	
	}else{
		alert("Informe os dados primeiro!")
	}
}

function limpaDados(){
    document.getElementById("s_campoNumero").value = ""
	document.getElementById("s_campoMensagem").value = ""
}
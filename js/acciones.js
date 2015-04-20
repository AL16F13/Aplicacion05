// JavaScript Document
$(document).ready(function(e) {
 //document.addEventListener("deviceready",function(){
$('#btndatos').on('click',function(){
	//alert('Hola');
$('body').pagecontainer("change","#datos",{transition:"pop" });		
});//click btn datos
$('#btnresultado').on('click',function(){
	//alert('Hola');
	
	var imc;
	var peso = $('#txtpeso').val();
	var talla = $ ('#txttalla').val();
	//alert(peso);
	//alert(talla);
	imc = (peso/(talla*talla));
	$('#imc').text('nombre:  '+ $('#txtnombre').val()+ '  imc=   ' + imc);
	            
$('body').pagecontainer("change","#resultado",{transition:"pop" });		
});//click btn datos
//}); 
});


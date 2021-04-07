
const calcular = () => {
  let  num1 = document.getElementById("num1").value;
  let  num2 = document.getElementById("num2").value;

  if(document.getElementById("sumar").checked){
    document.getElementById("res").innerHTML =  parseFloat(num1) + parseFloat(num2);
  }else if(document.getElementById("restar").checked){
    document.getElementById("res").innerHTML =  parseFloat(num1) - parseFloat(num2);
  }else if(document.getElementById("multiplicar").checked){
    document.getElementById("res").innerHTML =  parseFloat(num1) * parseFloat(num2);
  }





}

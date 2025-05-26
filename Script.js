let hasCalculate = false;
let input =  document.querySelector(".calculation");
let inputParagraph =  document.querySelector(".inputParagraph");

function calculate(numbers){
  
  
  input.value += numbers;
  hasCalculate = false;
}
function clearButton(){
  input.value ="";
  inputParagraph.innerText = "";
  hasCalculate = false;
}
 let equal = function equal(){
  try{
  let result = input.value
  .replace(/×/g, "*")
  .replace(/÷/g, "/");
  let adding = eval(result);
  inputParagraph.innerText= `=${adding}`;
  hasCalculate = true;
  } 
  catch(error){
    input.value = "Error"
    inputParagraph.innerText= "Error";
    hasCalculate = true;
  }
  
  
}
function deleteButton(){
 if(!hasCalculate){
  input.value = input.value.slice(0,-1);
  }
}
 
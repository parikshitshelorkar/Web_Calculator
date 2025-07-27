// Todo: Make M+ M- and MC functional


const display = document.getElementById('display');
function appendToDisplay(input){
  display.value += input;


}
function clearDisplay(){
  display.value = "";

}
function calculate(){
  try{
    display.value = eval(display.value);
  }
  catch(error){
    display.value = "Error"
  }
}
function backspace(){
  let display = document.getElementById("display");
  display.value = display.value.slice(0, -1);
}
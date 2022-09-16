let celsius=document.querySelector("#celsius");
let fahrenheit=document.querySelector("#fahrenheit");

function celTofar(){
    let result =(parseFloat(celsius.value)*9/5)+32;
    fahrenheit.value=parseFloat(result.toFixed(2));
}

function farTocel(){
    let result =(parseFloat(fahrenheit.value)-32)*5/9;
    celsius.value=parseFloat(result.toFixed(2));
console.log(result);

}

// function temperatureConverter(valNum) {
//     valNum = parseFloat(valNum);
//     document.querySelector("#outputCelcius").innerHTML=(valNum-32)/1.8;
//   }
  

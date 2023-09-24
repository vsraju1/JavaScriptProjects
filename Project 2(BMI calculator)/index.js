// alert("its working");

const weight = document.querySelectorAll("input")[0];
console.log(weight);
const height = document.querySelectorAll("input")[1];
console.log(height);
const btn = document.querySelector("button");
console.log(btn)
const result_text = document.querySelectorAll("div > .result > p")[1];
console.log(result_text);
// const weight_text = document.querySelectorAll(".result")[1];
// console.log(weight_text);

function result(){
    // const height = Number(height.value);
    // const weight = Number(weight.value);
    const solution = Math.round((Number(weight.value))/(Number(height.value)*Number(height.value)));
    console.log(solution);
    console.log(Number(height.value));
    document.querySelectorAll("div > .result > p")[0].innerHTML = "Your BMI score is " + solution; 
    if (solution < 18.5){
            result_text.innerHTML = "You are under weight please eat as much as you can.";
    }
    else if(solution > 18.5 & solution < 24.9){
        result_text.innerHTML = "You are good and maintaining healthy weight. stay healthy."
    }
    else{
        result_text.innerHTML = "You are overweight, watch your diet and do some regular excercise."
    }
}

btn.addEventListener('click', result);
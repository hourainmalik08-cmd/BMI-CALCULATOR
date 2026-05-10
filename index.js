const btn = document.getElementById('calculate');

btn.addEventListener('click', function() {
    let weight = document.querySelector('#weight').value;
    let height = document.querySelector('#height').value;

    if(weight == '' || height == '') {
        alert('Please enter both weight and height');
        return;
    }

    height = height / 100;
    let bmi = weight / (height * height);
    bmi = bmi.toFixed(2);

    document.querySelector('#result').innerHTML = bmi;
    let status = '';

    if(bmi < 18.5){
        status = "Underweight";
    }
    if(bmi > 18.5 && bmi < 25){

        status = "Healthy";
    }
    if(bmi > 25 && bmi < 30){
        status = "Overweight";
    } 
    if(bmi >= 30){
        status = "Obesity";
    }
    
    document.querySelector('.category').innerHTML = `Category: <span>${status}</span>`;
})
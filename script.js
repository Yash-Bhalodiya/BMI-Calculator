const form = document.querySelector('form');
const bmiDIv =document.querySelector('.bmi')

form.addEventListener('submit', function (e) {
  e.preventDefault();
  const height = parseInt(document.querySelector('#height').value);
  const weight = parseInt(document.querySelector('#weight').value);
  const results = document.querySelector('#results');
  const condition = document.querySelector('.condition');


  condition.innerHTML = '';

  if (height === '' || height < 0 || isNaN(height)) {
    results.innerHTML = `Provide valid height`;
  }
  else if (weight === '' || weight < 0 || isNaN(weight)) {
    results.innerHTML = `Provide valid weight`;
  }
  else{
    const bmi =(weight / ((height * height) / 10000)).toFixed(2);
    results.innerHTML = `BMI is <span>${bmi}</span>`;
    if(bmi <= 18.6){
        condition.innerHTML = `Under Weight`;
        condition.style.color = 'blue';
    }
    else if(bmi >18.6 && bmi<= 24.9){
        condition.innerHTML = `Normal `;
        condition.style.color = 'green';
    }
    else {
        condition.innerHTML = `Overweight`
        condition.style.color = 'red';
    }
    bmiDIv.style.height = '580px'
  }
});

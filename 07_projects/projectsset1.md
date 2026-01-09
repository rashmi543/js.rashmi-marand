# Project related to DOM

##project link
[Click here](https://stackblitz.com/edit/dom-project-chaiaurcode?file=index.html)

# Solution code

## project 1

```javascript
console.log("rashmi")
const buttons = document.querySelectorAll('.button');
const body = document.querySelector("body")

buttons.forEach(function (button) {
    console.log(button);
    button.addEventListener('click',function(e) {
        console.log(e);
        console.log(e.target);
        if(e.target.id ==='gray'){
            body.style.backgroundColor = e.target.id;
        }
        if(e.target.id ==='white'){
            body.style.backgroundColor = e.target.id;
        }
        if(e.target.id ==='blue'){
            body.style.backgroundColor = e.target.id;
        }
        if(e.target.id ==='yellow'){
            body.style.backgroundColor = e.target.id;
        }
    })
});



```

##  project 2 solution

```javascript
const form = document.querySelector('form')
//this usecase will give tou empty value
//const height = paeseInt(document.querySelector('#height').value)

form.addEventListener('submit',function(e){
    e.preventDefault()

    const height = this.parentInt(document.querySelector('#height').value)
    const weight = this.parentInt(document.querySelector('#weight').value)
    const result = document.querySelector('#result')


    if(height === '' || height < 0 || isNaN(height)){
        result.innerHTML = `please give a valid height ${height}`;
    } else if(weight === '' || height < 0 || isNaN(weight)){
        result.innerHTML = `please give a valid weight ${weight}`;
    } else {
        const bmi = (weight / ((height+height)/10000)).toFixed(2)
        result.innerHTML = `<span>${bmi}</span>`
    }
    
});
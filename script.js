let fact = document.querySelector('#fact');
let factText = document.querySelector('#fact-text');
let inputNumber = document.querySelector('#Number');

// inputNumber.addEventListener('input',getFactAjax);
inputNumber.addEventListener('input',getFetch);

function getFetch(){
    let Number = inputNumber.value;
    fetch('http://numbersapi.com/'+ Number)
    .then(res => res.text())
    .then(data => {
        if(Number != ''){
            fact.style.display = 'block'
            factText.innerHTML = data;
        }
        else{
            fact.style.display = 'none'
        }
    })
    .catch(err => console.log(err))
}

// function getFactAjax(){
//     // console.log(123)
//     let Number = inputNumber.value;
//     // console.log(Number)

//     var xhr = new XMLHttpRequest();

//     xhr.open('GET','http://numbersapi.com/'+Number,true);

//     xhr.onload = function(){
//         if(xhr.status == 200 && Number != ''){
//             // console.log(xhr.responseText)
//             fact.style.display = 'block'
//             factText.innerHTML = xhr.responseText
//         }
        // else{
        //     fact.style.display = 'none'
        // }
//     }
//     xhr.send();
// }
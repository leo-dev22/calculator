const keys= document.querySelectorAll('.key');
let numbers;

keys.forEach(key => {
  let result=document.querySelector('#result');
  
  key.addEventListener('click',(e)=>{
    numbers=key.innerText('34')
    console.log(key.innerText)
    result.innerHTML=numbers
  })

});

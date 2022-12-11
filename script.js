const keys= document.querySelectorAll('.key');
const result=document.querySelector('.result');
const equal=document.querySelector('.equal');
const reset=document.querySelector('#reset');
const del=document.querySelector('#delete');
const themeToggle1=document.querySelector('.btn1');
const themeToggle2=document.querySelector('.btn2');
const themeToggle3=document.querySelector('.btn3');
const container =document.querySelector('.container')
const span =document.querySelector('.span')
const btnColor1 =document.querySelector('.btn-color1')
const btnColor2 =document.querySelector('.btn-color2')
const btnColor3 =document.querySelector('.btn-color3')

 
themeToggle1.addEventListener('click',()=>{
  document.body.classList.add('theme1')
  document.body.classList.remove('theme2')
  document.body.classList.remove('theme3')
  
  // container.classList.add('theme1')
  // container.classList.remove('theme2')
  // container.classList.remove('theme3')
  // span.classList.add('theme1')
  // span.classList.remove('theme2')
  // span.classList.remove('theme3')

  btnColor1.style.display='block'
  btnColor2.style.display='none'
  btnColor3.style.display='none'
  
})
themeToggle2.addEventListener('click',()=>{
  document.body.classList.add('theme2')
  document.body.classList.remove('theme1')
  document.body.classList.remove('theme3')
  // container.classList.add('theme2')
  // container.classList.remove('theme1')
  // container.classList.remove('theme3')
  // span.classList.add('theme2')
  // span.classList.remove('theme1')
  // span.classList.remove('theme3')

  btnColor1.style.display='none'
  btnColor2.style.display='block'
  btnColor3.style.display='none'

})
themeToggle3.addEventListener('click',()=>{
  document.body.classList.add('theme3')
  document.body.classList.remove('theme1')
  document.body.classList.remove('theme2')
  // container.classList.add('theme3')
  // container.classList.remove('theme1')
  // container.classList.remove('theme2')
  // span.classList.add('theme3')
  // span.classList.remove('theme1')
  // span.classList.remove('theme2')

  btnColor1.style.display='none'
  btnColor2.style.display='none'
  btnColor3.style.display='block'
})

keys.forEach(key => {
  
  key.addEventListener('click',(e)=>{
    result.textContent += e.target.id; 
  })

});

 equal.addEventListener('click',()=>{
  result.textContent = eval(result.textContent)
 })

 reset.addEventListener('click',()=>{
  result.textContent= ""
 })

 del.addEventListener('click',()=>{
  if(result.textContent==''){
    result.textContent= ''
  }else{
    result.textContent=result.textContent.slice(0,-1);
  }
 })

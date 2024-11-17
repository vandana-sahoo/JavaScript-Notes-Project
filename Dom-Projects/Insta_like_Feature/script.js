var car = document.querySelector('#card')
var like = document.querySelector('i')

car.addEventListener('dblclick',function(){
    // console.log("hello");
like.style.transform = 'translate(-50%,-50%) scale(1)'
like.style.opacity = 0.8

setTimeout(function(){
    like.style.opacity = 0;
},1000)
setTimeout(function(){
    like.style.transform = 'translate(-50%,-50%) scale(0)'
},2000)
})
// setTimeout(function(){
//     console.log('hello 1')
// },5000)

// setTimeout(function(){
//     console.log('hello 2')
// },3000)

// setTimeout(function(){
//     console.log('hello 3')
// },7000)


// var user = 'Harsh'

// var btn = document.querySelector('button')
// var h1 = document.querySelector('h1')

// btn.addEventListener('click', function(){
//     h1.innerHTML = 'Changing User...'
//     h1.style.color = 'blue'
//     setTimeout(function(){
//         h1.innerHTML='hello I am Ankit'
//         h1.style.color = 'red'
//     },2000)
// })

// var a = 0
//  var int = setInterval(function(){
//     a++
//     console.log(a)
// },500)

// setTimeout(function(){
    
//     clearInterval(int)
// },1000);

var grow = 0
var btn = document.querySelector('button')
var h2 = document.querySelector('h2')
var inner = document.querySelector('.inner')

btn.addEventListener('click',function(){

    btn.style.pointerEvents = 'none'
    var num = 50+Math.floor(Math.random()*50)
    var int = setInterval(()=>{
        grow++
        h2.innerHTML = grow+'%'
        inner.style.width = grow+'%'
    },num);

    setTimeout(()=>{
        clearInterval(int)
        btn.innerHTML = 'Downloaded'
        btn.style.opacity=0.5
        console.log('Downloaded in ',num/10 ,'Second');
        

    },num*100)

})

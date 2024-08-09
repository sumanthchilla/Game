let score=0;
let box=document.getElementById('box');
let display=document.getElementById('score');

box.addEventListener('click',function(){
    score++;
    display.textContent=score;
    box.style.top=Math.random()*90+"%";
    box.style.left=Math.random()*90+"%";
});
setTimeout(()=> alert("Game over ! your score is "+score),10000);
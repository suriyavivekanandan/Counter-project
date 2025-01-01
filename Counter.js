let count=0;
const updatecount=()=>document.querySelector('.js-count').innerHTML =count
updatecount();
const increseButton=document.querySelector('.js-increse-btn');
increseButton.addEventListener('click',()=>{
count+=1;
updatecount();
})
const decreseButton=document.querySelector('.js-Decrese-btn')
decreseButton.addEventListener('click',()=>{
    count-=1;
    updatecount();
    });
 const resetButton=document.querySelector('.js-reset-btn')
resetButton.addEventListener('click',()=>{
    count=0;
    updatecount();
    });
   

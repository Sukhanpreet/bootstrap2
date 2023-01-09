console.log(`script working`);

const counters = document.querySelectorAll ("#counter");

let timer=1;

// counters.forEach((counter)=>{
//     counter.innerHTML=0;
//     const updateCounter=()=>{
//         const startCount=Number(counter.innerHTML);
//         timer+=0.5;
//         counter.innerHTML = startCount+1;
//         setTimeout(updateCounter,timer);
//     }
//     updateCounter();
// });


counters.forEach((counter)=>{
    counter.innerHTML=0;
    const updateCounter=()=>{
        const targetCount = counter.getAttribute('data-target');
        const startCount=Number(counter.innerHTML);
        timer+=0.5;
        if(startCount<targetCount){
            counter.innerHTML = startCount+1;
            setTimeout(updateCounter,timer);
        }
    }
    updateCounter();
});



const buyBtn=document.querySelector('.buy');
const counter=document.querySelector('.proCount');
const count=document.querySelector('.count');
const buttons=counter.querySelectorAll('[data-operation]');

buyBtn.addEventListener('click',function(){
    this.classList.remove('show');
    counter.classList.add('show');
});

buttons.forEach((btn)=>{
    
    btn.addEventListener('click',function(){
        if(btn.dataset.operation==='add'){
            count.innerHTML=parseInt(count.innerHTML)+1;
        }
        else if(btn.dataset.operation==='sub'){
            if(count.innerHTML!=0){
                count.innerHTML=parseInt(count.innerHTML)-1;
            }else{
                buyBtn.classList.add('show');
                counter.classList.remove('show');
            }
        }
        else{
            count.innerHTML=0;
            buyBtn.classList.add('show');
            counter.classList.remove('show');   
        }
    });
});



// counters.forEach((counter)=>{
//     counter.innerHTML=0;
//     const updateCounter=()=>{
//         const targetCount = counter.getAttribute('data-target');
//         const startCount=Number(counter.innerHTML);
//         if(startCount<targetCount){
//             counter.innerHTML = startCount+1;
//             setTimeout(updateCounter,50);
//         }else{
//             counter.innerHTML=targetCount;
//         }
//     }
//     updateCounter();
// });




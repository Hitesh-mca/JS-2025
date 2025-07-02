const buttons = document.querySelectorAll('.bt')
const body=document.querySelector('body')

 buttons.forEach(function(bt){
   // console.log(bt);
    bt.addEventListener('click',function(e){
        console.log(e.target);
        if(e.target.id==='grey'){
            body.style.backgroundColor=e.target.id
        }
        if(e.target.id==='red'){
            body.style.backgroundColor=e.target.id
        }
        if(e.target.id==='green'){
            body.style.backgroundColor=e.target.id
        }
        if(e.target.id==='blue'){
            body.style.backgroundColor=e.target.id
        }
        if(e.target.id==='White'){
            body.style.backgroundColor=e.target.id
        }
    })
 })
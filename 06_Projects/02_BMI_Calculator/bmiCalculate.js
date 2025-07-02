const form=document.querySelector('form')

form.addEventListener('submit',function(e){
    e.preventDefault()//for stop defult action
    const height=parseInt(document.querySelector('#height').value)
    const weight=parseInt(document.querySelector('#weight').value)
    const result=document.querySelector('#result')
    const message=document.querySelector('#message-result')
    if(isNaN(height) || height==='' || height<= 0 )
    {
        result.innerHTML="Please Enter Valide Height"
    }else if(isNaN(weight) || weight==='' || weight<= 0 )
    {
        result.innerHTML="Please Enter Valide Weight"
    }else{
        const bmi=(weight / ((height * height)/10000)).toFixed(2)
         result.innerHTML=`<span>${bmi}</span>`
         if(bmi<=18.6){
            message.innerHTML="Your are Under weight"
         }else if(bmi>18.6 && bmi<=24.9){
            message.innerHTML="Your are in Normal Range weight"
         }else{
            message.innerHTML="Your are Over weight"
         }
    }
   

    
    

})

const button=document.querySelector('.calculate')


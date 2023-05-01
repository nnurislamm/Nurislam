let message = document.getElementById('message');
let name = document.getElementById('name');
let email = document.getElementById('email')
let databtn = document.getElementById('databtn')
   
    
function form(){ 
    databtn.addEventListener ('click',(e)=>{
        
        e.preventDefault()
        let objdata = { 
            names:name.value,
            emails:email.value,
            messages:message.value 
        } 
        console.log(objdata)
        localStorage.setItem('Data about person:', JSON.stringify(objdata))
    })

    
       
        
}

form()

let modal = document.getElementById('modal');
		let modalbox = document.getElementById('modal-box'); 
        
        databtn.addEventListener('click',()=>{
            modal.style.display = 'flex';
        })
        modal.addEventListener('click',()=>{
            modal.style.display = 'none'
            window.location.href = "../index.html"
        })
        modalbox.addEventListener('click',(e)=>{
            e.stopPropagation();
        })
      
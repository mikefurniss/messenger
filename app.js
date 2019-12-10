//take the hash in the window.location function and put it into a var
const {hash} = window.location;
//using the atob method putting the hash var into it and removing the #  
const message = atob(hash.replace('#',''));
//if theres a message 
    if(message){
        //hide the message-form
        document.querySelector('#message-form').classList.add('hide');
        //show the message-show
        document.querySelector('#message-show').classList.remove('hide');
        //display the message in the h1
        document.querySelector('h1').innerHTML = message;
    }

//select the form. then add a eventListener of submit 
//create a arrow function with event
document.querySelector('form').addEventListener('submit', event =>{
    //when the event happens preventDefault keeps from contacting the server
    event.preventDefault();
    document.querySelector('#message-form').classList.add('hide');
    document.querySelector('#link-form').classList.remove('hide');
//put the #message-input in a var  
    const input = document.querySelector('#message-input');
//var encrypted take the input value and uses the btoa method
    const encrypted = btoa(input.value);
//selecting the #link-input value and making it equal to encrypted
    const linkInput = document.querySelector('#link-input');
    linkInput.value = `${window.location}#${encrypted}`;
    linkInput.select();
});





























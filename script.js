const form = document. getElementById('name');
const email = document.getElementById('email');
const phone = document.getElementById('phone');
const password = document.getElementById('password');
const create = document.getElementById('create');

form.addEventListener("submit", (e)=>
{
        if(form.value === '' || form == null){
            e.preventDefault();
            form_error.innerHTML = "Name is required";
        }
});
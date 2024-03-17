function saveToLocalStorage(event){
  event.preventDefault();
  const name = event.target.username.value;
  const email = event.target.emailId.value;
  const phone = event.target.phonenumber.value;
  localStorage.setItem('name',name);
  localStorage.setItem('email',email);
  localStorage.setItem('phone',phone);  
}
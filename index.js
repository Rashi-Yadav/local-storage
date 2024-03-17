function saveToLocalStorage(event){
  event.preventDefault();
  // const name = event.target.username.value;
  // const email = event.target.email.value;
  // const phone = event.target.phonenumber.value;
  // localStorage.setItem('name',name);
  // localStorage.setItem('email',email);
  // localStorage.setItem('phone',phone);
    
  const userDetails = {
    username: event.target.username.value,
    email: event.target.email.value,
    phone: event.target.phonenumber.value,
  };

  localStorage.setItem("User Details", JSON.stringify(userDetails));
}
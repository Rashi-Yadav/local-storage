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

  localStorage.setItem(userDetails.email, JSON.stringify(userDetails)); 

  function showUserDetails(userDetails) {
    const parent = document.getElementById('userList');
    const li = document.createElement('li');
    li.innerHTML = `${userDetails.username} - ${userDetails.email} - ${userDetails.phone}`;
    parent.appendChild(li);
  }
  showUserDetails(userDetails);
}
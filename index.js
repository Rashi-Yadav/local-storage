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
  function showUserDetails() {
    const parent = document.getElementById('userList');
    parent.innerHTML = '';

    for (let i = 0; i < localStorage.length; i++) {
      const key = localStorage.key(i);
      const user = JSON.parse(localStorage.getItem(key));

      const li = document.createElement('li');
      li.innerHTML = `${user.username} - ${user.email} - ${user.phone}`;
      parent.appendChild(li);

      // adding delete button
      const delButton = document.createElement('button');
      delButton.type = 'button';
      delButton.textContent = 'Delete';

      // Setting event handler ,to delete user details from list as well as local storage
      delButton.onclick = () => {
        parent.removeChild(li);
        localStorage.removeItem(user.email);
      };
      li.appendChild(delButton);
    }
  }

  showUserDetails();
}

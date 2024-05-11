function loadUsers() {
    fetch('https://jsonplaceholder.typicode.com/users')
        .then(response => response.json())
        .then(data => getUsersFromDB(data));
}

const getUsersFromDB = data => {
    const userListID = document.getElementById('users-list');
    for (const user of data) {
        userListID.insertAdjacentHTML('beforeend', `<li>${user.name}</li>`);
    }
}
const getUserBtn = document.getElementById('get-user');

getUserBtn.addEventListener('click', getUser);

function getUser() {
    const xhr = new XMLHttpRequest();

    xhr.open('GET', 'user.json');

    xhr.onload = function () {
        if (this.status === 200) {
            const user = JSON.parse(this.responseText);
            const output = `
                <p>
                    <span> Name: ${user.name} </span> 
                    <br>
                    <span> Email: ${user.email} </span> 
                </p>
            `;
            document.getElementById('user').innerHTML = output;
        }
    }

    xhr.send();
}

const getUsersBtn = document.getElementById('get-users');
getUsersBtn.addEventListener('click', getUsers);

function getUsers () {
    const xhr = new XMLHttpRequest();

    xhr.open('GET', 'users.json');

    xhr.onload = function () {
        if (this.status === 200) {
            const users = JSON.parse(this.responseText);

            let output = '';

            users.forEach(user => {
                 output +=`
                <p>
                    <span> Name: ${user.name} </span> 
                    <br>
                    <span> Email: ${user.email} </span> 
                </p>
            `;
            });


            
            document.getElementById('users').innerHTML = output;
        }
    }

    xhr.send();
}
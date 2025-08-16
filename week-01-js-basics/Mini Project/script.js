window.onload = async function () {
    const userList = document.getElementById("user-list");
    try {
        const res = await fetch('https://jsonplaceholder.typicode.com/users');
        const users = await res.json();
        console.log(users);
        users.forEach((user) => {
            const card = document.createElement('a');
            card.className = 'card';
            card.href = user['website'];
            const image = document.createElement('img');
            image.src='img_avatar.png';
            image.alt='Avatar'
            const cardInfoContainer = document.createElement('div');
            cardInfoContainer.className = 'card-info';
            const userName = document.createElement("h3");
            userName.innerText = user['username'];
            const realName = document.createElement("p");
            realName.innerText = user['name'];
            const userEmail = document.createElement("span");
            userEmail.innerText = user['email'];
            const userPhone = document.createElement("span");
            userPhone.innerText = user['phone'];
            const companyName = document.createElement("span");
            companyName.innerText = user['company']['name'];
            cardInfoContainer.appendChild(userName);
            cardInfoContainer.appendChild(realName);
            cardInfoContainer.appendChild(userEmail);
            cardInfoContainer.appendChild(userPhone);
            cardInfoContainer.appendChild(companyName);
            card.appendChild(cardInfoContainer);
            card.appendChild(image);
            userList.appendChild(card);
        })
    } catch (err) {
        console.error('Error fetching users:', err);
    }

};
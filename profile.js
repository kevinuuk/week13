const fNameSpan = document.querySelector('#fName');
const lNameSpan = document.querySelector('#lName');
const ageSpan = document.querySelector('#age');
const emailSpan = document.querySelector('#email');
const skillsList = document.querySelector('#skills');
const languagesList = document.querySelector('#languages');

window.onload = () => {
    fetch('profile.json')
        .then(response => response.json())
        .then(data => {
            fNameSpan.textContent = data.fName;
            lNameSpan.textContent = data.lName;
            ageSpan.textContent = data.age;
            emailSpan.textContent = data.email;

            for (let i = 0; i < data.skills.length; i++) {
                const li = document.createElement('li');
                li.textContent = data.skills[i];
                skillsList.appendChild(li);
            }

            for (let i = 0; i < data.languages.length; i++) {
                const li = document.createElement('li');
                li.textContent = data.languages[i].name + ' – ' + data.languages[i].level;
                languagesList.appendChild(li);
            }
        })
        .catch(error => console.error('Viga andmete laadimisel:', error));
};
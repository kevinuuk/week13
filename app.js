    const fNameSpan = document.querySelector('#fName');
    const lNameSpan = document.querySelector('#lName');
    const AgeSpan = document.querySelector('#age');
    const skillsList = document.querySelector('#skills');



window.onload = () => {


    fetch('person.json')
    .then(response => response.json())
    .then(data => {

        console.log(data);

        fNameSpan.textContent = data.fName;
        lNameSpan.textContent = data.lName;
        AgeSpan.textContent = data.age;


        for(let i = 0; i < data.skills.length; i++ ) {

        let li = document.createElement('li');
        li.innerHTML = data.skills[i];

        skillsList.appendChild(li);

        }

    })

  

}
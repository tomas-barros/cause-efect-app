const people = [
    {name: "John Doe", street: "170 Hillmore", city: "Los Angeles", state: "California", country: "US", telephone: "9 1234 5678", birthday: "09/13/1992", id:'john0'},
    {name: "Claudia Torres", street: "040 Hillmore", city: "Oklhaoma", state: "Las Vegas", country: "US", telephone: "9 1234 5671", birthday: "11/16/2000", id:'clau1'},
    {name: "Carlos Santana", street: "050 Westwood", city: "Santa Clarita", state: "California", country: "US", telephone: "9 5634 5678", birthday: "12/1/1973", id:'carl02'},
    {name: "Tony Stark", street: "905 Liverpool St.", city: "Los Angeles", state: "California", country: "US", telephone: "9 4324AVENGERS", birthday: "12/08/1945", id:'ironman'}
  ];

// DOM Objects
const
    peopleList = document.getElementById('peopleList')
    ;

function createPerson(id) {
    let name = document.createElement('li'),
        nameBtn = document.createElement('span')
    ;

    nameBtn.innerHTML = '➡';
    name.appendChild(nameBtn);
    name.innerHTML = people[id]['name'];
    // data
    let dataContainer = document.createElement('div');
    dataContainer.innerHTML = 'Street: ' + people[id]['street'] + '<br>City: ' + people[id]['city']; 
    name.appendChild(dataContainer);
    peopleList.appendChild(name);
}

// creating all persons
for (let x=0; x<people.length; x++) {
    createPerson(x);
}
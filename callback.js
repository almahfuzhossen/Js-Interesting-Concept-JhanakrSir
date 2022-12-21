function welcomeMessage (name, greetHandler){
    greetHandler(name);
}
// const names =['Tom Hanks', 'Tom Brady', 'Tom Cruise'];
// const myObj = { name: 'Tom Hanks', 'Tom Chinku', age: 11};

function greetMorning(name){
    console.log('Good Morning', name);
}

function greetAfternoon(name) {
    console.log('Good afternoon', name);
}

function greetEvening(name){
    console.log('Good Evening', name);
}

welcomeMessage('Tom Hanks', greetMorning);
welcomeMessage('Sakib Hanks', greetAfternoon);
welcomeMessage('Bappa raj', greetEvening);

function handleClick (){
    console.log('button is clicked');
}

document.getElementById('my-btn').addEventListener('click',handleClick)

document.getElementById('btn').addEventListener('click', function(){
    console.log('button is clicked');
})
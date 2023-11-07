const header = document.querySelector('header');

window.addEventListener('load', () => {
    const headerElement = document.createElement('h1');
    headerElement.textContent = 'FSA Party Planner';
    header.appendChild(headerElement);
    
});
console.log(header);
//Fetch is used to GET party data from the API
//The app contains a descriptive list of all the parties;
    //names,
    //dates,
    //times,
    //locations,
//The DOM is dynamically rendered according to data stored in state
    //The data stored in state is updated to staty in sync with the API

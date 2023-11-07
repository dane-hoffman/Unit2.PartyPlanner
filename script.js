const header = document.querySelector('header');
//Grab the <main> element
const main = document.querySelector('main');
console.log(main);

//When the window loads
window.addEventListener('load', () => {
    
    const headerElement = document.createElement('h1');//create <h1> element
    //create <button> element
    const mainButton = document.createElement('button');
    // have <button> intitially say "List of Parities"
    headerElement.textContent = 'FSA Party Planner';//have <h1> initially say "FSA Party Planner"
    header.appendChild(headerElement);//append it to the <main>
    //append the button to the main, below the <h1>
    main.appendChild(mainButton);


});
//Fetch is used to GET party data from the API
//The app contains a descriptive list of all the parties;
    //names,
    //dates,
    //times,
    //locations,
//The DOM is dynamically rendered according to data stored in state
    //The data stored in state is updated to staty in sync with the API

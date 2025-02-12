javascript:(function () { var script = document.createElement('script'); script.src="https://cdn.jsdelivr.net/npm/eruda"; document.body.append(script); script.onload = function () { eruda.init(); } })();
javascript:(()=>{(function() %7B%0A    const meta %3D document.createElement('meta')%3B%0A    meta.httpEquiv %3D 'Content-Security-Policy'%3B%0A    meta.content %3D "default-src 'unsafe-eval' data%3A blob%3A%3B"%3B%0A    document.head.appendChild(meta)%3B%0A    %2F* stop open connections. In Firefox%2C this will also close many web sockets *%2F%0A    window.stop()%3B%0A%7D)()%3B})()

alert('this new gui is in testesting this just a test to see how it works with the other things');

const chosenname = 'Admin-x';

const myAce = document.createElement("div");
myAce.id = "myace";
myAce.className = 'myace';


const styl = document.createElement('style');
styl.innerHTML = `
.myace {
  position:absolute;
  zindex:10;
  height:689px;
  width:1000px;
  background:#090909;
  text-align:center;
  border:3px solid red;
  border-radius:10px;
  overflow:hidden;
}
.tabsec {
    display: grid;
    grid-template-rows: 20px; /* Allow rows to adjust based on content */
    grid-auto-rows: 20px; /* Set a fixed height for each row */
    overflow: scroll; /* Hide overflow */
    height: auto; /* Allow the height to adjust based on content */
    width: auto; /* Allow the width to adjust based on content */
    color: red;
    background: #090909;
    border:none;
    position:absolute;
    top:10%;
    left:4px;
    border-radius: 3px;
    width: 150px; /* Fixed width for the container */
    height:540px;
    justify-content:center;
   
    text-align: center;
    cursor: pointer;
}

.tab1{
    color: red;
    background: #211E1E;
    border: 1px  #090909;
    border-radius: 5px;
    width: 100px;
   font-family: "Rockwell Extra Bold", "Rockwell Bold", monospace;
    margin:4px;
    height: 15px;
    transition:2s;
}
.tab1:hover{
    color: red;
    background: #2B2A2A;
    border: 1px  #090909;
    border-radius: 5px;
    width: 100px;
    margin:3px;
    height: 15px;
}
.minimized {
    height: 35px;
    overflow: hidden;

}
.minimized .myace {
    display: none;
    overflow: hidden;
    
}
.maximized {
    overflow: hidden;
    width: 100%;
    height: 100%;
   
    border-radius: 0;
   
}
.maximized .myace {
    width: calc(100% - 50px);
    height: calc(100% - 60px);
    overflow: hidden;
   


}
.full3 {
    z-index: 10;
    border: 1px solid red;
    border-radius: 2px;
    height: 22px;
    width: 25px;
    top: 8px;
    left: 900px;
    color: red;
    background: black;
    position: absolute;
}
.tabseco {
    background: black;
    position: absolute;
    
    margin: 6px;
    top:50px;
    left: 150px;
    width: 812px;
    height: 567px;
    border-radius: 4px;
    border: 2px solid red;
    display: grid;
    justify-content:center;
    
    grid-template-rows: 40px; /* Allow rows to adjust based on content */
    grid-auto-rows: 40px; /* Set a fixed height for each row */
    overflow: scroll; /* Hide overflow */
 
}
`;
document.body.appendChild(styl);

const myDivHeader = document.createElement("div");
myDivHeader.id = "mydivheader";
myDivHeader.style.position = 'absolute';
myDivHeader.style.padding = "10px";
myDivHeader.style.cursor = "move";
myDivHeader.style.zIndex = "10";
myDivHeader.style.width ='999px';

myDivHeader.style.borderRadius = "10px";
myDivHeader.style.borderBottomRadius = "1px";
myDivHeader.style.backgroundColor = "black";
myDivHeader.style.color = "red";
myDivHeader.innerText = chosenname;
myAce.appendChild(myDivHeader);

const b1 = document.createElement("button");
b1.style.border = '1px solid red';
b1.style.borderRadius = '2px';
b1.style.color = 'solid red';
b1.style.height = '22px';
b1.style.width = '25px';
b1.style.top = '8px';
b1.style.bottom = '0px';
b1.style.left = '950px';
b1.style.right = '0px';
b1.style.zIndex = "14";
b1.style.color = 'red';
b1.innerHTML = 'X';
b1.onclick = cac;
b1.style.background = 'black';
b1.style.position = 'absolute';
myAce.appendChild(b1);

const divider = document.createElement('div');
divider.id ='taboptions'
divider.className ='tabsec';
myAce.appendChild(divider);
const minimizeButton = document.createElement("button");
minimizeButton.className = 'full3';
minimizeButton.innerHTML = '-';
minimizeButton.onclick = function() {
  
 
  
   
    myAce.classList.toggle('minimized');
    
  
    myAce.classList.remove('maximized');
    
     
};
myAce.appendChild(minimizeButton);



function createtab(){
   const tabsec1 = document.createElement('iframe');
    tabsec1.className = 'tabseco';
    tabsec1.id = 'section3';
    tabsec1.src ='./app-a/chat-gpt/index.html';
    myAce.appendChild(tabsec1);
}


let isActive = false;
function tab() {
    const button = document.getElementById('home');
    isActive = !isActive;

    if (isActive) {
        createtab();
        
     

    } else {
        removeElement();

    }
}

function tab1() {
    const button = document.getElementById('home');
    isActive = !isActive;

    if (isActive) {
        createElement();
     

    } else {
        removeElement();

    }
}

function tab2() {
    removeElement();
    const button = document.getElementById('home');
    isActive = !isActive;

    if (isActive) {
        createElement1();
      

    } else {
        removeElement();

    }
}


function removeElement() {
    const element = document.getElementById('section1');
    const element1 = document.getElementById('section2');
    const element2 = document.getElementById('section3');
    console.log('element active')
  
    if (element) {
        element.remove();
    }
    
    if (element1) {
      element1.remove();
    }
   if (element2) {
     element2.remove();
   }
}



createtaboption('ChatGpt','Chatgpt3', tab);

createtaboption('retro-bowl', 'retro-bowl', tab1);

createtaboption('CookieClicker', 'Cookie', tab2);

function createtaboption(id, innerHTML, onclick){
  const tabo = document.createElement('div');
  tabo.id = id;
  tabo.className = 'tab1';
  tabo.innerHTML = innerHTML;
  tabo.onclick = onclick;
  divider.appendChild(tabo)

 
}




function createElement1() {
    const tabsec1 = document.createElement('div');
    tabsec1.className = 'tabseco';
    tabsec1.id = 'section2';
    myAce.appendChild(tabsec1);
    
    
    

    
     
    createbutton('change-cookies','add some cookies', setcookie)

   

    function createbutton(id, innerHTML, onclick) {
        const cbutton = document.createElement('div');
        cbutton.id = id;
        cbutton.style.border = '2px solid red';
        cbutton.style.borderRadius = '3px';
        cbutton.style.width = '500px';
        cbutton.style.height = '20px';
        cbutton.style.color = 'red';
        cbutton.innerHTML = innerHTML;
        cbutton.style.margin = '4px';
        cbutton.onclick = onclick;
        tabsec1.appendChild(cbutton);
    }
    
    
}


function createElement() {
    const tabsec1 = document.createElement('div');
    tabsec1.className = 'tabseco';
    tabsec1.id = 'section1';
    myAce.appendChild(tabsec1);
    
    
    

    
     
    

    createbutton('setdraft', 'Set Your Draft Picks', j1);
    
    createbutton('setsu','Set Your Stadium Upgrade', setsu);
    
    createbutton('setru','Set Your Rehab Facility Upgrade', setru);
    
    createbutton('settu','Set Your Training Facility Upgrade', settu);
    
    createbutton('mainb', 'Set Your Coaching Credits', setcc);
    
    createbutton('setfanc', 'Set Your New Fan Cap', setfanc)
    
    createbutton('setsalaryc', 'Set Your New Salary Cap', setsalaryc);
   

    function createbutton(id, innerHTML, onclick) {
        const cbutton = document.createElement('div');
        cbutton.id = id;
        cbutton.style.border = '2px solid red';
        cbutton.style.borderRadius = '3px';
        cbutton.style.width = '500px';
        cbutton.style.height = '20px';
        cbutton.style.color = 'red';
        cbutton.innerHTML = innerHTML;
        cbutton.style.margin = '4px';
        cbutton.onclick = onclick;
        tabsec1.appendChild(cbutton);
    }
    
    
}
// RetroBowl functions
function setcc(){
  if (localStorage.getItem("RetroBowl.0.savedata.ini")) { // Check if the game save exists
    // Retrieve current coaching credits from local storage
    let savedData = localStorage.getItem("RetroBowl.0.savedata.ini");
    let currentCreditsMatch = savedData.match(/coach_credit="(\d+)"/);
    let currentCredits = currentCreditsMatch ? currentCreditsMatch[1] : "0"; // Default to 0 if not found

    // Show current coaching credits in a prompt
    let newCredits = prompt(`Current coaching credits: ${currentCredits}. Enter new coaching credits:`);

    // Update coaching credits in local storage
    if (newCredits !== null) { // Check if the user didn't cancel the prompt
        localStorage.setItem("RetroBowl.0.savedata.ini", savedData.replace(/coach_credit="(\d+)"/, `coach_credit="${newCredits}"`));
        alert(`Coaching credits updated to: ${newCredits}`);
        window.location.reload(); // Reload the window to reflect changes
    }
} else {
    alert("You must open up a new game save first!");
}
}

function setfanc(){
  
  if (localStorage.getItem("RetroBowl.0.savedata.ini")) { // Check if the game save exists
    // Retrieve current coaching credits from local storage
    let savedData = localStorage.getItem("RetroBowl.0.savedata.ini");
    let currentCreditsMatch = savedData.match(/fans="(\d+)"/);
    let currentCredits = currentCreditsMatch ? currentCreditsMatch[1] : "0"; // Default to 0 if not found

    // Show current coaching credits in a prompt
    let newCredits = prompt(`Current Fans  : ${currentCredits}. Set New Fans:`);

    // Update coaching credits in local storage
    if (newCredits !== null) { // Check if the user didn't cancel the prompt
        localStorage.setItem("RetroBowl.0.savedata.ini", savedData.replace(/fans="(\d+)"/, `fans="${newCredits}"`));
        alert(`Fans was updated to: ${newCredits}`);
        window.location.reload(); // Reload the window to reflect changes
    }
} else {
    alert("You must open up a new game save first!");
}
}
function setsalaryc(){
    if (localStorage.getItem("RetroBowl.0.savedata.ini")) { // Check if the game save exists
    // Retrieve current coaching credits from local storage
    let savedData = localStorage.getItem("RetroBowl.0.savedata.ini");
    let currentCreditsMatch = savedData.match(/salary_cap="(\d+)"/);
    let currentCredits = currentCreditsMatch ? currentCreditsMatch[1] : "0"; // Default to 0 if not found

    // Show current coaching credits in a prompt
    let newCredits = prompt(`Current Salary Cap : ${currentCredits}. Set New Salary Cap:`);

    // Update coaching credits in local storage
    if (newCredits !== null) { // Check if the user didn't cancel the prompt
        localStorage.setItem("RetroBowl.0.savedata.ini", savedData.replace(/salary_cap="(\d+)"/, `salary_cap="${newCredits}"`));
        alert(`Salary Cap was updated to: ${newCredits}`);
        window.location.reload(); // Reload the window to reflect changes
    }
} else {
    alert("You must open up a new game save first!");
}
}

function setsu(){
  if (localStorage.getItem("RetroBowl.0.savedata.ini")) { // Check if the game save exists
    // Retrieve current coaching credits from local storage
    let savedData = localStorage.getItem("RetroBowl.0.savedata.ini");
    let currentCreditsMatch = savedData.match(/facility_stadium="(\d+)"/);
    let currentCredits = currentCreditsMatch ? currentCreditsMatch[1] : "0"; // Default to 0 if not found

    // Show current coaching credits in a prompt
    let newCredits = prompt(`Current Stadium Upgrade: ${currentCredits}. Set New Upgrade:`);

    // Update coaching credits in local storage
    if (newCredits !== null) { // Check if the user didn't cancel the prompt
        localStorage.setItem("RetroBowl.0.savedata.ini", savedData.replace(/facility_stadium="(\d+)"/, `facility_stadium="${newCredits}"`));
        alert(`Stadum updated to: ${newCredits}`);
        window.location.reload(); // Reload the window to reflect changes
    }
} else {
    alert("You must open up a new game save first!");
}
}

function settu(){
    if (localStorage.getItem("RetroBowl.0.savedata.ini")) { // Check if the game save exists
    // Retrieve current coaching credits from local storage
    let savedData = localStorage.getItem("RetroBowl.0.savedata.ini");
    let currentCreditsMatch = savedData.match(/facility_training="(\d+)"/);
    let currentCredits = currentCreditsMatch ? currentCreditsMatch[1] : "0"; // Default to 0 if not found

    // Show current coaching credits in a prompt
    let newCredits = prompt(`Current facility Training Upgrade: ${currentCredits}. Set New Upgrade:`);

    // Update coaching credits in local storage
    if (newCredits !== null) { // Check if the user didn't cancel the prompt
        localStorage.setItem("RetroBowl.0.savedata.ini", savedData.replace(/facility_training="(\d+)"/, `facility_training="${newCredits}"`));
        alert(`Facility Training was updated to: ${newCredits}`);
        window.location.reload(); // Reload the window to reflect changes
    }
} else {
    alert("You must open up a new game save first!");
}
}
function setru(){
  if (localStorage.getItem("RetroBowl.0.savedata.ini")) { // Check if the game save exists
    // Retrieve current coaching credits from local storage
    let savedData = localStorage.getItem("RetroBowl.0.savedata.ini");
    let currentCreditsMatch = savedData.match(/facility_rehab="(\d+)"/);
    let currentCredits = currentCreditsMatch ? currentCreditsMatch[1] : "0"; // Default to 0 if not found

    // Show current coaching credits in a prompt
    let newCredits = prompt(`Current facility Rehab Upgrade: ${currentCredits}. Set New Upgrade:`);

    // Update coaching credits in local storage
    if (newCredits !== null) { // Check if the user didn't cancel the prompt
        localStorage.setItem("RetroBowl.0.savedata.ini", savedData.replace(/facility_rehab="(\d+)"/, `facility_rehab="${newCredits}"`));
        alert(`Facility Rehab was updated to: ${newCredits}`);
        window.location.reload(); // Reload the window to reflect changes
    }
} else {
    alert("You must open up a new game save first!");
}
}

function j1(){
// Function to set up draft picks in local storage if they do not exist
function initializeDraftPicks() {
    if (!localStorage.getItem("draftPicks")) {
        // Example initial draft picks
        const initialDraftPicks = {
            0: "1", // Replace with actual IDs
            1: "1",
            2: "1"
        };
        localStorage.setItem("draftPicks", JSON.stringify(initialDraftPicks));
    }
}

// Function to update a draft pick
function updateDraftPick() {
    if (localStorage.getItem("RetroBowl.0.savedata.ini")) {
        // Retrieve draft picks from local storage
        const draftPicks = JSON.parse(localStorage.getItem("draftPicks"));

        // Prompt user for the index of the pick they want to update
        let pickIndex = prompt("Enter the index of the draft pick you want to update (0, 1, 2):");
        pickIndex = parseInt(pickIndex); // Convert to integer

        // Check if the entered index is valid
        if (isNaN(pickIndex) || pickIndex < 0 || pickIndex >= Object.keys(draftPicks).length) {
            alert("Invalid index. Please enter a valid number.");
            return;
        }

        // Prompt user for the new pick value
        let newPick = prompt("Enter the new value for the draft pick:");

        // Update the draft picks in local storage
        draftPicks[pickIndex] = newPick; // Update the draft pick
        localStorage.setItem("draftPicks", JSON.stringify(draftPicks));

        // Update the value in your savedata
        localStorage.setItem("RetroBowl.0.savedata.ini",
            localStorage.getItem("RetroBowl.0.savedata.ini").replace(`draft_picks_${pickIndex}="${draftPicks[pickIndex]}"`, `draft_picks_${pickIndex}="${newPick}"`)
        );

        // Optionally reload the page or perform another action
        window.location.reload();
    } else {
        alert("You must open up a new game save first!");
    }
}

// Initialize draft picks
initializeDraftPicks();

// Call the function to update the draft pick
updateDraftPick();


}
//end of RetroBowl
//cookie clicker
function setcookie(){
  // Prompt user for the number of cookies to earn
let cookiesToEarn = prompt("Enter the number of cookies you wish to earn:");

// Convert input to a number
if (cookiesToEarn && !isNaN(cookiesToEarn)) {
    game.Earn(Number(cookiesToEarn)); // Earn the specified number of cookies
} else {
    alert("Please enter a valid number of cookies.");
}

}


document.body.appendChild(myAce);

function cac() {
    const element = document.getElementById("myace");
    element.remove();
}



function dragElement(elmnt) {
    let pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;

    function dragMouseDown(e) {
        e = e || window.event;
        e.preventDefault();
        pos3 = e.clientX;
        pos4 = e.clientY;
        document.onmouseup = closeDragElement;
        document.onmousemove = elementDrag;
    }

    function elementDrag(e) {
        e = e || window.event;
        e.preventDefault();
        pos1 = pos3 - e.clientX;
        pos2 = pos4 - e.clientY;
        pos3 = e.clientX;
        pos4 = e.clientY;
        elmnt.style.top = (elmnt.offsetTop - pos2) + "px";
        elmnt.style.left = (elmnt.offsetLeft - pos1) + "px";
    }

    function closeDragElement() {
        document.onmouseup = null;
        document.onmousemove = null;
    }

    if (document.getElementById(elmnt.id + "header")) {
        document.getElementById(elmnt.id + "header").onmousedown = dragMouseDown;
    } else {
        elmnt.onmousedown = dragMouseDown;
    }
}

dragElement(myAce);


const playerList = document.querySelector("#player-list"); // grab the whole player list from HTML
const form = document.querySelector("#player-form"); // grab the whole from from HTML
const orderNameButton = document.querySelector("#orderNameButton"); // grab the order by first name button

// display the player on the screen
function displayPlayer(doc) {
    /* create all the necessary elements for the list to display on the webpage */
    let li = document.createElement("li");
    let fname = document.createElement("span");
    let lname = document.createElement("span");
    let team = document.createElement("span");
    let number = document.createElement("span");
    let position = document.createElement("span");
    let height = document.createElement("span");
    let weight = document.createElement("span");
    let remove = document.createElement("button");

    li.setAttribute("doc-id", doc.id);
    remove.classList.add("remove-player"); // add a new class to the remove element (button)

    /* grab all the coresponding data from cloud firestore to store in the variables */
    fname.textContent = doc.data().fname + " ";
    lname.textContent = doc.data().lname + ", ";
    team.textContent = doc.data().team + " ";
    number.textContent = doc.data().number + ", ";
    position.textContent = doc.data().position + ", ";
    height.textContent = doc.data().height + ", ";
    weight.textContent = doc.data().weight + " lbs";
    remove.textContent = "Remove Player"; // text showing on the remove button

    /* append all the child elements to the li */
    li.appendChild(fname);
    li.appendChild(lname);
    li.appendChild(team);
    li.appendChild(number);
    li.appendChild(position);
    li.appendChild(height);
    li.appendChild(weight);
    li.appendChild(remove);

    // append li to the playerlist
    playerList.appendChild(li);

    // delete the data from cloud firestore if the user clicks on the "remove" button
    remove.addEventListener('click', (event) => {
        event.stopPropagation; // prevent the event from bubbing up or down
        let id = event.target.parentElement.getAttribute("doc-id"); // to get the specific document id so that we will delete the correct one
        db.collection('nba').doc(id).delete(); // pick the right collection and document and then delete it
    })
}

// // get data from firestore and loop through every document in the 'nba' collection to 
// // make sure we sync up with the data in firestore (this is not real-time)
// db.collection('nba').get().then((snapshot) => {
//     snapshot.docs.forEach(doc => {
//         // pass each document into "displayPlayer" function to show on the webpage
//         displayPlayer(doc);
//     })
// }) 

// save data from user input(form) to cloud firestore
form.addEventListener('submit', (event) => {
    event.preventDefault(); //so it will not refresh the page

    /* we are adding a new document into the "nba" collection */
    db.collection('nba').add({
        fname: form.fname.value,
        lname: form.lname.value,
        team: form.team.value,
        number: form.number.value,
        position: form.position.value,
        height: form.height.value,
        weight: form.weight.value
    })

    /* we do this to clean the form after the user submits it */
    form.fname.value = "";
    form.lname.value = "";
    form.team.value = "";
    form.number.value = "";
    form.position.value = "";
    form.height.value = "";
    form.weight.value = "";
})

// real-time update (the user doesn't need to click the "refresh" button to see the lastest info)
// sync up with the cloud firestore data
db.collection('nba').onSnapshot((snapshot) => {
    let docChanges = snapshot.docChanges();
    docChanges.forEach((docChange) => {
        if (docChange.type == "added") {
            displayPlayer(docChange.doc);
        } else if (docChange.type == "removed") {
            let li = playerList.querySelector('[doc-id=' + docChange.doc.id + ']'); // use '[]' to select the doc-id attribute, so we can grab the correct document id to delete
            playerList.removeChild(li); // delete the child li element from the player list on the webpage
        }
    })
})

// // order by first name (order button)
// orderNameButton.addEventListener('click', (event) => {
//     db.collection('nba').orderBy('fname').get().then((snapshot) => {
//         snapshot.docs.forEach((doc) => {
//             displayPlayer(doc);
//         })
//     })
// })
const tasks = []

let formcontainer = document.querySelector(".form-container")
let formtitle = document.querySelector(".form-title")

let form = document.querySelector(".call-form")
let inp = document.querySelectorAll("input")

let imgUrl = document.querySelector("#imgUrl");
let fullName = document.querySelector("#fullName");
let hometown = document.querySelector("#hometown");
let purpose = document.querySelector("#purpose");

let formGroups = document.querySelectorAll(".form-group");
let radiogroup = document.querySelector(".radio-group")
let radios = document.querySelectorAll('input[name="category"]');
let radioLabels = document.querySelectorAll(
    ".radio-group .radio-label"
);

let widget = document.querySelector(".widget-wrapper");
let controls = document.querySelector(".controls");
let addBtn = document.querySelectorAll(".btn-circle")[0];

let subbtn = document.querySelector(".btn-submit")
let clsbtn = document.querySelector(".btn-close")

//function to store card data to local storage
function saveToLocalStorage(obj){
    if(localStorage.getItem("tasks")===null){
        let oldTasks = [];
        oldTasks.push(obj);
        localStorage.setItem("tasks", JSON.stringify(oldTasks))
    }
    else{
        let oldTasks = localStorage.getItem("tasks")
        oldTasks = JSON.parse(oldTasks)
        oldTasks.push(obj)
        localStorage.setItem("tasks", JSON.stringify(oldTasks))

    }
}

//function to add task close call create card

addBtn.addEventListener("click", function () {

    widget.style.display = "none";
    formcontainer.style.display = "inline";
});

clsbtn.addEventListener("click", function () {
    formcontainer.style.display = "none";
    widget.style.display = "flex";
});

form.addEventListener("submit", function (evt) {
    evt.preventDefault();

    let image = imgUrl.value.trim();
    let name = fullName.value.trim();
    let home = hometown.value.trim();
    let reason = purpose.value.trim();

    // Get selected category
    let selectedCategory = document.querySelector(
        'input[name="category"]:checked'
    );

    let category = selectedCategory ? selectedCategory.value : "";

    // Validate normal fields
    if (
        image === "" ||
        name === "" ||
        home === "" ||
        reason === ""
    ) {
        alert("Please fill all the details.");
        return;
    }

    // Validate category
    if (!selectedCategory) {
        alert("Please select a category!");
        return;
    }

    // Save data
    saveToLocalStorage({
        image: image,
        name: name,
        home: home,
        reason: reason,
        category: category
    });

    form.reset();

    formcontainer.style.display = "none";
    widget.style.display = "flex";

    // // Show newly added cards
    showCards();
});


function showCards() {

    let storedTasks = localStorage.getItem("tasks");

    if (!storedTasks) {
        return;
    }

    let alltask = JSON.parse(storedTasks);

    let cardStack = document.querySelector(".card-stack");

    cardStack.innerHTML = "";

    alltask.forEach(function (task) {

        let card = document.createElement("div");
        card.classList.add("card");


        // Avatar
        let avatarWrapper = document.createElement("div");
        avatarWrapper.classList.add("avatar-wrapper");

        let avatar = document.createElement("img");
        avatar.classList.add("avatar");

        avatar.src = task.image;
        avatar.alt = task.name;

        avatarWrapper.appendChild(avatar);


        // Name
        let userName = document.createElement("h2");
        userName.classList.add("user-name");

        userName.textContent = task.name;


        // Details
        let details = document.createElement("div");
        details.classList.add("details");


        // Home town
        let homeRow = document.createElement("div");
        homeRow.classList.add("row");

        let homeLabel = document.createElement("span");
        homeLabel.classList.add("label");
        homeLabel.textContent = "Home town";

        let homeValue = document.createElement("span");
        homeValue.classList.add("value");
        homeValue.textContent = task.home;

        homeRow.appendChild(homeLabel);
        homeRow.appendChild(homeValue);


        // Reason
        let bookingRow = document.createElement("div");
        bookingRow.classList.add("row");

        let bookingLabel = document.createElement("span");
        bookingLabel.classList.add("label");
        bookingLabel.textContent = "Bookings";

        let bookingValue = document.createElement("span");
        bookingValue.classList.add("value");
        bookingValue.textContent = task.reason;

        bookingRow.appendChild(bookingLabel);
        bookingRow.appendChild(bookingValue);


        details.appendChild(homeRow);
        details.appendChild(bookingRow);


        // Actions
        let actions = document.createElement("div");
        actions.classList.add("actions");

        let callButton = document.createElement("button");
        callButton.classList.add("btn-call");
        callButton.textContent = "Call";

        let messageButton = document.createElement("button");
        messageButton.classList.add("btn-message");
        messageButton.textContent = "Message";

        actions.appendChild(callButton);
        actions.appendChild(messageButton);


        // Add everything to card
        card.appendChild(avatarWrapper);
        card.appendChild(userName);
        card.appendChild(details);
        card.appendChild(actions);

        cardStack.appendChild(card);
    });
}
 showCards();
let cardStack = document.querySelector(".card-stack");
let upBtn = document.querySelectorAll(".btn-circle")[1];
let downBtn = document.querySelectorAll(".btn-circle")[2];



// ↑ BUTTON
upBtn.addEventListener("click", function () {

    let lastChild = cardStack.lastElementChild;

    if (lastChild) {
        cardStack.insertBefore(
            lastChild,
            cardStack.firstElementChild
        );
    }

});


// ↓ BUTTON
downBtn.addEventListener("click", function () {

    let firstChild = cardStack.firstElementChild;

    if (firstChild) {
        cardStack.appendChild(firstChild);
    }

});

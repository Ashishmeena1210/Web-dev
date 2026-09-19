let form = document.querySelector("form");
let userName = document.querySelector("#name");
let role = document.querySelector("#role");
let bio = document.querySelector("#bio");
let photo = document.querySelector("#photo");
let cardcomp = document.querySelector(".cardComponents");

const userManager = {
    users: JSON.parse(localStorage.getItem("users")) || [],

    init: function () {
        form.addEventListener("submit", this.submitForm.bind(this));

        // Show saved users when page loads
        this.renderUI();
    },

    submitForm: function (e) {
        e.preventDefault();
        this.addUser();
    },

    addUser: function () {
        this.users.push({
            userName: userName.value,
            role: role.value,
            bio: bio.value,
            photo: photo.value
        });

        // Save updated users to localStorage
        this.saveToLocalStorage();

        form.reset();
        this.renderUI();
    },

    saveToLocalStorage: function () {
        localStorage.setItem("users", JSON.stringify(this.users));
    },

    renderUI: function () {
        cardcomp.innerHTML = "";

        this.users.forEach((user, index) => {

            const card = document.createElement("div");

            
            card.className =
                "bg-[#242424] text-white rounded-2xl p-6 flex flex-col items-center border border-zinc-700/60 shadow-lg w-full max-w-xs transition-transform duration-200 hover:-translate-y-1";

            const img = document.createElement("img");
            img.className ="w-24 h-24 rounded-full object-cover mb-4 border-2 border-zinc-500 shadow-md";
            img.src = user.photo;
            img.alt = user.userName || "User Pic";
            card.appendChild(img);

            const name = document.createElement("h2");
            name.className ="text-xl font-bold text-white mb-1 tracking-wide";
            name.textContent = user.userName;
            card.appendChild(name);

            const role = document.createElement("p");
            role.className = "text-zinc-400 text-sm font-medium mb-3";
            role.textContent = user.role;
            card.appendChild(role);

            const bio = document.createElement("p");
            bio.className = "text-zinc-300 text-xs text-center leading-relaxed mb-4";
            bio.textContent = user.bio;
            card.appendChild(bio);

            const removeBtn = document.createElement("button");
            removeBtn.textContent = "Remove";
            removeBtn.className = "mt-auto text-xs text-red-400 hover:text-red-300 hover:bg-red-500/10 px-3 py-1.5 rounded-md transition";

            removeBtn.addEventListener("click", () => {
                this.removeUser(index);
            });

            card.appendChild(removeBtn);

            // Add card to container
            cardcomp.appendChild(card);
        });
    },

    removeUser: function (index) {

        // Remove user from array
        this.users.splice(index, 1);

        // Update localStorage
        this.saveToLocalStorage();

        // Re-render cards
        this.renderUI();
    }
};

userManager.init();
let users = [
    {
        name: "Aarav Sharma",
        pic: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=600",
        bio: "Frontend developer who loves creating clean and interactive web experiences."
    },
    {
        name: "Ananya Patel",
        pic: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=600",
        bio: "UI/UX designer passionate about turning ideas into simple and beautiful interfaces."
    },
    {
        name: "Rohan Mehta",
        pic: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=600",
        bio: "Backend developer interested in APIs, databases, and scalable applications."
    },
    {
        name: "Priya Singh",
        pic: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=600",
        bio: "Creative developer exploring JavaScript, React, and modern web technologies."
    },
    {
        name: "Kabir Verma",
        pic: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=600",
        bio: "Software engineer who enjoys solving problems and learning new technologies."
    },
    {
        name: "Meera Kapoor",
        pic: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=600",
        bio: "Product designer focused on creating meaningful and user-friendly digital products."
    },
    {
        name: "Arjun Malhotra",
        pic: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=600",
        bio: "Full-stack developer building web applications with JavaScript and Node.js."
    },
    {
        name: "Ishita Gupta",
        pic: "https://images.unsplash.com/photo-1488426862026-3ee34a7d66df?w=600",
        bio: "Tech enthusiast who enjoys coding, photography, and exploring new ideas."
    },
    {
        name: "Vikram Joshi",
        pic: "https://images.unsplash.com/photo-1501196354995-cbb51c65aaea?w=600",
        bio: "Problem solver and developer interested in AI, machine learning, and automation."
    },
    {
        name: "Sneha Agarwal",
        pic: "https://images.unsplash.com/photo-1551836022-d5d88e9218df?w=600",
        bio: "Developer and learner who enjoys building useful products and collaborating with others."
    }
];


function showUsers(arr) {


// Main container
let main = document.createElement("div");
main.classList.add("main");

// Search input
let inp = document.createElement("input");
inp.classList.add("inp");
inp.placeholder = "Search...";

main.appendChild(inp);

// Cards container
let cardsContainer = document.createElement("div");
cardsContainer.classList.add("cards-container");

main.appendChild(cardsContainer);

// Function to create a card
function createCard(user) {

    let card = document.createElement("div");
    card.classList.add("card");

    let img = document.createElement("img");
    img.src = user.pic;

    let blurred = document.createElement("div");
    blurred.classList.add("blurred-layer");
    blurred.style.backgroundImage = `url(${user.pic})`;

    let content = document.createElement("div");
    content.classList.add("content");

    let h3 = document.createElement("h3");
    h3.classList.add("h3");
    h3.textContent = user.name;

    let p = document.createElement("p");
    p.classList.add("p");
    p.textContent = user.bio;

    content.appendChild(h3);
    content.appendChild(p);

    card.appendChild(img);
    card.appendChild(blurred);
    card.appendChild(content);

    return card;
}

// Function to display cards
function renderCards(arr) {

    cardsContainer.innerHTML = "";

    arr.forEach(function(user) {
        let card = createCard(user);
        cardsContainer.appendChild(card);
    });
}

// Initial cards
renderCards(arr);

// Search
inp.addEventListener("input", function() {

    let searchValue = inp.value.toLowerCase();

    let newUsers = arr.filter(function(user) {

        return user.name
            .toLowerCase()
            .startsWith(searchValue);

    });

    renderCards(newUsers);
});

document.body.appendChild(main);


}

// Call the function once
showUsers(users)

function createToaster(config) {
    return function (str) {

        let div = document.createElement("div");

        div.textContent = str;

        div.className = `
            inline-block px-6 py-3
            ${config.theme === "dark"
                ? "bg-gray-800 text-white"
                : "bg-gray-100 text-black"}
            rounded shadow-lg pointer-events-none
            transition-opacity duration-300
        `;

        let parent = document.querySelector(".parent");

        // Position the parent
        parent.classList.add("fixed");

        // X position
        if (config.positionX === "right") {
            parent.classList.add("right-5");
        } else {
            parent.classList.add("left-5");
        }

        // Y position
        if (config.positionY === "bottom") {
            parent.classList.add("bottom-5");
        } else {
            parent.classList.add("top-5");
        }

        parent.appendChild(div);

        setTimeout(() => {
            if (parent.contains(div)) {
                parent.removeChild(div);
            }
        }, config.duration * 1000);
    };
}


let toaster = createToaster({
    positionX: "left",
    positionY: "bottom",
    theme: "dark",
    duration: 3
});

toaster("Hello! I am toaster");
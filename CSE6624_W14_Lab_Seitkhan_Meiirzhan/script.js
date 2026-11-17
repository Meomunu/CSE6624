
const cube = document.getElementById("cube");

let x = 0;
let y = 0;

function rotate(a, b) {
    x += a;
    y += b;
    cube.style.transform = `rotateX(${x}deg) rotateY(${y}deg)`;
}

const buttons = {
    "up": [90, 0],
    "down": [-90, 0],
    "left": [0, -90],
    "right": [0, 90],
    "up-left": [45, -45],
    "up-right": [45, 45],
    "down-left": [-45, -45],
    "down-right": [-45, 45]
};

for (let id in buttons) {
    document.getElementById(id).addEventListener("click", () => {
        rotate(...buttons[id]);
    });
}



document.addEventListener("keydown", (event) => {
    const keys = {
        ArrowUp: "up",
        ArrowDown: "down",
        ArrowLeft: "left",
        ArrowRight: "right"
    };

    if (keys[event.key]) {
        event.preventDefault();
        rotate(...buttons[keys[event.key]]);
    }
});

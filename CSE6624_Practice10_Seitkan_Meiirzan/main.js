console.log("W10 practice loaded");
console.log("typeof 42 =>", typeof 42);

const billEl = document.getElementById("bill");
const tipEl = document.getElementById("tip");
const out = document.getElementById("out");
const btn = document.getElementById("btn");

btn.addEventListener("click", function () {
    const bill = Number(billEl.value);
    const tipPct = Number(tipEl.value);

    if (billEl.value === "" || tipEl.value === "" || bill < 0 || tipPct < 0) {
        out.textContent = "Invalid input";
        return;
    }

    const tipAmount = bill * (tipPct / 100);
    const total = bill + tipAmount;

    out.textContent = "Tip: " + tipAmount.toFixed(2) +
        " | Total: " + total.toFixed(2);
});

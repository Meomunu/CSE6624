function calc() {
    let b = Number(bill.value);
    let t = Number(tip.value);

    if (bill.value === "" || tip.value === "" || b < 0 || t < 0) {
        result.innerHTML = "Invalid input";
        return;
    }

    result.innerHTML = "Total: " + (b + b * t / 100).toFixed(2);
}

function average3(a, b, c) {
    return (a + b + c) / 3;
}

function avg() {
    if (g1.value === "" || g2.value === "" || g3.value === "") {
        output.innerHTML = "Enter all grades";
        return;
    }

    let a = Number(g1.value);
    let b = Number(g2.value);
    let c = Number(g3.value);

    if (a < 0 || b < 0 || c < 0) {
        output.innerHTML = "Invalid grades";
        return;
    }

    output.innerHTML = "Average: " + average3(a, b, c).toFixed(2);
}

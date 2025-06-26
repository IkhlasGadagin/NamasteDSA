const n = 5;
for (let i = 0; i < n; i++) {
    let row = "";
    let toggle = 1;
    for (let j = 0; j < i + 1; j++) {
        row = row + toggle;
        if (toggle == 0) {
            toggle = 1;
        }
        else {
            toggle = 0;
        }
    }
    console.log(row)
}

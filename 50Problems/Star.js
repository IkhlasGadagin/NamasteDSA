function start(n) {
    for (let i = 0; i < n; i++) {
        let s = "";
        for (let j = 0; j < i + 1; j++) {
            s = s + "*";
        }
        console.log(s);

    }

}
start(5);
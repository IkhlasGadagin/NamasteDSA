function puB(n) {
    for (let i = 0; i < n; i++) {
        let sub = "";
        for (let j = 0; j < n - i; j++) {
            sub = sub + "*"

        }
        console.log(sub);


    }
}


puB(6)


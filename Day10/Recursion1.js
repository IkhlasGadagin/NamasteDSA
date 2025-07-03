function Rec(num) {
    if (num == 0) return

    console.log(num);
    let newnum = num - 1;
    Rec(newnum)

}

const num = 100;
Rec(num);
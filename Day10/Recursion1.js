function Rec(num) {
    if (num == 0) return

    console.log(num);
    num = num - 1;
    Rec(num)

}

const num = 100;
Rec(num);
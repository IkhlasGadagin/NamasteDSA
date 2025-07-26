// function VowelsConsonentsMax(str) {
//     let vowels = ['a', 'e', 'i', 'o', 'u'];
//     let set = new Set();
//     for (let i = 0; i < vowels.length; i++) {
//         set.add(vowels[i]);
//     }
//     let countVowels = 0;
//     let countConsonent = 0;
//     for (let i = 0; i < str.length; i++) {
//         if (set.has(str[i])) {
//             countVowels++
//         }
//         else {
//             countConsonent++
//         }
//     }
//     // if (countConsonent > countVowels) {
//     //     return countConsonent
//     // }
//     // else return countVowels;
//     return (countConsonent > countVowels) ? countConsonent : countVowels
// }

// let str = "success";
// const ans = VowelsConsonentsMax(str);
// console.log(ans);


function VowelsConsonentsMax(str) {
    let vowels = ['a', 'e', 'i', 'o', 'u'];
    let set = new Set();
    for (let i = 0; i < vowels.length; i++) {
        set.add(vowels[i]);
    }
    let countVowels = 0;
    let countConsonent = 0;
    for (let i = 0; i < str.length; i++) {
        if (set.has(str[i]) > countVowels) {
            countVowels++
        }
        else if (str[countConsonent] > countConsonent) {
            countConsonent++
        }
    }
    // if (countConsonent > countVowels) {
    //     return countConsonent
    // }
    // else return countVowels;
    return (countConsonent > countVowels) ? countConsonent : countVowels
}

let str = "success";
const ans = VowelsConsonentsMax(str);
console.log(ans);

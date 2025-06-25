
function loop() {
    let count = 0;
    for (let i = 0; i < 5; i++) {
        for (let j = 0; j < 5; j++) {
            for (let k = 0; k < 5; k++) {
                // console.log(`i is ${i} and j is ${j} k is ${k} and count ${count++}`);
                for (let l = 0; l < 5; l++) {
                    console.log(`i is ${i} and j is ${j} k is ${k} l is ${l} and count ${count++}`);

                }
            }
        }
    }
}


loop()
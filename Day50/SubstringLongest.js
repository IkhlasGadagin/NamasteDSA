function longestUniqueSubstring(s) {
    let maxLength = 0;

    // Step 1: Try every starting point
    for (let i = 0; i < s.length; i++) {

        // Step 2: Try every ending point after i
        for (let j = i; j < s.length; j++) {

            // Take substring from i to j
            let substring = s.slice(i, j + 1);

            // Step 3: Use Set to check if all characters are unique
            let set = new Set(substring);

            if (set.size === substring.length) {
                // Unique substring found
                maxLength = Math.max(maxLength, substring.length);
            }
        }
    }

    return maxLength;
}

let arr = "abcabcdabcdeab";
console.log(longestUniqueSubstring(arr)); // 
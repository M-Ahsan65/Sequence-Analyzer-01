```javascript
function analyzeSequence() {

    // Get sequence from textarea
    let sequence = document.getElementById("sequence").value;

    // Remove spaces and line breaks
    sequence = sequence.replace(/\s/g, "");

    // Convert to uppercase
    sequence = sequence.toUpperCase();

    // Clear previous error
    document.getElementById("error").textContent = "";

    // Check empty sequence
    if (sequence === "") {

        document.getElementById("error").textContent =
            "Please enter a DNA sequence.";

        return;
    }

    // Check valid DNA bases
    if (!/^[ATGC]+$/.test(sequence)) {

        document.getElementById("error").textContent =
            "Invalid sequence! Only A, T, G and C are allowed.";

        return;
    }

    // Count nucleotides
    let A = 0;
    let T = 0;
    let G = 0;
    let C = 0;

    // Loop through sequence
    for (let base of sequence) {

        if (base === "A") {
            A++;
        }

        else if (base === "T") {
            T++;
        }

        else if (base === "G") {
            G++;
        }

        else if (base === "C") {
            C++;
        }
    }

    // Sequence length
    let length = sequence.length;

    // Calculate percentages
    let gcContent = ((G + C) / length) * 100;

    let atContent = ((A + T) / length) * 100;

    // Display results
    document.getElementById("length").textContent = length;

    document.getElementById("aCount").textContent = A;

    document.getElementById("tCount").textContent = T;

    document.getElementById("gCount").textContent = G;

    document.getElementById("cCount").textContent = C;

    document.getElementById("gc").textContent =
        gcContent.toFixed(2) + "%";

    document.getElementById("at").textContent =
        atContent.toFixed(2) + "%";

    // Display cleaned sequence
    document.getElementById("cleanSequence").textContent =
        sequence;
}
```

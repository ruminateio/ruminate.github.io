let currentAudio = null; // Track the currently playing audio

function count() {
    const input = document.getElementById("input").value;
    const result = document.getElementById("result");

    // Count alphabets or sum of digits
    let count = 0;
    for (const char of input) {
        if (char.match(/[a-zA-Z]/)) {
            count++;
        } else if (!isNaN(parseInt(char))) {
            count += parseInt(char);
        }
    }

    // Stop the currently playing audio (if any)
    if (currentAudio) {
        currentAudio.pause();
    }

    // Play audio based on count
    if (count === 7) {
        result.innerText = "CONGRATULATIONS !!! You are a THALA";
        currentAudio = document.getElementById("audio7");
        currentAudio.play();
    } else {
        result.innerText = "ohh !? Sad to find that you are not a THALA";
        currentAudio = document.getElementById("audioNot7");
        currentAudio.play();
    }
}

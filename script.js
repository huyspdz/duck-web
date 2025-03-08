document.getElementById('button1').addEventListener('click', function() {
    displayResult('Result 1: You clicked the first button!');
});

document.getElementById('button2').addEventListener('click', function() {
    displayResult('Result 2: You clicked the second button!');
});

document.getElementById('button3').addEventListener('click', function() {
    displayResult('Result 3: You clicked the third button!');
});

function displayResult(message) {
    document.getElementById('result').innerText = message;
}

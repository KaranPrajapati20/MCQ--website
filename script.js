const questions = [
    {
        'que' : "which of the follwing is the markup language",
        'a' : 'html',
        'b' : 'javascript',
        'c' : 'java',
        'd' : 'php',
        'correct' : 'a'
    },
    {
        'que' : "which of the follwing is the script language",
        'a' : 'python',
        'b' : 'javascript',
        'c' : 'java',
        'd' : 'rubh',
        'correct' : 'b'
    },
    {
        'que' : "which of the follwing is the design language",
        'a' : 'html',
        'b' : 'css',
        'c' : 'c',
        'd' : 'none of the above',
        'correct' : 'b'
    }
];

let index = 0;
let total = questions.length;
let right = 0;
let wrong = 0;


let quebox = document.getElementById("quebox");
let optionInputs = document.querySelectorAll(".option");
let btn = document.querySelector(".btn");
let box = document.querySelector(".box");

const loadQuestion = () => {

    if (index == total) {
        return endQuiz();
    }

    reset();
    let data = questions[index];
    console.log(data);
    quebox.textContent = `${index + 1})  ${data.que}`;

    optionInputs[0].nextElementSibling.innerHTML = data.a;
    optionInputs[1].nextElementSibling.innerHTML = data.b;
    optionInputs[2].nextElementSibling.innerHTML = data.c;
    optionInputs[3].nextElementSibling.innerHTML = data.d;
}


btn.addEventListener("click", () => {
    let data = questions[index];
    let ans = getAnswer();

    if (ans == data.correct) {
        right++;
    }
    else {
        wrong++;
    }
    index++;
    loadQuestion();
    return;
});

function getAnswer() {
    let answer = 0;
    optionInputs.forEach((input) => {
        if (input.checked) {
            console.log(input.value);
            answer = input.value;
        }
    })
    return answer;
}

function reset() {
    optionInputs.forEach((input) => {
        input.checked = false;
    })
}


function endQuiz() {
    box.innerHTML = `<h3>Submit successfully</h3>
    Your result is ${right} / ${total}`;
}
console.log(right);








loadQuestion();



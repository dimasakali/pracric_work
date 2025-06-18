const questions = [
    {
        question: "Какое число следует за 1, 3, 5, 7?",
        image: "",
        options: ["8", "9", "10", "11"],
        correct: 1 // 9
    },
    {
        question: "Какой цвет получается при смешивании синего и желтого?",
        image: "",
        options: ["Зеленый", "Красный", "Фиолетовый", "Оранжевый"],
        correct: 0 // Зеленый
    },
    {
        question: "Сколько сторон у треугольника?",
        image: "",
        options: ["2", "3", "4", "5"],
        correct: 1 // 3
    },
    {
        question: "Какое животное изображено на картинке?",
        image: "https://images.pexels.com/photos/45201/kitty-cat-kitten-pet-45201.jpeg",
        options: ["Собака", "Кошка", "Лошадь", "Корова"],
        correct: 1 // Кошка
    },
    {
        question: "Какой день недели идет после среды?",
        image: "",
        options: ["Понедельник", "Вторник", "Четверг", "Пятница"],
        correct: 2 // Четверг
    },
    {
        question: "Сколько будет 2 + 2 * 2?",
        image: "",
        options: ["6", "8", "10", "12"],
        correct: 0 // 6
    },
    {
        question: "Какой фрукт изображен на картинке?",
        image: "https://images.pexels.com/photos/102104/pexels-photo-102104.jpeg",
        options: ["Яблоко", "Банан", "Груша", "Апельсин"],
        correct: 0 // Яблоко
    },
    {
        question: "Какое число пропущено: 2, 4, ?, 8, 10?",
        image: "",
        options: ["5", "6", "7", "3"],
        correct: 1 // 6
    },
    {
        question: "Как называется столица Франции?",
        image: "",
        options: ["Лондон", "Берлин", "Париж", "Мадрид"],
        correct: 2 // Париж
    },
    {
        question: "Сколько месяцев в году имеют 31 день?",
        image: "",
        options: ["5", "6", "7", "8"],
        correct: 2 // 7
    },
    {
        question: "Какой объект изображен на картинке?",
        image: "https://images.pexels.com/photos/1632790/pexels-photo-1632790.jpeg",
        options: ["Машина", "Самолет", "Поезд", "Корабль"],
        correct: 2 // Поезд
    },
    {
        question: "Какое число больше: 15 или 10?",
        image: "",
        options: ["10", "15"],
        correct: 1 // 15
    },
    {
        question: "Какое слово противоположно слову 'большой'?",
        image: "",
        options: ["Маленький", "Высокий", "Тяжелый", "Длинный"],
        correct: 0 // Маленький
    },
    {
        question: "Сколько будет 9 - 3?",
        image: "",
        options: ["5", "6", "7", "8"],
        correct: 1 // 6
    },
    {
        question: "Какое животное летает?",
        image: "",
        options: ["Собака", "Кошка", "Птица", "Рыба"],
        correct: 2 // Птица
    },
    {
        question: "Какой цвет у неба в ясный день?",
        image: "",
        options: ["Красный", "Зеленый", "Синий", "Желтый"],
        correct: 2 // Синий
    },
    {
        question: "Сколько пальцев на одной руке?",
        image: "",
        options: ["3", "4", "5", "6"],
        correct: 2 // 5
    },
    {
        question: "Какое число следует за 10, 20, 30?",
        image: "",
        options: ["35", "40", "45", "50"],
        correct: 1 // 40
    },
    {
        question: "Как называется наша планета?",
        image: "",
        options: ["Марс", "Венера", "Земля", "Юпитер"],
        correct: 2 // Земля
    },
    {
        question: "Сколько будет 5 * 3?",
        image: "",
        options: ["10", "12", "15", "18"],
        correct: 2 // 15
    }
];

let currentQuestion = 0;
let score = 0;
let userName = "";

document.getElementById("userForm").addEventListener("submit", function(e) {
    e.preventDefault();
    const firstName = document.getElementById("firstName").value;
    const lastName = document.getElementById("lastName").value;
    userName = firstName + " " + lastName;
    document.getElementById("startPage").style.display = "none";
    document.getElementById("quizPage").style.display = "block";
    loadQuestion();
});

function loadQuestion() {
    const questionData = questions[currentQuestion];
    document.getElementById("questionNumber").textContent = currentQuestion + 1;
    document.getElementById("questionText").textContent = questionData.question;
    
    const imgElement = document.getElementById("questionImage");
    if (questionData.image) {
        imgElement.src = questionData.image;
        imgElement.style.display = "block";
    } else {
        imgElement.style.display = "none";
    }

    const answersDiv = document.getElementById("answers");
    answersDiv.innerHTML = "";
    questionData.options.forEach((option, index) => {
        const button = document.createElement("button");
        button.textContent = option;
        button.onclick = () => checkAnswer(index);
        answersDiv.appendChild(button);
    });
}

function checkAnswer(selectedIndex) {
    if (selectedIndex === questions[currentQuestion].correct) {
        score++;
    }
    document.querySelectorAll("#answers button").forEach(button => {
        button.disabled = true;
    });
}

document.getElementById("nextQuestion").addEventListener("click", () => {
    currentQuestion++;
    if (currentQuestion < questions.length) {
        loadQuestion();
    } else {
        showResult();
    }
});

function showResult() {
    document.getElementById("quizPage").style.display = "none";
    document.getElementById("resultPage").style.display = "block";
    document.getElementById("userNameResult").textContent = userName;
    
    // Подсчет IQ: от 50 до 150, 20 вопросов = 5 баллов за правильный ответ
    const iq = 50 + score * 5;
    document.getElementById("iqResult").textContent = iq;
}

document.getElementById("restartQuiz").addEventListener("click", () => {
    currentQuestion = 0;
    score = 0;
    userName = "";
    document.getElementById("resultPage").style.display = "none";
    document.getElementById("startPage").style.display = "block";
    document.getElementById("userForm").reset();
});
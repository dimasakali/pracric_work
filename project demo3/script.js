const questions = [
    {
        question: "Какое число следует в последовательности: 1, 3, 7, 15, 31, ?",
        image: "",
        options: ["62", "63", "64", "65", "66"],
        correct: 1 // 63
    },
    {
        question: "Если 4 яблока и 3 груши стоят 34 рубля, а 2 яблока и 5 груш стоят 30 рублей, сколько стоят 3 яблока и 4 груши?",
        image: "",
        options: ["32", "36", "40", "44", "48"],
        correct: 1 // 36
    },
    {
        question: "Термометр : Температура :: Барометр : ?",
        image: "",
        options: ["Давление", "Высота", "Влажность", "Скорость", "Время"],
        correct: 0 // Давление
    },
    {
        question: "Какое слово не относится к группе: Электрон, Протон, Нейтрон, Фотон, Кварк?",
        image: "",
        options: ["Электрон", "Протон", "Нейтрон", "Фотон", "Кварк"],
        correct: 3 // Фотон
    },
    {
        question: "Какой фигуры не достаёт?",
        image: "images/1.jpg",
        options: ["1", "2", "3", "4", "5", "6"],
        correct: 5 // 6
    },
    {
        question: "Если 2x - 5 = 3x + 1, то чему равно 3x - 2?",
        image: "",
        options: ["-20", "-17", "-14", "-11", "-8"],
        correct: 0 // -20
    },
    {
        question: "Какое число следует в последовательности: 2, 6, 12, 20, 30, 42, ?",
        image: "",
        options: ["52", "54", "56", "58", "60"],
        correct: 2 // 56
    },
    {
        question: "Если все птицы летают, а пингвин — это птица, но пингвин не летает, что можно сказать о правиле 'все птицы летают'?",
        image: "",
        options: ["Правило верно", "Правило неверно", "Правило частично верно", "Правило зависит от вида птицы", "Нет ответа"],
        correct: 1 // Правило неверно
    },
    {
        question: "У вас есть 9 мешков с монетами, один из них содержит фальшивые монеты, которые легче настоящих. У вас есть весы, которые можно использовать только дважды. Как найти мешок с фальшивыми монетами?",
        image: "",
        options: ["Разделить на 3 группы по 3 мешка", "Это невозможно", "Взять по 1 монете из каждого мешка", "Разделить на 2 группы по 4 и 5", "Сравнить все мешки сразу"],
        correct: 0 // Разделить на 3 группы по 3 мешка
    },
    {
        question: "Какой фигуры не достаёт на картинке?",
        image: "images/2.png",
        options: ["1", "2", "3", "4", "5", "6"],
        correct: 1 // 2
    },
    {
        question: "Архитектор : Чертеж :: Композитор : ?",
        image: "",
        options: ["Нота", "Партитура", "Инструмент", "Мелодия", "Концерт"],
        correct: 1 // Партитура
    },
    {
        question: "Поезд едет со скоростью 80 км/ч в течение 2 часов, затем замедляется до 60 км/ч на 1 час. Какое расстояние он проехал?",
        image: "",
        options: ["200 км", "220 км", "240 км", "260 км", "280 км"],
        correct: 1 // 220 км
    },
    {
        question: "Если некоторые A — это B, а все B — это C, можно ли сказать, что некоторые A — это C?",
        image: "",
        options: ["Да", "Нет", "Только если A равно B", "Зависит от контекста", "Невозможно определить"],
        correct: 0 // Да
    },
    {
        question: "Найдите пропущенное число: 1, 2, 6, 24, ?, 720.",
        image: "",
        options: ["100", "120", "140", "160", "180"],
        correct: 1 // 120
    },
    {
        question: "Какого человечика не хватает на картинке?",
        image: "images/3.jpg",
        options: ["1", "2", "3", "4"],
        correct: 0 // 1
    },
    {
        question: "Какой из этих объектов не имеет логической пары: Замок, Ключ, Ручка, Чернила, Стол, Стул, Лампа?",
        image: "",
        options: ["Замок", "Ключ", "Ручка", "Чернила", "Стол", "Стул", "Лампа"],
        correct: 6 // Лампа
    },
    {
        question: "Если 3x + 7 = 2x - 5, чему равно 4x + 3?",
        image: "",
        options: ["-45", "-40", "-35", "-30", "-25"],
        correct: 0 // -45
    },
    {
        question: "У вас есть 4 коробки, в одной из них приз. На каждой коробке ложное утверждение. Коробка 1: 'Приз в коробке 2', Коробка 2: 'Приз в коробке 3', Коробка 3: 'Приз в коробке 4', Коробка 4: 'Приз в коробке 1'. Где приз?",
        image: "",
        options: ["Коробка 1", "Коробка 2", "Коробка 3", "Коробка 4", "Невозможно определить"],
        correct: 2 // Коробка 3
    },
    {
        question: "Какое слово можно поставить перед каждым из этих слов, чтобы получилось новое значение: Код, Сигнал, Система?",
        image: "",
        options: ["Доступ", "Безопасность", "Секрет", "Шифр", "Программа"],
        correct: 3 // Шифр
    },
    {
        question: "Какой фигуры не достаёт?",
        image: "images/1.jpg",
        options: ["гусь", "собака", "курица", "утка"],
        correct: 1 // собака
    }
];

let currentQuestion = 0;
let score = 0;
let userName = "";
let timerInterval;
const totalTime = 30 * 60; // 30 минут в секундах
let timeLeft = totalTime;

document.getElementById("startTestBtn").addEventListener("click", () => {
    document.getElementById("infoPage").classList.remove("active");
    document.getElementById("startPage").classList.add("active");
});

document.getElementById("userForm").addEventListener("submit", function(e) {
    e.preventDefault();
    const firstName = document.getElementById("firstName").value;
    const lastName = document.getElementById("lastName").value;
    userName = firstName + " " + lastName;
    document.getElementById("startPage").classList.remove("active");
    document.getElementById("quizPage").classList.add("active");
    loadQuestion();
    startTimer();
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

    const progress = ((currentQuestion + 1) / questions.length) * 100;
    document.getElementById("progress").style.width = `${progress}%`;

    const answersDiv = document.getElementById("answers");
    answersDiv.innerHTML = "";
    questionData.options.forEach((option, index) => {
        const button = document.createElement("button");
        button.textContent = option;
        button.onclick = () => checkAnswer(index, button);
        answersDiv.appendChild(button);
    });
}

function checkAnswer(selectedIndex, button) {
    const buttons = document.querySelectorAll("#answers button");
    buttons.forEach(btn => {
        btn.classList.remove("selected");
        btn.disabled = true;
    });
    button.classList.add("selected");
    
    if (selectedIndex === questions[currentQuestion].correct) {
        score++;
    }
}

document.getElementById("nextQuestion").addEventListener("click", () => {
    currentQuestion++;
    if (currentQuestion < questions.length) {
        loadQuestion();
    } else {
        clearInterval(timerInterval);
        showResult();
    }
});

function startTimer() {
    timerInterval = setInterval(() => {
        timeLeft--;
        const minutes = Math.floor(timeLeft / 60);
        const seconds = timeLeft % 60;
        document.getElementById("timer").textContent = `${minutes}:${seconds.toString().padStart(2, '0')}`;
        
        if (timeLeft <= 0) {
            clearInterval(timerInterval);
            showResult();
        }
    }, 1000);
}

function showResult() {
    document.getElementById("quizPage").classList.remove("active");
    document.getElementById("resultPage").classList.add("active");
    document.getElementById("userNameResult").textContent = userName;
    
    // Подсчет IQ: от 50 до 150, 20 вопросов = 5 баллов за правильный ответ
    const iq = 50 + score * 5;
    document.getElementById("iqResult").textContent = iq;
    
    // Комментарий в зависимости от результата
    let comment = "";
    if (iq >= 130) {
        comment = "Превосходно! Ваш интеллект выше среднего уровня.";
    } else if (iq >= 100) {
        comment = "Отлично! У вас средний или выше среднего уровень интеллекта.";
    } else if (iq >= 70) {
        comment = "Неплохо! Есть над чем поработать.";
    } else {
        comment = "Не переживайте, IQ — это не единственный показатель ваших способностей.";
    }
    document.getElementById("iqComment").textContent = comment;
}

document.getElementById("restartQuiz").addEventListener("click", () => {
    currentQuestion = 0;
    score = 0;
    userName = "";
    timeLeft = totalTime;
    document.getElementById("resultPage").classList.remove("active");
    document.getElementById("infoPage").classList.add("active");
    document.getElementById("userForm").reset();
    document.getElementById("progress").style.width = "0%";
    document.getElementById("timer").textContent = "30:00";
    clearInterval(timerInterval);
});
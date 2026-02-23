
var questions = [
    // Easy Pronunciation Questions
    {
        text: "Pronounce the word 'قلم' (Pen).",
        correctAnswer: "قلم",
        category: "pronunciation",
        difficulty: "easy",
        type: "pronunciation"
    },
    {
        text: "Pronounce the word 'باب' (Door).",
        correctAnswer: "باب",
        category: "pronunciation",
        difficulty: "easy",
        type: "pronunciation"
    },
    // Easy to Medium Vocabulary Questions
    {
        text: "What does 'سلام' mean?",
        choices: ["Peace", "Hello", "Goodbye", "Thank you"],
        correctAnswer: "Peace",
        category: "vocabulary",
        difficulty: "easy"
    },
    {
        text: "Choose the correct translation for 'Moon'.",
        choices: ["شمس", "قمر", "نجم", "سحاب"],
        correctAnswer: "قمر",
        category: "vocabulary",
        difficulty: "easy"
    },
    // Medium Grammar Questions
    {
        text: "Which sentence means 'I eat an apple'?",
        choices: ["أنا آكل تفاحة", "تفاحة تأكلني", "أنا أشرب تفاحة", "تفاحة تأكل"],
        correctAnswer: "أنا آكل تفاحة",
        category: "grammar",
        difficulty: "medium"
    },
    {
        text: "Select the correct sentence: 'The boy reads a book'.",
        choices: ["الولد يقرأ كتاب", "كتاب يقرأ الولد", "الولد قرأ كتاب", "يقرأ الولد كتاب"],
        correctAnswer: "الولد يقرأ كتاب",
        category: "grammar",
        difficulty: "medium"
    },
    {
        text: "What does 'كتاب' translate to?",
        choices: ["Pen", "Book", "Door", "Window"],
        correctAnswer: "Book",
        category: "vocabulary",
        difficulty: "easy"
    },
    {
        text: "The Arabic word for 'Star' is:",
        choices: ["نجم", "قمر", "شمس", "غيم"],
        correctAnswer: "نجم",
        category: "vocabulary",
        difficulty: "easy"
    },
    {
        text: "'مدرسة' means:",
        choices: ["Market", "Hospital", "School", "House"],
        correctAnswer: "School",
        category: "vocabulary",
        difficulty: "easy"
    },
    {
        text: "Which sentence means 'I am learning Arabic'?",
        choices: ["أنا أتعلم العربية", "أنا أكتب كتاب", "أنا أكل تفاحة", "أنا أشاهد التلفزيون"],
        correctAnswer: "أنا أتعلم العربية",
        category: "grammar",
        difficulty: "medium"
    },
    {
        text: "What is the Arabic word for 'Water' pronounced as?",
        choices: ["Maa", "Shams", "Hawa", "Turab"],
        correctAnswer: "Maa",
        category: "pronunciation",
        difficulty: "medium"
    },
    {
        text: "Which sentence means 'The cat drinks milk'?",
        choices: ["القطة تشرب الحليب", "القطة تأكل الحليب", "الحليب يشرب القطة", "الحليب تشرب القطة"],
        correctAnswer: "القطة تشرب الحليب",
        category: "grammar",
        difficulty: "medium"
    },
    {
        text: "Choose the grammatically correct sentence:",
        choices: ["القطة تشرب الحليب", "الحليب تشرب القطة", "تشرب القطة الحليب", "القطة شربت الحليب"],
        correctAnswer: "القطة تشرب الحليب",
        category: "grammar",
        difficulty: "medium"
    },
    {
        text: "Which sentence means 'The weather is cold'?",
        choices: ["الجو بارد", "الجو حار", "الجو مشمس", "الجو ممطر"],
        correctAnswer: "الجو بارد",
        category: "grammar",
        difficulty: "medium"
    },
    {
        text: "Choose the correct translation for 'She is writing a letter':",
        choices: ["هي تكتب رسالة", "هي تقرأ رسالة", "هو يكتب رسالة", "أنا أكتب رسالة"],
        correctAnswer: "هي تكتب رسالة",
        category: "grammar",
        difficulty: "medium"
    },
    {
        text: "Choose the Arabic translation for 'The cat is small':",
        choices: ["القطة صغيرة", "القطة كبيرة", "الكلب صغير", "الكلب كبير"],
        correctAnswer: "القطة صغيرة",
        category: "grammar",
        difficulty: "medium"
    },
    {
        text: "What does 'طعام' mean?",
        choices: ["Drink", "Food", "Fruit", "Vegetable"],
        correctAnswer: "Food",
        category: "vocabulary",
        difficulty: "easy"
    },
    {
        text: "Pronounce 'ليل' (Night).",
        correctAnswer: "ليل",
        category: "pronunciation",
        difficulty: "easy",
        type: "pronunciation"
    },
    {
        text: "Choose the correct translation for 'He is reading a book':",
        choices: ["هو يقرأ كتاب", "هو يكتب كتاب", "هي تقرأ كتاب", "أنا أقرأ كتاب"],
        correctAnswer: "هو يقرأ كتاب",
        category: "grammar",
        difficulty: "medium"
    },
    {
        text: "Which sentence is grammatically correct?",
        choices: ["السيارة سريعة", "السيارة تسريع", "السريعة سيارة", "سريعة السيارة"],
        correctAnswer: "السيارة سريعة",
        category: "grammar",
        difficulty: "medium"
    },
    {
        text: "Pronounce the word 'شجرة' (Tree).",
        correctAnswer: "شجرة",
        category: "pronunciation",
        difficulty: "easy",
        type: "pronunciation"
    },
    {
        text: "What is the Arabic word for 'Book' pronounced as?",
        choices: ["Kitaab", "Qalam", "Maktaba", "Sahifa"],
        correctAnswer: "Kitaab",
        category: "pronunciation",
        difficulty: "easy"
    },
    {
        text: "Choose the correct translation for 'The sky is blue':",
        choices: ["السماء زرقاء", "السماء صافية", "السماء ممطرة", "السماء حمراء"],
        correctAnswer: "السماء زرقاء",
        category: "grammar",
        difficulty: "medium"
    },
    {
        text: "What does 'بيت' translate to?",
        choices: ["Room", "House", "Kitchen", "Garden"],
        correctAnswer: "House",
        category: "vocabulary",
        difficulty: "easy"
    },
    {
        text: "Pronounce 'صحراء' (Desert).",
        correctAnswer: "صحراء",
        category: "pronunciation",
        difficulty: "easy",
        type: "pronunciation"
    },
    {
        text: "Select the sentence that means 'The birds are flying':",
        choices: ["الطيور تطير", "الطيور تسبح", "الأسماك تطير", "الطيور ترقص"],
        correctAnswer: "الطيور تطير",
        category: "grammar",
        difficulty: "medium"
    },
    {
        text: "What is the Arabic word for 'Sun' pronounced as?",
        choices: ["Shams", "Qamar", "Najm", "Jumua"],
        correctAnswer: "Shams",
        category: "pronunciation",
        difficulty: "easy"
    },
    {
        text: "Choose the Arabic translation for 'The book is on the table':",
        choices: ["الكتاب على الطاولة", "الكتاب تحت الطاولة", "الكتاب بجانب الطاولة", "الطاولة فوق الكتاب"],
        correctAnswer: "الكتاب على الطاولة",
        category: "grammar",
        difficulty: "medium"
    },
    {
        text: "What does 'مدرسة' mean?",
        choices: ["Hospital", "School", "Market", "Library"],
        correctAnswer: "School",
        category: "vocabulary",
        difficulty: "easy"
    },
    {
        text: "Pronounce 'نجم' (Star).",
        correctAnswer: "نجم",
        category: "pronunciation",
        difficulty: "easy",
        type: "pronunciation"
    }


];


var currentLevel = 'easy';
var currentQuestionIndex = 0;
var score = 0;
var combinedQuestions = [];

var SpeechRecognition = SpeechRecognition || webkitSpeechRecognition;
var recognition = new SpeechRecognition();
recognition.lang = 'ar-EG'; // Adjust the language code as needed
recognition.continuous = false;



function initializeTest() {
    currentQuestionIndex = 0;
    score = 0;

    // Load failed questions from previous attempts, if any
    let failedQuestions = JSON.parse(localStorage.getItem('failedQuestions')) || [];
    combinedQuestions = failedQuestions.length > 0 ? failedQuestions.concat(questions) : questions.slice();
    shuffleArray(combinedQuestions);
    displayQuestion(currentQuestionIndex);
}

function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
}

function displayQuestion(index) {
    let question = combinedQuestions[index];
    document.getElementById('question-display').innerText = question.text;
    if (question.type === "pronunciation") {
        document.getElementById('options-display').innerHTML = '<button onclick="startPronunciationTest()">Start Speaking</button>';
    }else{

    let optionsHtml = question.choices.map((choice, idx) => 
        `<button onclick="handleResponse('${choice}', ${idx})">${choice}</button>`
    ).join('');
    optionsHtml += '<button onclick="handleSkip()">Skip Question</button>'; // Skip button
    document.getElementById('options-display').innerHTML = optionsHtml;
    }
}
function startPronunciationTest() {
    recognition.start();
    document.getElementById('options-display').innerHTML = 'Listening...<button onclick="retryPronunciationTest()">Retry</button>';
}

function retryPronunciationTest() {
    document.getElementById('options-display').innerHTML = '<button onclick="startPronunciationTest()">Retry Pronunciation</button>';
}


recognition.onresult = function(event) {
    var userAnswer = event.results[0][0].transcript.trim();
    handlePronunciationResponse(userAnswer);
};

recognition.onend = function() {
    // This can be empty if you don't want any action upon speech end
    // Or add logic to prompt the user to try again
};

var performance = {
    grammar: { correct: 0, total: 0 },
    vocabulary: { correct: 0, total: 0 },
    pronunciation: { correct: 0, total: 0 }
    // Ensure all categories used in your questions are listed here
};

function handleResponse(answer, index) {
    let question = combinedQuestions[currentQuestionIndex];
    let isCorrect = answer === question.correctAnswer;
    updatePerformance(question.category, isCorrect);
    adjustDifficulty(isCorrect);
    nextQuestion(); // Ensure this is always called
}


function handlePronunciationResponse(userAnswer) {
    var correctAnswer = combinedQuestions[currentQuestionIndex].correctAnswer;
    var isCorrect = userAnswer.toLowerCase() === correctAnswer.toLowerCase();
    updatePerformance('pronunciation', isCorrect);
    adjustDifficulty(isCorrect);
    nextQuestion(); // Ensure this is always called
}


function updatePerformance(category, isCorrect) {
    if (performance[category]) { // Check if the category exists
        performance[category].total++;
        if (isCorrect) {
            performance[category].correct++;
        }
    } else {
        console.error("Undefined category: " + category);
    }
}




function handleSkip() {
    updateLocalStorage(currentQuestionIndex, 'skipped');
    nextQuestion();
}

function nextQuestion() {
    currentQuestionIndex++;
    if (currentQuestionIndex < combinedQuestions.length) {
        displayQuestion(currentQuestionIndex);
    } else {
        endTest();
    }
}


function updateLocalStorage(questionIndex, result) {
    let results = JSON.parse(localStorage.getItem('testResults')) || {};
    let failedQuestions = JSON.parse(localStorage.getItem('failedQuestions')) || [];

    results[questionIndex] = result;

    if (result === false && !failedQuestions.some(q => q.text === combinedQuestions[questionIndex].text)) {
        failedQuestions.push(combinedQuestions[questionIndex]);
    }

    localStorage.setItem('testResults', JSON.stringify(results));
    localStorage.setItem('failedQuestions', JSON.stringify(failedQuestions));
}

function adjustDifficulty(correct) {
    if (correct && currentLevel !== 'hard') {
        currentLevel = (currentLevel === 'easy') ? 'medium' : 'hard';
    } else if (!correct && currentLevel !== 'easy') {
        currentLevel = (currentLevel === 'hard') ? 'medium' : 'easy';
    }
}
function calculateLevel(categoryPerformance) {
    if (categoryPerformance.total === 0) return 'N/A'; // Handle case of no questions attempted

    let percentage = (categoryPerformance.correct / categoryPerformance.total) * 100;
    if (percentage >= 80) {
        return 'A';
    } else if (percentage >= 60) {
        return 'B';
    } else {
        return 'C';
    }
}
function endTest() {
    console.log("Ending test"); // Log to confirm function is called

    let grammarLevel = calculateLevel(performance.grammar);
    let vocabularyLevel = calculateLevel(performance.vocabulary);
    let pronunciationLevel = calculateLevel(performance.pronunciation);

    let resultText = `Grammar Level: ${grammarLevel}, Vocabulary Level: ${vocabularyLevel}, Pronunciation Level: ${pronunciationLevel}`;
    console.log("Results:", resultText); // Log calculated results

    document.getElementById('test-result').innerText = resultText;
    analyzeResults();
    localStorage.removeItem('failedQuestions');
}



function analyzeResults() {
    let results = JSON.parse(localStorage.getItem('testResults'));
    // Logic to analyze results and suggest recommendations
}

function exitTest() {
    currentQuestionIndex = 0;
    score = 0;
    document.getElementById('test-section').style.display = 'none';
    document.getElementById('main-content').style.display = 'block';
}
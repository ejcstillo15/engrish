// ===== QUIZLET-STYLE LEARNING PLATFORM FOR ROMEO & JULIET =====

// Knowledge Base Data
const vocabularyData = {
    1: [
        { question: "Something that is about to happen soon is described as", answer: "impending" },
        { question: "Doing something accidentally without realising is doing it", answer: "inadvertently" },
        { question: "What does the word 'embody' mean?", answer: "to be a perfect example of" },
        { question: "What is irony?", answer: "When the given meaning is the direct opposite of the real meaning" },
        { question: "What is dramatic irony?", answer: "When the audience are aware of something that the characters are not" },
        { question: "To challenge and try to undermine authority is to", answer: "subvert it" },
        { question: "Which word matches this definition 'a category or type of storytelling characterized by similar themes, styles or settings'", answer: "Genre" },
        { question: "Which technique matches the definition: 'A comparison using \"like\" or \"as\" in order to highlight similarities'?", answer: "A simile" },
        { question: "What is conflict?", answer: "A clash of, or disagreement between, ideas" },
        { question: "A long-standing argument between two families is a", answer: "feud" }
    ],
    2: [
        { question: "What is a compound-complex sentence?", answer: "One dependent clause joined to two independent clauses" },
        { question: "What are pronouns?", answer: "A word that is used instead of a noun or noun phrase" },
        { question: "In a metaphor, the subject being described is called the", answer: "tenor" },
        { question: "In a metaphor, the image or idea used to describe the subject is called the", answer: "vehicle" },
        { question: "In a metaphor, the qualities or similarities shared between the tenor and the vehicle are called the", answer: "ground" },
        { question: "If something is definitely going to happen and cannot be prevented, it is", answer: "inevitable" },
        { question: "If you behave the way you're expected to, you", answer: "conform" },
        { question: "A society where men hold the power is called", answer: "patriarchal" },
        { question: "If someone is rude or offensive, they are being", answer: "vulgar" }
    ],
    3: [
        { question: "An idea that is boring or overused is called", answer: "cliched" },
        { question: "A character who grows or changes over time is described as", answer: "dynamic" },
        { question: "A character who does not change is described as", answer: "static" },
        { question: "Someone who behaves in an emotionally balanced and responsible way is", answer: "mature" },
        { question: "Doing what is right and fair shows good", answer: "moral" },
        { question: "Doing something that is wrong or harmful shows", answer: "immoral" },
        { question: "Someone who is determined and unwavering is", answer: "resolute" },
        { question: "Something that you cannot avoid or get away from is", answer: "inescapable" },
        { question: "An agreement to work together is an", answer: "Alliance" },
        { question: "Acting quickly without thinking carefully is being", answer: "Impetuous" }
    ],
    5: [
        { question: "If someone says different things to different people, they are being", answer: "duplicitous" },
        { question: "A lack of power or control is known as", answer: "impotence" },
        { question: "A cruel and oppressive leader is called a", answer: "tyrant" },
        { question: "What tragic method is used when Romeo speaks lovingly to Juliet before dying?", answer: "Dramatic irony" },
        { question: "How does the ending of the play reflect the theme of fate vs. free will?", answer: "The lovers' deaths seem destined yet shaped by their own choices" },
        { question: "How is the theme of miscommunication central to the tragedy's outcome?", answer: "Romeo never receives Friar Laurence's letter, leading to his suicide" },
        { question: "What is the prince's conclusion", answer: "That the families finally have been punished for their feud" },
        { question: "How does the tragic ending criticise the destructive nature of family feuds?", answer: "Romeo and Juliet's death would never have happened if it wasn't for the feud" }
    ],
    6: [
        { question: "How many lines are in a traditional sonnet?", answer: "14" },
        { question: "How many syllables are there in each line of a sonnet?", answer: "10" },
        { question: "What is a rhyming pair of lines at the end of a Shakespearean sonnet called?", answer: "A rhyming couplet" },
        { question: "What is the name of the shift in tone or argument in a sonnet?", answer: "Volta" },
        { question: "How does a Petrarchan sonnet differ in structure from a Shakespearean sonnet?", answer: "It has an octave (ABBAABBA) and a sestet (CDECDE or similar)" },
        { question: "What is the effect of Romeo and Juliet speaking a shared sonnet when they first meet?", answer: "It shows their perfect connection and instant romantic bond" },
        { question: "What theme is central in Sonnet 18 ('Shall I compare thee to a summer's day?')?", answer: "The eternal beauty of the beloved through poetry" },
        { question: "How does Sonnet 130 subvert traditional love poetry?", answer: "It mocks unrealistic comparisons by praising a woman's real qualities" },
        { question: "Why is the sonnet form appropriate for Romeo and Juliet's first meeting?", answer: "It reflects their idealised, poetic love and courtly tradition" },
        { question: "What feature do both Sonnet 18 and Sonnet 130 share at the end that gives a twist or reflection?", answer: "A final rhyming couplet that changes or deepens the meaning" }
    ]
};

const plotQuestions = [
    { question: "What does Juliet do the night before her wedding?", answer: "Drinks the potion" },
    { question: "Who finds Juliet 'dead' on the morning of her wedding?", answer: "The Nurse" },
    { question: "What news does the Nurse bring to Juliet in Act 3, Scene 2?", answer: "Romeo has been banished" },
    { question: "Where does Romeo hide after killing Tybalt?", answer: "Friar Laurence's cell" },
    { question: "What plan does Friar Laurence make to help Romeo and Juliet?", answer: "Romeo should visit Juliet then flee to Mantua" },
    { question: "How does Capulet react to Juliet refusing to marry Paris?", answer: "He becomes enraged and threatens to disown her" },
    { question: "What advice does the Nurse give Juliet after Capulet's outburst?", answer: "Marry Paris" },
    { question: "What does Juliet decide after the Nurse tells her to marry Paris?", answer: "She loses trust in the Nurse" },
    { question: "Why does Paris visit Friar Laurence in Act 4?", answer: "To arrange his wedding to Juliet" },
    { question: "What plan does Friar Laurence give to Juliet to avoid marrying Paris?", answer: "Drink a potion to appear dead" }
];

// Reading Guide Learning Data
const readingGuideData = {
    summary: [
        { question: "What is the main setting of Romeo and Juliet?", answer: "Verona, Italy" },
        { question: "What two families are at war in the play?", answer: "The Montagues and the Capulets" },
        { question: "What does the Prince threaten as punishment for further fighting?", answer: "Death" },
        { question: "Who does Romeo initially love at the start of the play?", answer: "Rosaline" },
        { question: "At which event do Romeo and Juliet first meet?", answer: "The Capulet party" },
        { question: "What do Romeo and Juliet decide to do after meeting?", answer: "Marry secretly" },
        { question: "Who facilitates their secret marriage?", answer: "Friar Laurence" },
        { question: "Why does Romeo kill Tybalt?", answer: "Because Tybalt killed Mercutio" },
        { question: "What is Romeo's punishment for killing Tybalt?", answer: "Banishment from Verona" },
        { question: "What does Friar Laurence give Juliet to drink?", answer: "A potion to make her appear dead" }
    ],
    characters: [
        { question: "Who is the Prince of Verona?", answer: "Prince Escales" },
        { question: "What is Romeo's family name?", answer: "Montague" },
        { question: "What is Juliet's family name?", answer: "Capulet" },
        { question: "Who is Romeo's closest friend?", answer: "Mercutio" },
        { question: "Who is Juliet's cousin that fights Romeo?", answer: "Tybalt" },
        { question: "Who is Juliet's companion that raised her?", answer: "The Nurse" },
        { question: "Who attempts to keep the peace between families?", answer: "Benvolio" },
        { question: "What is Friar Laurence's role in the play?", answer: "The confessor to Romeo and Juliet" },
        { question: "Who wishes to marry Juliet before Romeo?", answer: "Paris" },
        { question: "What does Tybalt hate above all?", answer: "All Montagues" }
    ],
    themes: [
        { question: "What Renaissance ideal is central to Romeo and Juliet's actions?", answer: "Individualism - following their own choices over family authority" },
        { question: "What two opposing forces create the play's central conflict?", answer: "Love and hate, or individual choice and family duty" },
        { question: "What do Romeo and Juliet do that violates their society's code?", answer: "They love and marry each other despite the family feud" },
        { question: "What is transgression in this play?", answer: "Breaking the societal code that Montagues and Capulets must hate each other" },
        { question: "How does the play present Renaissance love differently from Petrarchan love?", answer: "It is mutual and freely chosen, not silent suffering for an unobtainable woman" },
        { question: "What does the play suggest about fate versus free will?", answer: "Despite their free will, the lovers appear destined to tragedy" },
        { question: "What are the lovers called in relation to fate?", answer: "Star-crossed lovers" },
        { question: "What does the family feud ultimately cause?", answer: "The deaths of Romeo and Juliet" },
        { question: "What does Capulet's anger at Juliet represent?", answer: "The conflict between old feudal authority and Renaissance individual choice" },
        { question: "What does the play criticize about family honour?", answer: "That it is destructive and more important than human life and love" }
    ],
    keylines: [
        { question: "What literary technique does Romeo use in 'O brawling love, O loving hate'?", answer: "Oxymoron" },
        { question: "What does Romeo's early poetry reveal about him?", answer: "He is emotionally immature and still influenced by Petrarchan ideals" },
        { question: "What does 'O I am fortune's fool' reveal about Romeo after killing Tybalt?", answer: "He believes himself a victim of fate, unable to control events" },
        { question: "What does 'Then I defy you, stars!' show about Romeo in Act 5?", answer: "His determination to assert individual free will against fate" },
        { question: "What does Juliet mean by 'Proud can I never be of what I hate'?", answer: "She refuses false pride and insists on marrying for love, not duty" },
        { question: "What does Juliet's deception in Act 4 Scene 2 demonstrate?", answer: "Her intelligence and agency in pursuing her own goals" },
        { question: "What does 'It is too rash, too unadvised, too sudden' suggest about Juliet?", answer: "She recognizes the danger but chooses love anyway" },
        { question: "What does 'O happy dagger' reveal about Juliet's choice to die?", answer: "She sees death as happiness and reunion with Romeo" },
        { question: "What does Tybalt's 'Peace? I hate the word' reveal about him?", answer: "His absolute commitment to the feud makes reconciliation impossible" },
        { question: "What does Capulet's violent language reveal about paternal authority?", answer: "The violence underlying feudal family structures and absolute parental power" }
    ],
    keyscenes: [
        { question: "What does Romeo's elaborate imagery in the first meeting show?", answer: "His complete transformation from Rosaline to genuine love for Juliet" },
        { question: "What is significant about Romeo and Juliet speaking a shared sonnet?", answer: "It shows their perfect connection and poetic bond" },
        { question: "Why is Mercutio's death the turning point of the play?", answer: "It moves the play from comedy to tragedy and sets off the tragic events" },
        { question: "What does Romeo's impulsive killing of Tybalt demonstrate?", answer: "His inability to control his actions despite his love for Juliet" },
        { question: "What is the dramatic irony in Juliet's fear of the vault?", answer: "Her fears come true when she wakes to find Romeo dead among ghosts" },
        { question: "What does Juliet's courage in drinking the potion show?", answer: "Her willingness to risk everything for Romeo" },
        { question: "Why is the final scene called catastrophic?", answer: "Both lovers die, but their deaths finally end the family feud" },
        { question: "What does Romeo's refusal to wait show about him?", answer: "His impulsiveness and inability to trust in plans, despite consequences" },
        { question: "What is the tragic irony of Romeo and Juliet's deaths?", answer: "They die because of miscommunication, not actual incompatibility" },
        { question: "What does the Prince's final judgment suggest?", answer: "That the feuding families are responsible for the lovers' deaths" }
    ]
};

// State Management
let currentMode = null;
let currentWeek = null;
let currentQuestionIndex = 0;
let currentQuestions = [];
let learnedTerms = JSON.parse(localStorage.getItem('learnedTerms')) || {};
let studyStats = JSON.parse(localStorage.getItem('studyStats')) || { studied: 0, mastered: 0, streak: 0, correct: 0, total: 0 };

// Initialize
document.addEventListener('DOMContentLoaded', () => {
    setupNavigation();
    setupReadingGuideNav();
    initializeProgress();
});

// Navigation
function setupNavigation() {
    // Use new top nav buttons
    document.querySelectorAll('.nav-btn').forEach(btn => {
        btn.addEventListener('click', (e) => {
            document.querySelectorAll('.nav-btn').forEach(b => b.classList.remove('active'));
            document.querySelectorAll('.section').forEach(s => s.classList.remove('active'));
            e.target.classList.add('active');
            const sectionId = e.target.dataset.section;
            document.getElementById(sectionId).classList.add('active');
        });
    });
}

// Reading Guide Navigation
function setupReadingGuideNav() {
    const readingNavBtns = document.querySelectorAll('.reading-nav-btn');
    const readingSections = document.querySelectorAll('.reading-section');
    
    readingNavBtns.forEach(btn => {
        btn.addEventListener('click', (e) => {
            // Remove active class from all buttons and sections
            readingNavBtns.forEach(b => b.classList.remove('active'));
            readingSections.forEach(s => s.classList.remove('active'));
            
            // Add active class to clicked button and corresponding section
            e.target.classList.add('active');
            const sectionId = e.target.dataset.readingSection;
            document.getElementById(sectionId).classList.add('active');
        });
    });
}

// Get questions for a week
function getQuestionsForWeek(week) {
    if (week === 'plot') return plotQuestions;
    if (week === 'all') {
        let all = [];
        [1, 2, 3, 5, 6].forEach(w => all = [...all, ...vocabularyData[w]]);
        return all;
    }
    return vocabularyData[week] || [];
}

// ===== LEARN MODE =====
window.startLearnMode = function(week) {
    currentMode = 'learn';
    currentWeek = week;
    currentQuestionIndex = 0;
    currentQuestions = getQuestionsForWeek(week);
    document.querySelector('.nav-btn[data-section="learn"]').click();
    document.getElementById('learn-set-selector').classList.add('hidden');
    document.getElementById('learn-mode-active').classList.remove('hidden');
    renderLearnMode();
};

function renderLearnMode() {
    const title = getSetTitle(currentWeek);
    document.getElementById('learn-set-title').textContent = title;
    
    updateLearnProgress();
    
    document.getElementById('learn-prev-btn').onclick = () => {
        if (currentQuestionIndex > 0) {
            currentQuestionIndex--;
            updateLearnProgress();
        }
    };
    
    document.getElementById('learn-next-btn').onclick = () => {
        if (currentQuestionIndex < currentQuestions.length - 1) {
            currentQuestionIndex++;
            updateLearnProgress();
        }
    };
}

function updateLearnProgress() {
    const q = currentQuestions[currentQuestionIndex];
    const progress = `${currentQuestionIndex + 1}/${currentQuestions.length}`;
    const progressPercent = ((currentQuestionIndex + 1) / currentQuestions.length * 100).toFixed(0);
    
    document.getElementById('learn-progress').textContent = progress;
    document.getElementById('learn-progress-bar').style.width = progressPercent + '%';
    
    document.getElementById('learn-question').textContent = q.question;
    document.getElementById('learn-answer').textContent = q.answer;
    
    document.getElementById('learn-prev-btn').disabled = currentQuestionIndex === 0;
    document.getElementById('learn-next-btn').disabled = currentQuestionIndex === currentQuestions.length - 1;
}

// ===== FLASHCARD MODE =====
window.startFlashcards = function(week) {
    currentMode = 'flashcards';
    currentWeek = week;
    currentQuestionIndex = 0;
    currentQuestions = getQuestionsForWeek(week).slice().sort(() => Math.random() - 0.5);
    studyStats.correct = 0;
    studyStats.total = 0;
    document.querySelector('.nav-btn[data-section="flashcards"]').click();
    document.getElementById('fc-mode-select').classList.add('hidden');
    document.getElementById('fc-study-mode').classList.remove('hidden');
    document.getElementById('fc-results').classList.add('hidden');
    renderFlashcards();
};

function renderFlashcards() {
    const title = getSetTitle(currentWeek);
    document.getElementById('fc-set-title').textContent = title;
    document.getElementById('fc-card-count').textContent = `${currentQuestions.length} cards`;
    
    // Set up flashcard click handler for flip
    const flashcardDisplay = document.getElementById('flashcard-display');
    flashcardDisplay.onclick = function(e) {
        e.preventDefault();
        e.stopPropagation();
        toggleFlashcard();
    };
    
    // Skip button
    document.getElementById('fc-skip-btn').onclick = () => {
        studyStats.total++;
        nextFlashcard();
    };
    
    // Need help button
    document.getElementById('fc-incorrect-btn').onclick = () => {
        studyStats.total++;
        nextFlashcard();
    };
    
    // Got it button
    document.getElementById('fc-correct-btn').onclick = () => {
        const currentQ = currentQuestions[currentQuestionIndex];
        learnedTerms[currentQ.question] = true;
        studyStats.mastered = Object.values(learnedTerms).filter(v => v).length;
        studyStats.correct++;
        studyStats.total++;
        nextFlashcard();
    };
    
    // Navigation buttons
    document.getElementById('fc-prev-btn').onclick = () => {
        if (currentQuestionIndex > 0) {
            currentQuestionIndex--;
            updateFlashcardDisplay();
        }
    };
    
    document.getElementById('fc-next-btn').onclick = () => {
        if (currentQuestionIndex < currentQuestions.length - 1) {
            currentQuestionIndex++;
            updateFlashcardDisplay();
        }
    };
    
    document.getElementById('fc-shuffle-btn').onclick = () => {
        currentQuestions.sort(() => Math.random() - 0.5);
        currentQuestionIndex = 0;
        updateFlashcardDisplay();
    };
    
    // Back and Retake buttons in results
    document.getElementById('fc-back-btn').onclick = () => {
        document.getElementById('fc-mode-select').classList.remove('hidden');
        document.getElementById('fc-study-mode').classList.add('hidden');
        document.getElementById('fc-results').classList.add('hidden');
    };
    
    document.getElementById('fc-retake-btn').onclick = () => {
        startFlashcards(currentWeek);
    };
    
    // Initialize first card
    updateFlashcardDisplay();
}

function updateFlashcardDisplay() {
    const q = currentQuestions[currentQuestionIndex];
    const progress = `${currentQuestionIndex + 1}/${currentQuestions.length}`;
    const progressPercent = ((currentQuestionIndex + 1) / currentQuestions.length * 100).toFixed(0);
    
    // Update progress display
    document.getElementById('fc-progress-text').textContent = progress;
    document.getElementById('fc-progress-fill').style.width = progressPercent + '%';
    
    // Update stat counters
    document.getElementById('fc-correct-count').textContent = studyStats.correct;
    document.getElementById('fc-total-count').textContent = studyStats.total;
    
    // Update accuracy
    const accuracy = studyStats.total > 0 ? Math.round((studyStats.correct / studyStats.total) * 100) : '--';
    document.getElementById('fc-accuracy').textContent = `Accuracy: ${accuracy}${accuracy !== '--' ? '%' : ''}`;
    
    // Update card content
    document.getElementById('flashcard-text').textContent = q.question;
    document.getElementById('flashcard-answer-text').textContent = q.answer;
    
    // Reset card state - show question, hide answer
    const card = document.getElementById('flashcard-display');
    card.dataset.isFlipped = 'false';
    card.classList.remove('flipped');
    document.getElementById('fc-card-label').textContent = 'Question';
    
    // Ensure question is visible and answer is hidden
    document.getElementById('flashcard-text').classList.remove('hidden');
    document.getElementById('flashcard-answer-text').classList.add('hidden');
    
    // Update button states
    document.getElementById('fc-prev-btn').disabled = currentQuestionIndex === 0;
    document.getElementById('fc-next-btn').disabled = currentQuestionIndex === currentQuestions.length - 1;
}

function toggleFlashcard() {
    const card = document.getElementById('flashcard-display');
    const isFlipped = card.dataset.isFlipped === 'true';
    const answerEl = document.getElementById('flashcard-answer-text');
    const questionEl = document.getElementById('flashcard-text');
    const labelEl = document.getElementById('fc-card-label');
    
    if (!isFlipped) {
        // Show answer side
        questionEl.classList.add('hidden');
        answerEl.classList.remove('hidden');
        card.classList.add('flipped');
        card.dataset.isFlipped = 'true';
        labelEl.textContent = 'Answer';
    } else {
        // Show question side
        answerEl.classList.add('hidden');
        questionEl.classList.remove('hidden');
        card.classList.remove('flipped');
        card.dataset.isFlipped = 'false';
        labelEl.textContent = 'Question';
    }
}

function nextFlashcard() {
    if (currentQuestionIndex < currentQuestions.length - 1) {
        currentQuestionIndex++;
        updateFlashcardDisplay();
    } else {
        showFlashcardResults();
    }
}

function showFlashcardResults() {
    const accuracy = studyStats.total > 0 ? Math.round((studyStats.correct / studyStats.total) * 100) : 0;
    
    // Hide study mode, show results
    document.getElementById('fc-study-mode').classList.add('hidden');
    document.getElementById('fc-results').classList.remove('hidden');
    
    // Update results display
    document.getElementById('fc-final-score').textContent = `${studyStats.correct}/${studyStats.total}`;
    document.getElementById('fc-final-accuracy').textContent = `Accuracy: ${accuracy}%`;
    document.getElementById('fc-breakdown-correct').textContent = studyStats.correct;
    document.getElementById('fc-breakdown-total').textContent = studyStats.total;
    document.getElementById('fc-breakdown-percent').textContent = `${accuracy}%`;
    
    updateProgressDisplay();
}

// ===== WRITE MODE =====
window.startWriteMode = function(week) {
    currentMode = 'write';
    currentWeek = week;
    currentQuestionIndex = 0;
    currentQuestions = getQuestionsForWeek(week).slice().sort(() => Math.random() - 0.5);
    studyStats.correct = 0;
    studyStats.total = 0;
    document.querySelector('.nav-btn[data-section="write"]').click();
    // Hide the selector and show the active write mode area
    const selector = document.getElementById('write-mode-select');
    const active = document.getElementById('write-study-mode');
    if (selector && active) {
        selector.classList.add('hidden');
        active.classList.remove('hidden');
    }
    renderWriteMode();
};

function renderWriteMode() {
    const title = getSetTitle(currentWeek);
    document.getElementById('write-set-title').textContent = title;
    
    updateWriteDisplay();
    
    document.getElementById('write-submit-btn').onclick = checkWriteAnswer;
    document.getElementById('write-skip-btn').onclick = () => {
        studyStats.total++;
        currentQuestionIndex++;
        if (currentQuestionIndex < currentQuestions.length) {
            updateWriteDisplay();
        } else {
            showWriteResults();
        }
    };
    
    document.getElementById('write-input').addEventListener('keypress', (e) => {
        if (e.key === 'Enter') checkWriteAnswer();
    });

    // Back to selector button
    const backBtn = document.getElementById('write-back-btn');
    if (backBtn) {
        backBtn.onclick = () => {
            const selector = document.getElementById('write-mode-select');
            const active = document.getElementById('write-study-mode');
            if (selector && active) {
                selector.classList.remove('hidden');
                active.classList.add('hidden');
            }
        };
    }
}

function updateWriteDisplay() {
    const q = currentQuestions[currentQuestionIndex];
    const progress = `${currentQuestionIndex + 1}/${currentQuestions.length}`;
    const progressPercent = ((currentQuestionIndex + 1) / currentQuestions.length * 100).toFixed(0);
    
    document.getElementById('write-progress').textContent = progress;
    document.getElementById('write-progress-bar').style.width = progressPercent + '%';
    document.getElementById('write-question').textContent = q.question;
    document.getElementById('write-input').value = '';
    document.getElementById('write-feedback').classList.add('hidden');
    document.getElementById('write-input').focus();
}

function checkWriteAnswer() {
    const input = document.getElementById('write-input').value.trim().toLowerCase();
    const correct = currentQuestions[currentQuestionIndex].answer.toLowerCase();
    const feedback = document.getElementById('write-feedback');
    
    let isCorrect = false;
    if (input === correct) {
        isCorrect = true;
    } else {
        const inputWords = input.split(' ');
        const correctWords = correct.split(' ');
        const matchCount = inputWords.filter(w => correctWords.includes(w)).length;
        if (matchCount >= Math.ceil(correctWords.length * 0.7)) {
            isCorrect = true;
        }
    }
    
    if (isCorrect) {
        feedback.classList.remove('incorrect');
        feedback.innerHTML = `<strong>✓ Correct!</strong> "${currentQuestions[currentQuestionIndex].answer}"`;
        studyStats.correct++;
        learnedTerms[currentQuestions[currentQuestionIndex].question] = true;
    } else {
        feedback.classList.add('incorrect');
        feedback.innerHTML = `<strong>✗ Not quite.</strong> The answer is: "${currentQuestions[currentQuestionIndex].answer}"`;
    }
    
    feedback.classList.remove('hidden');
    studyStats.total++;
    
    setTimeout(() => {
        currentQuestionIndex++;
        if (currentQuestionIndex < currentQuestions.length) {
            updateWriteDisplay();
        } else {
            showWriteResults();
        }
    }, 2000);
}

function showWriteResults() {
    document.querySelector('.write-prompt').style.display = 'none';
    document.querySelector('.write-buttons').style.display = 'none';
    
    const accuracy = Math.round((studyStats.correct / studyStats.total) * 100) || 0;
    const resultsHtml = `
        <div style="text-align: center; padding: 40px; background: linear-gradient(135deg, #F9F9F9 0%, #FFFFFF 100%); border-radius: 16px; margin-top: 30px;">
            <h3 style="font-size: 1.5em; margin-bottom: 20px;">Session Complete! 🎉</h3>
            <div style="font-size: 2.5em; font-weight: 700; color: #007AFF; margin: 20px 0;">
                ${studyStats.correct}/${studyStats.total} Correct
            </div>
            <div style="font-size: 1.5em; margin: 20px 0;">
                Accuracy: ${accuracy}%
            </div>
            <button class="btn btn-primary" onclick="location.reload()" style="margin-top: 20px;">Try Another Set</button>
        </div>
    `;
    document.querySelector('.write-container').innerHTML += resultsHtml;
    updateProgressDisplay();
}

// ===== TEST MODE =====
window.startTestMode = function(week) {
    currentMode = 'test';
    currentWeek = week;
    currentQuestionIndex = 0;
    studyStats.correct = 0;
    studyStats.total = 0;
    if (week === 'all') {
        currentQuestions = [...Object.values(vocabularyData).flat(), ...plotQuestions].sort(() => Math.random() - 0.5);
    } else {
        currentQuestions = getQuestionsForWeek(week).sort(() => Math.random() - 0.5);
    }
    document.querySelector('.nav-btn[data-section="test"]').click();
    document.getElementById('test-mode-select').classList.add('hidden');
    document.getElementById('test-content').classList.remove('hidden');
    document.getElementById('test-results').classList.add('hidden');
    const title = week === 'all' ? 'Full Exam' : getSetTitle(week);
    document.getElementById('test-title').textContent = title;
    renderTestQuestion();
};

function renderTestQuestion() {
    const q = currentQuestions[currentQuestionIndex];
    const progress = `Question ${currentQuestionIndex + 1}/${currentQuestions.length}`;
    
    document.getElementById('test-question').innerHTML = `
        <div style="font-size: 1.2em; font-weight: 600; margin-bottom: 10px;">${progress}</div>
        <div style="font-size: 1.1em;">${q.question}</div>
    `;
    
    const answers = generateAnswerOptions(q.answer);
    const optionsDiv = document.getElementById('test-options');
    optionsDiv.innerHTML = '';
    
    answers.forEach((answer) => {
        const btn = document.createElement('button');
        btn.className = 'test-option';
        btn.textContent = answer;
        btn.onclick = () => selectTestAnswer(btn, answer, q.answer, answers);
        optionsDiv.appendChild(btn);
    });
    
    document.getElementById('test-prev-btn').disabled = currentQuestionIndex === 0;
    document.getElementById('test-prev-btn').onclick = () => {
        if (currentQuestionIndex > 0) {
            currentQuestionIndex--;
            renderTestQuestion();
        }
    };
}

function selectTestAnswer(btn, selected, correct, allAnswers) {
    const allBtns = document.querySelectorAll('.test-option');
    allBtns.forEach(b => b.disabled = true);
    
    btn.classList.add('selected');
    
    if (selected === correct) {
        btn.classList.remove('selected');
        btn.classList.add('correct');
        studyStats.correct++;
    } else {
        btn.classList.remove('selected');
        btn.classList.add('incorrect');
        allBtns.forEach(b => {
            if (b.textContent === correct) {
                b.classList.add('correct');
            }
        });
    }
    
    studyStats.total++;
}

function generateAnswerOptions(correctAnswer) {
    const answers = [correctAnswer];
    const distractors = [
        'incorrect answer one',
        'a common misconception',
        'a partially related concept'
    ];
    answers.push(...distractors);
    return answers.sort(() => Math.random() - 0.5);
}

// ===== PROGRESS TRACKING =====
function initializeProgress() {
    updateProgressDisplay();
}

function updateProgressDisplay() {
    const studied = Object.keys(learnedTerms).length;
    const mastered = Object.values(learnedTerms).filter(v => v).length;
    const accuracy = studyStats.total > 0 ? Math.round((studyStats.correct / studyStats.total) * 100) : 0;
    
    document.getElementById('stat-studied').textContent = studied;
    document.getElementById('stat-mastered').textContent = mastered;
    document.getElementById('stat-streak').textContent = '0';
    document.getElementById('stat-accuracy').textContent = accuracy + '%';
    
    // Set progress
    const setProgressHtml = [1, 2, 3, 'plot', 5, 6].map(w => {
        const qs = getQuestionsForWeek(w);
        const learned = qs.filter(q => learnedTerms[q.question]).length;
        const pct = Math.round((learned / qs.length) * 100);
        return `
            <div class="set-progress-item">
                <div class="item-name">${getSetTitle(w)}</div>
                <div class="item-progress">
                    <div class="item-progress-bar" style="width: ${pct}%"></div>
                </div>
            </div>
        `;
    }).join('');
    
    const progressContainer = document.getElementById('set-progress-list');
    if (progressContainer) {
        progressContainer.innerHTML = setProgressHtml;
    }
    
    // Save progress
    localStorage.setItem('learnedTerms', JSON.stringify(learnedTerms));
    localStorage.setItem('studyStats', JSON.stringify(studyStats));
}

function getSetTitle(week) {
    const titles = {
        1: 'Literary Terms',
        2: 'Grammar & Metaphor',
        3: 'Character Analysis',
        5: 'Thematic Vocabulary',
        6: 'Sonnets & Poetry',
        plot: 'Plot Questions'
    };
    return titles[week] || 'Unknown Set';
}

// Reading Guide helper functions
window.startReadingGuideFlashcards = function(section) {
    currentMode = 'flashcards';
    currentWeek = section;
    currentQuestionIndex = 0;
    currentQuestions = (readingGuideData[section] || []).slice().sort(() => Math.random() - 0.5);
    studyStats.correct = 0;
    studyStats.total = 0;
    document.querySelector('.nav-btn[data-section="flashcards"]').click();
    document.getElementById('fc-mode-select').classList.add('hidden');
    document.getElementById('fc-study-mode').classList.remove('hidden');
    document.getElementById('fc-results').classList.add('hidden');
    renderFlashcards();
};

window.startReadingGuideLearn = function(section) {
    currentMode = 'learn';
    currentWeek = section;
    currentQuestionIndex = 0;
    currentQuestions = readingGuideData[section] || [];
    document.querySelector('.nav-btn[data-section="learn"]').click();
    document.getElementById('learn-set-selector').classList.add('hidden');
    document.getElementById('learn-mode-active').classList.remove('hidden');
    renderLearnMode();
};

// Save progress periodically
setInterval(() => {
    updateProgressDisplay();
}, 5000);

// Global test submit
document.addEventListener('click', (e) => {
    if (e.target.id === 'test-submit-btn') {
        const accuracy = Math.round((studyStats.correct / studyStats.total) * 100) || 0;
        document.getElementById('test-content').classList.add('hidden');
        document.getElementById('test-results').classList.remove('hidden');
        document.getElementById('results-score').innerHTML = `
            <div style="font-size: 2.5em; font-weight: 700; color: #007AFF; margin: 20px 0;">
                ${studyStats.correct}/${studyStats.total} Correct
            </div>
            <div style="font-size: 1.5em; margin: 20px 0;">
                Score: ${accuracy}%
            </div>
        `;
        
        document.getElementById('test-retake-btn').onclick = () => {
            studyStats.correct = 0;
            studyStats.total = 0;
            document.getElementById('test-results').classList.add('hidden');
            document.getElementById('test-mode-select').classList.remove('hidden');
            document.getElementById('test-content').classList.add('hidden');
        };
        
        updateProgressDisplay();
    }
});

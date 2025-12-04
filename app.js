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
    // enforce lowercase rendering in case CSS is overridden
    try { document.body.style.textTransform = 'lowercase'; } catch (e) { /* noop */ }
    // AI settings modal wiring
    const aiOpen = document.getElementById('ai-settings-open');
    const aiModal = document.getElementById('ai-settings-modal');
    const aiClose = document.getElementById('ai-settings-close');
    const aiSave = document.getElementById('ai-settings-save');
    const aiCancel = document.getElementById('ai-settings-cancel');
    if (aiOpen) aiOpen.addEventListener('click', openAiSettings);
    if (aiClose) aiClose.addEventListener('click', closeAiSettings);
    if (aiCancel) aiCancel.addEventListener('click', closeAiSettings);
    if (aiSave) aiSave.addEventListener('click', saveAiSettings);
    // Populate modal fields from storage
    populateAiSettingsForm();
    // Modal event listeners (setup after DOM ready)
    const mlClose = document.getElementById('learn-modal-close');
    const mlPrev = document.getElementById('ml-prev');
    const mlNext = document.getElementById('ml-next');
    const learnOverlay = document.getElementById('learn-modal');
    if (mlClose) mlClose.addEventListener('click', hideLearnModal);
    if (mlPrev) mlPrev.addEventListener('click', () => { if (ml_index > 0) { ml_index--; updateLearnModal(); } });
    if (mlNext) mlNext.addEventListener('click', () => { if (ml_index < ml_questions.length - 1) { ml_index++; updateLearnModal(); } });
    if (learnOverlay) learnOverlay.addEventListener('click', (ev) => { if (ev.target === learnOverlay) hideLearnModal(); });

    const mcClose = document.getElementById('cards-modal-close');
    const mcPrev = document.getElementById('mc-prev');
    const mcNext = document.getElementById('mc-next');
    const mcSkip = document.getElementById('mc-skip');
    const mcCorrect = document.getElementById('mc-correct');
    const mcCard = document.getElementById('mc-card-display');
    const cardsOverlay = document.getElementById('cards-modal');
    if (mcClose) mcClose.addEventListener('click', hideCardsModal);
    if (mcPrev) mcPrev.addEventListener('click', () => { if (mc_index > 0) { mc_index--; updateCardsModal(); } });
    if (mcNext) mcNext.addEventListener('click', () => { if (mc_index < mc_questions.length - 1) { mc_index++; updateCardsModal(); } });
    if (mcSkip) mcSkip.addEventListener('click', () => { if (mc_index < mc_questions.length - 1) { mc_index++; updateCardsModal(); } else hideCardsModal(); });
    if (mcCorrect) mcCorrect.addEventListener('click', () => { learnedTerms[mc_questions[mc_index].question] = true; updateProgressDisplay(); if (mc_index < mc_questions.length - 1) { mc_index++; updateCardsModal(); } else hideCardsModal(); });
    if (mcCard) mcCard.addEventListener('click', () => { const answer = document.getElementById('mc-answer'); const label = document.getElementById('mc-card-label'); if (answer.classList.contains('hidden')) { answer.classList.remove('hidden'); label.textContent = 'Answer'; } else { answer.classList.add('hidden'); label.textContent = 'Question'; } });
    // open-full buttons
    const mlOpenFull = document.getElementById('ml-open-full');
    const mcOpenFull = document.getElementById('mc-open-full');
    if (mlOpenFull) mlOpenFull.addEventListener('click', openFullLearnFromModal);
    if (mcOpenFull) mcOpenFull.addEventListener('click', openFullCardsFromModal);

    // choose set toggles
    const learnChooseToggle = document.getElementById('learn-choose-toggle');
    const fcChooseToggle = document.getElementById('fc-choose-toggle');
    if (learnChooseToggle) learnChooseToggle.addEventListener('click', () => {
        const selector = document.getElementById('learn-set-selector');
        if (selector) {
            selector.classList.toggle('hidden');
            // toggle the button label between 'Choose set' and 'Back'
            learnChooseToggle.textContent = selector.classList.contains('hidden') ? 'Choose set' : 'Back';
        }
    });
    if (fcChooseToggle) fcChooseToggle.addEventListener('click', () => {
        const selector = document.getElementById('fc-mode-select');
        if (selector) {
            selector.classList.toggle('hidden');
            // toggle the button label between 'Choose set' and 'Back'
            fcChooseToggle.textContent = selector.classList.contains('hidden') ? 'Choose set' : 'Back';
        }
    });
    if (cardsOverlay) cardsOverlay.addEventListener('click', (ev) => { if (ev.target === cardsOverlay) hideCardsModal(); });
    // Close AI modal on Escape key
    document.addEventListener('keydown', (ev) => {
        if (ev.key === 'Escape') {
            const aiModalEl = document.getElementById('ai-settings-modal');
            if (aiModalEl && !aiModalEl.classList.contains('hidden')) closeAiSettings();
        }
    });
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
            // default behaviour: Learn / Flashcards start a mixed random deck
            if (sectionId === 'learn') {
                startLearnMode('all');
                return;
            }
            if (sectionId === 'flashcards') {
                startFlashcards('all');
                return;
            }
            document.getElementById(sectionId).classList.add('active');
        });
    });
}

// ---------------- AI Settings & Helpers ----------------
function loadAiConfig() {
    return {
        enabled: localStorage.getItem('aiEnabled') === 'true',
        provider: localStorage.getItem('aiProvider') || 'qemini',
        endpoint: localStorage.getItem('aiEndpoint') || 'https://api.qemini.ai/v1/chat/completions',
        apiKey: localStorage.getItem('aiApiKey') || ''
    };
}

function saveAiConfig(cfg) {
    localStorage.setItem('aiEnabled', cfg.enabled ? 'true' : 'false');
    localStorage.setItem('aiProvider', cfg.provider || 'qemini');
    localStorage.setItem('aiEndpoint', cfg.endpoint || '');
    localStorage.setItem('aiApiKey', cfg.apiKey || '');
}

function populateAiSettingsForm() {
    const cfg = loadAiConfig();
    const providerEl = document.getElementById('ai-provider');
    const endpointEl = document.getElementById('ai-endpoint');
    const keyEl = document.getElementById('ai-api-key');
    const enabledEl = document.getElementById('ai-enabled');
    if (providerEl) providerEl.value = cfg.provider;
    if (endpointEl) endpointEl.value = cfg.endpoint;
    if (keyEl) keyEl.value = cfg.apiKey;
    if (enabledEl) enabledEl.checked = cfg.enabled;
}

function openAiSettings() {
    const modal = document.getElementById('ai-settings-modal');
    if (modal) {
        modal.classList.remove('hidden');
        const panel = modal.querySelector('.modal-panel');
        if (panel) panel.classList.add('open');
        // prevent page scrolling while modal open
        document.body.classList.add('modal-open');
    }
}

function closeAiSettings() {
    const modal = document.getElementById('ai-settings-modal');
    if (modal) {
        const panel = modal.querySelector('.modal-panel');
        if (panel) panel.classList.remove('open');
        modal.classList.add('hidden');
    }
    // restore scrolling
    document.body.classList.remove('modal-open');
    populateAiSettingsForm();
}

function saveAiSettings() {
    const providerEl = document.getElementById('ai-provider');
    const endpointEl = document.getElementById('ai-endpoint');
    const keyEl = document.getElementById('ai-api-key');
    const enabledEl = document.getElementById('ai-enabled');
    const cfg = {
        provider: providerEl ? providerEl.value : 'qemini',
        endpoint: endpointEl ? endpointEl.value.trim() : '',
        apiKey: keyEl ? keyEl.value.trim() : '',
        enabled: enabledEl ? enabledEl.checked : false
    };
    saveAiConfig(cfg);
    closeAiSettings();
}

async function aiGenerateQuestions(week, maxQuestions = 20) {
    const cfg = loadAiConfig();
    if (!cfg.enabled || !cfg.apiKey || !cfg.endpoint) return null;
    // Build a short prompt asking for JSON list of {question,answer}
    const setTitle = getSetTitle(week) || 'unknown set';
    const prompt = `Generate up to ${maxQuestions} concise question-answer pairs for the study set titled: "${setTitle}". Return only valid JSON: an array of objects with keys \"question\" and \"answer\". Example: [{"question":"Q?","answer":"A"}, ...]. Avoid commentary.`;
    try {
        const body = {
            model: 'gpt-4o-mini',
            messages: [{ role: 'user', content: prompt }],
            max_tokens: 1500,
            temperature: 0.6
        };
        const resp = await fetch(cfg.endpoint, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${cfg.apiKey}`
            },
            body: JSON.stringify(body)
        });
        const data = await resp.json();
        // Try to extract JSON from common responses
        let text = '';
        if (data.choices && data.choices[0] && data.choices[0].message && data.choices[0].message.content) {
            text = data.choices[0].message.content;
        } else if (data.choices && data.choices[0] && data.choices[0].text) {
            text = data.choices[0].text;
        } else if (typeof data === 'string') {
            text = data;
        } else if (data.output) {
            text = JSON.stringify(data.output);
        }
        // Locate JSON array in text
        const jsonStart = text.indexOf('[');
        const jsonEnd = text.lastIndexOf(']');
        if (jsonStart !== -1 && jsonEnd !== -1 && jsonEnd > jsonStart) {
            const raw = text.slice(jsonStart, jsonEnd + 1);
            const parsed = JSON.parse(raw);
            if (Array.isArray(parsed) && parsed.length > 0) return parsed.map(p => ({ question: String(p.question || '').trim(), answer: String(p.answer || '').trim() }));
        }
        // If we didn't get parsable JSON, return null so caller falls back
        return null;
    } catch (err) {
        console.warn('AI generate error', err);
        return null;
    }
}

async function aiCheckAnswer(userText, correctText) {
    const cfg = loadAiConfig();
    if (!cfg.enabled || !cfg.apiKey || !cfg.endpoint) return null;
    const prompt = `You are a helpful grader. Given the correct answer: "${correctText}" and the student's answer: "${userText}", respond with a JSON object {"match": true|false, "confidence": 0-1} indicating whether the student's answer should be considered correct (allow for synonyms, short paraphrases, and small typos). Reply with only the JSON object.`;
    try {
        const body = {
            model: 'gpt-4o-mini',
            messages: [{ role: 'user', content: prompt }],
            max_tokens: 200,
            temperature: 0.0
        };
        const resp = await fetch(cfg.endpoint, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${cfg.apiKey}`
            },
            body: JSON.stringify(body)
        });
        const data = await resp.json();
        let text = '';
        if (data.choices && data.choices[0] && data.choices[0].message && data.choices[0].message.content) {
            text = data.choices[0].message.content;
        } else if (data.choices && data.choices[0] && data.choices[0].text) {
            text = data.choices[0].text;
        } else {
            text = JSON.stringify(data);
        }
        // find first { ... } JSON in text
        const objStart = text.indexOf('{');
        const objEnd = text.lastIndexOf('}');
        if (objStart !== -1 && objEnd !== -1 && objEnd > objStart) {
            const raw = text.slice(objStart, objEnd + 1);
            const parsed = JSON.parse(raw);
            if (typeof parsed.match === 'boolean') return { match: parsed.match, confidence: parsed.confidence || (parsed.match ? 0.9 : 0.1) };
        }
        return null;
    } catch (err) {
        console.warn('AI check error', err);
        return null;
    }
}

// AI-based distractor generation: ask the model to produce plausible wrong options
async function aiGenerateDistractors(correctAnswer, questionText, contextQuestions = [], num = 3) {
    const cfg = loadAiConfig();
    if (!cfg.enabled || !cfg.apiKey || !cfg.endpoint) return null;
    try {
        // Build a short context snippet from up to 3 other Q/A pairs to help the model stay on-topic
        const ctxExamples = (Array.isArray(contextQuestions) ? contextQuestions.filter(q => q && q.question && q.answer) : [])
            .slice(0, 3)
            .map(q => `Q: ${String(q.question).trim()}\nA: ${String(q.answer).trim()}`)
            .join('\n---\n');

        const prompt = `You are a question-distractor generator. Here is the question and correct answer:\n` +
            `Question: "${String(questionText).trim()}"\nCorrect answer: "${String(correctAnswer).trim()}"\n` +
            (ctxExamples ? `\nHere are a few related Q/A examples to keep the style consistent:\n${ctxExamples}\n` : '') +
            `\nProvide ${num} plausible multiple-choice wrong answers (distractors) as a JSON array of strings. ` +
            `Include at least one opposite/antonym when applicable, one common misconception that a student might reasonably choose, and one generic but plausible incorrect option. ` +
            `Do NOT include the correct answer; keep each option concise (preferably under 8 words). Return ONLY a JSON array like ["opt1","opt2",...].`;

        const body = {
            model: 'gpt-4o-mini',
            messages: [{ role: 'user', content: prompt }],
            max_tokens: 400,
            temperature: 0.7
        };
        const resp = await fetch(cfg.endpoint, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${cfg.apiKey}`
            },
            body: JSON.stringify(body)
        });
        const data = await resp.json();
        let text = '';
        if (data.choices && data.choices[0] && data.choices[0].message && data.choices[0].message.content) {
            text = data.choices[0].message.content;
        } else if (data.choices && data.choices[0] && data.choices[0].text) {
            text = data.choices[0].text;
        } else if (typeof data === 'string') {
            text = data;
        } else if (data.output) {
            text = JSON.stringify(data.output);
        }
        // Extract first JSON array
        const jsonStart = text.indexOf('[');
        const jsonEnd = text.lastIndexOf(']');
        if (jsonStart !== -1 && jsonEnd !== -1 && jsonEnd > jsonStart) {
            const raw = text.slice(jsonStart, jsonEnd + 1);
            const parsed = JSON.parse(raw);
            if (Array.isArray(parsed) && parsed.length > 0) return parsed.map(p => String(p).trim()).filter(Boolean);
        }
        return null;
    } catch (err) {
        console.warn('aiGenerateDistractors error', err);
        return null;
    }
}

function setActiveSection(sectionId) {
    // update nav buttons
    document.querySelectorAll('.nav-btn').forEach(b => b.classList.remove('active'));
    const navBtn = document.querySelector(`.nav-btn[data-section="${sectionId}"]`);
    if (navBtn) navBtn.classList.add('active');
    // hide sections
    document.querySelectorAll('.section').forEach(s => s.classList.remove('active'));
    const sectionEl = document.getElementById(sectionId);
    if (sectionEl) sectionEl.classList.add('active');
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
    // reading guide sections (summary, characters, themes, keylines, keyscenes)
    if (readingGuideData[week]) return readingGuideData[week];
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
    setActiveSection('learn');
    // mark random sets for visual tweaks
    const learnSection = document.getElementById('learn');
    if (learnSection) {
        if (week === 'all') learnSection.classList.add('random-set'); else learnSection.classList.remove('random-set');
    }
    document.getElementById('learn-set-selector').classList.add('hidden');
    // ensure the choose toggle resets to default label
    const learnToggle = document.getElementById('learn-choose-toggle');
    if (learnToggle) learnToggle.textContent = 'Choose set';
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
    document.getElementById('learn-answer').textContent = String(q.answer).toLowerCase();
    
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
    setActiveSection('flashcards');
    // mark random sets for visual tweaks
    const fcSection = document.getElementById('flashcards');
    if (fcSection) {
        if (week === 'all') fcSection.classList.add('random-set'); else fcSection.classList.remove('random-set');
    }
    document.getElementById('fc-mode-select').classList.add('hidden');
    // reset choose-toggle label if present
    const fcToggle = document.getElementById('fc-choose-toggle');
    if (fcToggle) fcToggle.textContent = 'Choose set';
    document.getElementById('fc-study-mode').classList.remove('hidden');
    document.getElementById('fc-results').classList.add('hidden');
    document.getElementById('fc-results').classList.remove('active');
    document.getElementById('fc-results').classList.remove('fade-out');
    renderFlashcards();
};

function renderFlashcards() {
    const title = getSetTitle(currentWeek);
    document.getElementById('fc-set-title').textContent = title;
    // If the set is random, show 'random' but display it in lowercase as required
    // (getSetTitle already returns lowercase)
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
        const resultsScreen = document.getElementById('fc-results');
        resultsScreen.classList.add('fade-out');
        setTimeout(() => {
            resultsScreen.classList.remove('active');
            resultsScreen.classList.remove('fade-out');
            resultsScreen.classList.add('hidden');
            document.getElementById('fc-mode-select').classList.remove('hidden');
            document.getElementById('fc-study-mode').classList.add('hidden');
        }, 400);
    };
    
    document.getElementById('fc-retake-btn').onclick = () => {
        const resultsScreen = document.getElementById('fc-results');
        resultsScreen.classList.add('fade-out');
        setTimeout(() => {
            resultsScreen.classList.remove('active');
            resultsScreen.classList.remove('fade-out');
            resultsScreen.classList.add('hidden');
            startFlashcards(currentWeek);
        }, 400);
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
    document.getElementById('flashcard-answer-text').textContent = String(q.answer).toLowerCase();
    
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
    
    // Show results overlay on top of flashcards
    const resultsScreen = document.getElementById('fc-results');
    resultsScreen.classList.remove('hidden');
    resultsScreen.classList.add('active');
    
    // Update results display
    document.getElementById('fc-final-score').textContent = `${studyStats.correct}/${studyStats.total}`;
    document.getElementById('fc-final-accuracy').textContent = `Accuracy: ${accuracy}%`;
    document.getElementById('fc-breakdown-correct').textContent = studyStats.correct;
    document.getElementById('fc-breakdown-total').textContent = studyStats.total;
    document.getElementById('fc-breakdown-percent').textContent = `${accuracy}%`;
    
    updateProgressDisplay();
}

// ===== WRITE MODE =====
window.startWriteMode = async function(week) {
    currentMode = 'write';
    currentWeek = week;
    currentQuestionIndex = 0;
    studyStats.correct = 0;
    studyStats.total = 0;
    setActiveSection('write');
    // mark random sets for visual tweaks
    const wSection = document.getElementById('write');
    if (wSection) {
        if (week === 'all') wSection.classList.add('random-set'); else wSection.classList.remove('random-set');
    }
    // Hide the selector and show the active write mode area
    const selector = document.getElementById('write-mode-select');
    const active = document.getElementById('write-study-mode');
    if (selector && active) {
        selector.classList.add('hidden');
        active.classList.remove('hidden');
    }
    // If AI is enabled, try to generate questions from the AI; otherwise use the local pool
    const cfg = loadAiConfig();
    if (cfg.enabled && cfg.apiKey && cfg.endpoint) {
        const qEl = document.getElementById('write-question');
        const inputEl = document.getElementById('write-input');
        const submitBtn = document.getElementById('write-submit-btn');
        if (qEl) qEl.textContent = 'Generating questions using AI — please wait...';
        if (inputEl) { inputEl.disabled = true; }
        if (submitBtn) { submitBtn.disabled = true; }
        const aiQs = await aiGenerateQuestions(week, 20);
        if (Array.isArray(aiQs) && aiQs.length > 0) {
            currentQuestions = aiQs.slice().sort(() => Math.random() - 0.5);
        } else {
            currentQuestions = getQuestionsForWeek(week).slice().sort(() => Math.random() - 0.5);
        }
        if (inputEl) { inputEl.disabled = false; }
        if (submitBtn) { submitBtn.disabled = false; }
    } else {
        currentQuestions = getQuestionsForWeek(week).slice().sort(() => Math.random() - 0.5);
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
            // Hide the write active area and return to the Study Sets view
            const selector = document.getElementById('write-mode-select');
            const active = document.getElementById('write-study-mode');
            if (selector) selector.classList.remove('hidden');
            if (active) active.classList.add('hidden');
            setActiveSection('study');
        };
    }
}

function updateWriteDisplay() {
    // Guard against missing question set
    if (!currentQuestions || currentQuestions.length === 0) {
        const qEmpty = document.getElementById('write-question');
        if (qEmpty) qEmpty.textContent = 'No questions available for this set.';
        const inputEl = document.getElementById('write-input');
        if (inputEl) inputEl.disabled = true;
        return;
    }

    const q = currentQuestions[currentQuestionIndex];
    const progress = `${currentQuestionIndex + 1}/${currentQuestions.length}`;
    const progressPercent = ((currentQuestionIndex + 1) / currentQuestions.length * 100).toFixed(0);

    const progTextEl = document.getElementById('write-progress');
    if (progTextEl) progTextEl.textContent = progress;
    const progBarEl = document.getElementById('write-progress-bar');
    if (progBarEl) progBarEl.style.width = progressPercent + '%';

    const qEl = document.getElementById('write-question');
    if (qEl) qEl.textContent = q.question;
    const inputEl = document.getElementById('write-input');
    if (inputEl) {
        inputEl.value = '';
        inputEl.disabled = false;
        inputEl.focus();
    }

    const feedbackEl = document.getElementById('write-feedback');
    if (feedbackEl) feedbackEl.classList.add('hidden');

    // Update mini stats if present
    const correctEl = document.getElementById('write-correct-count');
    const totalEl = document.getElementById('write-total-count');
    if (correctEl) correctEl.textContent = studyStats.correct || 0;
    if (totalEl) totalEl.textContent = studyStats.total || 0;
}

async function checkWriteAnswer() {
    const input = document.getElementById('write-input').value.trim();
    const correct = currentQuestions[currentQuestionIndex].answer;
    const feedback = document.getElementById('write-feedback');

    // If AI grading is enabled try calling the AI grader first
    let aiResult = null;
    const cfg = loadAiConfig();
    if (cfg.enabled && cfg.apiKey && cfg.endpoint) {
        // show checking state
        if (feedback) {
            feedback.classList.remove('incorrect');
            feedback.classList.remove('hidden');
            feedback.textContent = 'Checking answer with AI...';
        }
        aiResult = await aiCheckAnswer(input, correct).catch(e => { console.warn('aiCheckAnswer failed', e); return null; });
    }

    let isCorrect = false;
    if (aiResult && typeof aiResult.match === 'boolean') {
        isCorrect = aiResult.match;
    } else {
        // Fallback to local heuristic
        isCorrect = isAnswerMatch(input, correct);
    }

    if (isCorrect) {
        if (feedback) {
            feedback.classList.remove('incorrect');
            feedback.innerHTML = `<strong>✓ Correct!</strong> "${String(currentQuestions[currentQuestionIndex].answer).toLowerCase()}"`;
        }
        studyStats.correct++;
        learnedTerms[currentQuestions[currentQuestionIndex].question] = true;
    } else {
        if (feedback) {
            feedback.classList.add('incorrect');
            feedback.innerHTML = `<strong>✗ Not quite.</strong> The answer is: "${String(currentQuestions[currentQuestionIndex].answer).toLowerCase()}"`;
        }
    }

    if (feedback) feedback.classList.remove('hidden');
    studyStats.total++;

    // Auto-hide feedback and advance after 3 seconds
    setTimeout(() => {
        if (feedback) feedback.classList.add('hidden');
    }, 3000);

    setTimeout(() => {
        currentQuestionIndex++;
        if (currentQuestionIndex < currentQuestions.length) {
            updateWriteDisplay();
        } else {
            showWriteResults();
        }
    }, 3000);
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
    (async () => {
        currentMode = 'test';
        currentWeek = week;
        currentQuestionIndex = 0;
        studyStats.correct = 0;
        studyStats.total = 0;
        setActiveSection('test');
        // Try AI generation first when enabled
        const cfg = loadAiConfig();
        if (cfg.enabled && cfg.apiKey && cfg.endpoint) {
            const aiQs = await aiGenerateQuestions(week, 30);
            if (Array.isArray(aiQs) && aiQs.length > 0) {
                currentQuestions = aiQs.slice().sort(() => Math.random() - 0.5);
            } else {
                if (week === 'all') {
                    currentQuestions = [...Object.values(vocabularyData).flat(), ...plotQuestions].sort(() => Math.random() - 0.5);
                } else {
                    currentQuestions = getQuestionsForWeek(week).sort(() => Math.random() - 0.5);
                }
            }
        } else {
            if (week === 'all') {
                currentQuestions = [...Object.values(vocabularyData).flat(), ...plotQuestions].sort(() => Math.random() - 0.5);
            } else {
                currentQuestions = getQuestionsForWeek(week).sort(() => Math.random() - 0.5);
            }
        }
        // mark random sets for visual tweaks
        const tSection = document.getElementById('test');
        if (tSection) {
            if (week === 'all') tSection.classList.add('random-set'); else tSection.classList.remove('random-set');
        }
        document.getElementById('test-mode-select').classList.add('hidden');
        document.getElementById('test-content').classList.remove('hidden');
        document.getElementById('test-results').classList.add('hidden');
        // use normalized, lowercase titles (getSetTitle handles 'all' -> 'random')
        document.getElementById('test-title').textContent = getSetTitle(week);
        renderTestQuestion();
    })();
    // mark random sets for visual tweaks
};

async function renderTestQuestion() {
    const q = currentQuestions[currentQuestionIndex];
    const progress = `Question ${currentQuestionIndex + 1}/${currentQuestions.length}`;
    document.getElementById('test-question').innerHTML = `
        <div style="font-size: 1.2em; font-weight: 600; margin-bottom: 10px;">${progress}</div>
        <div style="font-size: 1.1em;">${String(q.question).toLowerCase()}</div>
    `;

    const optionsDiv = document.getElementById('test-options');
    optionsDiv.innerHTML = '';
    // temporary loading state
    const loading = document.createElement('div');
    loading.className = 'test-option';
    loading.textContent = 'generating options...';
    loading.style.opacity = '0.8';
    optionsDiv.appendChild(loading);

    // Require AI distractors. If AI is not configured, show an actionable message.
    const cfg = loadAiConfig();
    let answers = null;
    if (!cfg.enabled || !cfg.apiKey || !cfg.endpoint) {
        optionsDiv.innerHTML = '';
        const info = document.createElement('div');
        info.className = 'test-option';
        info.textContent = 'AI is required for this test mode. Open AI settings to enable.';
        const settingsBtn = document.createElement('button');
        settingsBtn.className = 'btn btn-secondary';
        settingsBtn.textContent = 'Open AI Settings';
        settingsBtn.onclick = openAiSettings;
        optionsDiv.appendChild(info);
        optionsDiv.appendChild(settingsBtn);
        return;
    }

    const aiDistractors = await aiGenerateDistractors(q.answer, q.question, currentQuestions, 3).catch(() => null);
    if (Array.isArray(aiDistractors) && aiDistractors.length >= 1) {
        const set = [String(q.answer).trim(), ...aiDistractors.slice(0, 3)];
        answers = set.map(s => String(s).toLowerCase()).filter(Boolean);
        for (let i = answers.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [answers[i], answers[j]] = [answers[j], answers[i]];
        }
        answers = answers.slice(0, 4);
    } else {
        // AI was configured but did not return valid distractors
        optionsDiv.innerHTML = '';
        const err = document.createElement('div');
        err.className = 'test-option';
        err.textContent = 'AI failed to generate options. Open AI settings or try again.';
        const settingsBtn = document.createElement('button');
        settingsBtn.className = 'btn btn-secondary';
        settingsBtn.textContent = 'Open AI Settings';
        settingsBtn.onclick = openAiSettings;
        optionsDiv.appendChild(err);
        optionsDiv.appendChild(settingsBtn);
        return;
    }

    // render
    optionsDiv.innerHTML = '';
    answers.forEach((answer) => {
        const btn = document.createElement('button');
        btn.className = 'test-option';
        btn.textContent = String(answer).toLowerCase();
        btn.dataset.value = String(answer);
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

    const selNorm = normalizeTextForCompare(selected);
    const corrNorm = normalizeTextForCompare(correct);

    const matched = isAnswerMatch(selected, correct) || selNorm === corrNorm;

    if (matched) {
        btn.classList.remove('selected');
        btn.classList.add('correct');
        studyStats.correct++;
    } else {
        btn.classList.remove('selected');
        btn.classList.add('incorrect');
        // mark the correct button if present
        allBtns.forEach(b => {
            if (normalizeTextForCompare(b.textContent) === corrNorm) {
                b.classList.add('correct');
            }
        });
    }

    studyStats.total++;
    // Auto-advance to next question after a short delay so the user sees feedback
    setTimeout(() => {
        if (currentQuestionIndex < currentQuestions.length - 1) {
            currentQuestionIndex++;
            renderTestQuestion();
        } else {
            // finished all questions
            showTestResults();
        }
    }, 600);
}

function showTestResults() {
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

function generateAnswerOptions(correctAnswer) {
    // New distractor strategy:
    // - correct answer (keep)
    // - opposite/antonym option when possible (e.g., left <-> right)
    // - a common misconception sampled from the pool (shares words but wrong)
    // - a generic incorrect option
    const cleanCorrect = String(correctAnswer || '').trim();
    const pool = [];
    if (Array.isArray(currentQuestions) && currentQuestions.length > 0) {
        currentQuestions.forEach(q => {
            if (q.answer && String(q.answer).trim().toLowerCase() !== cleanCorrect.toLowerCase()) pool.push(String(q.answer).trim());
        });
    }
    if (pool.length < 3) {
        plotQuestions.forEach(q => { if (q.answer && String(q.answer).trim().toLowerCase() !== cleanCorrect.toLowerCase()) pool.push(String(q.answer).trim()); });
        Object.values(vocabularyData).flat().forEach(q => { if (q.answer && String(q.answer).trim().toLowerCase() !== cleanCorrect.toLowerCase()) pool.push(String(q.answer).trim()); });
    }

    // Helper: pick random element(s)
    function pick(arr) { if (!arr || arr.length === 0) return null; return arr[Math.floor(Math.random() * arr.length)]; }

    // Try to produce an 'opposite' answer by simple antonym replacement
    function makeOpposite(text) {
        if (!text) return null;
        const lower = text.toLowerCase();
        const map = {
            'left': 'right', 'right': 'left',
            'increase': 'decrease', 'decrease': 'increase',
            'ventricle': 'atrium', 'atrium': 'ventricle',
            'superior': 'inferior', 'inferior': 'superior',
            'present': 'absent', 'absent': 'present',
            'in': 'out', 'inside': 'outside', 'outside': 'inside',
            'vulgar': 'polite', 'rude': 'polite', 'offensive': 'inoffensive',
            'immoral': 'moral', 'impetuous': 'patient', 'inevitable': 'avoidable',
            'right': 'left', 'anterior': 'posterior', 'posterior': 'anterior',
        };
        let changed = lower;
        Object.keys(map).forEach(k => {
            const re = new RegExp('\\b' + k + '\\b', 'gi');
            if (re.test(changed)) changed = changed.replace(re, map[k]);
        });
        // if changed equals original (no antonym found) return a negation
        if (changed === lower) {
            // simple negation phrasing
            return `not ${text}`;
        }
        return changed;
    }

    // Find a 'misconception' candidate: pick a pool item that shares at least one token
    function findMisconception(correct, arr) {
        const tokens = new Set(normalizeTextForCompare(correct).split(' ').filter(Boolean));
        // prefer candidates that share tokens
        const shared = arr.filter(a => {
            const atoks = normalizeTextForCompare(a).split(' ').filter(Boolean);
            return atoks.some(t => tokens.has(t));
        });
        // if shared candidates exist, pick the one with smallest edit distance to the correct answer
        const candidates = (shared.length > 0 ? shared : arr).map(a => ({
            text: a,
            dist: levenshtein(normalizeTextForCompare(a), normalizeTextForCompare(correct))
        })).sort((x, y) => x.dist - y.dist);
        return candidates.length ? candidates[0].text : null;
    }

    const options = [];
    options.push(cleanCorrect);

    const opposite = makeOpposite(cleanCorrect);
    if (opposite && opposite.toLowerCase() !== cleanCorrect.toLowerCase()) options.push(opposite);

    const misconception = findMisconception(cleanCorrect, pool);
    if (misconception && !options.includes(misconception)) options.push(misconception);

    // generic incorrect fallback
    const generic = pick(pool) || 'an incorrect option';
    if (!options.includes(generic)) options.push(generic);

    // Ensure we have exactly 4 options: pad with generic phrases if needed
    const fallbacks = ['a common misconception', 'a related but wrong idea', 'an incorrect option'];
    for (let f of fallbacks) {
        if (options.length >= 4) break;
        if (!options.includes(f)) options.push(f);
    }

    // normalize to lowercase for display and shuffle
    const out = options.map(s => String(s).toLowerCase());
    for (let i = out.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [out[i], out[j]] = [out[j], out[i]];
    }
    return out.slice(0, 4);
}

// --- Lightweight AI-ish helpers for answer matching ---
function normalizeTextForCompare(s) {
    if (!s && s !== 0) return '';
    return String(s).toLowerCase().replace(/[\u2018\u2019\u201c\u201d]/g, "'").replace(/[^a-z0-9\s]/g, '').replace(/\s+/g, ' ').trim();
}

function levenshtein(a, b) {
    // simple iterative Levenshtein implementation
    const A = String(a || '');
    const B = String(b || '');
    const m = A.length;
    const n = B.length;
    if (m === 0) return n;
    if (n === 0) return m;
    let prev = new Array(n + 1);
    for (let j = 0; j <= n; j++) prev[j] = j;
    for (let i = 1; i <= m; i++) {
        let cur = [i];
        for (let j = 1; j <= n; j++) {
            const cost = A[i - 1] === B[j - 1] ? 0 : 1;
            cur[j] = Math.min(prev[j] + 1, cur[j - 1] + 1, prev[j - 1] + cost);
        }
        prev = cur;
    }
    return prev[n];
}

function isAnswerMatch(input, correct) {
    const a = normalizeTextForCompare(input);
    const b = normalizeTextForCompare(correct);
    // If there is no canonical correct answer, bail
    if (!b) return false;

    // Exact match
    if (a === b) return true;

    // Prevent empty input from matching a non-empty correct answer
    if (!a) return false;

    // If one contains the other (both non-empty), accept short containment
    if (a.length > 0 && b.length > 0) {
        if (a.includes(b) || b.includes(a)) return true;
    }

    // Token-based similarity: compute Jaccard similarity between word sets
    const aw = Array.from(new Set(a.split(' ').filter(Boolean)));
    const bw = Array.from(new Set(b.split(' ').filter(Boolean)));
    const intersection = aw.filter(w => bw.includes(w)).length;
    const union = Math.max(1, aw.concat(bw).filter((v, i, arr) => arr.indexOf(v) === i).length);
    const jaccard = intersection / union;
    // Accept if reasonably similar (50%+ token overlap)
    if (jaccard >= 0.5) return true;

    // For very short expected answers, allow 1-char/1-edit tolerance
    if (b.length <= 4) {
        const distSmall = levenshtein(a, b);
        if (distSmall <= 1) return true;
    }

    // Levenshtein ratio fallback for fuzzy matching on longer strings
    const dist = levenshtein(a, b);
    const maxLen = Math.max(a.length, b.length, 1);
    const ratio = dist / maxLen;
    // Accept small typo differences (<=25% of length)
    return ratio <= 0.25;
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

    // Populate weak areas & achievements so progress section receives styled content
    const weakAreasContainer = document.getElementById('weak-areas-list');
    if (weakAreasContainer) {
        const allSets = [1,2,3,'plot',5,6];
        const weakItems = allSets.map(w => {
            const qs = getQuestionsForWeek(w);
            const learned = qs.filter(q => learnedTerms[q.question]).length;
            const pct = Math.round((learned / (qs.length || 1)) * 100);
            return { id: w, title: getSetTitle(w), pct };
        }).filter(s => s.pct < 60);

        if (weakItems.length === 0) {
            weakAreasContainer.innerHTML = '<div class="weak-area-item"><div class="item-name">None — keep going!</div><div style="color:var(--text-secondary);margin-top:6px">Looks like you don\'t have any weak areas right now.</div></div>';
        } else {
            weakAreasContainer.innerHTML = weakItems.map(w => `
                <div class="weak-area-item">
                    <div class="item-name">${w.title}</div>
                    <div style="font-weight:700;color:var(--danger);margin-top:8px">${w.pct}% mastered</div>
                    <div style="margin-top:8px;color:var(--text-secondary);font-size:0.95em">Keep reviewing this set to improve accuracy.</div>
                </div>
            `).join('');
        }
    }

    const achievementsContainer = document.getElementById('achievements-list');
    if (achievementsContainer) {
        const mastered = Object.values(learnedTerms).filter(v => v).length;
        const studied = Object.keys(learnedTerms).length;
        const earned = [];
        if (studied >= 5) earned.push('First 5 terms studied');
        if (studied >= 20) earned.push('20 Terms studied');
        if (mastered >= 5) earned.push('First 5 mastered');
        if (mastered >= 15) earned.push('15 mastered — Solid Work');
        if (earned.length === 0) {
            achievementsContainer.innerHTML = '<div style="padding:12px;border-radius:12px;background:var(--bg-light);color:var(--text-secondary)">No achievements yet — keep practicing to unlock badges!</div>';
        } else {
            achievementsContainer.innerHTML = earned.map(a => `<div style="padding:12px;border-radius:12px;background:linear-gradient(135deg,#FFF 0%,#F7FBFF 100%);border:1px solid var(--border-color);font-weight:700;color:var(--text-primary)">${a}</div>`).join('');
        }
    }

}

function getSetTitle(week) {
    const titles = {
        1: 'literary terms',
        2: 'grammar & metaphor',
        3: 'character analysis',
        5: 'thematic vocabulary',
        6: 'sonnets & poetry',
        plot: 'plot questions',
        all: 'random'
    };
    return (titles[week] || 'unknown set').toLowerCase();
}

// Reading Guide helper functions
window.startReadingGuideFlashcards = function(section) {
    currentMode = 'flashcards';
    currentWeek = section;
    currentQuestionIndex = 0;
    currentQuestions = (readingGuideData[section] || []).slice().sort(() => Math.random() - 0.5);
    studyStats.correct = 0;
    studyStats.total = 0;
    setActiveSection('flashcards');
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
    setActiveSection('learn');
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
        showTestResults();
    }
});

// ---------- Modal popups: Learn & Cards preview from Study Sets grid ----------
let ml_questions = [];
let ml_index = 0;
let ml_week = null;
let mc_questions = [];
let mc_index = 0;
let mc_week = null;

// Previews removed - users go directly to full modes

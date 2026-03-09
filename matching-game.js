// Scientific Terms Matching Game with 3 Difficulty Levels
// This game allows students to drag and drop terms to match with their definitions

// Difficulty level datasets
const levelDatasets = {
    easy: [
        { id: 1, term: "Photosynthesis", definition: "Process by which plants convert sunlight into chemical energy" },
        { id: 2, term: "Mitochondria", definition: "The powerhouse of the cell, responsible for producing energy" },
        { id: 3, term: "Osmosis", definition: "Movement of water molecules across a semipermeable membrane" },
        { id: 4, term: "Enzyme", definition: "Protein that speeds up chemical reactions in living organisms" },
        { id: 5, term: "Chloroplast", definition: "Organelle in plant cells where photosynthesis occurs" },
        { id: 6, term: "Energy", definition: "Capacity to do work or cause change in physical systems" }
    ],
    medium: [
        { id: 1, term: "Photosynthesis", definition: "Process by which plants convert sunlight into chemical energy" },
        { id: 2, term: "Mitochondria", definition: "The powerhouse of the cell, responsible for producing energy" },
        { id: 3, term: "Osmosis", definition: "Movement of water molecules across a semipermeable membrane" },
        { id: 4, term: "Enzyme", definition: "Protein that speeds up chemical reactions in living organisms" },
        { id: 5, term: "Homeostasis", definition: "Maintenance of stable internal conditions within an organism" },
        { id: 6, term: "Chloroplast", definition: "Organelle in plant cells where photosynthesis occurs" },
        { id: 7, term: "Metabolism", definition: "Sum of all chemical reactions occurring within an organism" },
        { id: 8, term: "Catalyst", definition: "Substance that increases the rate of a chemical reaction without being consumed" }
    ],
    hard: [
        { id: 1, term: "Photosynthesis", definition: "Process by which plants convert sunlight into chemical energy" },
        { id: 2, term: "Mitochondria", definition: "The powerhouse of the cell, responsible for producing energy" },
        { id: 3, term: "Osmosis", definition: "Movement of water molecules across a semipermeable membrane" },
        { id: 4, term: "Enzyme", definition: "Protein that speeds up chemical reactions in living organisms" },
        { id: 5, term: "Homeostasis", definition: "Maintenance of stable internal conditions within an organism" },
        { id: 6, term: "Chloroplast", definition: "Organelle in plant cells where photosynthesis occurs" },
        { id: 7, term: "Metabolism", definition: "Sum of all chemical reactions occurring within an organism" },
        { id: 8, term: "Catalyst", definition: "Substance that increases the rate of a chemical reaction without being consumed" },
        { id: 9, term: "Glycolysis", definition: "Metabolic pathway that converts glucose into pyruvate with energy release" },
        { id: 10, term: "Phototropism", definition: "Growth or movement response of organisms toward or away from light" }
    ]
};

// Game state
let gameState = {
    matches: {}, // { definitionId: termId }
    draggedTerm: null,
    currentLevel: null,
    gameData: [],
    allMatched: false
};

// Initialize level selection
function initLevelSelection() {
    const levelSelection = document.getElementById('levelSelectionScreen');
    const levelCards = document.querySelectorAll('.level-card');

    levelCards.forEach(card => {
        card.addEventListener('click', () => {
            const level = card.dataset.level;
            startGame(level);
        });
    });
}

// Start game with selected difficulty
function startGame(level) {
    gameState.currentLevel = level;
    gameState.matches = {};
    gameState.draggedTerm = null;
    
    // Get dataset for the level and shuffle it
    gameState.gameData = [...levelDatasets[level]];
    shuffleArray(gameState.gameData);

    // Show game screen, hide level selection
    document.getElementById('levelSelectionScreen').style.display = 'none';
    document.getElementById('gameScreen').style.display = 'block';

    // Update difficulty display
    const difficultyText = level.charAt(0).toUpperCase() + level.slice(1);
    document.getElementById('gameDifficulty').textContent = `Difficulty: ${difficultyText}`;
    document.getElementById('gameDifficulty').style.color = 
        level === 'easy' ? '#48bb78' : level === 'medium' ? '#f39c12' : '#e74c3c';

    renderTerms();
    renderDefinitions();
    updateProgress();
    setupEventListeners();
}

// Shuffle array randomly
function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
}

// Render term items (shuffled)
function renderTerms() {
    const container = document.getElementById('termsContainer');
    container.innerHTML = '';
    
    // Shuffle terms for order
    const shuffledTerms = [...gameState.gameData];
    shuffleArray(shuffledTerms);

    shuffledTerms.forEach(item => {
        const termElement = document.createElement('div');
        termElement.className = 'term-item';
        termElement.draggable = true;
        termElement.id = `term-${item.id}`;
        termElement.textContent = item.term;
        termElement.dataset.termId = item.id;

        // Drag events
        termElement.addEventListener('dragstart', handleTermDragStart);
        termElement.addEventListener('dragend', handleTermDragEnd);

        container.appendChild(termElement);
    });

    document.getElementById('totalCount').textContent = gameState.gameData.length;
}

// Render definition drop zones (shuffled)
function renderDefinitions() {
    const container = document.getElementById('definitionsContainer');
    container.innerHTML = '';

    // Shuffle definitions (answers) for difficulty
    const shuffledDefs = [...gameState.gameData];
    shuffleArray(shuffledDefs);

    shuffledDefs.forEach(item => {
        const defElement = document.createElement('div');
        defElement.className = 'definition-item';
        defElement.id = `def-${item.id}`;
        defElement.textContent = item.definition;
        defElement.dataset.defId = item.id;

        // Drop zone events
        defElement.addEventListener('dragover', handleDefinitionDragOver);
        defElement.addEventListener('dragleave', handleDefinitionDragLeave);
        defElement.addEventListener('drop', handleDefinitionDrop);

        container.appendChild(defElement);
    });
}

// Handle term drag start
function handleTermDragStart(e) {
    const termId = this.dataset.termId;

    // Prevent dragging already matched terms
    if (this.classList.contains('matched')) {
        e.preventDefault();
        return;
    }

    gameState.draggedTerm = termId;
    this.classList.add('dragging');
    e.dataTransfer.effectAllowed = 'move';
    e.dataTransfer.setData('text/plain', termId);
}

// Handle term drag end
function handleTermDragEnd(e) {
    this.classList.remove('dragging');
}

// Handle definition drag over
function handleDefinitionDragOver(e) {
    e.preventDefault();
    e.dataTransfer.dropEffect = 'move';
    
    // Show visual feedback only if not already matched
    if (!this.classList.contains('matched')) {
        this.classList.add('drag-over');
    }
}

// Handle definition drag leave
function handleDefinitionDragLeave(e) {
    if (e.target === this) {
        this.classList.remove('drag-over');
    }
}

// Handle definition drop
function handleDefinitionDrop(e) {
    e.preventDefault();
    this.classList.remove('drag-over');

    if (this.classList.contains('matched')) {
        return; // Can't drop on already matched definition
    }

    const termId = parseInt(e.dataTransfer.getData('text/plain'));
    const defId = parseInt(this.dataset.defId);

    // Check if match is correct
    if (termId === defId) {
        // Correct match
        makeMatch(termId, defId);
    } else {
        // Wrong match - show slight shake animation
        this.style.animation = 'none';
        setTimeout(() => {
            this.style.animation = 'shake 0.3s';
        }, 10);
    }
}

// Make a correct match
function makeMatch(termId, defId) {
    const termElement = document.getElementById(`term-${termId}`);
    const defElement = document.getElementById(`def-${defId}`);

    // Store the match
    gameState.matches[defId] = termId;

    // Update UI
    termElement.classList.add('matched');
    defElement.classList.add('matched');

    // Add matched term name below definition
    const termName = gameState.gameData.find(d => d.id === termId).term;
    defElement.textContent = `${gameState.gameData.find(d => d.id === defId).definition}\n\n✓ ${termName}`;

    // Play success animation
    playSuccessAnimation(defElement);

    // Update progress
    updateProgress();

    // Check if all matched
    if (Object.keys(gameState.matches).length === gameState.gameData.length) {
        showSuccessModal();
    }
}

// Play success animation
function playSuccessAnimation(element) {
    element.classList.add('success-animation');
    setTimeout(() => {
        element.classList.remove('success-animation');
    }, 400);
}

// Update progress bar and count
function updateProgress() {
    const matchCount = Object.keys(gameState.matches).length;
    const totalCount = gameState.gameData.length;
    const percentage = (matchCount / totalCount) * 100;

    document.getElementById('matchCount').textContent = matchCount;
    document.getElementById('progressFill').style.width = percentage + '%';
}

// Show success modal
function showSuccessModal() {
    const modal = document.getElementById('successModal');
    modal.classList.add('show');
}

// Hide success modal
function hideSuccessModal() {
    const modal = document.getElementById('successModal');
    modal.classList.remove('show');
}

// Reset game (restart current level)
function resetGame() {
    gameState.matches = {};
    gameState.draggedTerm = null;
    gameState.allMatched = false;

    // Clear all matched classes
    document.querySelectorAll('.term-item').forEach(el => {
        el.classList.remove('matched', 'dragging');
    });
    document.querySelectorAll('.definition-item').forEach(el => {
        el.classList.remove('matched', 'drag-over');
    });

    // Reset styling
    document.querySelectorAll('.term-item').forEach(el => {
        el.style.animation = '';
    });

    hideSuccessModal();
    renderTerms();
    renderDefinitions();
    updateProgress();
}

// Back to level selection
function backToLevels() {
    gameState.matches = {};
    gameState.draggedTerm = null;
    gameState.currentLevel = null;
    
    // Clear all matched classes
    document.querySelectorAll('.term-item').forEach(el => {
        el.classList.remove('matched', 'dragging');
    });
    document.querySelectorAll('.definition-item').forEach(el => {
        el.classList.remove('matched', 'drag-over');
    });

    hideSuccessModal();
    document.getElementById('gameScreen').style.display = 'none';
    document.getElementById('levelSelectionScreen').style.display = 'block';
}

// Check answers (for manual submission)
function checkAnswers() {
    const matchCount = Object.keys(gameState.matches).length;
    const totalCount = gameState.gameData.length;

    if (matchCount === 0) {
        alert('Please make at least one match before checking answers!');
        return;
    }

    if (matchCount === totalCount) {
        showSuccessModal();
    } else {
        alert(`You've matched ${matchCount} out of ${totalCount} terms. Keep trying!`);
    }
}

// Setup event listeners
function setupEventListeners() {
    document.getElementById('submitBtn').addEventListener('click', checkAnswers);
    document.getElementById('resetBtn').addEventListener('click', resetGame);
    document.getElementById('backBtn').addEventListener('click', backToLevels);
    document.getElementById('closeModal').addEventListener('click', backToLevels);
}

// Add shake animation to CSS
const style = document.createElement('style');
style.textContent = `
    @keyframes shake {
        0%, 100% { transform: translateX(0); }
        25% { transform: translateX(-5px); }
        75% { transform: translateX(5px); }
    }
`;
document.head.appendChild(style);

// Start game when DOM is ready - show level selection first
document.addEventListener('DOMContentLoaded', initLevelSelection);

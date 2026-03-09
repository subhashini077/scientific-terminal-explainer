// shared utilities
function $(id) { return document.getElementById(id); }

/* login logic */
if (document.body.contains($('loginForm'))) {
    const form = $('loginForm');
    const toggle = $('togglePassword');
    const pwd = $('password');
    const remember = $('rememberMe');
    const errorDiv = $('loginError');

    // toggle password visibility
    toggle.addEventListener('click', () => {
        if (pwd.type === 'password') {
            pwd.type = 'text';
            toggle.textContent = 'Hide';
        } else {
            pwd.type = 'password';
            toggle.textContent = 'Show';
        }
    });

    // check if already remembered
    if (localStorage.getItem('conceptUser')) {
        window.location.href = 'dashboard.html';
    }

    form.addEventListener('submit', e => {
        e.preventDefault();
        const user = $('username').value.trim();
        const pass = pwd.value.trim();
        if (user === '' || pass === '') {
            errorDiv.textContent = 'Both fields are required.';
            return;
        }
        // basic validation, accept anything
        if (remember.checked) {
            localStorage.setItem('conceptUser', user);
        }
        window.location.href = 'dashboard.html';
    });
}

/* dark/light mode and logout */
function setupDarkLogout(toggleId, logoutIds) {
    const darkToggle = $(toggleId);
    const logoutButtons = document.querySelectorAll(logoutIds);
    darkToggle && darkToggle.addEventListener('click', () => {
        document.body.classList.toggle('dark');
        darkToggle.textContent = document.body.classList.contains('dark') ? '☀️' : '🌙';
    });
    logoutButtons.forEach(btn => btn.addEventListener('click', () => {
        localStorage.removeItem('conceptUser');
        window.location.href = 'index.html';
    }));
}
// initialize dark/logout for pages that include the elements
if (document.body.contains($('darkModeToggle')) || document.body.contains($('logoutBtn2'))) {
    setupDarkLogout('darkModeToggle', '#logoutBtn, #logoutBtn2');
}
if (document.body.contains($('darkModeToggle2')) || document.body.contains($('logoutBtn3'))) {
    setupDarkLogout('darkModeToggle2', '#logoutBtn3');
}

/* search and display terms on dashboard */
if (document.body.contains($('searchInput'))) {
    const searchInput = $('searchInput');
    const clearBtn = $('clearSearch');
    const searchResults = $('searchResults');
    const categoriesGallery = document.querySelector('.categories-gallery');
    const filterButtons = document.querySelectorAll('.filter-btn');

    let selectedCategory = 'all';

    function renderResults(list) {
        searchResults.innerHTML = '';
        if (list.length === 0) {
            searchResults.innerHTML = '<p style="grid-column: 1/-1; text-align: center; padding: 30px; color: #7f8c8d;">No terms found. Try a different search or category.</p>';
            searchResults.style.display = 'grid';
            return;
        }
        list.forEach(t => {
            const card = document.createElement('div');
            card.className = 'card';
            card.innerHTML = `
                <div class="badge">${t.category}</div>
                <h3>${t.name}</h3>
                <p><strong>Simple:</strong> ${t.simple}</p>
                <p><strong>Detailed:</strong> ${t.detailed}</p>
                <p><em>Example:</em> ${t.example}</p>
            `;
            searchResults.appendChild(card);
        });
        searchResults.style.display = 'grid';
    }

    function filterAndSearch() {
        let query = searchInput.value.toLowerCase().trim();
        
        // Filter by category first
        let filtered = terms;
        if (selectedCategory !== 'all') {
            filtered = filtered.filter(t => t.category === selectedCategory);
        }

        // Then filter by search query
        if (query !== '') {
            filtered = filtered.filter(t =>
                (t.name.toLowerCase().includes(query) || 
                 t.simple.toLowerCase().includes(query) ||
                 t.detailed.toLowerCase().includes(query))
            );
            categoriesGallery.style.display = 'none';
            renderResults(filtered);
        } else if (selectedCategory !== 'all') {
            // Show results if category is selected but no search query
            categoriesGallery.style.display = 'none';
            renderResults(filtered);
        } else {
            // Show categories if no search and no category filter
            categoriesGallery.style.display = 'grid';
            searchResults.style.display = 'none';
        }
    }

    // Setup category filter buttons
    filterButtons.forEach(btn => {
        btn.addEventListener('click', (e) => {
            // Update active state
            filterButtons.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');

            // Update selected category
            selectedCategory = btn.dataset.filter;

            // Trigger search/filter
            filterAndSearch();
        });
    });

    searchInput.addEventListener('input', filterAndSearch);
    clearBtn.addEventListener('click', () => {
        searchInput.value = '';
        selectedCategory = 'all';
        filterButtons.forEach(b => b.classList.remove('active'));
        filterButtons[0].classList.add('active');
        categoriesGallery.style.display = 'grid';
        searchResults.style.display = 'none';
    });
}

/* quiz logic */
if (document.body.contains($('quizContainer'))) {
    const qBox = $('questionBox');
    const oBox = $('optionsBox');
    const timerDiv = $('timer');
    const scoreDiv = $('scoreBox');
    const restartBtn = $('restartBtn');
    const scoreDisplay = $('scoreDisplay');
    const progressDisplay = $('progressDisplay');
    const percentageDisplay = $('percentageDisplay');

    let quizQuestions = [];
    let current = 0;
    let score = 0;
    let countdown;
    const totalTime = 15;

    function shuffle(a) { return a.sort(() => Math.random() - 0.5); }

    function updateScoreboard() {
        const totalQuestions = quizQuestions.length;
        const percent = totalQuestions > 0 ? Math.round((score / totalQuestions) * 100) : 0;
        progressDisplay.textContent = `${current}/${totalQuestions}`;
        scoreDisplay.textContent = score;
        percentageDisplay.textContent = `${percent}%`;
    }

    function prepareQuestions() {
        // generate at least 20 MCQs from terms
        const pool = [];
        terms.forEach(t => {
            pool.push({
                question: `What is the simple definition of "${t.name}"?`,
                correct: t.simple,
                options: shuffle([t.simple, ...shuffle(terms.filter(x => x !== t).slice(0,3).map(x=>x.simple))])
            });
        });
        // duplicate until 20
        while (pool.length < 20) {
            const t = terms[Math.floor(Math.random()*terms.length)];
            pool.push({
                question: `What is the simple definition of "${t.name}"?`,
                correct: t.simple,
                options: shuffle([t.simple, ...shuffle(terms.filter(x => x !== t).slice(0,3).map(x=>x.simple))])
            });
        }
        quizQuestions = shuffle(pool).slice(0,20);
        updateScoreboard();
    }

    function showQuestion() {
        if (current >= quizQuestions.length) {
            finishQuiz();
            return;
        }
        const q = quizQuestions[current];
        qBox.textContent = q.question;
        oBox.innerHTML = '';
        q.options.forEach(opt => {
            const div = document.createElement('div');
            div.className = 'option';
            div.textContent = opt;
            div.addEventListener('click', () => selectOption(div, q.correct));
            oBox.appendChild(div);
        });
        startTimer();
    }

    function selectOption(element, correct) {
        stopTimer();
        if (element.textContent === correct) {
            element.classList.add('correct');
            score++;
        } else {
            element.classList.add('wrong');
            // mark the correct one
            Array.from(oBox.children).forEach(c => {
                if (c.textContent === correct) c.classList.add('correct');
            });
        }
        updateScoreboard();
        setTimeout(() => {
            current++;
            updateScoreboard();
            showQuestion();
        }, 1000);
    }

    function startTimer() {
        let timeLeft = totalTime;
        timerDiv.textContent = `Time: ${timeLeft}s`;
        countdown = setInterval(() => {
            timeLeft--;
            timerDiv.textContent = `Time: ${timeLeft}s`;
            if (timeLeft <= 0) {
                clearInterval(countdown);
                // reveal correct
                Array.from(oBox.children).forEach(c => {
                    if (c.textContent === quizQuestions[current].correct) c.classList.add('correct');
                });
                setTimeout(() => {
                    current++;
                    updateScoreboard();
                    showQuestion();
                }, 1000);
            }
        }, 1000);
    }

    function stopTimer() {
        clearInterval(countdown);
    }

    function finishQuiz() {
        qBox.innerHTML = `Quiz finished! Your score: ${score}/${quizQuestions.length}`;
        oBox.innerHTML = '';
        timerDiv.textContent = '';
        const percent = Math.round((score/quizQuestions.length)*100);
        scoreDiv.innerHTML = `<p>Percentage: ${percent}%</p><p>${performanceMessage(percent)}</p>`;
        restartBtn.style.display = 'inline-block';
    }

    function performanceMessage(p) {
        if (p >= 80) return 'Excellent!';
        if (p >= 50) return 'Good job!';
        return 'Keep practicing.';
    }

    restartBtn.addEventListener('click', () => {
        current = 0;
        score = 0;
        scoreDiv.textContent = '';
        restartBtn.style.display = 'none';
        prepareQuestions();
        showQuestion();
    });

    // init
    prepareQuestions();
    showQuestion();
}

// optional: voice search for dashboard
if (window.SpeechRecognition && document.body.contains($('searchInput'))) {
    const recognition = new window.SpeechRecognition();
    recognition.lang = 'en-US';
    recognition.interimResults = false;
    const micBtn = document.createElement('button');
    micBtn.textContent = '🎤';
    micBtn.className = 'btn small';
    $('searchInput').parentElement.appendChild(micBtn);
    micBtn.addEventListener('click', () => {
        recognition.start();
    });
    recognition.addEventListener('result', e => {
        const speech = e.results[0][0].transcript;
        $('searchInput').value = speech;
        $('searchInput').dispatchEvent(new Event('input'));
    });
}

// profile page handling
if (document.body.contains($('profileForm'))) {
    const profileForm = $('profileForm');
    const msg = $('profileMessage');
    // load existing data if any
    const saved = JSON.parse(localStorage.getItem('studentProfile') || '{}');
    if (saved.fullName) {
        $('fullName').value = saved.fullName;
        $('email').value = saved.email || '';
        $('major').value = saved.major || '';
        $('year').value = saved.year || '';
    }
    profileForm.addEventListener('submit', e => {
        e.preventDefault();
        const profile = {
            fullName: $('fullName').value.trim(),
            email: $('email').value.trim(),
            major: $('major').value.trim(),
            year: $('year').value.trim()
        };
        if (!profile.fullName || !profile.email) {
            msg.textContent = 'Name and email are required.';
            return;
        }
        localStorage.setItem('studentProfile', JSON.stringify(profile));
        msg.textContent = 'Profile saved.';
        setTimeout(() => { msg.textContent = ''; }, 3000);
    });
}

// simple animation on cards (fruits?) maybe via CSS already

document.addEventListener('DOMContentLoaded', () => {
    const githubBtn = document.getElementById('github-btn');
    const howToMakeBtn = document.getElementById('how-to-make-btn');
    const contentContainer = document.getElementById('content-container');
    const languageSelection = document.getElementById('language-selection');

    githubBtn.addEventListener('click', () => {
        window.location.href = 'https://github.com/Settle-Up/settle-up-server';
    });

    howToMakeBtn.addEventListener('click', () => {
        contentContainer.classList.add('active');
        howToMakeBtn.classList.add('active');
        languageSelection.classList.remove('center');
        languageSelection.classList.add('top-left');
    });
});

document.addEventListener('DOMContentLoaded', () => {
    const githubBtn = document.getElementById('github-btn');
    const howToMakeBtn = document.getElementById('how-to-make-btn');
    const contentContainer = document.getElementById('content-container');
    const languageSelection = document.getElementById('language-selection');
    const reportIssueBtn = document.getElementById('report-issue-btn');
    const reportIssueContainer = document.getElementById('report-issue-container');
    const closeButton = document.querySelector('.close-button');
    const reportIssueForm = document.getElementById('report-issue-form');
    const waitingMessage = document.getElementById('waiting-message');
    const feedbackMessage = document.getElementById('feedback-message');

    githubBtn.addEventListener('click', () => {
        window.location.href = 'https://github.com/Settle-Up/settle-up-server';
    });

    howToMakeBtn.addEventListener('click', () => {
        contentContainer.classList.add('active');
        howToMakeBtn.classList.add('active');
        languageSelection.classList.remove('center');
        languageSelection.classList.add('above-invoice'); // Position buttons above the invoice
    });

    reportIssueBtn.addEventListener('click', () => {
        reportIssueContainer.style.display = 'flex';
    });

    closeButton.addEventListener('click', () => {
        reportIssueContainer.style.display = 'none';
    });

    window.addEventListener('click', (event) => {
        if (event.target === reportIssueContainer) {
            reportIssueContainer.style.display = 'none';
        }
    });

    reportIssueForm.addEventListener('submit', (event) => {
        event.preventDefault();
        const issueLocation = document.getElementById('issue-location').value;
        const issueDescription = document.getElementById('issue-description').value;

        waitingMessage.style.display = 'block';

        setTimeout(() => {
            const mailtoLink = `mailto:seodonghee456@gmail.com?subject=Issue Report&body=Where did the issue occur?: ${issueLocation}%0D%0A%0D%0AHow would you like it to be improved?: ${issueDescription}`;
            window.location.href = mailtoLink;

            waitingMessage.style.display = 'none';
            feedbackMessage.style.display = 'block';
        }, 2000); // Simulate a delay for sending email

        setTimeout(() => {
            feedbackMessage.style.display = 'none';
            reportIssueContainer.style.display = 'none';
        }, 5000); // Display thank you message for 5 seconds
    });
});

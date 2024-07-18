// script.js
import axiosInstance from "./axiosConfig";

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
        languageSelection.classList.add('hidden');
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
        const replyEmailAddress = document.getElementById('reply-email-address').value;

        waitingMessage.style.display = 'block';

        axiosInstance.post('/user/feedBack/email', {
            issueLocation,
            issueDescription,
            replyEmailAddress
        })
        .catch(error => {
            console.error('Error:', error);
        });

        setTimeout(() => {
            waitingMessage.style.display = 'none';
            feedbackMessage.style.display = 'block';
        }, 3000); // Display the feedback message after 3 seconds

        setTimeout(() => {
            feedbackMessage.style.display = 'none';
            reportIssueContainer.style.display = 'none';
        }, 5000); // Hide the feedback message and modal after 5 seconds
    });
});

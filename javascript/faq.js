// FAQ.JS - Functionality for FAQ Page

document.addEventListener('DOMContentLoaded', function() {
    // Language tabs functionality
    const languageTabs = document.querySelectorAll('.language-tab');
    const faqSections = document.querySelectorAll('.faq-section');
    
    languageTabs.forEach(tab => {
        tab.addEventListener('click', function() {
            const language = this.getAttribute('data-language');
            
            // Update active tab
            languageTabs.forEach(t => t.classList.remove('active'));
            this.classList.add('active');
            
            // Show selected language FAQ
            faqSections.forEach(section => {
                section.classList.remove('active');
                if (section.id === `${language}-faq`) {
                    section.classList.add('active');
                }
            });
        });
    });
    
    // FAQ accordion functionality
    const faqQuestions = document.querySelectorAll('.faq-question');
    
    faqQuestions.forEach(question => {
        question.addEventListener('click', function() {
            const answer = this.nextElementSibling;
            const isActive = answer.classList.contains('active');
            
            // Close all answers
            document.querySelectorAll('.faq-answer').forEach(ans => {
                ans.classList.remove('active');
            });
            
            document.querySelectorAll('.faq-question').forEach(q => {
                q.classList.remove('active');
            });
            
            // Open clicked answer if it was closed
            if (!isActive) {
                answer.classList.add('active');
                this.classList.add('active');
            }
        });
    });
    
    // Open first question by default
    if (faqQuestions.length > 0) {
        faqQuestions[0].click();
    }
});
// Ensure all interactive events load safely after the DOM is fully constructed
document.addEventListener("DOMContentLoaded", () => {
    

    /* ==========================================================================
       2. MOBILE HAMBURGER MENU INTERACTION
       ========================================================================== */
    const mobileMenuBtn = document.getElementById("mobile-menu");
    const navLinksContainer = document.querySelector(".nav-links");
    const individualNavLinks = document.querySelectorAll(".nav-item");

    if(mobileMenuBtn && navLinksContainer) {
        // Toggle system status flags on press
        mobileMenuBtn.addEventListener("click", () => {
            mobileMenuBtn.classList.toggle("active");
            navLinksContainer.classList.toggle("active");
        });

        // Autoclose slide-out menu layout when selecting targets
        individualNavLinks.forEach(link => {
            link.addEventListener("click", () => {
                mobileMenuBtn.classList.remove("active");
                navLinksContainer.classList.remove("active");
            });
        });
    }

    /* ==========================================================================
       3. STICKY NAVBAR MANAGEMENT
       ========================================================================== */
    const navbar = document.querySelector(".navbar");
    
    window.addEventListener("scroll", () => {
        if(window.scrollY > 50) {
            navbar.classList.add("sticky");
        } else {
            navbar.classList.remove("sticky");
        }
    });

    /* ==========================================================================
       4. TYPING TEXT ANIMATION
       ========================================================================== */
    const wordsArray = ["Web Developer", "BSIT Student", "Future Full Stack Developer"];
    let wordIndex = 0;
    let charIndex = 0;
    let isDeleting = false;
    const typingSpeed = 100;
    const erasingSpeed = 50;
    const delayBetweenWords = 2000; // Pause display state metric
    const typingTargetElement = document.getElementById("typing-text");

    function handleTypingEffect() {
        if (!typingTargetElement) return;

        const currentWord = wordsArray[wordIndex];
        
        if (isDeleting) {
            // Trim character stream out
            typingTargetElement.textContent = currentWord.substring(0, charIndex - 1);
            charIndex--;
        } else {
            // Inject next character sequence
            typingTargetElement.textContent = currentWord.substring(0, charIndex + 1);
            charIndex++;
        }

        let currentExecutionSpeed = isDeleting ? erasingSpeed : typingSpeed;

        // Word completed processing handling routines
        if (!isDeleting && charIndex === currentWord.length) {
            currentExecutionSpeed = delayBetweenWords;
            isDeleting = true;
        } else if (isDeleting && charIndex === 0) {
            isDeleting = false;
            wordIndex = (wordIndex + 1) % wordsArray.length; // Loop around array bounds cleanly
            currentExecutionSpeed = 300;
        }

        setTimeout(handleTypingEffect, currentExecutionSpeed);
    }
    
    // Initialize typing loop engine execution
    if(typingTargetElement) {
        setTimeout(handleTypingEffect, 500);
    }

    /* ==========================================================================
       5. SCROLL REVEAL & ACTIVE LINK SELECTION ON SCROLL
       ========================================================================== */
    const systemSections = document.querySelectorAll("section");
    const structuralRevealBlocks = document.querySelectorAll(".reveal");
    const skillProgressBars = document.querySelectorAll(".progress-bar");

    function runScrollCalculations() {
        const viewportActivationThreshold = (window.innerHeight / 5) * 4;

        // A. Reveal elements sliding up cleanly
        structuralRevealBlocks.forEach(block => {
            const blockTopDistance = block.getBoundingClientRect().top;
            if (blockTopDistance < viewportActivationThreshold) {
                block.classList.add("active");
            }
        });

        // B. Animate progress skill bars upon exposure limits
        skillProgressBars.forEach(bar => {
            const barTopDistance = bar.getBoundingClientRect().top;
            if(barTopDistance < window.innerHeight) {
                // Read percentage config value directly stored cleanly inside target HTML dataset
                const designatedWidth = bar.getAttribute("data-progress");
                bar.style.width = designatedWidth;
            }
        });

        // C. Dynamically highlight active menu section links
        let currentActiveSectionId = "";
        systemSections.forEach(section => {
            const sectionTopDistance = section.offsetTop;
            // Subtract offset variables safely to handle navbar structural heights cleanly
            if (window.scrollY >= (sectionTopDistance - 150)) {
                currentActiveSectionId = section.getAttribute("id");
            }
        });

        individualNavLinks.forEach(link => {
            link.classList.remove("active");
            if (link.getAttribute("href") === `#${currentActiveSectionId}`) {
                link.classList.add("active");
            }
        });

        // D. Toggle Visibility status on Back To Top interface
        const backToTopBtn = document.getElementById("backToTop");
        if(backToTopBtn) {
            if(window.scrollY > 400) {
                backToTopBtn.classList.add("show");
            } else {
                backToTopBtn.classList.remove("show");
            }
        }
    }

    // Attach passive structural event hooks for scrolling window processes
    window.addEventListener("scroll", runScrollCalculations);
    // Execute primary initialization calculations immediately once page structures settle
    runScrollCalculations();

    /* ==========================================================================
       6. BACK TO TOP CLICK TRIGGER HANDLER
       ========================================================================== */
    const backToTopBtn = document.getElementById("backToTop");
    if(backToTopBtn) {
        backToTopBtn.addEventListener("click", () => {
            window.scrollTo({
                top: 0,
                behavior: "smooth"
            });
        });
    }
    
});
/* ==========================================================================
       4. TYPING TEXT ANIMATION (Hero & About Sections)
       ========================================================================== */
    
    // --- Hero Typing Config ---
    const wordsArray = ["Web Developer", "BSIT Student", "Future Full Stack Developer"];
    let wordIndex = 0;
    let charIndex = 0;
    let isDeleting = false;
    const typingSpeed = 100;
    const erasingSpeed = 50;
    const delayBetweenWords = 2000;
    const typingTargetElement = document.getElementById("typing-text");

    function handleTypingEffect() {
        if (!typingTargetElement) return;
        const currentWord = wordsArray[wordIndex];
        
        if (isDeleting) {
            typingTargetElement.textContent = currentWord.substring(0, charIndex - 1);
            charIndex--;
        } else {
            typingTargetElement.textContent = currentWord.substring(0, charIndex + 1);
            charIndex++;
        }

        let currentExecutionSpeed = isDeleting ? erasingSpeed : typingSpeed;

        if (!isDeleting && charIndex === currentWord.length) {
            currentExecutionSpeed = delayBetweenWords;
            isDeleting = true;
        } else if (isDeleting && charIndex === 0) {
            isDeleting = false;
            wordIndex = (wordIndex + 1) % wordsArray.length;
            currentExecutionSpeed = 300;
        }
        setTimeout(handleTypingEffect, currentExecutionSpeed);
    }

    // --- About Section Typing Config (Line-by-Line persistent type) ---
    const aboutLinesArray = [
        "Technology has always fascinated me, not just because of what it can do, but because of the problems it can solve. ",
        "As a BSIT student and aspiring web developer, I enjoy transforming concepts into interactive, responsive, and user-focused web applications. ",
        "My journey in web development has allowed me to work with front-end and back-end technologies, strengthen my problem-solving abilities, and gain hands-on experience through personal projects. ",
        "I am constantly exploring new tools and techniques to improve my skills and stay current in the fast-evolving world of technology."
    ];
    
    let lineIndex = 0;
    let aboutCharIndex = 0;
    let currentAccumulatedText = ""; // Purani lines ko save rakhne ke liye
    const aboutTargetElement = document.getElementById("about-text-target");

    function handleAboutTyping() {
        if (!aboutTargetElement || lineIndex >= aboutLinesArray.length) {
            // Jab saari lines complete ho jayen to typing cursor ko hide karne ke liye
            const aboutCursor = document.querySelector("#about-typing-box .cursor");
            if(aboutCursor) aboutCursor.style.display = 'none';
            return;
        }

        const currentLine = aboutLinesArray[lineIndex];
        
        // Purani complete lines + current line ke typed characters
        aboutTargetElement.textContent = currentAccumulatedText + currentLine.substring(0, aboutCharIndex + 1);
        aboutCharIndex++;

        if (aboutCharIndex === currentLine.length) {
            // Line khatam honay par text state append karein aur next line par jayein
            currentAccumulatedText += currentLine;
            lineIndex++;
            aboutCharIndex = 0;
            setTimeout(handleAboutTyping, 1000); // Har complete line ke baad 1 second ka pause
        } else {
            setTimeout(handleAboutTyping, 35); // Fast typing speed parameters for long text paragraphs
        }
    }
    
    // Engines trigger initializations
    if(typingTargetElement) {
        setTimeout(handleTypingEffect, 500);
    }
    if(aboutTargetElement) {
        setTimeout(handleAboutTyping, 1500); // Hero loading animation aur entrance ke thodi der baad start ho
    }
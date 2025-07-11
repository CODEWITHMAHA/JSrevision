❓ Why do we place the <script> tag at the end of the <body> tag?

We place the <script> tag at the end of the HTML body to ensure the HTML content loads before the JavaScript is executed. This improves page load speed and performance.

✅ Detailed Reason:
HTML is parsed top-down: If scripts are placed at the top (in the <head>), the browser stops rendering the page to fetch and run the script, causing delays.

DOM elements must exist before JS uses them: If your JavaScript tries to access elements that haven’t been loaded yet, it will throw errors like null or undefined.

Better user experience: Placing scripts at the end allows the page to appear faster to the user, even if scripts take time to load.

⚠️ Alternative:
If you must place the script in the <head>, use:

html
Copy code
<script src="script.js" defer></script>
defer: Tells the browser to download the script but execute it only after the HTML is fully parsed.

async: Runs script as soon as it's downloaded — good for analytics, but not for DOM-dependent scripts.


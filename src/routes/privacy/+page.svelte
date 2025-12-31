<script lang="ts">
  import { base } from '$app/paths';
</script>

<svelte:head>
  <title>Privacy Policy | Crypto Break-Even Portfolio Utility</title>
  <meta name="description" content="Read our Privacy Policy for the Crypto Break-Even Portfolio Utility – a fully client-side tool that collects no personal data." />
  <meta property="og:title" content="Privacy Policy | Crypto Break-Even Portfolio Utility" />
  <meta property="og:description" content="Read our Privacy Policy for the Crypto Break-Even Portfolio Utility – a fully client-side tool that collects no personal data." />
  <meta property="og:url" content="{base}/privacy" />
  <meta property="og:type" content="article" />
  <meta name="twitter:card" content="summary_large_image" />
</svelte:head>

<div class="container fade-in post-layout">
  <div class="breadcrumbs">
    <a href="{base}/">Home</a>
    <span>/</span>
    <p>Privacy Policy</p>
  </div>

  <article class="prose">
    <h1>Privacy Policy</h1>

    <p class="post-meta">Effective Date: December 31, 2025</p>

    <h2>1. Introduction</h2>
    <p>Welcome to the <strong>Crypto Break-Even Portfolio Utility</strong> ("the Utility"), a free, open-source, client-side web application designed to help cryptocurrency investors calculate break-even prices and recovery strategies. This Privacy Policy explains our data practices. We prioritize your privacy by operating on a <strong>zero-data-collection principle</strong>. The Utility runs entirely in your browser, and <strong>we do not collect, store, transmit, or process any personal information</strong>.</p>

    <h2>2. No Data Collection</h2>
    <p>The Utility is built as a static site with all calculations performed locally on your device using JavaScript. We do not collect:</p>
    <ul>
      <li><strong>Personal information</strong> such as names, email addresses, or wallet addresses.</li>
      <li><strong>Usage data</strong> including IP addresses, browser details, device information, or geolocation.</li>
      <li><strong>Portfolio data</strong> – any quantities, prices, fees, or recovery inputs you enter remain exclusively on your device.</li>
      <li><strong>Analytics or tracking data</strong> – no cookies, pixels, fingerprints, or third-party analytics tools are used.</li>
    </ul>
    <p>Because everything happens <strong>client-side</strong>, your inputs never leave your browser. We have no servers that receive or log data.</p>

    <h2>3. How the Utility Works</h2>
    <p>All features – portfolio entry management, weighted break-even calculations, and recovery simulations – execute purely in your browser. Inputs are processed in real time using native JavaScript functions. Results are displayed instantly without any network requests to external services. Refreshing the page resets all fields, ensuring <strong>complete data isolation</strong>.</p>

    <h2>4. Third-Party Services</h2>
    <p>We do not integrate advertising, analytics, or tracking services. The only external resources are Bootstrap CSS and JS loaded via public CDN for styling and layout. These resources do not collect personal data or track user behavior in this context.</p>

    <h2>5. Cookies and Local Storage</h2>
    <p>The Utility is <strong>completely stateless</strong>. We do not use cookies, localStorage, sessionStorage, or any persistent storage mechanisms. No information persists between sessions.</p>

    <h2>6. Data Security</h2>
    <p>Since no data is transmitted or stored by us, the primary security responsibility lies with your device and browser. We recommend using an up-to-date browser and secure connection (HTTPS) when accessing the Utility.</p>

    <h2>7. Children's Privacy</h2>
    <p>The Utility is not directed at children under 13. We do not knowingly collect any information from children.</p>

    <h2>8. Changes to This Policy</h2>
    <p>We may update this Privacy Policy periodically. Changes will be reflected on this page with an updated effective date.</p>

    <h2>9. Contact</h2>
    <p>For questions about this Privacy Policy, please open an issue on our public GitHub repository.</p>

    <p class="italic-note">Your privacy is protected by design. By using the Crypto Break-Even Portfolio Utility, you acknowledge this <strong>no-collection policy</strong> and enjoy full control over your data.</p>
  </article>
</div>

<style>
  .post-layout {
    max-width: 800px;
    padding-top: 2rem;
    padding-bottom: 4rem;
  }

  .breadcrumbs {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    margin-bottom: 1.5rem;
    font-size: 0.9rem;
    color: var(--text-secondary);
  }
  .breadcrumbs a {
    color: var(--accent-secondary);
  }
  .breadcrumbs a:hover {
    text-decoration: underline;
  }
  .breadcrumbs p {
    margin: 0;
  }

  .prose {
    line-height: 1.8;
  }

  .prose .post-meta {
    color: var(--text-secondary);
    font-size: 0.9rem;
    margin-bottom: 2rem;
    border-bottom: 1px solid var(--border-color);
    padding-bottom: 1rem;
  }

  .prose h1, .prose h2 {
    color: var(--accent-secondary);
  }

  .prose h1 {
    font-size: 2.5rem;
    margin-bottom: 0.5rem;
  }

  .prose h2 {
    margin-top: 2.5rem;
    border-bottom: 1px solid var(--secondary-bg);
    padding-bottom: 0.5rem;
  }

  .prose p {
    color: var(--text-primary);
  }

  .prose ul {
    list-style-type: '→ ';
    padding-left: 1.5rem;
    color: var(--text-primary);
  }
  .prose ul li::marker {
    color: var(--accent-primary);
  }
  .prose ul li {
    padding-left: 0.5rem;
    margin-bottom: 0.5rem;
  }

  .prose .italic-note {
    font-style: italic;
    color: var(--text-secondary);
    text-align: center;
    margin-top: 3rem;
  }
</style>
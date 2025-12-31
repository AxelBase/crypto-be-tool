<script lang="ts">
  import { base } from '$app/paths';
</script>

<svelte:head>
  <title>Terms and Conditions | Crypto Break-Even Portfolio Utility</title>
  <meta name="description" content="Review the Terms and Conditions for using the Crypto Break-Even Portfolio Utility, a free client-side tool provided as-is." />
  <meta property="og:title" content="Terms and Conditions | Crypto Break-Even Portfolio Utility" />
  <meta property="og:description" content="Review the Terms and Conditions for using the Crypto Break-Even Portfolio Utility, a free client-side tool provided as-is." />
  <meta property="og:url" content="{base}/terms" />
  <meta property="og:type" content="article" />
  <meta name="twitter:card" content="summary_large_image" />
</svelte:head>

<div class="container fade-in post-layout">
  <div class="breadcrumbs">
    <a href="{base}/">Home</a>
    <span>/</span>
    <p>Terms and Conditions</p>
  </div>

  <article class="prose">
    <h1>Terms and Conditions</h1>

    <p class="post-meta">Effective Date: December 31, 2025</p>

    <h2>1. Acceptance of Terms</h2>
    <p>By accessing or using the <strong>Crypto Break-Even Portfolio Utility</strong> ("the Utility"), a free, open-source, client-side web application, you agree to be bound by these Terms and Conditions. If you do not agree, please do not use the Utility.</p>

    <h2>2. Description of Service</h2>
    <p>The Utility provides client-side tools to calculate cryptocurrency portfolio break-even prices and recovery strategies based on user-provided inputs. All calculations occur locally in your browser. We do not provide financial, investment, or tax advice. Results are for informational purposes only.</p>

    <h2>3. No Warranty</h2>
    <p>The Utility is provided <strong>"as is"</strong> and <strong>"as available"</strong> without warranties of any kind, express or implied, including but not limited to accuracy, completeness, or fitness for a particular purpose. We do not guarantee error-free operation or that results will meet your expectations.</p>

    <h2>4. Limitation of Liability</h2>
    <p>To the fullest extent permitted by law, we shall not be liable for any direct, indirect, incidental, consequential, or punitive damages arising from your use of the Utility, including but not limited to financial losses from investment decisions based on its calculations.</p>

    <h2>5. User Responsibilities</h2>
    <p>You are solely responsible for:</p>
    <ul>
      <li>The accuracy of data you input.</li>
      <li>Any decisions or actions taken based on the Utility's output.</li>
      <li>Maintaining the security of your device and browser.</li>
      <li>Compliance with applicable laws and regulations regarding cryptocurrency holdings and taxation.</li>
    </ul>

    <h2>6. Intellectual Property</h2>
    <p>The Utility's source code is open-source and available on GitHub under a permissive license. You may fork, modify, and distribute it according to the license terms. The design, content, and branding remain property of the original author.</p>

    <h2>7. Prohibited Use</h2>
    <p>You may not use the Utility for unlawful purposes, to distribute malware, or to attempt to interfere with its operation.</p>

    <h2>8. Modifications</h2>
    <p>We reserve the right to modify or discontinue the Utility at any time without notice.</p>

    <h2>9. Governing Law</h2>
    <p>These Terms shall be governed by the laws of the jurisdiction where the Utility is hosted, without regard to conflict of law principles.</p>

    <h2>10. Changes to Terms</h2>
    <p>We may update these Terms periodically. Continued use after changes constitutes acceptance of the new terms.</p>

    <p class="italic-note">The Crypto Break-Even Portfolio Utility is a community tool offered freely to support informed cryptocurrency management. <strong>Use at your own risk</strong> and always verify calculations independently.</p>
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
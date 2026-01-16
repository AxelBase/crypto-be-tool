<script lang="ts">
  import '../app.css';
  import { base } from '$app/paths';
  import { fly } from 'svelte/transition';

  const currentYear = new Date().getFullYear();

  let isDropdownOpen = false;

  function toggleDropdown() { isDropdownOpen = !isDropdownOpen; }
  function closeDropdown() { isDropdownOpen = false; }

  function clickOutside(node: HTMLElement) {
    const handleClick = (event: MouseEvent) => {
      if (node && !node.contains(event.target as Node)) {
        node.dispatchEvent(new CustomEvent('click_outside'));
      }
    };
    document.addEventListener('click', handleClick, true);
    return {
      destroy() { document.removeEventListener('click', handleClick, true); }
    };
  }
</script>

<header class="custom-navbar sticky-top">
  <nav class="container d-flex justify-content-between align-items-center py-3">
    
    <div class="d-flex align-items-center gap-2">
      <a href="{base}/" class="d-flex align-items-center text-decoration-none">
        <img src="{base}/AxelLab-Logo.ico" alt="Logo" class="me-2" style="height: 40px;" />
        <span class="brand-name">AxelBase</span>
      </a>

      <div class="ms-3 position-relative" use:clickOutside on:click_outside={closeDropdown}>
        <button
          class="bmac-button d-flex align-items-center gap-2 text-white border-0 px-4 py-2 rounded-pill shadow-sm"
          on:click={toggleDropdown}
          aria-label="Support options"
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
            <path d="M2,21V19H20V21H2M20,8V5H4V8H20M20,10H4V13C4,14.38 4.5,15.63 5.31,16.58L11.64,19H12.36L18.69,16.58C19.5,15.63 20,14.38 20,13V10M16,2H8V4H16V2Z" />
          </svg>
          <span class="d-none d-sm-inline fw-semibold">Buy me a Coffee</span>
        </button>

        {#if isDropdownOpen}
          <div 
            class="bmac-dropdown mt-2" 
            transition:fly={{ y: -10, duration: 250 }}
          >
            <a 
              href="https://buymeacoffee.com/axelbase" 
              target="_blank" 
              rel="noopener" 
              on:click={closeDropdown}
            >
              <span class="amount">$3</span> One Coffee
            </a>
            <a 
              href="https://buymeacoffee.com/axelbase" 
              target="_blank" 
              rel="noopener" 
              on:click={closeDropdown}
            >
              <span class="amount">$5</span> Two Coffees
            </a>
            <a 
              href="https://buymeacoffee.com/axelbase" 
              target="_blank" 
              rel="noopener" 
              on:click={closeDropdown}
            >
              <span class="amount">$10</span> Three Coffees
            </a>

            <a
              href="https://buymeacoffee.com/axelbase"
              target="_blank"
              rel="noopener"
              on:click={closeDropdown}
              class="custom-amount"
            >
              Custom Amount
            </a>

            <a
              href="bitcoin:bc1q3p0e6vt492m4w4fpz5m2cl4zcfuqqkgaj6myc9?label=AxelBase&message=Buy%20me%20a%20coffee"
              on:click={closeDropdown}
              class="custom-amount crypto-option"
            >
              Buy via Crypto (Bitcoin)
            </a>
          </div>
        {/if}
      </div>
    </div>

    <ul class="nav-links-list d-none d-md-flex align-items-center gap-4 m-0 p-0">
      <li><a class="nav-link" href="{base}/#home">Home</a></li>
      <li><a class="nav-link" href="{base}/#about">About</a></li>
      <li><a class="nav-link" href="{base}/#how-to-use">How to use</a></li>
      <li><a class="nav-link" href="{base}/#faq">FAQ</a></li>
      <li><a class="nav-link" href="{base}/blog">Blog</a></li>
    </ul>
  </nav>
</header>

<main>
  <slot />
</main>

<footer class="fixed-bottom-footer">
  <div class="container d-flex justify-content-between align-items-center py-3">
    <span>© AxelBase Crypto Break-Even Portfolio Price – {currentYear}</span>
    <div class="footer-links">
      <a href="{base}/privacy">Privacy</a>
      <a href="{base}/terms" class="ms-3">Terms</a>
    </div>
  </div>
</footer>

<style>
  /* ── Keeping File 2 base variables + adding File 1 bmac styles adapted ── */

  .bmac-button {
    background: var(--primary-color);
    font-size: 0.95rem;
    transition: all 0.3s ease;
    box-shadow: 0 4px 15px rgba(100, 28, 52, 0.25);
  }

  .bmac-button:hover {
    background: var(--primary-light);
    transform: translateY(-1px);
  }

  .bmac-dropdown {
    position: absolute;
    top: 100%;
    left: 50%;
    transform: translateX(-50%);
    width: 240px;
    background: white;
    border-radius: 16px;
    box-shadow: 0 12px 32px rgba(100, 28, 52, 0.18);
    overflow: hidden;
    border: 1px solid rgba(100, 28, 52, 0.12);
    z-index: 1000;
  }

  .bmac-dropdown a {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 12px 20px;
    color: #333;
    text-decoration: none;
    font-size: 0.98rem;
    transition: all 0.2s ease;
  }

  .bmac-dropdown a:hover {
    background: #fceef2;           /* light pinkish – matches primary theme */
    color: var(--primary-color);
    padding-left: 28px;
  }

  .bmac-dropdown .amount {
    font-weight: 700;
    color: var(--primary-color);
    font-size: 1.1rem;
  }

  .bmac-dropdown .custom-amount {
    font-weight: 600;
    color: var(--primary-color);
    border-top: 1px solid #eee;
    justify-content: center !important;
  }

  .crypto-option {
    border-top: 1px solid #eee;
    margin-top: 2px;
    padding-top: 12px;
  }

  /* Keeping rest of File 2 style */
  .custom-navbar {
    background: rgba(255, 255, 255, 0.85);
    backdrop-filter: blur(12px);
    border-bottom: 1px solid rgba(100, 28, 52, 0.1);
  }

  .brand-name {
    font-weight: 700;
    font-size: 1.4rem;
    color: var(--primary-color);
  }

  .nav-links-list { list-style: none; }

  .nav-link {
    color: #555;
    font-weight: 500;
    text-decoration: none;
  }

  .fixed-bottom-footer {
    position: relative;
    bottom: 0;
    width: 100%;
    background: var(--primary-color);
    color: white;
    font-size: 0.9rem;
    z-index: 1000;
  }

  .footer-links a {
    color: rgba(255, 255, 255, 0.8);
    text-decoration: none;
  }

  .footer-links a:hover { color: white; }
</style>
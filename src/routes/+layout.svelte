<script lang="ts">
  import '../app.css';
  import { base } from '$app/paths';
  import { fly } from 'svelte/transition';

  const paypalUsername = 'AxelLab427'; // Update this!
  const donationAmounts = [1, 3, 5, 10];
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
        <button class="bmac-button" on:click={toggleDropdown}>
          <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" class="me-1">
            <path d="M12.35,22.2L12,22A10,10,0,0,1,2,12V10A2,2,0,0,1,4,8H7.2A5.13,5.13,0,0,1,12,3A5.13,5.13,0,0,1,16.8,8H20A2,2,0,0,1,22,10V12A10,10,0,0,1,12.35,22.2M4,10V12A8,8,0,0,0,12,20A8,8,0,0,0,20,12V10H16.8A5.11,5.11,0,0,1,12.5,5.12A5.15,5.15,0,0,1,7.2,10H4Z" />
          </svg>
          Buy me a coffee
        </button>

        {#if isDropdownOpen}
          <div class="bmac-dropdown" transition:fly={{ y: -10, duration: 250 }}>
            {#each donationAmounts as amount}
              <a href="https://paypal.me/{paypalUsername}/{amount}" target="_blank" on:click={closeDropdown}>
                ${amount}
              </a>
            {/each}
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
    <span>&copy; AxelBase Crypto Break-Even Portfolio Price – {currentYear}</span>
    <div class="footer-links">
      <a href="{base}/privacy">Privacy</a>
      <a href="{base}/terms" class="ms-3">Terms</a>
    </div>
  </div>
</footer>

<style>
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

  .bmac-button {
    background-color: var(--primary-color);
    color: white;
    border: none;
    padding: 8px 18px;
    font-weight: 500;
    display: flex;
    align-items: center;
    box-shadow: 0 4px 15px rgba(100, 28, 52, 0.2);
  }

  .bmac-button:hover {
    background-color: var(--primary-light);
    transform: scale(1.05);
  }

  .bmac-dropdown {
    position: absolute;
    top: 100%;
    left: 0;
    background: white;
    box-shadow: var(--shadow);
    border-radius: 15px;
    margin-top: 10px;
    padding: 10px;
    z-index: 1000;
    min-width: 120px;
    display: flex;
    flex-direction: column;
    overflow: hidden;
  }

  .bmac-dropdown a {
    padding: 8px 15px;
    text-decoration: none;
    color: var(--text-color);
    border-radius: 10px;
    transition: var(--transition);
  }

  .bmac-dropdown a:hover {
    background-color: #fceef2;
    color: var(--primary-color);
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
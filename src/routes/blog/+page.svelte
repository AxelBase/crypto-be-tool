<script lang="ts">
  import { base } from '$app/paths';

  const posts = [
    { href: '/blog/posts/post1', title: 'Understanding Break-Even Price in Crypto Portfolios', description: 'A clear explanation of how break-even price is calculated using weighted averages of multiple purchases, including the impact of transaction fees.' },
    { href: '/blog/posts/post2', title: 'How the Portfolio Calculator Handles Multiple Entries', description: 'Dive into the mechanics of adding, removing, and dynamically updating entries to compute real-time break-even prices accurately.' },
    { href: '/blog/posts/post3', title: 'The Recovery Tool: Minimal Input, Powerful Results', description: 'Explore how the recovery calculator uses only essential inputs to provide precise recovery strategies through background simulations.' },
    { href: '/blog/posts/post4', title: 'Behind the Recovery Simulations: Iterative Optimization', description: 'A technical breakdown of the binary search algorithm used to find the optimal additional investment for target recovery percentages.' },
    { href: '/blog/posts/post5', title: 'Handling Edge Cases: Already Profitable or Full Recovery', description: 'How the tool gracefully manages scenarios like being above break-even or mathematically impossible full recoveries.' },
    { href: '/blog/posts/post6', title: 'Why Recovery to Current Market Price is Impossible', description: 'Mathematical proof and explanation of why averaging down cannot bring break-even exactly to (or below) the current market price.' },
    { href: '/blog/posts/post7', title: 'Precision and Floating-Point Considerations in Calculations', description: 'Addressing minor display discrepancies due to JavaScript floating-point arithmetic and how the tool ensures practical accuracy.' },
  ];
</script>

<svelte:head>
  <title>Blog | Crypto Break-Even Insights</title>
  <meta name="description" content="In-depth articles on break-even calculations, recovery strategies, and the technical workings of the Crypto Break-Even Portfolio Utility." />
</svelte:head>

<div class="container mt-5 blog-index">
  <header class="blog-header">
    <h1><i class="bi bi-graph-up-arrow"></i> Blog: Crypto Break-Even Insights</h1>
    <p class="subtitle">
      Technical deep dives, explanations, and practical guides for using the Crypto Break-Even Portfolio Price Utility. Learn how the calculations work, interpret results, and optimize your portfolio management.
    </p>
  </header>

  <div class="posts-grid">
    {#each posts as post}
      <a href="{base}{post.href}" class="card post-card shadow-sm">
        <div class="card-body">
          <h2 class="post-title">{post.title}</h2>
          <p class="post-description">{post.description}</p>
          <span class="read-more">Read Article &rarr;</span>
        </div>
      </a>
    {/each}
  </div>
</div>

<style>
  .blog-index {
    padding-top: 2rem;
    padding-bottom: 4rem;
  }

  .blog-header {
    text-align: center;
    margin-bottom: 3rem;
    border-bottom: 1px solid var(--border-color, #dee2e6);
    padding-bottom: 2rem;
  }

  .blog-header h1 {
    font-size: 2.8rem;
    margin-bottom: 1rem;
  }

  .subtitle {
    font-size: 1.1rem;
    color: var(--text-secondary, #6c757d);
    max-width: 700px;
    margin: 0 auto;
    line-height: 1.7;
  }

  .posts-grid {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
    gap: 1.5rem;
  }

  .post-card {
    text-decoration: none;
    transition: transform 0.2s, box-shadow 0.2s;
  }

  .post-card:hover {
    transform: translateY(-5px);
    box-shadow: 0 10px 20px rgba(0,0,0,0.1) !important;
  }

  .post-card .card-body {
    display: flex;
    flex-direction: column;
    height: 100%;
  }

  .post-title {
    font-size: 1.25rem;
    color: var(--accent-secondary, #0d6efd);
    margin-bottom: 0.75rem;
  }

  .post-description {
    color: var(--text-secondary, #6c757d);
    flex-grow: 1;
    margin-bottom: 1rem;
  }

  .read-more {
    color: var(--accent-primary, #0d6efd);
    font-weight: 600;
    transition: transform 0.2s;
  }

  .post-card:hover .read-more {
    transform: translateX(5px);
  }
</style>
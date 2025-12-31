<script>
  import { base } from '$app/paths';
  import { calculateRecovery } from '$lib/calculations';
  import { fade } from 'svelte/transition';

  let currentQuantity = '';
  let currentBreakEven = '';
  let currentMarketPrice = '';
  let targetRecoveryPct = 50;

  let result = null;
  let error = '';

  function computeRecovery() {
    error = '';
    result = null;

    const qty = parseFloat(currentQuantity);
    const be = parseFloat(currentBreakEven);
    const market = parseFloat(currentMarketPrice);
    const pct = parseFloat(targetRecoveryPct);

    if (isNaN(qty) || isNaN(be) || isNaN(market) || isNaN(pct)) {
      error = 'Please enter valid numeric values for all fields.';
      return;
    }

    if (qty <= 0) {
      error = 'Current quantity must be greater than zero.';
      return;
    }

    if (pct < 0 || pct > 100) {
      error = 'Target recovery percentage must be between 0 and 100.';
      return;
    }

    if (market <= 0) {
      error = 'Current market price must be greater than zero.';
      return;
    }

    result = calculateRecovery(qty, be, market, pct);
  }
</script>

<div class="container mt-5 pb-5">
  <div class="card shadow-lg border-0 rounded-4 overflow-hidden">
    <div class="card-header text-white p-4" style="background-color: #641C34;">
      <h2 class="m-0 fw-bold">Recovery Strategy Tool</h2>
    </div>
    
    <div class="card-body p-4">
      <p class="text-muted mb-4 lead">
        Enter your details to calculate the investment needed to lower your average entry price.
      </p>

      <form on:submit|preventDefault={computeRecovery}>
        <div class="row g-4">
          <div class="col-md-6">
            <label for="qty" class="form-label fw-bold small text-uppercase">Total Quantity Owned</label>
            <input id="qty" type="number" step="any" class="form-control rounded-pill p-3" placeholder="e.g. 2.5" bind:value={currentQuantity} required />
          </div>

          <div class="col-md-6">
            <label for="be" class="form-label fw-bold small text-uppercase">Average Break-Even ($)</label>
            <input id="be" type="number" step="any" class="form-control rounded-pill p-3" placeholder="e.g. 60000" bind:value={currentBreakEven} required />
          </div>

          <div class="col-md-6">
            <label for="market" class="form-label fw-bold small text-uppercase">Current Market Price ($)</label>
            <input id="market" type="number" step="any" class="form-control rounded-pill p-3" placeholder="e.g. 45000" bind:value={currentMarketPrice} required />
          </div>

          <div class="col-md-6">
            <label for="pct" class="form-label fw-bold small text-uppercase">Recovery Target (%)</label>
            <input id="pct" type="number" min="0" max="100" step="1" class="form-control rounded-pill p-3" bind:value={targetRecoveryPct} required />
            <div class="form-text px-2">How much of the loss gap do you want to close?</div>
          </div>
        </div>

        <div class="text-center mt-5">
          <button type="submit" class="btn btn-claret btn-lg rounded-pill px-5 py-3 fw-bold shadow">
            Calculate Strategy
          </button>
        </div>
      </form>

      {#if error}
        <div class="alert alert-danger rounded-pill mt-4" transition:fade>{error}</div>
      {/if}

      {#if result}
        <div class="mt-5 p-4 result-card rounded-4 border-0 shadow-sm" transition:fade>
          <h4 class="fw-bold mb-3" style="color: #641C34;">Optimized Strategy</h4>
          <hr />

          {#if result.additionalInvestment === 0 && result.strategy.includes('Already')}
            <div class="alert alert-success rounded-pill">{result.strategy}</div>
          {:else}
            <p class="fs-5 lh-base">{result.strategy}</p>

            <div class="row mt-4 g-3">
              <div class="col-sm-6">
                <div class="p-3 bg-white rounded-3 shadow-sm border-start border-4" style="border-color: #641C34 !important;">
                  <span class="small text-muted text-uppercase fw-bold">Additional Buy</span>
                  <h3 class="m-0 fw-bold">${result.additionalInvestment.toLocaleString(undefined, {minimumFractionDigits: 2})}</h3>
                </div>
              </div>
              <div class="col-sm-6">
                <div class="p-3 bg-white rounded-3 shadow-sm border-start border-4" style="border-color: #641C34 !important;">
                  <span class="small text-muted text-uppercase fw-bold">New Break-Even</span>
                  <h3 class="m-0 fw-bold">${result.newBreakEven.toFixed(4)}</h3>
                </div>
              </div>
            </div>
          {/if}
        </div>
      {/if}
    </div>

    <div class="card-footer bg-light p-4 text-center border-0 d-flex justify-content-center gap-3">
      <a href="{base}/" class="btn btn-outline-secondary rounded-pill px-4">Home</a>
      <a href="{base}/portfolio" class="btn btn-outline-dark rounded-pill px-4">Portfolio Calc</a>
    </div>
  </div>
</div>

<style>
  .btn-claret {
    background-color: #641C34;
    color: white;
    transition: all 0.3s ease;
  }
  .btn-claret:hover {
    background-color: #4a1426;
    color: white;
    transform: translateY(-3px);
    box-shadow: 0 10px 20px rgba(100, 28, 52, 0.3) !important;
  }
  .result-card {
    background-color: #fcfafb;
    border: 1px solid rgba(100, 28, 52, 0.1);
  }
  .form-control:focus {
    border-color: #641C34;
    box-shadow: 0 0 0 0.25rem rgba(100, 28, 52, 0.1);
  }
</style>
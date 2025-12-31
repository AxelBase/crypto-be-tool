<script>
  import { base } from '$app/paths';
  import { calculateBreakEven } from '$lib/calculations';
  import { fade, slide } from 'svelte/transition';

  let entries = [{ quantity: '', price: '', fee: '' }];
  let breakEven = 0;
  let error = '';

  function addEntry() {
    entries = [...entries, { quantity: '', price: '', fee: '' }];
  }

  function removeEntry(index) {
    entries = entries.filter((_, i) => i !== index);
    computeBreakEven();
  }

  function computeBreakEven() {
    error = '';
    try {
      breakEven = calculateBreakEven(entries);
    } catch (e) {
      error = 'Invalid input. Please enter numeric values.';
      breakEven = 0;
    }
  }
</script>

<div class="container mt-5 pb-5">
  <div class="card shadow-lg border-0 rounded-4 overflow-hidden">
    <div class="card-header text-white p-4" style="background-color: #641C34;">
      <h2 class="m-0 fw-bold">Portfolio Break-Even Calculator</h2>
    </div>
    
    <div class="card-body p-4">
      <form on:submit|preventDefault>
        {#each entries as entry, index (index)}
          <div class="row g-2 mb-3 align-items-center" transition:slide>
            <div class="col-md-4">
              <div class="input-group">
                <span class="input-group-text bg-white border-end-0 rounded-start-pill">#</span>
                <input type="number" class="form-control border-start-0 rounded-end-pill" placeholder="Quantity" bind:value={entry.quantity} on:input={computeBreakEven} required />
              </div>
            </div>
            <div class="col-md-3">
              <div class="input-group">
                <span class="input-group-text bg-white border-end-0 rounded-start-pill">$</span>
                <input type="number" class="form-control border-start-0 rounded-end-pill" placeholder="Price" bind:value={entry.price} on:input={computeBreakEven} required />
              </div>
            </div>
            <div class="col-md-3">
              <div class="input-group">
                <span class="input-group-text bg-white border-end-0 rounded-start-pill">Fee</span>
                <input type="number" class="form-control border-start-0 rounded-end-pill" placeholder="Optional" bind:value={entry.fee} on:input={computeBreakEven} />
              </div>
            </div>
            <div class="col-md-2 text-end">
              <button type="button" class="btn btn-outline-danger rounded-pill px-3" on:click={() => removeEntry(index)} disabled={entries.length === 1}>
                Remove
              </button>
            </div>
          </div>
        {/each}

        <button type="button" class="btn btn-claret-outline rounded-pill px-4 mt-2" on:click={addEntry}>
          + Add Entry
        </button>
      </form>

      <hr class="my-5" />

      <div class="result-box p-4 text-center rounded-4 mb-4" in:fade>
        <p class="text-uppercase tracking-wider mb-1" style="color: #641C34; font-weight: 600;">Overall Break-Even Price</p>
        <h1 class="display-4 fw-bold" style="color: #641C34;">${breakEven.toFixed(4)}</h1>
        {#if error}
          <div class="alert alert-danger rounded-pill mt-2">{error}</div>
        {/if}
      </div>

      <div class="table-responsive">
        <table class="table table-hover align-middle">
          <thead class="table-light">
            <tr>
              <th class="border-0">Quantity</th>
              <th class="border-0">Price</th>
              <th class="border-0">Fee</th>
            </tr>
          </thead>
          <tbody>
            {#each entries as entry}
              <tr>
                <td>{entry.quantity || '-'}</td>
                <td>{entry.price ? '$' + entry.price : '-'}</td>
                <td>{entry.fee ? '$' + entry.fee : '-'}</td>
              </tr>
            {/each}
          </tbody>
        </table>
      </div>
    </div>

    <div class="card-footer bg-light p-4 text-center border-0">
      <a href="{base}/" class="btn btn-secondary rounded-pill px-4">Back to Home</a>
    </div>
  </div>
</div>

<style>
  .btn-claret-outline {
    color: #641C34;
    border: 2px solid #641C34;
    font-weight: 600;
    transition: all 0.3s ease;
  }
  .btn-claret-outline:hover {
    background-color: #641C34;
    color: white;
    transform: scale(1.05);
  }
  .result-box {
    background: rgba(100, 28, 52, 0.05);
    border: 2px dashed rgba(100, 28, 52, 0.2);
  }
  .form-control:focus {
    border-color: #641C34;
    box-shadow: 0 0 0 0.25rem rgba(100, 28, 52, 0.1);
  }
</style>
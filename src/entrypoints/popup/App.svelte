<script lang="ts">
  let balance = $state<number>(0);

  async function getBalance() {
    return (await browser.runtime.sendMessage({type: "get-balance"}))!.amount;
  }

  getBalance().then(amount => balance = amount);

  const twoMinutes = 2 * 60 * 1000;
  setInterval(() => {
    getBalance().then(amount => balance = amount);
  }, twoMinutes);
</script>

<main>
  <h1>Anthropic Balance</h1>

  <div class="card">
    {#if balance > 0}
      {new Intl.NumberFormat("en-US", {style: "currency", currency: "USD"}).format(balance / 100)}
    {:else}
      Loading...
    {/if}
  </div>
</main>

<style>
  .card {
    font-size: 2rem;
    font-variant-numeric: tabular-nums;
  }
</style>

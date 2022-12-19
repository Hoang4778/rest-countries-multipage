<script>
  import { lightmode } from "../store";

  function toggleDarkmode() {
    lightmode.update((mode) => (mode = !mode));
  }
</script>

<header class:lightmode-bg={$lightmode}>
  <nav class:lightmode-text={$lightmode}>
    <h1>Where in the world?</h1>
    <button on:click={toggleDarkmode} class:lightmode-text={$lightmode}>
      <span class="material-symbols-outlined">dark_mode</span><span
        >Dark mode</span
      >
    </button>
  </nav>
</header>
<main class:lightmode-text={$lightmode} class:lightmode-bg={$lightmode}>
  <slot />
</main>

<style>
  header {
    background-color: var(--drk-mde-el);
  }
  nav {
    max-width: 1440px;
    margin: 0 auto;
    height: 5rem;
    color: white;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
  nav > button {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    border: none;
    background-color: transparent;
    color: white;
    cursor: pointer;
    padding: 1rem;
    font-size: 1rem;
  }
  main {
    background-color: var(--drk-mde-bg);
    color: white;
    padding: 3rem 0;
    min-height: 100vh;
  }
  .lightmode-bg {
    background-color: var(--lght-mde-bg);
    box-shadow: 0 5px 10px black;
  }
  .lightmode-text {
    color: var(--lght-mde-txt);
  }
</style>

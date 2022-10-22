<header>
    <nav>
        <h1>Where in the world?</h1>
        <p>
            <span class="material-symbols-outlined">dark_mode</span><span
                >Dark mode</span
            >
        </p>
    </nav>
</header>
<main>
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
    nav > p {
        display: flex;
        align-items: center;
        gap: 0.5rem;
    }
    main {
        background-color: var(--drk-mde-bg);
        color: white;
        padding: 3rem 0;
        min-height: 100vh;
    }
</style>

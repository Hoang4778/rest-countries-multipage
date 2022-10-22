<script>
    export let data;
    let filteredCountries = data.allCountries;

    filteredCountries.forEach((country) => {
        let popArr = country.population.toString().split("");
        let count = 0;
        for (let i = popArr.length - 1; i >= 0; i--) {
            count++;
            if (count == 3 && i != 0) {
                popArr[i] = "," + popArr[i];
                count = 0;
            }
        }
        country.population = popArr.join("");
    });

    function filterCountries(e) {
        if (e.target.textContent == "America") {
            filteredCountries = data.allCountries.filter(
                (country) => country.region == "Americas"
            );
        } else {
            filteredCountries = data.allCountries.filter(
                (country) => country.region == e.target.textContent
            );
        }
    }

    function searchCountries(e) {
        filteredCountries = data.allCountries.filter((country) =>
            country.name.common
                .toLowerCase()
                .includes(e.target.value.toLowerCase())
        );
    }
</script>

<svelte:head>
    <title>Rest countries API multipage</title>
</svelte:head>
<div id="container">
    <div id="subtab">
        <div id="search">
            <span class="material-symbols-outlined">search</span>
            <input
                type="text"
                placeholder="Search for a country..."
                on:input={searchCountries}
            />
        </div>
        <ul id="filter">
            <p>
                <span>Filter by Region</span>
                <span class="material-symbols-outlined expand">expand_more</span
                >
            </p>
            <ul id="filter-cat">
                <li on:click={filterCountries}>Africa</li>
                <li on:click={filterCountries}>America</li>
                <li on:click={filterCountries}>Asia</li>
                <li on:click={filterCountries}>Europe</li>
                <li on:click={filterCountries}>Oceania</li>
            </ul>
        </ul>
    </div>
    <div id="countries">
        {#each filteredCountries as country}
            <div class="country">
                <img
                    src={country.flags.svg}
                    alt={country.name.common + " Flag"}
                />
                <a href="/{country.name.common.toLowerCase()}"
                    >{country.name.common}</a
                >
                <p><span>Population:</span> {country.population}</p>
                <p><span>Region:</span> {country.region}</p>
                <p><span>Capital:</span> {country.capital}</p>
            </div>
        {/each}
    </div>
</div>

<style>
    #container {
        max-width: 1440px;
        margin: 0 auto;
    }
    #search {
        max-width: 20rem;
        width: 100%;
        padding: 1rem 1.5rem;
        background-color: var(--drk-mde-el);
        display: flex;
        align-items: center;
        gap: 1rem;
        border-radius: 0.5rem;
    }
    #search > input {
        width: 100%;
        font-size: 1.1rem;
        background-color: var(--drk-mde-el);
        border: none;
        color: white;
    }
    #search > input:focus {
        outline: none;
    }
    #search > input::placeholder {
        color: white;
    }
    #subtab {
        display: flex;
        justify-content: space-between;
        align-items: center;
    }
    #filter {
        position: relative;
        width: 15rem;
        padding: 1rem;
        background-color: var(--drk-mde-el);
        border-radius: 0.5rem;
    }
    #filter > p {
        display: flex;
        justify-content: space-between;
        align-items: center;
    }
    #filter-cat {
        width: 15rem;
        border-radius: 0.5rem;
        background-color: var(--drk-mde-el);
        list-style: none;
        position: absolute;
        top: 3.6rem;
        right: 0;
        display: none;
    }
    #filter-cat > li {
        padding: 1rem;
        cursor: pointer;
    }
    #filter-cat > li:hover {
        border-radius: 0.5rem;
        background-color: var(--drk-mde-bg);
    }
    #filter:hover #filter-cat {
        display: block;
    }
    .expand {
        cursor: pointer;
    }
    #countries {
        min-height: 100vh;
        margin-top: 3rem;
        display: grid;
        grid-template-columns: repeat(4, minmax(10rem, 1fr));
        gap: 3rem;
    }
    .country {
        padding-bottom: 2rem;
        border-radius: 0.5rem;
        background-color: var(--drk-mde-el);
    }
    .country > img {
        width: 100%;
        height: 40%;
        object-fit: contain;
    }
    .country > a {
        display: block;
        text-decoration: none;
        color: white;
        font-size: 1.2rem;
        padding: 1rem 2rem 2rem;
        font-weight: 600;
    }
    .country > p {
        padding: 0 2rem 1rem;
        color: silver;
    }
    .country > p > span {
        color: white;
        font-weight: 600;
    }
    @media (max-width: 1007px) {
        #countries {
            grid-template-columns: repeat(3, 1fr);
        }
    }
    @media (max-width: 768px) {
        #countries {
            grid-template-columns: 1fr 1fr;
        }
    }
    @media (max-width: 560px) {
        #subtab {
            flex-direction: column;
            align-items: flex-start;
            gap: 2rem;
        }
    }
    @media (max-width: 500px) {
        #countries {
            grid-template-columns: 1fr;
            padding: 0 5%;
        }
    }
</style>

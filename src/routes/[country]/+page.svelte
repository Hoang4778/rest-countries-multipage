<script>
    export let data;
    const country = data.archetype[0];
    const allCountries = data.all;

    //Stringify native names
    const nameArr = new Set();
    for (let name in country.name.nativeName) {
        nameArr.add(country.name.nativeName[name].official);
    }
    let nativeNames = "";
    for (let name of nameArr) {
        nativeNames += `${name}, `;
    }
    nativeNames = nativeNames.substring(0, nativeNames.length - 2);

    //Transform population number into accounting format
    const popArr = country.population.toString().split("");
    let count = 0;
    for (let i = popArr.length - 1; i >= 0; i--) {
        count++;
        if (count == 3 && i != 0) {
            popArr[i] = "," + popArr[i];
            count = 0;
        }
    }
    const population = popArr.join("");

    //Stringify currencies data
    const currencyArr = new Set();
    for (let i in country.currencies) {
        currencyArr.add(country.currencies[i].name);
    }
    let currencies = "";
    for (let i of currencyArr) {
        currencies += `${i}, `;
    }
    currencies = currencies.substring(0, currencies.length - 2);

    //Stringify languages data
    const languageArr = new Set();
    for (let i in country.languages) {
        languageArr.add(country.languages[i]);
    }
    let languages = "";
    for (let j of languageArr) {
        languages += `${j}, `;
    }
    languages = languages.substring(0, languages.length - 2);

    // Create a list of border countries
    const border = [];
    let noCountry = "";
    for (let item of allCountries) {
        if (item.borders) {
            if (item.borders.includes(country.cca3)) {
                border.push(item.name.common);
            }
        }
    }
    if (border.length == 0) {
        noCountry = "No country";
    }
</script>

<svelte:head>
    <title>{country.name.common}</title>
</svelte:head>

<div id="container">
    <a id="back" href="/"
        ><span class="material-symbols-outlined"> keyboard_backspace </span>
        <span>Back</span></a
    >
    <div id="info">
        <img src={country.flags.svg} alt={country.name.common + " flag"} />
        <div>
            <p id="title">{country.name.common}</p>
            <div id="desc">
                <p><span>Native Name:</span><span>{nativeNames}</span></p>
                <p>
                    <span>Top Level Domain:</span><span
                        >{country.tld
                            ? country.tld.reduce((x, y) => `${x}, ${y}`)
                            : "N/A"}</span
                    >
                </p>
                <p><span>Population:</span><span>{population}</span></p>
                <p>
                    <span>Currencies:</span><span
                        >{currencies ? currencies : "N/A"}</span
                    >
                </p>
                <p><span>Region:</span><span>{country.region}</span></p>
                <p>
                    <span>Languages:</span><span
                        >{languages ? languages : "N/A"}</span
                    >
                </p>
                <p>
                    <span>Sub Region:</span><span
                        >{country.subregion ? country.subregion : "N/A"}</span
                    >
                </p>
                <p>
                    <span>Capital:</span><span
                        >{country.capital ? country.capital : "N/A"}</span
                    >
                </p>
            </div>
        </div>
        <div id="borders">
            <p>Border Countries:</p>
            {#if border.length != 0}
                <ul>
                    {#each border as nation}
                        <li>
                            <a href="/border/{nation}">{nation}</a>
                        </li>
                    {/each}
                </ul>
            {:else}
                <p>{noCountry}</p>
            {/if}
        </div>
    </div>
</div>

<style>
    #container {
        max-width: 1440px;
        margin: 0 auto;
    }
    #back {
        text-decoration: none;
        width: 8rem;
        padding: 1rem 2rem;
        background-color: var(--drk-mde-el);
        border: none;
        border-radius: 0.5rem;
        color: white;
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin-bottom: 3rem;
        cursor: pointer;
    }
    #info {
        display: grid;
        grid-template-columns: 1fr 1fr;
        grid-template-rows: 1fr 1fr;
        gap: 0 10%;
        align-items: center;
    }
    #info img {
        width: 100%;
        height: auto;
        object-fit: cover;
    }
    #title {
        font-size: 2rem;
        font-weight: 800;
        margin-bottom: 1rem;
    }
    #desc {
        display: grid;
        grid-template-columns: 1fr 1fr;
        gap: 0.5rem 0;
        margin-bottom: 4rem;
    }
    #desc > p {
        display: flex;
        align-items: center;
        gap: 1rem;
    }
    #desc > p > span:first-child {
        font-weight: 600;
    }
    #desc > p > span:last-child {
        color: silver;
    }
    #borders {
        grid-column: 2 / 3;
        align-self: start;
        display: flex;
        gap: 1rem;
    }
    #borders > p:first-child {
        font-weight: 600;
    }
    #borders > ul {
        list-style: none;
        display: flex;
        flex-wrap: wrap;
        align-items: center;
        gap: 1rem;
    }
    #borders > ul > li {
        box-shadow: 0 0 10px black;
        border-radius: 0.5rem;
        padding: 1rem 2rem;
    }
    #borders > ul > li > a {
        text-decoration: none;
        color: white;
    }
    #borders > p:last-child {
        color: silver;
    }
    @media (max-width: 1007px) {
        #desc {
            grid-template-columns: 1fr;
        }
        #borders {
            grid-column: 1 / 3;
        }
    }
    @media (max-width: 768px) {
        #info {
            align-items: flex-start;
        }
    }
    @media (max-width: 500px) {
        #info {
            display: flex;
            flex-direction: column;
            gap: 2rem;
            padding: 0 10%;
        }
        #container {
            padding-bottom: 10rem;
        }
        #desc {
            margin-bottom: 0;
        }
    }
</style>

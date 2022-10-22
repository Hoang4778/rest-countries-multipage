export async function load({fetch}) {
        const promise = await fetch("https://restcountries.com/v3.1/all");
        const res = promise.json();

        return {
            allCountries: res,
        };
    }
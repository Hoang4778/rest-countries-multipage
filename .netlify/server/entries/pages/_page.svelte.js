import { c as create_ssr_component, d as each, f as add_attribute, e as escape } from "../../chunks/index.js";
const _page_svelte_svelte_type_style_lang = "";
const css = {
  code: "#container.svelte-1n4j1ky.svelte-1n4j1ky.svelte-1n4j1ky{max-width:1440px;margin:0 auto}#search.svelte-1n4j1ky.svelte-1n4j1ky.svelte-1n4j1ky{max-width:20rem;width:100%;padding:1rem 1.5rem;background-color:var(--drk-mde-el);display:flex;align-items:center;gap:1rem;border-radius:0.5rem}#search.svelte-1n4j1ky>input.svelte-1n4j1ky.svelte-1n4j1ky{width:100%;font-size:1.1rem;background-color:var(--drk-mde-el);border:none;color:white}#search.svelte-1n4j1ky>input.svelte-1n4j1ky.svelte-1n4j1ky:focus{outline:none}#search.svelte-1n4j1ky>input.svelte-1n4j1ky.svelte-1n4j1ky::placeholder{color:white}#subtab.svelte-1n4j1ky.svelte-1n4j1ky.svelte-1n4j1ky{display:flex;justify-content:space-between;align-items:center}#filter.svelte-1n4j1ky.svelte-1n4j1ky.svelte-1n4j1ky{position:relative;width:15rem;padding:1rem;background-color:var(--drk-mde-el);border-radius:0.5rem}#filter.svelte-1n4j1ky>p.svelte-1n4j1ky.svelte-1n4j1ky{display:flex;justify-content:space-between;align-items:center}#filter-cat.svelte-1n4j1ky.svelte-1n4j1ky.svelte-1n4j1ky{width:15rem;border-radius:0.5rem;background-color:var(--drk-mde-el);list-style:none;position:absolute;top:3.6rem;right:0;display:none}#filter-cat.svelte-1n4j1ky>li.svelte-1n4j1ky.svelte-1n4j1ky{padding:1rem;cursor:pointer}#filter-cat.svelte-1n4j1ky>li.svelte-1n4j1ky.svelte-1n4j1ky:hover{border-radius:0.5rem;background-color:var(--drk-mde-bg)}#filter.svelte-1n4j1ky:hover #filter-cat.svelte-1n4j1ky.svelte-1n4j1ky{display:block}.expand.svelte-1n4j1ky.svelte-1n4j1ky.svelte-1n4j1ky{cursor:pointer}#countries.svelte-1n4j1ky.svelte-1n4j1ky.svelte-1n4j1ky{min-height:100vh;margin-top:3rem;display:grid;grid-template-columns:repeat(4, minmax(10rem, 1fr));gap:3rem}.country.svelte-1n4j1ky.svelte-1n4j1ky.svelte-1n4j1ky{padding-bottom:2rem;border-radius:0.5rem;background-color:var(--drk-mde-el)}.country.svelte-1n4j1ky>img.svelte-1n4j1ky.svelte-1n4j1ky{width:100%;height:40%;object-fit:contain}.country.svelte-1n4j1ky>a.svelte-1n4j1ky.svelte-1n4j1ky{display:block;text-decoration:none;color:white;font-size:1.2rem;padding:1rem 2rem 2rem;font-weight:600}.country.svelte-1n4j1ky>p.svelte-1n4j1ky.svelte-1n4j1ky{padding:0 2rem 1rem;color:silver}.country.svelte-1n4j1ky>p.svelte-1n4j1ky>span.svelte-1n4j1ky{color:white;font-weight:600}@media(max-width: 1007px){#countries.svelte-1n4j1ky.svelte-1n4j1ky.svelte-1n4j1ky{grid-template-columns:repeat(3, 1fr)}}@media(max-width: 768px){#countries.svelte-1n4j1ky.svelte-1n4j1ky.svelte-1n4j1ky{grid-template-columns:1fr 1fr}}@media(max-width: 560px){#subtab.svelte-1n4j1ky.svelte-1n4j1ky.svelte-1n4j1ky{flex-direction:column;align-items:flex-start;gap:2rem}}@media(max-width: 500px){#countries.svelte-1n4j1ky.svelte-1n4j1ky.svelte-1n4j1ky{grid-template-columns:1fr;padding:0 5%}}",
  map: null
};
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { data } = $$props;
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
  if ($$props.data === void 0 && $$bindings.data && data !== void 0)
    $$bindings.data(data);
  $$result.css.add(css);
  return `${$$result.head += `<!-- HEAD_svelte-12ou0vf_START -->${$$result.title = `<title>Rest countries API multipage</title>`, ""}<!-- HEAD_svelte-12ou0vf_END -->`, ""}
<div id="${"container"}" class="${"svelte-1n4j1ky"}"><div id="${"subtab"}" class="${"svelte-1n4j1ky"}"><div id="${"search"}" class="${"svelte-1n4j1ky"}"><span class="${"material-symbols-outlined"}">search</span>
            <input type="${"text"}" placeholder="${"Search for a country..."}" class="${"svelte-1n4j1ky"}"></div>
        <ul id="${"filter"}" class="${"svelte-1n4j1ky"}"><p class="${"svelte-1n4j1ky"}"><span>Filter by Region</span>
                <span class="${"material-symbols-outlined expand svelte-1n4j1ky"}">expand_more</span></p>
            <ul id="${"filter-cat"}" class="${"svelte-1n4j1ky"}"><li class="${"svelte-1n4j1ky"}">Africa</li>
                <li class="${"svelte-1n4j1ky"}">America</li>
                <li class="${"svelte-1n4j1ky"}">Asia</li>
                <li class="${"svelte-1n4j1ky"}">Europe</li>
                <li class="${"svelte-1n4j1ky"}">Oceania</li></ul></ul></div>
    <div id="${"countries"}" class="${"svelte-1n4j1ky"}">${each(filteredCountries, (country) => {
    return `<div class="${"country svelte-1n4j1ky"}"><img${add_attribute("src", country.flags.svg, 0)}${add_attribute("alt", country.name.common + " Flag", 0)} class="${"svelte-1n4j1ky"}">
                <a href="${"/" + escape(country.name.common.toLowerCase(), true)}" class="${"svelte-1n4j1ky"}">${escape(country.name.common)}</a>
                <p class="${"svelte-1n4j1ky"}"><span class="${"svelte-1n4j1ky"}">Population:</span> ${escape(country.population)}</p>
                <p class="${"svelte-1n4j1ky"}"><span class="${"svelte-1n4j1ky"}">Region:</span> ${escape(country.region)}</p>
                <p class="${"svelte-1n4j1ky"}"><span class="${"svelte-1n4j1ky"}">Capital:</span> ${escape(country.capital)}</p>
            </div>`;
  })}</div>
</div>`;
});
export {
  Page as default
};

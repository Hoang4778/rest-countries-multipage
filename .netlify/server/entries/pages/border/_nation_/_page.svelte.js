import { c as create_ssr_component, e as escape, f as add_attribute, d as each } from "../../../../chunks/index.js";
const _page_svelte_svelte_type_style_lang = "";
const css = {
  code: "#container.svelte-8zxrbv.svelte-8zxrbv.svelte-8zxrbv.svelte-8zxrbv{max-width:1440px;margin:0 auto}#back.svelte-8zxrbv.svelte-8zxrbv.svelte-8zxrbv.svelte-8zxrbv{text-decoration:none;width:8rem;padding:1rem 2rem;background-color:var(--drk-mde-el);border:none;border-radius:0.5rem;color:white;display:flex;justify-content:space-between;align-items:center;margin-bottom:3rem;cursor:pointer}#info.svelte-8zxrbv.svelte-8zxrbv.svelte-8zxrbv.svelte-8zxrbv{display:grid;grid-template-columns:1fr 1fr;grid-template-rows:1fr 1fr;gap:0 10%;align-items:center}#info.svelte-8zxrbv img.svelte-8zxrbv.svelte-8zxrbv.svelte-8zxrbv{width:100%;height:auto;object-fit:cover}#title.svelte-8zxrbv.svelte-8zxrbv.svelte-8zxrbv.svelte-8zxrbv{font-size:2rem;font-weight:800;margin-bottom:1rem}#desc.svelte-8zxrbv.svelte-8zxrbv.svelte-8zxrbv.svelte-8zxrbv{display:grid;grid-template-columns:1fr 1fr;gap:0.5rem 0;margin-bottom:4rem}#desc.svelte-8zxrbv>p.svelte-8zxrbv.svelte-8zxrbv.svelte-8zxrbv{display:flex;align-items:center;gap:1rem}#desc.svelte-8zxrbv>p.svelte-8zxrbv>span.svelte-8zxrbv.svelte-8zxrbv:first-child{font-weight:600}#desc.svelte-8zxrbv>p.svelte-8zxrbv>span.svelte-8zxrbv.svelte-8zxrbv:last-child{color:silver}#borders.svelte-8zxrbv.svelte-8zxrbv.svelte-8zxrbv.svelte-8zxrbv{grid-column:2 / 3;align-self:start;display:flex;gap:1rem}#borders.svelte-8zxrbv>p.svelte-8zxrbv.svelte-8zxrbv.svelte-8zxrbv:first-child{font-weight:600}#borders.svelte-8zxrbv>ul.svelte-8zxrbv.svelte-8zxrbv.svelte-8zxrbv{list-style:none;display:flex;flex-wrap:wrap;align-items:center;gap:1rem}#borders.svelte-8zxrbv>ul.svelte-8zxrbv>li.svelte-8zxrbv.svelte-8zxrbv{box-shadow:0 0 10px black;border-radius:0.5rem;padding:1rem 2rem}#borders.svelte-8zxrbv>ul.svelte-8zxrbv>li.svelte-8zxrbv>a.svelte-8zxrbv{text-decoration:none;color:white}#borders.svelte-8zxrbv>p.svelte-8zxrbv.svelte-8zxrbv.svelte-8zxrbv:last-child{color:silver}@media(max-width: 1007px){#desc.svelte-8zxrbv.svelte-8zxrbv.svelte-8zxrbv.svelte-8zxrbv{grid-template-columns:1fr}#borders.svelte-8zxrbv.svelte-8zxrbv.svelte-8zxrbv.svelte-8zxrbv{grid-column:1 / 3}}@media(max-width: 768px){#info.svelte-8zxrbv.svelte-8zxrbv.svelte-8zxrbv.svelte-8zxrbv{align-items:flex-start}}@media(max-width: 500px){#info.svelte-8zxrbv.svelte-8zxrbv.svelte-8zxrbv.svelte-8zxrbv{display:flex;flex-direction:column;gap:2rem;padding:0 10%}#container.svelte-8zxrbv.svelte-8zxrbv.svelte-8zxrbv.svelte-8zxrbv{padding-bottom:10rem}#desc.svelte-8zxrbv.svelte-8zxrbv.svelte-8zxrbv.svelte-8zxrbv{margin-bottom:0}}",
  map: null
};
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { data } = $$props;
  const country = data.archetype[0];
  const allCountries = data.all;
  const nameArr = /* @__PURE__ */ new Set();
  for (let name in country.name.nativeName) {
    nameArr.add(country.name.nativeName[name].official);
  }
  let nativeNames = "";
  for (let name of nameArr) {
    nativeNames += `${name}, `;
  }
  nativeNames = nativeNames.substring(0, nativeNames.length - 2);
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
  const currencyArr = /* @__PURE__ */ new Set();
  for (let i in country.currencies) {
    currencyArr.add(country.currencies[i].name);
  }
  let currencies = "";
  for (let i of currencyArr) {
    currencies += `${i}, `;
  }
  currencies = currencies.substring(0, currencies.length - 2);
  const languageArr = /* @__PURE__ */ new Set();
  for (let i in country.languages) {
    languageArr.add(country.languages[i]);
  }
  let languages = "";
  for (let j of languageArr) {
    languages += `${j}, `;
  }
  languages = languages.substring(0, languages.length - 2);
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
  if ($$props.data === void 0 && $$bindings.data && data !== void 0)
    $$bindings.data(data);
  $$result.css.add(css);
  return `${$$result.head += `<!-- HEAD_svelte-1fvdhh_START -->${$$result.title = `<title>${escape(country.name.common)}</title>`, ""}<!-- HEAD_svelte-1fvdhh_END -->`, ""}

<div id="${"container"}" class="${"svelte-8zxrbv"}"><a id="${"back"}" href="${"/"}" class="${"svelte-8zxrbv"}"><span class="${"material-symbols-outlined"}">keyboard_backspace </span>
        <span>Back</span></a>
    <div id="${"info"}" class="${"svelte-8zxrbv"}"><img${add_attribute("src", country.flags.svg, 0)}${add_attribute("alt", country.name.common + " flag", 0)} class="${"svelte-8zxrbv"}">
        <div><p id="${"title"}" class="${"svelte-8zxrbv"}">${escape(country.name.common)}</p>
            <div id="${"desc"}" class="${"svelte-8zxrbv"}"><p class="${"svelte-8zxrbv"}"><span class="${"svelte-8zxrbv"}">Native Name:</span><span class="${"svelte-8zxrbv"}">${escape(nativeNames)}</span></p>
                <p class="${"svelte-8zxrbv"}"><span class="${"svelte-8zxrbv"}">Top Level Domain:</span><span class="${"svelte-8zxrbv"}">${escape(country.tld ? country.tld.reduce((x, y) => `${x}, ${y}`) : "N/A")}</span></p>
                <p class="${"svelte-8zxrbv"}"><span class="${"svelte-8zxrbv"}">Population:</span><span class="${"svelte-8zxrbv"}">${escape(population)}</span></p>
                <p class="${"svelte-8zxrbv"}"><span class="${"svelte-8zxrbv"}">Currencies:</span><span class="${"svelte-8zxrbv"}">${escape(currencies)}</span></p>
                <p class="${"svelte-8zxrbv"}"><span class="${"svelte-8zxrbv"}">Region:</span><span class="${"svelte-8zxrbv"}">${escape(country.region)}</span></p>
                <p class="${"svelte-8zxrbv"}"><span class="${"svelte-8zxrbv"}">Languages:</span><span class="${"svelte-8zxrbv"}">${escape(languages)}</span></p>
                <p class="${"svelte-8zxrbv"}"><span class="${"svelte-8zxrbv"}">Sub Region:</span><span class="${"svelte-8zxrbv"}">${escape(country.subregion)}</span></p>
                <p class="${"svelte-8zxrbv"}"><span class="${"svelte-8zxrbv"}">Capital:</span><span class="${"svelte-8zxrbv"}">${escape(country.capital)}</span></p></div></div>
        <div id="${"borders"}" class="${"svelte-8zxrbv"}"><p class="${"svelte-8zxrbv"}">Border Countries:</p>
            ${border.length != 0 ? `<ul class="${"svelte-8zxrbv"}">${each(border, (nation) => {
    return `<li class="${"svelte-8zxrbv"}"><a href="${"/" + escape(nation, true)}" class="${"svelte-8zxrbv"}">${escape(nation)}</a>
                        </li>`;
  })}</ul>` : `<p class="${"svelte-8zxrbv"}">${escape(noCountry)}</p>`}</div></div>
</div>`;
});
export {
  Page as default
};

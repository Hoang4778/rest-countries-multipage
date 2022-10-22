import { c as create_ssr_component } from "../../chunks/index.js";
const _layout_svelte_svelte_type_style_lang = "";
const css = {
  code: "header.svelte-1cfdg4g.svelte-1cfdg4g{background-color:var(--drk-mde-el)}nav.svelte-1cfdg4g.svelte-1cfdg4g{max-width:1440px;margin:0 auto;height:5rem;color:white;display:flex;align-items:center;justify-content:space-between}nav.svelte-1cfdg4g>p.svelte-1cfdg4g{display:flex;align-items:center;gap:0.5rem}main.svelte-1cfdg4g.svelte-1cfdg4g{background-color:var(--drk-mde-bg);color:white;padding:3rem 0;min-height:100vh}",
  map: null
};
const Layout = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css);
  return `<header class="${"svelte-1cfdg4g"}"><nav class="${"svelte-1cfdg4g"}"><h1>Where in the world?</h1>
        <p class="${"svelte-1cfdg4g"}"><span class="${"material-symbols-outlined"}">dark_mode</span><span>Dark mode</span></p></nav></header>
<main class="${"svelte-1cfdg4g"}">${slots.default ? slots.default({}) : ``}
</main>`;
});
export {
  Layout as default
};

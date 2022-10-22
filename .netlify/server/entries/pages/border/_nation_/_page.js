async function load({ fetch, params }) {
  const promise = await fetch(`https://restcountries.com/v3.1/name/${params.nation}?fullText=true`);
  const res = await promise.json();
  const promiseAll = await fetch("https://restcountries.com/v3.1/all");
  const res2 = promiseAll.json();
  Promise.all([res, res2]);
  return {
    archetype: res,
    all: res2
  };
}
export {
  load
};

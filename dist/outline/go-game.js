import { openBlock as h, createElementBlock as a, createStaticVNode as e } from "vue";
const o = {
  xmlns: "http://www.w3.org/2000/svg",
  width: "24",
  height: "24",
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  "stroke-width": "2",
  "stroke-linecap": "round",
  "stroke-linejoin": "round",
  style: { width: "1em", "min-width": "1em", height: "1em", "min-height": "1em", fill: "currentColor" }
};
function p(r, t) {
  return h(), a("svg", o, t[0] || (t[0] = [
    e('<path d="M6 6m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0"></path><path d="M12 12m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0"></path><path d="M6 18m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0"></path><path d="M18 18m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0"></path><path d="M3 12h7m4 0h7"></path><path d="M3 6h1m4 0h13"></path><path d="M3 18h1m4 0h8m4 0h1"></path><path d="M6 3v1m0 4v8m0 4v1"></path><path d="M12 3v7m0 4v7"></path><path d="M18 3v13m0 4v1"></path>', 10)
  ]));
}
const d = { render: p };
export {
  d as default,
  p as render
};

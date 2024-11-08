import { openBlock as e, createElementBlock as a, createStaticVNode as h } from "vue";
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
function r(n, t) {
  return e(), a("svg", o, t[0] || (t[0] = [
    h('<path d="M20.8 13a2 2 0 0 0 -1.8 -1h-2a2 2 0 1 0 0 4h2a2 2 0 1 1 0 4h-2a2 2 0 0 1 -1.8 -1"></path><path d="M18 11v10"></path><path d="M5 5m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0"></path><path d="M17 5m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0"></path><path d="M7 5h8"></path><path d="M7 5v8a3 3 0 0 0 3 3h1"></path>', 6)
  ]));
}
const d = { render: r };
export {
  d as default,
  r as render
};

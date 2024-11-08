import { openBlock as e, createElementBlock as r, createStaticVNode as h } from "vue";
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
function i(n, t) {
  return e(), r("svg", o, t[0] || (t[0] = [
    h('<path d="M7 12m-3 0a3 3 0 1 0 6 0a3 3 0 1 0 -6 0"></path><path d="M7 3v6"></path><path d="M7 15v6"></path><path d="M13 7h2.5l1.5 5l-1.5 5h-2.5"></path><path d="M17 12h3"></path>', 5)
  ]));
}
const d = { render: i };
export {
  d as default,
  i as render
};

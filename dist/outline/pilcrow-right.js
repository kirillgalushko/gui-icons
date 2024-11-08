import { openBlock as e, createElementBlock as o, createStaticVNode as h } from "vue";
const r = {
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
  return e(), o("svg", r, t[0] || (t[0] = [
    h('<path d="M11 9h-2a3 3 0 1 1 0 -6h7"></path><path d="M11 3v11"></path><path d="M15 3v11"></path><path d="M21 18h-18"></path><path d="M18 15l3 3l-3 3"></path>', 5)
  ]));
}
const a = { render: i };
export {
  a as default,
  i as render
};
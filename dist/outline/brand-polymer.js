import { openBlock as t, createElementBlock as o, createElementVNode as n } from "vue";
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
  style: { width: "1em", "min-width": "1em", height: "1em", "min-height": "1em" }
};
function l(i, e) {
  return t(), o("svg", r, e[0] || (e[0] = [
    n("path", { d: "M6.706 6l-3.706 6l3.706 6h1.059l8.47 -12h1.06l3.705 6l-3.706 6" }, null, -1)
  ]));
}
const d = { render: l };
export {
  d as default,
  l as render
};

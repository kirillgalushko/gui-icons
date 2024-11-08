import { openBlock as n, createElementBlock as r, createElementVNode as e } from "vue";
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
  style: { width: "1em", "min-width": "1em", height: "1em", "min-height": "1em" }
};
function h(l, t) {
  return n(), r("svg", o, t[0] || (t[0] = [
    e("path", { d: "M21 6h-4a3 3 0 0 0 0 6h1a3 3 0 0 1 0 6h-4" }, null, -1),
    e("path", { d: "M17 20v-2" }, null, -1),
    e("path", { d: "M18 6v-2" }, null, -1),
    e("path", { d: "M3 6v12h4a3 3 0 0 0 0 -6h-4h4a3 3 0 0 0 0 -6h-4z" }, null, -1)
  ]));
}
const d = { render: h };
export {
  d as default,
  h as render
};

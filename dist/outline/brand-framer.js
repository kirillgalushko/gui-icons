import { openBlock as t, createElementBlock as r, createElementVNode as o } from "vue";
const n = {
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
function l(i, e) {
  return t(), r("svg", n, e[0] || (e[0] = [
    o("path", { d: "M6 15h12l-12 -12h12v6h-12v6l6 6v-6" }, null, -1)
  ]));
}
const d = { render: l };
export {
  d as default,
  l as render
};

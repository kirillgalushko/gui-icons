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
function i(l, e) {
  return t(), r("svg", n, e[0] || (e[0] = [
    o("path", { d: "M4 20v-15a1 1 0 0 1 1 -1h15" }, null, -1)
  ]));
}
const h = { render: i };
export {
  h as default,
  i as render
};

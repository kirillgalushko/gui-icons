import { openBlock as t, createElementBlock as o, createElementVNode as r } from "vue";
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
  return t(), o("svg", n, e[0] || (e[0] = [
    r("path", { d: "M17 17v-13l-5 3l-5 -3v13l5 3z" }, null, -1)
  ]));
}
const h = { render: l };
export {
  h as default,
  l as render
};

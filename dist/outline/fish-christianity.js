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
function i(l, e) {
  return t(), o("svg", n, e[0] || (e[0] = [
    r("path", { d: "M22 7s-5.646 10 -12.308 10c-3.226 .025 -6.194 -1.905 -7.692 -5c1.498 -3.095 4.466 -5.025 7.692 -5c6.662 0 12.308 10 12.308 10" }, null, -1)
  ]));
}
const h = { render: i };
export {
  h as default,
  i as render
};

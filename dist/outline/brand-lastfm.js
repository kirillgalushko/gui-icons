import { openBlock as t, createElementBlock as n, createElementVNode as o } from "vue";
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
function i(s, e) {
  return t(), n("svg", r, e[0] || (e[0] = [
    o("path", { d: "M20 8c-.83 -1 -1.388 -1 -2 -1c-.612 0 -2 .271 -2 2s1.384 2.233 3 3c1.616 .767 2.125 1.812 2 3s-1 2 -3 2s-3 -1 -3.5 -2s-1.585 -4.78 -2.497 -6a5 5 0 1 0 -1 7" }, null, -1)
  ]));
}
const d = { render: i };
export {
  d as default,
  i as render
};

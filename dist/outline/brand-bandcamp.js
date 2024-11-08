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
  style: { width: "1em", "min-width": "1em", height: "1em", "min-height": "1em", fill: "currentColor" }
};
function i(l, e) {
  return t(), n("svg", r, e[0] || (e[0] = [
    o("path", { d: "M8.5 6h13.5l-7 12h-13z" }, null, -1)
  ]));
}
const h = { render: i };
export {
  h as default,
  i as render
};

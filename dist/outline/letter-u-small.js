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
function i(l, e) {
  return t(), o("svg", r, e[0] || (e[0] = [
    n("path", { d: "M10 8v6a2 2 0 1 0 4 0v-6" }, null, -1)
  ]));
}
const h = { render: i };
export {
  h as default,
  i as render
};
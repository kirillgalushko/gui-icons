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
    n("path", { d: "M6 18h6a3 3 0 0 0 3 -3v-10l-4 4m8 0l-4 -4" }, null, -1)
  ]));
}
const d = { render: i };
export {
  d as default,
  i as render
};
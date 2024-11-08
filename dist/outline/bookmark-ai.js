import { openBlock as n, createElementBlock as o, createElementVNode as e } from "vue";
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
function l(i, t) {
  return n(), o("svg", r, t[0] || (t[0] = [
    e("path", { d: "M10.02 18.32l-4.02 2.68v-14a4 4 0 0 1 4 -4h4a4 4 0 0 1 4 4v4.5" }, null, -1),
    e("path", { d: "M14 21v-4a2 2 0 1 1 4 0v4" }, null, -1),
    e("path", { d: "M14 19h4" }, null, -1),
    e("path", { d: "M21 15v6" }, null, -1)
  ]));
}
const d = { render: l };
export {
  d as default,
  l as render
};

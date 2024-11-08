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
    e("path", { d: "M16 10a3 3 0 1 1 0 -6a3 3 0 0 1 0 6z" }, null, -1),
    e("path", { d: "M16 10v10" }, null, -1),
    e("path", { d: "M13.5 9.5l-8.5 8.5" }, null, -1),
    e("path", { d: "M10 18h-5v-5" }, null, -1)
  ]));
}
const d = { render: l };
export {
  d as default,
  l as render
};

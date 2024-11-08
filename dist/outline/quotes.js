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
  style: { width: "1em", "min-width": "1em", height: "1em", "min-height": "1em", fill: "currentColor" }
};
function l(i, t) {
  return n(), o("svg", r, t[0] || (t[0] = [
    e("path", { d: "M4 12c-1.333 -1.854 -1.333 -4.146 0 -6" }, null, -1),
    e("path", { d: "M8 12c-1.333 -1.854 -1.333 -4.146 0 -6" }, null, -1),
    e("path", { d: "M16 18c1.333 -1.854 1.333 -4.146 0 -6" }, null, -1),
    e("path", { d: "M20 18c1.333 -1.854 1.333 -4.146 0 -6" }, null, -1)
  ]));
}
const h = { render: l };
export {
  h as default,
  l as render
};

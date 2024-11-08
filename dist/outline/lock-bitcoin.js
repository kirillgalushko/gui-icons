import { openBlock as n, createElementBlock as o, createElementVNode as e } from "vue";
const h = {
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
function l(r, t) {
  return n(), o("svg", h, t[0] || (t[0] = [
    e("path", { d: "M17 21v-6m2 0v-1.5m0 9v-1.5m-2 -3h3m-1 0h.5a1.5 1.5 0 0 1 0 3h-3.5m3 -3h.5a1.5 1.5 0 0 0 0 -3h-3.5" }, null, -1),
    e("path", { d: "M13 21h-6a2 2 0 0 1 -2 -2v-6a2 2 0 0 1 2 -2h10" }, null, -1),
    e("path", { d: "M11 16a1 1 0 1 0 2 0a1 1 0 0 0 -2 0" }, null, -1),
    e("path", { d: "M8 11v-4a4 4 0 1 1 8 0v4" }, null, -1)
  ]));
}
const m = { render: l };
export {
  m as default,
  l as render
};

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
    e("path", { d: "M15 8h.01" }, null, -1),
    e("path", { d: "M13 21h-7a3 3 0 0 1 -3 -3v-12a3 3 0 0 1 3 -3h12a3 3 0 0 1 3 3v5" }, null, -1),
    e("path", { d: "M3 16l5 -5c.928 -.893 2.072 -.893 3 0l2.5 2.5" }, null, -1)
  ]));
}
const m = { render: l };
export {
  m as default,
  l as render
};

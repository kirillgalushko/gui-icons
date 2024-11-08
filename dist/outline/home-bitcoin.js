import { openBlock as h, createElementBlock as n, createElementVNode as e } from "vue";
const o = {
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
function l(r, t) {
  return h(), n("svg", o, t[0] || (t[0] = [
    e("path", { d: "M17 21v-6m2 0v-1.5m0 9v-1.5m-2 -3h3m-1 0h.5a1.5 1.5 0 0 1 0 3h-3.5m3 -3h.5a1.5 1.5 0 0 0 0 -3h-3.5" }, null, -1),
    e("path", { d: "M19.5 10.5l-7.5 -7.5l-9 9h2v7a2 2 0 0 0 2 2h6" }, null, -1),
    e("path", { d: "M9 21v-6a2 2 0 0 1 2 -2h2c.387 0 .748 .11 1.054 .3" }, null, -1),
    e("path", { d: "M21 15h-2.5a1.5 1.5 0 0 0 0 3h1a1.5 1.5 0 0 1 0 3h-2.5" }, null, -1)
  ]));
}
const m = { render: l };
export {
  m as default,
  l as render
};

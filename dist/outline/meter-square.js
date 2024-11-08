import { openBlock as n, createElementBlock as r, createElementVNode as e } from "vue";
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
function l(h, t) {
  return n(), r("svg", o, t[0] || (t[0] = [
    e("path", { d: "M17 5h2a1 1 0 0 1 1 1v1a1 1 0 0 1 -1 1h-1a1 1 0 0 0 -1 1v1a1 1 0 0 0 1 1h2" }, null, -1),
    e("path", { d: "M4 12v6" }, null, -1),
    e("path", { d: "M4 14a2 2 0 0 1 2 -2h.5a2.5 2.5 0 0 1 2.5 2.5v3.5" }, null, -1),
    e("path", { d: "M9 15.5v-1a2.5 2.5 0 1 1 5 0v3.5" }, null, -1)
  ]));
}
const a = { render: l };
export {
  a as default,
  l as render
};
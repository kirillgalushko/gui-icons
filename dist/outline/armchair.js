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
    e("path", { d: "M5 11a2 2 0 0 1 2 2v2h10v-2a2 2 0 1 1 4 0v4a2 2 0 0 1 -2 2h-14a2 2 0 0 1 -2 -2v-4a2 2 0 0 1 2 -2z" }, null, -1),
    e("path", { d: "M5 11v-5a3 3 0 0 1 3 -3h8a3 3 0 0 1 3 3v5" }, null, -1),
    e("path", { d: "M6 19v2" }, null, -1),
    e("path", { d: "M18 19v2" }, null, -1)
  ]));
}
const a = { render: l };
export {
  a as default,
  l as render
};
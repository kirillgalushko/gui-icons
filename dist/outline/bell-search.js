import { openBlock as l, createElementBlock as n, createElementVNode as e } from "vue";
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
function r(i, t) {
  return l(), n("svg", o, t[0] || (t[0] = [
    e("path", { d: "M11 17h-7a4 4 0 0 0 2 -3v-3a7 7 0 0 1 4 -6a2 2 0 1 1 4 0a7 7 0 0 1 4 6" }, null, -1),
    e("path", { d: "M9 17v1a3 3 0 0 0 2.685 2.984" }, null, -1),
    e("path", { d: "M18 18m-3 0a3 3 0 1 0 6 0a3 3 0 1 0 -6 0" }, null, -1),
    e("path", { d: "M20.2 20.2l1.8 1.8" }, null, -1)
  ]));
}
const a = { render: r };
export {
  a as default,
  r as render
};

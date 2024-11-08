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
  style: { width: "1em", "min-width": "1em", height: "1em", "min-height": "1em" }
};
function r(h, t) {
  return l(), n("svg", o, t[0] || (t[0] = [
    e("path", { d: "M3 7h3" }, null, -1),
    e("path", { d: "M3 11h2" }, null, -1),
    e("path", { d: "M9.02 8.801l-.6 6a2 2 0 0 0 1.99 2.199h7.98a2 2 0 0 0 1.99 -1.801l.6 -6a2 2 0 0 0 -1.99 -2.199h-7.98a2 2 0 0 0 -1.99 1.801z" }, null, -1),
    e("path", { d: "M9.8 7.5l2.982 3.28a3 3 0 0 0 4.238 .202l3.28 -2.982" }, null, -1)
  ]));
}
const a = { render: r };
export {
  a as default,
  r as render
};

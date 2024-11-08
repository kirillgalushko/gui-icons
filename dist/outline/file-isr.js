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
function r(h, t) {
  return l(), n("svg", o, t[0] || (t[0] = [
    e("path", { d: "M15 3v4a1 1 0 0 0 1 1h4" }, null, -1),
    e("path", { d: "M15 3v4a1 1 0 0 0 1 1h4" }, null, -1),
    e("path", { d: "M6 8v-3a2 2 0 0 1 2 -2h7l5 5v11a2 2 0 0 1 -2 2h-10a2 2 0 0 1 -2 -2v-7" }, null, -1),
    e("path", { d: "M3 15l3 -3l3 3" }, null, -1)
  ]));
}
const d = { render: r };
export {
  d as default,
  r as render
};
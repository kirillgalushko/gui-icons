import { openBlock as n, createElementBlock as l, createElementVNode as e } from "vue";
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
  return n(), l("svg", o, t[0] || (t[0] = [
    e("path", { d: "M3 21h7v-3a2 2 0 0 1 4 0v3h7" }, null, -1),
    e("path", { d: "M6 21l0 -9" }, null, -1),
    e("path", { d: "M18 21l0 -9" }, null, -1),
    e("path", { d: "M6 12h12a3 3 0 0 0 3 -3a9 8 0 0 1 -9 -6a9 8 0 0 1 -9 6a3 3 0 0 0 3 3" }, null, -1)
  ]));
}
const d = { render: r };
export {
  d as default,
  r as render
};

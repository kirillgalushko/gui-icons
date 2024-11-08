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
  style: { width: "1em", "min-width": "1em", height: "1em", "min-height": "1em" }
};
function r(h, t) {
  return n(), l("svg", o, t[0] || (t[0] = [
    e("path", { d: "M3 6a3 3 0 1 0 6 0a3 3 0 0 0 -6 0" }, null, -1),
    e("path", { d: "M21 11v-3a2 2 0 0 0 -2 -2h-6l3 3m0 -6l-3 3" }, null, -1),
    e("path", { d: "M3 13v3a2 2 0 0 0 2 2h6l-3 -3m0 6l3 -3" }, null, -1),
    e("path", { d: "M15 18a3 3 0 1 0 6 0a3 3 0 0 0 -6 0" }, null, -1)
  ]));
}
const a = { render: r };
export {
  a as default,
  r as render
};

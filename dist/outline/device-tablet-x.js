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
function r(i, t) {
  return n(), l("svg", o, t[0] || (t[0] = [
    e("path", { d: "M13 21h-7a1 1 0 0 1 -1 -1v-16a1 1 0 0 1 1 -1h12a1 1 0 0 1 1 1v9.5" }, null, -1),
    e("path", { d: "M22 22l-5 -5" }, null, -1),
    e("path", { d: "M17 22l5 -5" }, null, -1),
    e("path", { d: "M11 17a1 1 0 1 0 2 0a1 1 0 0 0 -2 0" }, null, -1)
  ]));
}
const d = { render: r };
export {
  d as default,
  r as render
};

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
    e("path", { d: "M8 10v-7l-2 2" }, null, -1),
    e("path", { d: "M6 16a2 2 0 1 1 4 0c0 .591 -.601 1.46 -1 2l-3 3h4" }, null, -1),
    e("path", { d: "M15 14a2 2 0 1 0 2 -2a2 2 0 1 0 -2 -2" }, null, -1),
    e("path", { d: "M6.5 10h3" }, null, -1)
  ]));
}
const d = { render: r };
export {
  d as default,
  r as render
};

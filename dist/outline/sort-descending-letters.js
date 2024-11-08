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
    e("path", { d: "M15 21v-5c0 -1.38 .62 -2 2 -2s2 .62 2 2v5m0 -3h-4" }, null, -1),
    e("path", { d: "M19 10h-4l4 -7h-4" }, null, -1),
    e("path", { d: "M4 15l3 3l3 -3" }, null, -1),
    e("path", { d: "M7 6v12" }, null, -1)
  ]));
}
const d = { render: r };
export {
  d as default,
  r as render
};

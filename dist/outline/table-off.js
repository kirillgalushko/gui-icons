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
function r(h, t) {
  return n(), l("svg", o, t[0] || (t[0] = [
    e("path", { d: "M7 3h12a2 2 0 0 1 2 2v12m-.585 3.413a1.994 1.994 0 0 1 -1.415 .587h-14a2 2 0 0 1 -2 -2v-14c0 -.55 .223 -1.05 .583 -1.412" }, null, -1),
    e("path", { d: "M3 10h7m4 0h7" }, null, -1),
    e("path", { d: "M10 3v3m0 4v11" }, null, -1),
    e("path", { d: "M3 3l18 18" }, null, -1)
  ]));
}
const d = { render: r };
export {
  d as default,
  r as render
};
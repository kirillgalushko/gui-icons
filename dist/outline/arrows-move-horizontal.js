import { openBlock as o, createElementBlock as l, createElementVNode as e } from "vue";
const n = {
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
  return o(), l("svg", n, t[0] || (t[0] = [
    e("path", { d: "M18 9l3 3l-3 3" }, null, -1),
    e("path", { d: "M15 12h6" }, null, -1),
    e("path", { d: "M6 9l-3 3l3 3" }, null, -1),
    e("path", { d: "M3 12h6" }, null, -1)
  ]));
}
const d = { render: r };
export {
  d as default,
  r as render
};

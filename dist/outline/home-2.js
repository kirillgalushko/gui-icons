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
function r(h, t) {
  return o(), l("svg", n, t[0] || (t[0] = [
    e("path", { d: "M5 12l-2 0l9 -9l9 9l-2 0" }, null, -1),
    e("path", { d: "M5 12v7a2 2 0 0 0 2 2h10a2 2 0 0 0 2 -2v-7" }, null, -1),
    e("path", { d: "M10 12h4v4h-4z" }, null, -1)
  ]));
}
const d = { render: r };
export {
  d as default,
  r as render
};

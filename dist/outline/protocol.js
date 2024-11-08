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
    e("path", { d: "M15 6l-7 12" }, null, -1),
    e("path", { d: "M20 6l-7 12" }, null, -1),
    e("path", { d: "M5 14v.015" }, null, -1),
    e("path", { d: "M5 10.015v.015" }, null, -1)
  ]));
}
const h = { render: r };
export {
  h as default,
  r as render
};

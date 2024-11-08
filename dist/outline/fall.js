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
  style: { width: "1em", "min-width": "1em", height: "1em", "min-height": "1em" }
};
function r(h, t) {
  return l(), n("svg", o, t[0] || (t[0] = [
    e("path", { d: "M11 21l1 -5l-1 -4l-3 -4h4l3 -3" }, null, -1),
    e("path", { d: "M6 16l-1 -4l3 -4" }, null, -1),
    e("path", { d: "M6 5m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0" }, null, -1),
    e("path", { d: "M13.5 12h2.5l4 2" }, null, -1)
  ]));
}
const d = { render: r };
export {
  d as default,
  r as render
};

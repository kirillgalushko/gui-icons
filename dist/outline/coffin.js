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
    e("path", { d: "M7 3l-2 6l2 12h6l2 -12l-2 -6z" }, null, -1),
    e("path", { d: "M10 7v5" }, null, -1),
    e("path", { d: "M8 9h4" }, null, -1),
    e("path", { d: "M13 21h4l2 -12l-2 -6h-4" }, null, -1)
  ]));
}
const d = { render: r };
export {
  d as default,
  r as render
};

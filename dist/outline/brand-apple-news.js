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
  style: { width: "1em", "min-width": "1em", height: "1em", "min-height": "1em", fill: "currentColor" }
};
function r(i, t) {
  return l(), n("svg", o, t[0] || (t[0] = [
    e("path", { d: "M4 14l6 6h-6z" }, null, -1),
    e("path", { d: "M20 10l-6 -6h6z" }, null, -1),
    e("path", { d: "M4 4v4l12 12h4v-4l-12 -12z" }, null, -1)
  ]));
}
const d = { render: r };
export {
  d as default,
  r as render
};

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
    e("path", { d: "M8 21l4 0" }, null, -1),
    e("path", { d: "M10 21l0 -18" }, null, -1),
    e("path", { d: "M10 4l9 4l-9 4" }, null, -1)
  ]));
}
const h = { render: r };
export {
  h as default,
  r as render
};
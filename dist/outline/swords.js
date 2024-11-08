import { openBlock as t, createElementBlock as n, createElementVNode as e } from "vue";
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
function r(i, l) {
  return t(), n("svg", o, l[0] || (l[0] = [
    e("path", { d: "M21 3v5l-11 9l-4 4l-3 -3l4 -4l9 -11z" }, null, -1),
    e("path", { d: "M5 13l6 6" }, null, -1),
    e("path", { d: "M14.32 17.32l3.68 3.68l3 -3l-3.365 -3.365" }, null, -1),
    e("path", { d: "M10 5.5l-2 -2.5h-5v5l3 2.5" }, null, -1)
  ]));
}
const h = { render: r };
export {
  h as default,
  r as render
};

import { openBlock as n, createElementBlock as o, createElementVNode as e } from "vue";
const l = {
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
function r(i, t) {
  return n(), o("svg", l, t[0] || (t[0] = [
    e("path", { d: "M10 12a2 2 0 1 0 4 0a2 2 0 0 0 -4 0" }, null, -1),
    e("path", { d: "M13.048 17.942a9.298 9.298 0 0 1 -1.048 .058c-3.6 0 -6.6 -2 -9 -6c2.4 -4 5.4 -6 9 -6c3.6 0 6.6 2 9 6a17.986 17.986 0 0 1 -1.362 1.975" }, null, -1),
    e("path", { d: "M22 22l-5 -5" }, null, -1),
    e("path", { d: "M17 22l5 -5" }, null, -1)
  ]));
}
const h = { render: r };
export {
  h as default,
  r as render
};

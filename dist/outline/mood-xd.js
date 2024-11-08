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
function r(d, t) {
  return n(), o("svg", l, t[0] || (t[0] = [
    e("path", { d: "M3 12a9 9 0 1 0 18 0a9 9 0 0 0 -18 0" }, null, -1),
    e("path", { d: "M9 14h6a3 3 0 0 1 -6 0z" }, null, -1),
    e("path", { d: "M9 8l6 3" }, null, -1),
    e("path", { d: "M9 11l6 -3" }, null, -1)
  ]));
}
const h = { render: r };
export {
  h as default,
  r as render
};

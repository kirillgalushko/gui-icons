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
function r(i, t) {
  return l(), n("svg", o, t[0] || (t[0] = [
    e("path", { d: "M10.828 9.828a4 4 0 1 0 -5.656 0l2.828 2.829l2.828 -2.829z" }, null, -1),
    e("path", { d: "M8 7l0 .01" }, null, -1),
    e("path", { d: "M18.828 17.828a4 4 0 1 0 -5.656 0l2.828 2.829l2.828 -2.829z" }, null, -1),
    e("path", { d: "M16 15l0 .01" }, null, -1)
  ]));
}
const h = { render: r };
export {
  h as default,
  r as render
};

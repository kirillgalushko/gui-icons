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
    e("path", { d: "M9 15l3 -3m2 -2l1 -1" }, null, -1),
    e("path", { d: "M11 6l.463 -.536a5 5 0 0 1 7.071 7.072l-.534 .464" }, null, -1),
    e("path", { d: "M3 3l18 18" }, null, -1),
    e("path", { d: "M13 18l-.397 .534a5.068 5.068 0 0 1 -7.127 0a4.972 4.972 0 0 1 0 -7.071l.524 -.463" }, null, -1)
  ]));
}
const h = { render: r };
export {
  h as default,
  r as render
};

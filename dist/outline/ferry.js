import { openBlock as r, createElementBlock as l, createElementVNode as e } from "vue";
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
function o(i, t) {
  return r(), l("svg", n, t[0] || (t[0] = [
    e("path", { d: "M3 17h14.08a3 3 0 0 0 2.5 -1.34l2.141 -2.66h-17.221z" }, null, -1),
    e("path", { d: "M14.556 7.959l-.382 -1.415" }, null, -1),
    e("path", { d: "M6.107 12.675l1.384 -4.675h8l2.675 4.598" }, null, -1)
  ]));
}
const d = { render: o };
export {
  d as default,
  o as render
};

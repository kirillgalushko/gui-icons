import { openBlock as n, createElementBlock as l, createElementVNode as e } from "vue";
const r = {
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
function o(i, t) {
  return n(), l("svg", r, t[0] || (t[0] = [
    e("path", { d: "M14 20.01v-.01" }, null, -1),
    e("path", { d: "M6 13l2.386 -.9a1 1 0 0 0 -.095 -1.902l-1.514 -.404a1 1 0 0 1 -.102 -1.9l2.325 -.894" }, null, -1),
    e("path", { d: "M3 14v1a3 3 0 0 0 3 3h4.161a3 3 0 0 0 2.983 -3.32l-1.144 -10.68" }, null, -1),
    e("path", { d: "M16 17l1 1h2a2 2 0 0 0 1.649 -3.131l-2.653 -3.869" }, null, -1)
  ]));
}
const d = { render: o };
export {
  d as default,
  o as render
};

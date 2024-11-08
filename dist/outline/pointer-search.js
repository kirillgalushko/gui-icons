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
    e("path", { d: "M14.778 12.222l3.113 -2.09a1.2 1.2 0 0 0 -.309 -2.228l-13.582 -3.904l3.904 13.563a1.2 1.2 0 0 0 2.228 .308l2.09 -3.093" }, null, -1),
    e("path", { d: "M18 18m-3 0a3 3 0 1 0 6 0a3 3 0 1 0 -6 0" }, null, -1),
    e("path", { d: "M20.2 20.2l1.8 1.8" }, null, -1)
  ]));
}
const d = { render: r };
export {
  d as default,
  r as render
};

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
    e("path", { d: "M13 4m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0" }, null, -1),
    e("path", { d: "M7 21l3 -4" }, null, -1),
    e("path", { d: "M16 21l-2 -4l-3 -3l1 -6" }, null, -1),
    e("path", { d: "M6 12l2 -3l4 -1l3 3l3 1" }, null, -1)
  ]));
}
const h = { render: r };
export {
  h as default,
  r as render
};

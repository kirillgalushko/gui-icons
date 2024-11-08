import { openBlock as n, createElementBlock as r, createElementVNode as e } from "vue";
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
  style: { width: "1em", "min-width": "1em", height: "1em", "min-height": "1em", fill: "currentColor" }
};
function o(h, t) {
  return n(), r("svg", l, t[0] || (t[0] = [
    e("path", { d: "M19.007 16.466a6 6 0 0 0 -4.007 -10.466h-11" }, null, -1),
    e("path", { d: "M7 9l-3 -3l3 -3" }, null, -1),
    e("path", { d: "M12 15.5v3a1.5 1.5 0 0 0 3 0v-3a1.5 1.5 0 0 0 -3 0z" }, null, -1),
    e("path", { d: "M6 14h2a1 1 0 0 1 1 1v1a1 1 0 0 1 -1 1h-1a1 1 0 0 0 -1 1v1a1 1 0 0 0 1 1h2" }, null, -1)
  ]));
}
const a = { render: o };
export {
  a as default,
  o as render
};

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
    e("path", { d: "M10.2 10.2l6.3 6.3" }, null, -1),
    e("path", { d: "M19.347 16.575l1.08 1.079a1.96 1.96 0 0 1 -2.773 2.772l-1.08 -1.079a1.96 1.96 0 0 1 2.773 -2.772z" }, null, -1),
    e("path", { d: "M3 7l3.05 3.15a2.9 2.9 0 0 0 4.1 -4.1l-3.15 -3.05" }, null, -1)
  ]));
}
const h = { render: r };
export {
  h as default,
  r as render
};

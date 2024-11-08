import { openBlock as l, createElementBlock as o, createElementVNode as e } from "vue";
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
function r(h, t) {
  return l(), o("svg", n, t[0] || (t[0] = [
    e("path", { d: "M3.5 17.5c5.667 4.667 11.333 4.667 17 0" }, null, -1),
    e("path", { d: "M19 18.5l-2 -8.5l1 -2l2 1l1.5 -1.5l-2.5 -4.5c-5.052 .218 -5.99 3.133 -7 6h-6a3 3 0 0 0 -3 3" }, null, -1),
    e("path", { d: "M5 18.5l2 -9.5" }, null, -1),
    e("path", { d: "M8 20l2 -5h4l2 5" }, null, -1)
  ]));
}
const d = { render: r };
export {
  d as default,
  r as render
};
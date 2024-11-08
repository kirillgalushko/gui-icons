import { openBlock as n, createElementBlock as o, createElementVNode as e } from "vue";
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
  style: { width: "1em", "min-width": "1em", height: "1em", "min-height": "1em", fill: "currentColor" }
};
function l(i, t) {
  return n(), o("svg", r, t[0] || (t[0] = [
    e("path", { d: "M5 6a2 2 0 1 0 4 0a2 2 0 0 0 -4 0" }, null, -1),
    e("path", { d: "M3 15s.616 -5.544 2.332 -7.93" }, null, -1),
    e("path", { d: "M8.637 7.112c2.717 3.313 5.882 12.888 8.363 12.888c2 0 3.333 -3 4 -9" }, null, -1)
  ]));
}
const d = { render: l };
export {
  d as default,
  l as render
};

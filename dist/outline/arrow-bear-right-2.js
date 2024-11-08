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
  style: { width: "1em", "min-width": "1em", height: "1em", "min-height": "1em" }
};
function l(i, t) {
  return n(), o("svg", r, t[0] || (t[0] = [
    e("path", { d: "M15 3h5v5" }, null, -1),
    e("path", { d: "M20 3l-7.536 7.536a5 5 0 0 0 -1.464 3.534v6.93" }, null, -1),
    e("path", { d: "M4 5l4.5 4.5" }, null, -1)
  ]));
}
const d = { render: l };
export {
  d as default,
  l as render
};

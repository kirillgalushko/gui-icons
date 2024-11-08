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
    e("path", { d: "M15.536 15.536l-9.536 -9.536" }, null, -1),
    e("path", { d: "M10 6h-4v4" }, null, -1),
    e("path", { d: "M15.586 15.586a2 2 0 1 0 2.828 2.828a2 2 0 0 0 -2.828 -2.828" }, null, -1)
  ]));
}
const d = { render: l };
export {
  d as default,
  l as render
};

import { openBlock as o, createElementBlock as r, createElementVNode as e } from "vue";
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
function l(h, t) {
  return o(), r("svg", n, t[0] || (t[0] = [
    e("path", { d: "M14 5a2 2 0 0 0 -2 2v10a2 2 0 0 1 -2 2" }, null, -1),
    e("path", { d: "M3 17h4v4h-4z" }, null, -1),
    e("path", { d: "M17 3h4v4h-4z" }, null, -1)
  ]));
}
const d = { render: l };
export {
  d as default,
  l as render
};
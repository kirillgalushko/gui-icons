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
function l(i, t) {
  return o(), r("svg", n, t[0] || (t[0] = [
    e("path", { d: "M6 3v6" }, null, -1),
    e("path", { d: "M16 16l4 -4l-4 -4" }, null, -1),
    e("path", { d: "M6 21v-6a3 3 0 0 1 3 -3h11" }, null, -1)
  ]));
}
const d = { render: l };
export {
  d as default,
  l as render
};

import { openBlock as r, createElementBlock as o, createElementVNode as e } from "vue";
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
  return r(), o("svg", n, t[0] || (t[0] = [
    e("path", { d: "M12 16l4 -4l-4 -4" }, null, -1),
    e("path", { d: "M8 12h8" }, null, -1),
    e("path", { d: "M3 3m0 2a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v14a2 2 0 0 1 -2 2h-14a2 2 0 0 1 -2 -2z" }, null, -1)
  ]));
}
const d = { render: l };
export {
  d as default,
  l as render
};
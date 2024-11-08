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
function l(h, t) {
  return n(), o("svg", r, t[0] || (t[0] = [
    e("path", { d: "M3 19a2 2 0 1 0 4 0a2 2 0 0 0 -4 0" }, null, -1),
    e("path", { d: "M19 7a2 2 0 1 0 0 -4a2 2 0 0 0 0 4z" }, null, -1),
    e("path", { d: "M11 19h5.5a3.5 3.5 0 0 0 0 -7h-8a3.5 3.5 0 0 1 0 -7h4.5" }, null, -1)
  ]));
}
const d = { render: l };
export {
  d as default,
  l as render
};

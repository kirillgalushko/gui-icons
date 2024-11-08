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
    e("path", { d: "M20 17v-12c0 -1.121 -.879 -2 -2 -2s-2 .879 -2 2v12l2 2l2 -2z" }, null, -1),
    e("path", { d: "M16 7h4" }, null, -1),
    e("path", { d: "M18 19h-13a2 2 0 1 1 0 -4h4a2 2 0 1 0 0 -4h-3" }, null, -1)
  ]));
}
const d = { render: l };
export {
  d as default,
  l as render
};

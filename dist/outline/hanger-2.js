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
    e("path", { d: "M12 9l-7.971 4.428a2 2 0 0 0 -1.029 1.749v.823a2 2 0 0 0 2 2h1" }, null, -1),
    e("path", { d: "M18 18h1a2 2 0 0 0 2 -2v-.823a2 2 0 0 0 -1.029 -1.749l-7.971 -4.428c-1.457 -.81 -1.993 -2.333 -2 -4a2 2 0 1 1 4 0" }, null, -1),
    e("path", { d: "M6 16m0 2a2 2 0 0 1 2 -2h8a2 2 0 0 1 2 2v1a2 2 0 0 1 -2 2h-8a2 2 0 0 1 -2 -2z" }, null, -1)
  ]));
}
const i = { render: l };
export {
  i as default,
  l as render
};

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
    e("path", { d: "M4 12a8 8 0 1 0 16 0a8 8 0 0 0 -16 0" }, null, -1),
    e("path", { d: "M9 15v.01" }, null, -1),
    e("path", { d: "M15 15a6 6 0 0 0 -6 -6" }, null, -1),
    e("path", { d: "M12 15a3 3 0 0 0 -3 -3" }, null, -1)
  ]));
}
const h = { render: l };
export {
  h as default,
  l as render
};

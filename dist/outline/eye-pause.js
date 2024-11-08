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
    e("path", { d: "M10 12a2 2 0 1 0 4 0a2 2 0 0 0 -4 0" }, null, -1),
    e("path", { d: "M13.022 17.945a9.308 9.308 0 0 1 -1.022 .055c-3.6 0 -6.6 -2 -9 -6c2.4 -4 5.4 -6 9 -6c3.6 0 6.6 2 9 6c-.195 .325 -.394 .636 -.596 .935" }, null, -1),
    e("path", { d: "M17 17v5" }, null, -1),
    e("path", { d: "M21 17v5" }, null, -1)
  ]));
}
const h = { render: l };
export {
  h as default,
  l as render
};

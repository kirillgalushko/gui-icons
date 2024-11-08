import { openBlock as n, createElementBlock as o, createElementVNode as e } from "vue";
const h = {
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
function l(r, t) {
  return n(), o("svg", h, t[0] || (t[0] = [
    e("path", { d: "M18 4a3 3 0 0 1 3 3v8a3 3 0 0 1 -3 3h-5l-5 3v-3h-2a3 3 0 0 1 -3 -3v-8a3 3 0 0 1 3 -3h12z" }, null, -1),
    e("path", { d: "M9.5 9h.01" }, null, -1),
    e("path", { d: "M14.5 9h.01" }, null, -1),
    e("path", { d: "M9.5 13a3.5 3.5 0 0 0 5 0" }, null, -1)
  ]));
}
const a = { render: l };
export {
  a as default,
  l as render
};

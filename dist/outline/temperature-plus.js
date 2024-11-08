import { openBlock as l, createElementBlock as n, createElementVNode as e } from "vue";
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
function o(i, t) {
  return l(), n("svg", r, t[0] || (t[0] = [
    e("path", { d: "M8 13.5a4 4 0 1 0 4 0v-8.5a2 2 0 0 0 -4 0v8.5" }, null, -1),
    e("path", { d: "M8 9l4 0" }, null, -1),
    e("path", { d: "M16 9l6 0" }, null, -1),
    e("path", { d: "M19 6l0 6" }, null, -1)
  ]));
}
const h = { render: o };
export {
  h as default,
  o as render
};

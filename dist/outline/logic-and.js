import { openBlock as n, createElementBlock as o, createElementVNode as e } from "vue";
const l = {
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
function r(h, t) {
  return n(), o("svg", l, t[0] || (t[0] = [
    e("path", { d: "M22 12h-5" }, null, -1),
    e("path", { d: "M2 9h5" }, null, -1),
    e("path", { d: "M2 15h5" }, null, -1),
    e("path", { d: "M9 5c6 0 8 3.5 8 7s-2 7 -8 7h-2v-14h2z" }, null, -1)
  ]));
}
const d = { render: r };
export {
  d as default,
  r as render
};

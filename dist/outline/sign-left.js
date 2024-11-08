import { openBlock as n, createElementBlock as l, createElementVNode as e } from "vue";
const o = {
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
function r(i, t) {
  return n(), l("svg", o, t[0] || (t[0] = [
    e("path", { d: "M16 21h-4" }, null, -1),
    e("path", { d: "M14 21v-10" }, null, -1),
    e("path", { d: "M14 6v-3" }, null, -1),
    e("path", { d: "M18 6h-10l-2 2.5l2 2.5h10z" }, null, -1)
  ]));
}
const d = { render: r };
export {
  d as default,
  r as render
};
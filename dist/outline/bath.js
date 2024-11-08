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
  style: { width: "1em", "min-width": "1em", height: "1em", "min-height": "1em" }
};
function r(h, t) {
  return n(), o("svg", l, t[0] || (t[0] = [
    e("path", { d: "M4 12h16a1 1 0 0 1 1 1v3a4 4 0 0 1 -4 4h-10a4 4 0 0 1 -4 -4v-3a1 1 0 0 1 1 -1z" }, null, -1),
    e("path", { d: "M6 12v-7a2 2 0 0 1 2 -2h3v2.25" }, null, -1),
    e("path", { d: "M4 21l1 -1.5" }, null, -1),
    e("path", { d: "M20 21l-1 -1.5" }, null, -1)
  ]));
}
const d = { render: r };
export {
  d as default,
  r as render
};

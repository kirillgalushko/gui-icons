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
    e("path", { d: "M21 11v-5a1 1 0 0 0 -1 -1h-16a1 1 0 0 0 -1 1v12a1 1 0 0 0 1 1h9" }, null, -1),
    e("path", { d: "M19 17m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" }, null, -1),
    e("path", { d: "M10 13v-4h4" }, null, -1),
    e("path", { d: "M14 13l-4 -4" }, null, -1)
  ]));
}
const d = { render: r };
export {
  d as default,
  r as render
};

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
    e("path", { d: "M12 12m-8 0a8 2 0 1 0 16 0a8 2 0 1 0 -16 0" }, null, -1),
    e("path", { d: "M4 12v7c0 .94 2.51 1.785 6 2v-3h4v3c3.435 -.225 6 -1.07 6 -2v-7" }, null, -1),
    e("path", { d: "M15 6h4v-3h-4v7" }, null, -1),
    e("path", { d: "M7 6h4v-3h-4v7" }, null, -1)
  ]));
}
const d = { render: r };
export {
  d as default,
  r as render
};

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
function r(i, t) {
  return n(), o("svg", l, t[0] || (t[0] = [
    e("path", { d: "M21 6a3 3 0 0 0 -3 -3h-12a3 3 0 0 0 -3 3" }, null, -1),
    e("path", { d: "M6 21h12a3 3 0 0 0 0 -6h-12a3 3 0 0 0 0 6z" }, null, -1),
    e("path", { d: "M12 15v-8" }, null, -1),
    e("path", { d: "M9 10l3 -3l3 3" }, null, -1)
  ]));
}
const d = { render: r };
export {
  d as default,
  r as render
};

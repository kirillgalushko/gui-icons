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
    e("path", { d: "M15 21h-9a1 1 0 0 1 -1 -1v-16a1 1 0 0 1 1 -1h12a1 1 0 0 1 1 1v8" }, null, -1),
    e("path", { d: "M11 17a1 1 0 1 0 2 0a1 1 0 0 0 -2 0" }, null, -1),
    e("path", { d: "M19 16v3" }, null, -1),
    e("path", { d: "M19 22v.01" }, null, -1)
  ]));
}
const a = { render: r };
export {
  a as default,
  r as render
};

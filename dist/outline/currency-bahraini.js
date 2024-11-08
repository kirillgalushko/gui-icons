import { openBlock as n, createElementBlock as r, createElementVNode as e } from "vue";
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
function l(i, t) {
  return n(), r("svg", o, t[0] || (t[0] = [
    e("path", { d: "M3 10v1a4 4 0 0 0 4 4h2a2 2 0 0 0 2 -2v-3" }, null, -1),
    e("path", { d: "M7 19.01v-.01" }, null, -1),
    e("path", { d: "M14 15.01v-.01" }, null, -1),
    e("path", { d: "M17 15h2a2 2 0 0 0 1.649 -3.131l-2.653 -3.869" }, null, -1)
  ]));
}
const d = { render: l };
export {
  d as default,
  l as render
};

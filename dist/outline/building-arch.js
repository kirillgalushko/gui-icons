import { openBlock as n, createElementBlock as o, createElementVNode as e } from "vue";
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
function l(i, t) {
  return n(), o("svg", r, t[0] || (t[0] = [
    e("path", { d: "M3 21l18 0" }, null, -1),
    e("path", { d: "M4 21v-15a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v15" }, null, -1),
    e("path", { d: "M9 21v-8a3 3 0 0 1 6 0v8" }, null, -1)
  ]));
}
const d = { render: l };
export {
  d as default,
  l as render
};

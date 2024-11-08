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
  style: { width: "1em", "min-width": "1em", height: "1em", "min-height": "1em" }
};
function l(i, t) {
  return n(), o("svg", r, t[0] || (t[0] = [
    e("path", { d: "M4 19v-10.5a3.5 3.5 0 1 1 7 0v10.5" }, null, -1),
    e("path", { d: "M4 13h7" }, null, -1),
    e("path", { d: "M21 12h-6" }, null, -1)
  ]));
}
const d = { render: l };
export {
  d as default,
  l as render
};

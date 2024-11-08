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
  style: { width: "1em", "min-width": "1em", height: "1em", "min-height": "1em" }
};
function l(i, t) {
  return n(), r("svg", o, t[0] || (t[0] = [
    e("path", { d: "M7 18v-10.948a1.05 1.05 0 0 1 1.968 -.51l6.064 10.916a1.05 1.05 0 0 0 1.968 -.51v-10.948" }, null, -1),
    e("path", { d: "M5 10h14" }, null, -1),
    e("path", { d: "M5 14h14" }, null, -1)
  ]));
}
const d = { render: l };
export {
  d as default,
  l as render
};

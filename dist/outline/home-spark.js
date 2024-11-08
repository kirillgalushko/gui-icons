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
    e("path", { d: "M5 12h-2l9 -9l9 9h-2" }, null, -1),
    e("path", { d: "M5 12v7a2 2 0 0 0 2 2h5" }, null, -1),
    e("path", { d: "M9 21v-6a2 2 0 0 1 2 -2h2a2 2 0 0 1 2 2" }, null, -1),
    e("path", { d: "M19 22.5a4.75 4.75 0 0 1 3.5 -3.5a4.75 4.75 0 0 1 -3.5 -3.5a4.75 4.75 0 0 1 -3.5 3.5a4.75 4.75 0 0 1 3.5 3.5" }, null, -1)
  ]));
}
const a = { render: r };
export {
  a as default,
  r as render
};

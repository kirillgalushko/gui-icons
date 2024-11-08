import { openBlock as n, createElementBlock as r, createElementVNode as e } from "vue";
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
function o(i, t) {
  return n(), r("svg", l, t[0] || (t[0] = [
    e("path", { d: "M12 19v-7m5 -7l-3.328 4.66" }, null, -1),
    e("path", { d: "M8 17h8" }, null, -1),
    e("path", { d: "M8 13h5" }, null, -1),
    e("path", { d: "M3 3l18 18" }, null, -1)
  ]));
}
const d = { render: o };
export {
  d as default,
  o as render
};

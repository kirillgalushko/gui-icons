import { openBlock as l, createElementBlock as n, createElementVNode as e } from "vue";
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
function r(i, t) {
  return l(), n("svg", o, t[0] || (t[0] = [
    e("path", { d: "M11 18l-2 -1l-6 3v-13l6 -3l6 3l6 -3v9" }, null, -1),
    e("path", { d: "M9 4v13" }, null, -1),
    e("path", { d: "M15 7v8" }, null, -1),
    e("path", { d: "M15 19l2 2l4 -4" }, null, -1)
  ]));
}
const d = { render: r };
export {
  d as default,
  r as render
};

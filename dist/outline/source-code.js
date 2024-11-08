import { openBlock as o, createElementBlock as n, createElementVNode as e } from "vue";
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
function r(i, t) {
  return o(), n("svg", l, t[0] || (t[0] = [
    e("path", { d: "M14.5 4h2.5a3 3 0 0 1 3 3v10a3 3 0 0 1 -3 3h-10a3 3 0 0 1 -3 -3v-5" }, null, -1),
    e("path", { d: "M6 5l-2 2l2 2" }, null, -1),
    e("path", { d: "M10 9l2 -2l-2 -2" }, null, -1)
  ]));
}
const d = { render: r };
export {
  d as default,
  r as render
};

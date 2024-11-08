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
    e("path", { d: "M11 5m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" }, null, -1),
    e("path", { d: "M11 7l0 8l4 0l4 5" }, null, -1),
    e("path", { d: "M11 11l5 0" }, null, -1),
    e("path", { d: "M7 11.5a5 5 0 1 0 6 7.5" }, null, -1)
  ]));
}
const h = { render: r };
export {
  h as default,
  r as render
};

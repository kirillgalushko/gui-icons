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
  style: { width: "1em", "min-width": "1em", height: "1em", "min-height": "1em", fill: "currentColor" }
};
function r(i, t) {
  return l(), n("svg", o, t[0] || (t[0] = [
    e("path", { d: "M8 8m-5 0a5 5 0 1 0 10 0a5 5 0 1 0 -10 0" }, null, -1),
    e("path", { d: "M17 17m-4 0a4 4 0 1 0 8 0a4 4 0 1 0 -8 0" }, null, -1),
    e("path", { d: "M4.5 4.5l7 7" }, null, -1),
    e("path", { d: "M19.5 14.5l-5 5" }, null, -1)
  ]));
}
const h = { render: r };
export {
  h as default,
  r as render
};

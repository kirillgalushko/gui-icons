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
    e("path", { d: "M18 4m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0" }, null, -1),
    e("path", { d: "M3 9l4.5 1l3 2.5" }, null, -1),
    e("path", { d: "M13 21v-8l3 -5.5" }, null, -1),
    e("path", { d: "M8 4.5l4 2l4 1l4 3.5l-2 3.5" }, null, -1)
  ]));
}
const h = { render: r };
export {
  h as default,
  r as render
};

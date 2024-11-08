import { openBlock as n, createElementBlock as l, createElementVNode as e } from "vue";
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
  return n(), l("svg", o, t[0] || (t[0] = [
    e("path", { d: "M6 18l0 -3" }, null, -1),
    e("path", { d: "M10 18l0 -6" }, null, -1),
    e("path", { d: "M14 18l0 -9" }, null, -1),
    e("path", { d: "M18 18l0 -12" }, null, -1)
  ]));
}
const h = { render: r };
export {
  h as default,
  r as render
};

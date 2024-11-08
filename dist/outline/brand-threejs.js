import { openBlock as l, createElementBlock as n, createElementVNode as e } from "vue";
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
  style: { width: "1em", "min-width": "1em", height: "1em", "min-height": "1em", fill: "currentColor" }
};
function o(i, t) {
  return l(), n("svg", r, t[0] || (t[0] = [
    e("path", { d: "M8 22l-5 -19l19 5.5z" }, null, -1),
    e("path", { d: "M12.573 17.58l-6.152 -1.576l8.796 -9.466l1.914 6.64" }, null, -1),
    e("path", { d: "M12.573 17.58l-1.573 -6.58l6.13 2.179" }, null, -1),
    e("path", { d: "M9.527 4.893l1.473 6.107l-6.31 -1.564z" }, null, -1)
  ]));
}
const h = { render: o };
export {
  h as default,
  o as render
};

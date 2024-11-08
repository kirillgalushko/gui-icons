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
    e("path", { d: "M3 3m0 3a3 3 0 0 1 3 -3h12a3 3 0 0 1 3 3v12a3 3 0 0 1 -3 3h-12a3 3 0 0 1 -3 -3z" }, null, -1),
    e("path", { d: "M12 7v8.5l-2.015 .201a2.715 2.715 0 1 1 0 -5.402l2.015 .201" }, null, -1),
    e("path", { d: "M16 7v.01" }, null, -1),
    e("path", { d: "M16 10v5.586c0 .905 -.36 1.774 -1 2.414" }, null, -1)
  ]));
}
const d = { render: r };
export {
  d as default,
  r as render
};

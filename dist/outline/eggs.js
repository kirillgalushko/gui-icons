import { openBlock as o, createElementBlock as n, createElementVNode as t } from "vue";
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
function l(i, e) {
  return o(), n("svg", r, e[0] || (e[0] = [
    t("path", { d: "M13 22c-3 0 -4.868 -2.118 -5 -5c0 -3 2 -5 5 -5c4 0 8.01 2.5 8 5c0 2.5 -4 5 -8 5z" }, null, -1),
    t("path", { d: "M8 18c-3.03 -.196 -5 -2.309 -5 -5.38c0 -4.307 2.75 -8.625 5.5 -8.62c2.614 0 5.248 3.915 5.5 8" }, null, -1)
  ]));
}
const d = { render: l };
export {
  d as default,
  l as render
};

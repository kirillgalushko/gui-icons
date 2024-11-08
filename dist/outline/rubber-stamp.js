import { openBlock as n, createElementBlock as o, createElementVNode as t } from "vue";
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
  style: { width: "1em", "min-width": "1em", height: "1em", "min-height": "1em" }
};
function i(l, e) {
  return n(), o("svg", r, e[0] || (e[0] = [
    t("path", { d: "M21 17.85h-18c0 -4.05 1.421 -4.05 3.79 -4.05c5.21 0 1.21 -4.59 1.21 -6.8a4 4 0 1 1 8 0c0 2.21 -4 6.8 1.21 6.8c2.369 0 3.79 0 3.79 4.05z" }, null, -1),
    t("path", { d: "M5 21h14" }, null, -1)
  ]));
}
const d = { render: i };
export {
  d as default,
  i as render
};

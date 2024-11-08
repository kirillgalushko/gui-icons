import { openBlock as n, createElementBlock as o, createElementVNode as t } from "vue";
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
function r(i, e) {
  return n(), o("svg", l, e[0] || (e[0] = [
    t("path", { d: "M18 3a3 3 0 0 1 3 3v12a3 3 0 0 1 -3 3" }, null, -1),
    t("path", { d: "M3 18v-12a3 3 0 1 1 6 0v12a3 3 0 0 1 -6 0z" }, null, -1),
    t("path", { d: "M9 12h8" }, null, -1),
    t("path", { d: "M14 15l3 -3l-3 -3" }, null, -1)
  ]));
}
const d = { render: r };
export {
  d as default,
  r as render
};

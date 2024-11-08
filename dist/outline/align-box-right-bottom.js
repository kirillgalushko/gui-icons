import { openBlock as n, createElementBlock as o, createElementVNode as t } from "vue";
const h = {
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
function l(r, e) {
  return n(), o("svg", h, e[0] || (e[0] = [
    t("path", { d: "M3 3m0 2a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v14a2 2 0 0 1 -2 2h-14a2 2 0 0 1 -2 -2z" }, null, -1),
    t("path", { d: "M15 17h2" }, null, -1),
    t("path", { d: "M11 14h6" }, null, -1),
    t("path", { d: "M13 11h4" }, null, -1)
  ]));
}
const d = { render: l };
export {
  d as default,
  l as render
};

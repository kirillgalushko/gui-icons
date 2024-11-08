import { openBlock as n, createElementBlock as o, createElementVNode as t } from "vue";
const i = {
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
function r(l, e) {
  return n(), o("svg", i, e[0] || (e[0] = [
    t("path", { d: "M3 8m0 2a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v4a2 2 0 0 1 -2 2h-14a2 2 0 0 1 -2 -2z" }, null, -1),
    t("path", { d: "M7 16v-3a1 1 0 0 1 1 -1h8a1 1 0 0 1 1 1v3" }, null, -1)
  ]));
}
const d = { render: r };
export {
  d as default,
  r as render
};

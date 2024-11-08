import { openBlock as l, createElementBlock as n, createElementVNode as t } from "vue";
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
function r(i, e) {
  return l(), n("svg", o, e[0] || (e[0] = [
    t("path", { d: "M4 19l4 -6l4 2l4 -5l4 4l0 5l-16 0" }, null, -1),
    t("path", { d: "M4 12l3 -4l4 2l5 -6l4 4" }, null, -1)
  ]));
}
const d = { render: r };
export {
  d as default,
  r as render
};

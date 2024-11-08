import { openBlock as r, createElementBlock as n, createElementVNode as t } from "vue";
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
function i(l, e) {
  return r(), n("svg", o, e[0] || (e[0] = [
    t("path", { d: "M17 18v-11.31a.7 .7 0 0 0 -1.195 -.495l-9.805 9.805" }, null, -1),
    t("path", { d: "M11 16h-5v-5" }, null, -1)
  ]));
}
const d = { render: i };
export {
  d as default,
  i as render
};

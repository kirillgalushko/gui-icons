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
function l(i, e) {
  return n(), o("svg", r, e[0] || (e[0] = [
    t("path", { d: "M13 8l-9.383 9.418a2.091 2.091 0 0 0 0 2.967a2.11 2.11 0 0 0 2.976 0l9.407 -9.385" }, null, -1),
    t("path", { d: "M9 3h4.586a1 1 0 0 1 .707 .293l6.414 6.414a1 1 0 0 1 .293 .707v4.586a2 2 0 1 1 -4 0v-3l-5 -5h-3a2 2 0 1 1 0 -4z" }, null, -1)
  ]));
}
const d = { render: l };
export {
  d as default,
  l as render
};

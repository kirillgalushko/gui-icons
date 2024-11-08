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
  style: { width: "1em", "min-width": "1em", height: "1em", "min-height": "1em" }
};
function l(i, e) {
  return o(), n("svg", r, e[0] || (e[0] = [
    t("path", { d: "M21 3l-5 9h5l-6.891 7.086a6.5 6.5 0 1 1 -8.855 -9.506l7.746 -6.58l-1 5l9 -5z" }, null, -1),
    t("path", { d: "M9.5 14.5m-2.5 0a2.5 2.5 0 1 0 5 0a2.5 2.5 0 1 0 -5 0" }, null, -1)
  ]));
}
const d = { render: l };
export {
  d as default,
  l as render
};

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
    t("path", { d: "M18 4h-6a3 3 0 0 0 -3 3v7" }, null, -1),
    t("path", { d: "M13 10l-4 4l-4 -4m8 5l-4 4l-4 -4" }, null, -1)
  ]));
}
const d = { render: l };
export {
  d as default,
  l as render
};

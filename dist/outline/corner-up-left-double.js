import { openBlock as o, createElementBlock as r, createElementVNode as t } from "vue";
const n = {
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
  return o(), r("svg", n, e[0] || (e[0] = [
    t("path", { d: "M19 18v-6a3 3 0 0 0 -3 -3h-7" }, null, -1),
    t("path", { d: "M13 13l-4 -4l4 -4m-5 8l-4 -4l4 -4" }, null, -1)
  ]));
}
const d = { render: l };
export {
  d as default,
  l as render
};
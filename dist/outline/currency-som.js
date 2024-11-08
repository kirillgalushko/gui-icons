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
function l(h, e) {
  return o(), r("svg", n, e[0] || (e[0] = [
    t("path", { d: "M10 18v-12h-5v10a2 2 0 0 1 -2 2" }, null, -1),
    t("path", { d: "M14 6v12h4a3 3 0 0 0 0 -6h-4h4a3 3 0 0 0 0 -6h-4z" }, null, -1)
  ]));
}
const d = { render: l };
export {
  d as default,
  l as render
};

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
    t("path", { d: "M13 21v-13a4 4 0 1 1 4 4h-13" }, null, -1),
    t("path", { d: "M8 16l-4 -4l4 -4" }, null, -1)
  ]));
}
const d = { render: l };
export {
  d as default,
  l as render
};

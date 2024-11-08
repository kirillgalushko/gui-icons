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
  style: { width: "1em", "min-width": "1em", height: "1em", "min-height": "1em", fill: "currentColor" }
};
function l(i, e) {
  return r(), n("svg", o, e[0] || (e[0] = [
    t("path", { d: "M6 18v-12h4a4 4 0 0 1 4 4v4" }, null, -1),
    t("path", { d: "M18 6v12h-4a4 4 0 0 1 -4 -4v-4" }, null, -1)
  ]));
}
const d = { render: l };
export {
  d as default,
  l as render
};

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
    t("path", { d: "M18 15a6 6 0 1 1 -12 0v-6a6 6 0 1 1 12 0v2" }, null, -1),
    t("path", { d: "M15 8l3 3l3 -3" }, null, -1)
  ]));
}
const h = { render: l };
export {
  h as default,
  l as render
};

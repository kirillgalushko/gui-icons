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
  style: { width: "1em", "min-width": "1em", height: "1em", "min-height": "1em", fill: "currentColor" }
};
function l(h, e) {
  return n(), o("svg", r, e[0] || (e[0] = [
    t("path", { d: "M5 8a2 2 0 0 1 2 2v4a2 2 0 1 1 -4 0v-4a2 2 0 0 1 2 -2z" }, null, -1),
    t("path", { d: "M10 12h2a2 2 0 1 0 0 -4h-2v8" }, null, -1),
    t("path", { d: "M17 8h4" }, null, -1),
    t("path", { d: "M19 8v8" }, null, -1)
  ]));
}
const d = { render: l };
export {
  d as default,
  l as render
};
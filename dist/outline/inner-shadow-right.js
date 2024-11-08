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
function i(l, e) {
  return n(), o("svg", r, e[0] || (e[0] = [
    t("path", { d: "M18.364 18.364a9 9 0 1 1 -12.728 -12.728a9 9 0 0 1 12.728 12.728z" }, null, -1),
    t("path", { d: "M16.243 7.757a6 6 0 0 1 0 8.486" }, null, -1)
  ]));
}
const d = { render: i };
export {
  d as default,
  i as render
};
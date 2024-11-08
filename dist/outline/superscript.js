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
    t("path", { d: "M5 7l8 10m-8 0l8 -10" }, null, -1),
    t("path", { d: "M21 11h-4l3.5 -4a1.73 1.73 0 0 0 -3.5 -2" }, null, -1)
  ]));
}
const s = { render: l };
export {
  s as default,
  l as render
};

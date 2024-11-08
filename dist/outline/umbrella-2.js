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
    t("path", { d: "M5.343 7.343a8 8 0 1 1 11.314 11.314z" }, null, -1),
    t("path", { d: "M10.828 13.34l-4.242 4.243a2 2 0 1 0 2.828 2.828" }, null, -1)
  ]));
}
const h = { render: l };
export {
  h as default,
  l as render
};

import { openBlock as o, createElementBlock as n, createElementVNode as t } from "vue";
const l = {
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
function r(i, e) {
  return o(), n("svg", l, e[0] || (e[0] = [
    t("path", { d: "M20 4v5l-9 7l-4 4l-3 -3l4 -4l7 -9z" }, null, -1),
    t("path", { d: "M6.5 11.5l6 6" }, null, -1)
  ]));
}
const h = { render: r };
export {
  h as default,
  r as render
};

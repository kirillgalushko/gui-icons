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
function l(i, e) {
  return n(), o("svg", r, e[0] || (e[0] = [
    t("path", { d: "M4 4l11.733 16h4.267l-11.733 -16z" }, null, -1),
    t("path", { d: "M4 20l6.768 -6.768m2.46 -2.46l6.772 -6.772" }, null, -1)
  ]));
}
const h = { render: l };
export {
  h as default,
  l as render
};
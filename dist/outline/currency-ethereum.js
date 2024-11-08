import { openBlock as r, createElementBlock as l, createElementVNode as t } from "vue";
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
function o(i, e) {
  return r(), l("svg", n, e[0] || (e[0] = [
    t("path", { d: "M6 12l6 -9l6 9l-6 9z" }, null, -1),
    t("path", { d: "M6 12l6 -3l6 3l-6 2z" }, null, -1)
  ]));
}
const d = { render: o };
export {
  d as default,
  o as render
};

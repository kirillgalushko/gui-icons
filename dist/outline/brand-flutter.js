import { openBlock as l, createElementBlock as r, createElementVNode as t } from "vue";
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
  return l(), r("svg", n, e[0] || (e[0] = [
    t("path", { d: "M7 14l-3 -3l8 -8h6z" }, null, -1),
    t("path", { d: "M14 21l-5 -5l5 -5h5l-5 5l5 5z" }, null, -1)
  ]));
}
const d = { render: o };
export {
  d as default,
  o as render
};

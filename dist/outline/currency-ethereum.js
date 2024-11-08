import { openBlock as n, createElementBlock as r, createElementVNode as t } from "vue";
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
  style: { width: "1em", "min-width": "1em", height: "1em", "min-height": "1em" }
};
function l(i, e) {
  return n(), r("svg", o, e[0] || (e[0] = [
    t("path", { d: "M6 12l6 -9l6 9l-6 9z" }, null, -1),
    t("path", { d: "M6 12l6 -3l6 3l-6 2z" }, null, -1)
  ]));
}
const d = { render: l };
export {
  d as default,
  l as render
};

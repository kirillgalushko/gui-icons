import { openBlock as l, createElementBlock as n, createElementVNode as t } from "vue";
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
  style: { width: "1em", "min-width": "1em", height: "1em", "min-height": "1em", fill: "currentColor" }
};
function r(i, e) {
  return l(), n("svg", o, e[0] || (e[0] = [
    t("path", { d: "M9 3l1 6l2 -3.75l2 3.75l1 -6" }, null, -1),
    t("path", { d: "M16 21l-4 -8l-4 8l4 -2z" }, null, -1)
  ]));
}
const h = { render: r };
export {
  h as default,
  r as render
};

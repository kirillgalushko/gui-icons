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
  style: { width: "1em", "min-width": "1em", height: "1em", "min-height": "1em", fill: "currentColor" }
};
function l(i, e) {
  return n(), r("svg", o, e[0] || (e[0] = [
    t("path", { d: "M3 20l1.3 -3.9a9 8 0 1 1 3.4 2.9l-4.7 1" }, null, -1),
    t("path", { d: "M8 13l3 -2l2 2l3 -2" }, null, -1)
  ]));
}
const s = { render: l };
export {
  s as default,
  l as render
};

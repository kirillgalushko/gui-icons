import { openBlock as n, createElementBlock as o, createElementVNode as t } from "vue";
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
  style: { width: "1em", "min-width": "1em", height: "1em", "min-height": "1em", fill: "currentColor" }
};
function r(i, e) {
  return n(), o("svg", l, e[0] || (e[0] = [
    t("path", { d: "M21 18a3 3 0 0 1 -3 3h-12a3 3 0 0 1 -3 -3" }, null, -1),
    t("path", { d: "M3 3m0 3a3 3 0 0 1 3 -3h12a3 3 0 0 1 3 3v0a3 3 0 0 1 -3 3h-12a3 3 0 0 1 -3 -3z" }, null, -1),
    t("path", { d: "M12 9v8" }, null, -1),
    t("path", { d: "M9 14l3 3l3 -3" }, null, -1)
  ]));
}
const a = { render: r };
export {
  a as default,
  r as render
};

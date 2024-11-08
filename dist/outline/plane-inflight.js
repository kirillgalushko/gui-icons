import { openBlock as n, createElementBlock as l, createElementVNode as t } from "vue";
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
function r(h, e) {
  return n(), l("svg", o, e[0] || (e[0] = [
    t("path", { d: "M15 11.085h5a2 2 0 1 1 0 4h-15l-3 -6h3l2 2h3l-2 -7h3l4 7z" }, null, -1),
    t("path", { d: "M3 21h18" }, null, -1)
  ]));
}
const d = { render: r };
export {
  d as default,
  r as render
};

import { openBlock as r, createElementBlock as n, createElementVNode as t } from "vue";
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
  return r(), n("svg", o, e[0] || (e[0] = [
    t("path", { d: "M15 5h-11h3a4 4 0 1 1 0 8h-3l6 6" }, null, -1),
    t("path", { d: "M21 17l-4.586 -4.414a2 2 0 0 0 -2.828 2.828l.707 .707" }, null, -1)
  ]));
}
const d = { render: l };
export {
  d as default,
  l as render
};

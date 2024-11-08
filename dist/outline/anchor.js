import { openBlock as o, createElementBlock as n, createElementVNode as t } from "vue";
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
  return o(), n("svg", r, e[0] || (e[0] = [
    t("path", { d: "M12 9v12m-8 -8a8 8 0 0 0 16 0m1 0h-2m-14 0h-2" }, null, -1),
    t("path", { d: "M12 6m-3 0a3 3 0 1 0 6 0a3 3 0 1 0 -6 0" }, null, -1)
  ]));
}
const m = { render: l };
export {
  m as default,
  l as render
};

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
function i(l, e) {
  return o(), n("svg", r, e[0] || (e[0] = [
    t("path", { d: "M12 3a9 9 0 1 0 0 18a9 9 0 0 0 0 -18z" }, null, -1),
    t("path", { d: "M18 12a6 6 0 0 0 -6 -6" }, null, -1)
  ]));
}
const d = { render: i };
export {
  d as default,
  i as render
};

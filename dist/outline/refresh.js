import { openBlock as n, createElementBlock as o, createElementVNode as t } from "vue";
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
  style: { width: "1em", "min-width": "1em", height: "1em", "min-height": "1em" }
};
function i(h, e) {
  return n(), o("svg", r, e[0] || (e[0] = [
    t("path", { d: "M20 11a8.1 8.1 0 0 0 -15.5 -2m-.5 -4v4h4" }, null, -1),
    t("path", { d: "M4 13a8.1 8.1 0 0 0 15.5 2m.5 4v-4h-4" }, null, -1)
  ]));
}
const d = { render: i };
export {
  d as default,
  i as render
};

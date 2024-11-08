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
function i(l, e) {
  return n(), o("svg", r, e[0] || (e[0] = [
    t("path", { d: "M8 7a4 4 0 1 0 8 0a4 4 0 0 0 -8 0" }, null, -1),
    t("path", { d: "M6 21v-2a4 4 0 0 1 4 -4h4a4 4 0 0 1 4 4v2" }, null, -1)
  ]));
}
const d = { render: i };
export {
  d as default,
  i as render
};

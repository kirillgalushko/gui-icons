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
    t("path", { d: "M7 4a12.25 12.25 0 0 0 0 16" }, null, -1),
    t("path", { d: "M17 4a12.25 12.25 0 0 1 0 16" }, null, -1)
  ]));
}
const s = { render: i };
export {
  s as default,
  i as render
};

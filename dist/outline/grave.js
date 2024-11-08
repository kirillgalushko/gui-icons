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
function h(i, e) {
  return n(), o("svg", r, e[0] || (e[0] = [
    t("path", { d: "M5 21v-2a3 3 0 0 1 3 -3h8a3 3 0 0 1 3 3v2h-14z" }, null, -1),
    t("path", { d: "M10 16v-5h-4v-4h4v-4h4v4h4v4h-4v5" }, null, -1)
  ]));
}
const d = { render: h };
export {
  d as default,
  h as render
};

import { openBlock as o, createElementBlock as l, createElementVNode as t } from "vue";
const n = {
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
  return o(), l("svg", n, e[0] || (e[0] = [
    t("path", { d: "M22 9l-10 -4l-10 4l10 4l10 -4v6" }, null, -1),
    t("path", { d: "M6 10.6v5.4a6 3 0 0 0 12 0v-5.4" }, null, -1)
  ]));
}
const d = { render: r };
export {
  d as default,
  r as render
};

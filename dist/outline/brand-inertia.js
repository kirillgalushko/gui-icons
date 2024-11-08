import { openBlock as l, createElementBlock as n, createElementVNode as t } from "vue";
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
function o(i, e) {
  return l(), n("svg", r, e[0] || (e[0] = [
    t("path", { d: "M12.5 8l4 4l-4 4h4.5l4 -4l-4 -4z" }, null, -1),
    t("path", { d: "M3.5 8l4 4l-4 4h4.5l4 -4l-4 -4z" }, null, -1)
  ]));
}
const d = { render: o };
export {
  d as default,
  o as render
};

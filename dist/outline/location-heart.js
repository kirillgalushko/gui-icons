import { openBlock as l, createElementBlock as o, createElementVNode as t } from "vue";
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
  style: { width: "1em", "min-width": "1em", height: "1em", "min-height": "1em" }
};
function r(i, e) {
  return l(), o("svg", n, e[0] || (e[0] = [
    t("path", { d: "M10.365 14.73l-.365 -.73l-7 -3.5a.55 .55 0 0 1 0 -1l18 -6.5l-3.024 8.373" }, null, -1),
    t("path", { d: "M18 22l3.35 -3.284a2.143 2.143 0 0 0 .005 -3.071a2.242 2.242 0 0 0 -3.129 -.006l-.224 .22l-.223 -.22a2.242 2.242 0 0 0 -3.128 -.006a2.143 2.143 0 0 0 -.006 3.071l3.355 3.296z" }, null, -1)
  ]));
}
const d = { render: r };
export {
  d as default,
  r as render
};

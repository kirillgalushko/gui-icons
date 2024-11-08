import { openBlock as l, createElementBlock as n, createElementVNode as t } from "vue";
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
function r(i, e) {
  return l(), n("svg", o, e[0] || (e[0] = [
    t("path", { d: "M20 4l-2 14.5l-6 2l-6 -2l-2 -14.5z" }, null, -1),
    t("path", { d: "M8.5 8h7l-4.5 4h4l-.5 3.5l-2.5 .75l-2.5 -.75l-.1 -.5" }, null, -1)
  ]));
}
const d = { render: r };
export {
  d as default,
  r as render
};

import { openBlock as o, createElementBlock as r, createElementVNode as t } from "vue";
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
function l(i, e) {
  return o(), r("svg", n, e[0] || (e[0] = [
    t("path", { d: "M20 11.1c0 -4.474 -3.582 -8.1 -8 -8.1s-8 3.626 -8 8.1a.9 .9 0 0 0 .9 .9h14.2a.9 .9 0 0 0 .9 -.9z" }, null, -1),
    t("path", { d: "M10 12v7a2 2 0 1 0 4 0v-7" }, null, -1)
  ]));
}
const s = { render: l };
export {
  s as default,
  l as render
};

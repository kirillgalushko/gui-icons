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
function l(i, e) {
  return n(), o("svg", r, e[0] || (e[0] = [
    t("path", { d: "M9.992 15l-2.007 -3l-4.015 8c-2.212 -3.061 -2.625 -7.098 -.915 -10.463a10.14 10.14 0 0 1 8.945 -5.537a10.14 10.14 0 0 1 8.945 5.537c1.71 3.365 1.297 7.402 -.915 10.463l-4.517 -8l-1.505 1.5" }, null, -1),
    t("path", { d: "M14.5 15l-3 -6l-2.5 4.5" }, null, -1)
  ]));
}
const h = { render: l };
export {
  h as default,
  l as render
};

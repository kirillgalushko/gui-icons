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
  style: { width: "1em", "min-width": "1em", height: "1em", "min-height": "1em", fill: "currentColor" }
};
function l(i, e) {
  return n(), o("svg", r, e[0] || (e[0] = [
    t("path", { d: "M17 20v-11.5a4.5 4.5 0 1 0 -9 0v8.5" }, null, -1),
    t("path", { d: "M11 14l-3 3l-3 -3" }, null, -1)
  ]));
}
const h = { render: l };
export {
  h as default,
  l as render
};

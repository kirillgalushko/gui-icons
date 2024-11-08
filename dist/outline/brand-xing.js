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
    t("path", { d: "M16 21l-4 -7l6.5 -11" }, null, -1),
    t("path", { d: "M7 7l2 3.5l-3 4.5" }, null, -1)
  ]));
}
const h = { render: l };
export {
  h as default,
  l as render
};

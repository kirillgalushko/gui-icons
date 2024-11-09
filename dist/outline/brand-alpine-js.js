import { openBlock as n, createElementBlock as o, createElementVNode as t } from "vue";
const l = {
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
  return n(), o("svg", l, e[0] || (e[0] = [
    t("path", { d: "M3 11.5l4.5 4.5h9l-9 -9z" }, null, -1),
    t("path", { d: "M16.5 16l4.5 -4.5l-4.5 -4.5l-4.5 4.5" }, null, -1)
  ]));
}
const h = { render: r };
export {
  h as default,
  r as render
};
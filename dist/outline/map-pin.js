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
function i(l, e) {
  return n(), o("svg", r, e[0] || (e[0] = [
    t("path", { d: "M9 11a3 3 0 1 0 6 0a3 3 0 0 0 -6 0" }, null, -1),
    t("path", { d: "M17.657 16.657l-4.243 4.243a2 2 0 0 1 -2.827 0l-4.244 -4.243a8 8 0 1 1 11.314 0z" }, null, -1)
  ]));
}
const h = { render: i };
export {
  h as default,
  i as render
};

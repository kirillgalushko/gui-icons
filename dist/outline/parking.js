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
function i(h, e) {
  return n(), o("svg", r, e[0] || (e[0] = [
    t("path", { d: "M3 5a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v14a2 2 0 0 1 -2 2h-14a2 2 0 0 1 -2 -2v-14z" }, null, -1),
    t("path", { d: "M10 16v-8h2.667c.736 0 1.333 .895 1.333 2s-.597 2 -1.333 2h-2.667" }, null, -1)
  ]));
}
const d = { render: i };
export {
  d as default,
  i as render
};

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
function h(i, e) {
  return n(), o("svg", r, e[0] || (e[0] = [
    t("path", { d: "M7 18v-11a2 2 0 0 1 2 -2h.5a.5 .5 0 0 0 .5 -.5a.5 .5 0 0 1 .5 -.5h3a.5 .5 0 0 1 .5 .5a.5 .5 0 0 0 .5 .5h.5a2 2 0 0 1 2 2v11a2 2 0 0 1 -2 2h-6a2 2 0 0 1 -2 -2" }, null, -1),
    t("path", { d: "M10 17h4" }, null, -1)
  ]));
}
const a = { render: h };
export {
  a as default,
  h as render
};

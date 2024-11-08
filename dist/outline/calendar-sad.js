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
function l(h, e) {
  return n(), o("svg", r, e[0] || (e[0] = [
    t("path", { d: "M4 7a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v12a2 2 0 0 1 -2 2h-12a2 2 0 0 1 -2 -2v-12zm12 -4v4m-8 -4v4m-4 4h16m-9.995 3h.01m3.99 0h.01" }, null, -1),
    t("path", { d: "M10 18a3.5 3.5 0 0 1 4 0" }, null, -1)
  ]));
}
const m = { render: l };
export {
  m as default,
  l as render
};

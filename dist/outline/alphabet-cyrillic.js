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
function l(h, e) {
  return o(), r("svg", n, e[0] || (e[0] = [
    t("path", { d: "M6 10h2a2 2 0 0 1 2 2v5h-3a2 2 0 1 1 0 -4h3" }, null, -1),
    t("path", { d: "M19 7h-3a2 2 0 0 0 -2 2v6a2 2 0 0 0 2 2h1a2 2 0 0 0 2 -2v-3a2 2 0 0 0 -2 -2h-3" }, null, -1)
  ]));
}
const a = { render: l };
export {
  a as default,
  l as render
};

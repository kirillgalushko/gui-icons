import { openBlock as o, createElementBlock as n, createElementVNode as t } from "vue";
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
function l(a, e) {
  return o(), n("svg", r, e[0] || (e[0] = [
    t("path", { d: "M8.18 4.171a2 2 0 0 1 3.82 .829v1a1 1 0 0 0 1 1h3a1 1 0 0 1 1 1v3a1 1 0 0 0 1 1h1a2 2 0 0 1 .819 3.825m-2.819 1.175v3a1 1 0 0 1 -1 1h-3a1 1 0 0 1 -1 -1v-1a2 2 0 1 0 -4 0v1a1 1 0 0 1 -1 1h-3a1 1 0 0 1 -1 -1v-3a1 1 0 0 1 1 -1h1a2 2 0 1 0 0 -4h-1a1 1 0 0 1 -1 -1v-3a1 1 0 0 1 1 -1h3" }, null, -1),
    t("path", { d: "M3 3l18 18" }, null, -1)
  ]));
}
const i = { render: l };
export {
  i as default,
  l as render
};

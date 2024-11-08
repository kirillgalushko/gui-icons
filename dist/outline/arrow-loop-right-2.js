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
function l(i, e) {
  return o(), r("svg", n, e[0] || (e[0] = [
    t("path", { d: "M12 21v-6m0 -6v-1a4 4 0 1 0 -4 4h13" }, null, -1),
    t("path", { d: "M17 16l4 -4l-4 -4" }, null, -1)
  ]));
}
const d = { render: l };
export {
  d as default,
  l as render
};

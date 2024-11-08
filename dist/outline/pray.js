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
    t("path", { d: "M12 5m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0" }, null, -1),
    t("path", { d: "M7 20h8l-4 -4v-7l4 3l2 -2" }, null, -1)
  ]));
}
const d = { render: l };
export {
  d as default,
  l as render
};

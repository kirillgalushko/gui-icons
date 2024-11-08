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
function h(l, e) {
  return n(), o("svg", r, e[0] || (e[0] = [
    t("path", { d: "M14 15a1 1 0 0 0 1 1h2a1 1 0 0 0 1 -1v-6a1 1 0 0 0 -1 -1h-2a1 1 0 0 0 -1 1v2a1 1 0 0 0 1 1h3" }, null, -1),
    t("path", { d: "M10 9a1 1 0 0 0 -1 -1h-2a1 1 0 0 0 -1 1v6a1 1 0 0 0 1 1h2a1 1 0 0 0 1 -1v-2a1 1 0 0 0 -1 -1h-3" }, null, -1)
  ]));
}
const i = { render: h };
export {
  i as default,
  h as render
};

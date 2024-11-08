import { openBlock as o, createElementBlock as n, createElementVNode as t } from "vue";
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
  return o(), n("svg", l, e[0] || (e[0] = [
    t("path", { d: "M3 3l18 18" }, null, -1),
    t("path", { d: "M15.212 15.21l-4.212 5.79v-7h-6l3.79 -5.21m1.685 -2.32l2.525 -3.47v6m1 1h5l-2.104 2.893" }, null, -1)
  ]));
}
const d = { render: r };
export {
  d as default,
  r as render
};

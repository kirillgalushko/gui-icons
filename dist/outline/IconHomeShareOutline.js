import { openBlock as o, createElementBlock as n, createElementVNode as t } from "vue";
import { _ as r } from "../filled/IconAccessibleFilled.js";
const i = {}, h = {
  xmlns: "http://www.w3.org/2000/svg",
  width: "24",
  height: "24",
  fill: "none",
  stroke: "currentColor",
  "stroke-linecap": "round",
  "stroke-linejoin": "round",
  "stroke-width": "2",
  style: { width: "1em", "min-width": "1em", height: "1em", "min-height": "1em" },
  viewBox: "0 0 24 24"
};
function l(m, e) {
  return o(), n("svg", h, e[0] || (e[0] = [
    t("path", { d: "M9 21v-6a2 2 0 0 1 2-2h2c.247 0 .484.045.702.127" }, null, -1),
    t("path", { d: "M19 12h2l-9-9-9 9h2v7a2 2 0 0 0 2 2h5m4 1 5-5m0 4.5V17h-4.5" }, null, -1)
  ]));
}
const d = /* @__PURE__ */ r(i, [["render", l]]);
export {
  d as I
};

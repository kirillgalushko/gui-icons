import { openBlock as o, createElementBlock as n, createElementVNode as t } from "vue";
import { _ as r } from "../filled/IconAccessibleFilled.js";
const i = {}, l = {
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
function m(s, e) {
  return o(), n("svg", l, e[0] || (e[0] = [
    t("path", { d: "M13.5 19H5a2 2 0 0 1-2-2V7a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v6" }, null, -1),
    t("path", { d: "m3 7 9 6 9-6m1 15-5-5m0 5 5-5" }, null, -1)
  ]));
}
const d = /* @__PURE__ */ r(i, [["render", m]]);
export {
  d as I
};

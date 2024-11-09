import { openBlock as o, createElementBlock as n, createElementVNode as t } from "vue";
import { _ as r } from "../filled/IconAccessibleFilled.js";
const i = {}, s = {
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
function l(h, e) {
  return o(), n("svg", s, e[0] || (e[0] = [
    t("path", { d: "M9 10h.01M15 10h.01M9.5 15.25a3.5 3.5 0 0 1 5 0m3.066 2.356a2 2 0 1 0 2.897.03L19 16z" }, null, -1),
    t("path", { d: "M20.865 13.517A9 9 0 0 0 21 12a9 9 0 1 0-9 9c.69 0 1.36-.076 2-.222" }, null, -1)
  ]));
}
const d = /* @__PURE__ */ r(i, [["render", l]]);
export {
  d as I
};

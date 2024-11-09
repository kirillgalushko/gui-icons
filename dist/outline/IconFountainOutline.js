import { openBlock as n, createElementBlock as o, createElementVNode as t } from "vue";
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
function l(m, e) {
  return n(), o("svg", s, e[0] || (e[0] = [
    t("path", { d: "M9 16v-5a2 2 0 1 0-4 0m10 5v-5a2 2 0 1 1 4 0" }, null, -1),
    t("path", { d: "M12 16V6a3 3 0 0 1 6 0M6 6a3 3 0 0 1 6 0M3 16h18v2a3 3 0 0 1-3 3H6a3 3 0 0 1-3-3z" }, null, -1)
  ]));
}
const c = /* @__PURE__ */ r(i, [["render", l]]);
export {
  c as I
};

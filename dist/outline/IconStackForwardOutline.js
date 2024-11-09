import { openBlock as o, createElementBlock as r, createElementVNode as t } from "vue";
import { _ as n } from "../filled/IconAccessibleFilled.js";
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
function s(c, e) {
  return o(), r("svg", l, e[0] || (e[0] = [
    t("path", {
      fill: "currentColor",
      d: "M12 5 4 9l8 4 8-4z"
    }, null, -1),
    t("path", { d: "m10 12-6 3 8 4 8-4-6-3" }, null, -1)
  ]));
}
const h = /* @__PURE__ */ n(i, [["render", s]]);
export {
  h as I
};

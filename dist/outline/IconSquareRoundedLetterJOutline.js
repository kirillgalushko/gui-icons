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
function l(c, e) {
  return o(), n("svg", s, e[0] || (e[0] = [
    t("path", { d: "M10 8h4v6a2 2 0 1 1-4 0" }, null, -1),
    t("path", { d: "M12 3c7.2 0 9 1.8 9 9s-1.8 9-9 9-9-1.8-9-9 1.8-9 9-9" }, null, -1)
  ]));
}
const m = /* @__PURE__ */ r(i, [["render", l]]);
export {
  m as I
};

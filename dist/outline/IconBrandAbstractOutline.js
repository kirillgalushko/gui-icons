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
function l(c, e) {
  return n(), o("svg", s, e[0] || (e[0] = [
    t("path", { d: "M12 3c7.2 0 9 1.8 9 9s-1.8 9-9 9-9-1.8-9-9 1.8-9 9-9" }, null, -1),
    t("path", { d: "M8 13.5a2.5 2.5 0 1 0 5 0 2.5 2.5 0 1 0-5 0" }, null, -1),
    t("path", { d: "M8 8h8v8" }, null, -1)
  ]));
}
const m = /* @__PURE__ */ r(i, [["render", l]]);
export {
  m as I
};

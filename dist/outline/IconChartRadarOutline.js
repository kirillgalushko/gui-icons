import { openBlock as n, createElementBlock as o, createElementVNode as t } from "vue";
import { _ as r } from "../filled/IconAccessibleFilled.js";
const l = {}, i = {
  xmlns: "http://www.w3.org/2000/svg",
  width: "24",
  height: "24",
  fill: "none",
  stroke: "currentColor",
  "stroke-linecap": "round",
  "stroke-linejoin": "round",
  "stroke-width": "2",
  style: { width: "1em", "min-width": "1em", height: "1em", "min-height": "1em" }
};
function m(s, e) {
  return n(), o("svg", i, e[0] || (e[0] = [
    t("path", { d: "m12 3 9.5 7L18 21H6L2.5 10z" }, null, -1),
    t("path", { d: "m12 7.5 5.5 4L15 17H8.5l-2-5.5z" }, null, -1),
    t("path", { d: "m2.5 10 9.5 3 9.5-3" }, null, -1),
    t("path", { d: "M12 3v10l6 8M6 21l6-8" }, null, -1)
  ]));
}
const c = /* @__PURE__ */ r(l, [["render", m]]);
export {
  c as I
};

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
function l(s, e) {
  return o(), n("svg", h, e[0] || (e[0] = [
    t("path", { d: "M12 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v8M3 10h18M10 3v18m6 1 5-5" }, null, -1),
    t("path", { d: "M21 21.5V17h-4.5" }, null, -1)
  ]));
}
const a = /* @__PURE__ */ r(i, [["render", l]]);
export {
  a as I
};

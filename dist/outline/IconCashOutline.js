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
function a(h, e) {
  return o(), n("svg", s, e[0] || (e[0] = [
    t("path", { d: "M7 11a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v6a2 2 0 0 1-2 2H9a2 2 0 0 1-2-2z" }, null, -1),
    t("path", { d: "M12 14a2 2 0 1 0 4 0 2 2 0 1 0-4 0m5-5V7a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h2" }, null, -1)
  ]));
}
const c = /* @__PURE__ */ r(i, [["render", a]]);
export {
  c as I
};

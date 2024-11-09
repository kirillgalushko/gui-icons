import { openBlock as o, createElementBlock as n, createElementVNode as t } from "vue";
import { _ as r } from "./IconAccessibleFilled.js";
const i = {}, l = {
  xmlns: "http://www.w3.org/2000/svg",
  width: "24",
  height: "24",
  fill: "currentColor",
  style: { width: "1em", "min-width": "1em", height: "1em", "min-height": "1em" },
  viewBox: "0 0 24 24"
};
function a(m, e) {
  return o(), n("svg", l, e[0] || (e[0] = [
    t("path", { d: "M19 7a3 3 0 0 1 3 3v9a3 3 0 0 1-3 3h-9a3 3 0 0 1-3-3v-9a3 3 0 0 1 3-3z" }, null, -1),
    t("path", { d: "M14 2a3 3 0 0 1 3 2.999L10 5a5 5 0 0 0-5 5l-.001 7-.175-.005A3 3 0 0 1 2 14V5a3 3 0 0 1 3-3z" }, null, -1)
  ]));
}
const c = /* @__PURE__ */ r(i, [["render", a]]);
export {
  c as I
};

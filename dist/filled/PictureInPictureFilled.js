import { openBlock as r, createElementBlock as n, createElementVNode as t } from "vue";
import { _ as a } from "./AccessibleFilled.js";
const o = {}, i = {
  xmlns: "http://www.w3.org/2000/svg",
  width: "24",
  height: "24",
  fill: "currentColor",
  style: { width: "1em", "min-width": "1em", height: "1em", "min-height": "1em" }
};
function l(h, e) {
  return r(), n("svg", i, e[0] || (e[0] = [
    t("path", { d: "M19 4a3 3 0 0 1 3 3v4a1 1 0 0 1-2 0V7a1 1 0 0 0-1-1H5a1 1 0 0 0-1 1v10a1 1 0 0 0 1 1h6a1 1 0 0 1 0 2H5a3 3 0 0 1-3-3V7a3 3 0 0 1 3-3z" }, null, -1),
    t("path", { d: "M20 13a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2h-5a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2z" }, null, -1)
  ]));
}
const s = /* @__PURE__ */ a(o, [["render", l]]);
export {
  s as P
};
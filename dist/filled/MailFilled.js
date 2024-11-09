import { openBlock as l, createElementBlock as n, createElementVNode as t } from "vue";
import { _ as o } from "./AccessibleFilled.js";
const r = {}, i = {
  xmlns: "http://www.w3.org/2000/svg",
  width: "24",
  height: "24",
  fill: "currentColor",
  style: { width: "1em", "min-width": "1em", height: "1em", "min-height": "1em" }
};
function m(s, e) {
  return l(), n("svg", i, e[0] || (e[0] = [
    t("path", { d: "M22 7.535V17a3 3 0 0 1-2.824 2.995L19 20H5a3 3 0 0 1-2.995-2.824L2 17V7.535l9.445 6.297.116.066a1 1 0 0 0 .878 0l.116-.066z" }, null, -1),
    t("path", { d: "M19 4c1.08 0 2.027.57 2.555 1.427L12 11.797l-9.555-6.37a3 3 0 0 1 2.354-1.42L5 4z" }, null, -1)
  ]));
}
const a = /* @__PURE__ */ o(r, [["render", m]]);
export {
  a as M
};

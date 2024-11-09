import { openBlock as l, createElementBlock as r, createElementVNode as t } from "vue";
import { _ as n } from "./AccessibleFilled.js";
const o = {}, i = {
  xmlns: "http://www.w3.org/2000/svg",
  width: "24",
  height: "24",
  fill: "currentColor",
  style: { width: "1em", "min-width": "1em", height: "1em", "min-height": "1em" }
};
function m(h, e) {
  return l(), r("svg", i, e[0] || (e[0] = [
    t("path", { d: "M8 9.585V16h6.414l-2.707 2.707a1 1 0 0 1-.112.097l-.11.071-.114.054-.105.035-.149.03L11 19H6.414l-1.707 1.707a1 1 0 1 1-1.414-1.414L5 17.584V13l.003-.075.017-.126.03-.111.044-.111.052-.098.067-.096.08-.09z" }, null, -1),
    t("path", { d: "m19.414 11-3 3H11.5l2.914-3zM13 4.586v4.998l-3 3V7.585zM16.482 3A4.515 4.515 0 0 1 21 7.514a4.7 4.7 0 0 1-.239 1.487L15 9V3.24c.469-.158.968-.24 1.482-.24" }, null, -1)
  ]));
}
const a = /* @__PURE__ */ n(o, [["render", m]]);
export {
  a as F
};

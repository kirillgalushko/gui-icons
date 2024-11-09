import { openBlock as o, createElementBlock as l, createElementVNode as t } from "vue";
import { _ as n } from "./AccessibleFilled.js";
const r = {}, i = {
  xmlns: "http://www.w3.org/2000/svg",
  width: "24",
  height: "24",
  fill: "currentColor",
  style: { width: "1em", "min-width": "1em", height: "1em", "min-height": "1em" }
};
function c(h, e) {
  return o(), l("svg", i, e[0] || (e[0] = [
    t("path", { d: "M6 5.667A3.667 3.667 0 0 1 9.667 2h8.666A3.667 3.667 0 0 1 22 5.667v8.666A3.667 3.667 0 0 1 18.333 18H9.667A3.667 3.667 0 0 1 6 14.333z" }, null, -1),
    t("path", { d: "M2 9c0-1.094.533-1.828 1.514-2.374a1 1 0 1 1 .972 1.748C4.088 8.595 4 8.716 4 9v10c0 .548.452 1 1 1h9.998c.32 0 .618-.154.805-.407l.065-.1a1 1 0 1 1 1.738.99A3 3 0 0 1 15 22H5c-1.652 0-3-1.348-3-3z" }, null, -1)
  ]));
}
const d = /* @__PURE__ */ n(r, [["render", c]]);
export {
  d as B
};

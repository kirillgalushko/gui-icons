import { openBlock as e, createElementBlock as r, createElementVNode as o } from "vue";
import { _ as n } from "./AccessibleFilled.js";
const i = {}, m = {
  xmlns: "http://www.w3.org/2000/svg",
  width: "24",
  height: "24",
  fill: "currentColor",
  style: { width: "1em", "min-width": "1em", height: "1em", "min-height": "1em" }
};
function l(s, t) {
  return e(), r("svg", m, t[0] || (t[0] = [
    o("path", { d: "M16 3a3 3 0 0 1 3 3v12a3 3 0 0 1-3 3H8a3 3 0 0 1-3-3V6a3 3 0 0 1 3-3z" }, null, -1)
  ]));
}
const a = /* @__PURE__ */ n(i, [["render", l]]);
export {
  a as C
};

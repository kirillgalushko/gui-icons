import { openBlock as t, createElementBlock as r, createElementVNode as o } from "vue";
import { _ as n } from "./AccessibleFilled.js";
const i = {}, m = {
  xmlns: "http://www.w3.org/2000/svg",
  width: "24",
  height: "24",
  fill: "currentColor",
  style: { width: "1em", "min-width": "1em", height: "1em", "min-height": "1em" }
};
function l(s, e) {
  return t(), r("svg", m, e[0] || (e[0] = [
    o("path", { d: "M12 2a5 5 0 1 1-5 5l.005-.217A5 5 0 0 1 12 2m2 12a5 5 0 0 1 5 5v1a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2v-1a5 5 0 0 1 5-5z" }, null, -1)
  ]));
}
const a = /* @__PURE__ */ n(i, [["render", l]]);
export {
  a as U
};
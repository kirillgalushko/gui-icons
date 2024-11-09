import { openBlock as t, createElementBlock as r, createElementVNode as o } from "vue";
import { _ as n } from "./AccessibleFilled.js";
const i = {}, l = {
  xmlns: "http://www.w3.org/2000/svg",
  width: "24",
  height: "24",
  fill: "currentColor",
  style: { width: "1em", "min-width": "1em", height: "1em", "min-height": "1em" }
};
function m(s, e) {
  return t(), r("svg", l, e[0] || (e[0] = [
    o("path", { d: "M12 5C6.543 5 2 8.028 2 12s4.543 7 10 7 10-3.028 10-7-4.543-7-10-7" }, null, -1)
  ]));
}
const d = /* @__PURE__ */ n(i, [["render", m]]);
export {
  d as O
};

import { openBlock as t, createElementBlock as o, createElementVNode as r } from "vue";
import { _ as n } from "./AccessibleFilled.js";
const i = {}, m = {
  xmlns: "http://www.w3.org/2000/svg",
  width: "24",
  height: "24",
  fill: "currentColor",
  style: { width: "1em", "min-width": "1em", height: "1em", "min-height": "1em" }
};
function a(c, e) {
  return t(), o("svg", m, e[0] || (e[0] = [
    r("path", { d: "M20 8v6a8 8 0 1 1-16 0V8zm-8 2a4 4 0 0 0-3.996 3.826L8 14a4 4 0 1 0 4-4m.01 3a1 1 0 0 1 .117 1.993L12 15a1 1 0 0 1-.117-1.993zM2 5V4a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v1a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2" }, null, -1)
  ]));
}
const h = /* @__PURE__ */ n(i, [["render", a]]);
export {
  h as D
};
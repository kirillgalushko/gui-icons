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
  style: { width: "1em", "min-width": "1em", height: "1em", "min-height": "1em" }
};
function l(a, e) {
  return o(), n("svg", s, e[0] || (e[0] = [
    t("path", {
      stroke: "none",
      d: "M0 0h24v24H0z"
    }, null, -1),
    t("path", { d: "M8 13v.01M12 17v.01M12 12v.01M16 14v.01M11 8v.01m2.148-4.534 2.667 1.104a4 4 0 0 0 4.656 6.14l.053.132a3 3 0 0 1 0 2.296Q19.779 14.328 19.5 15q-.283.684-.66 2.216a3 3 0 0 1-1.624 1.623q-1.572.394-2.216.661-.712.295-1.852 1.024a3 3 0 0 1-2.296 0Q9.649 19.77 9 19.5q-.707-.292-2.216-.66a3 3 0 0 1-1.623-1.624Q4.764 15.639 4.5 15q-.298-.718-1.024-1.852a3 3 0 0 1 0-2.296Q4.195 9.736 4.5 9q.257-.62.66-2.216a3 3 0 0 1 1.624-1.623Q8.331 4.777 9 4.5q.687-.285 1.852-1.024a3 3 0 0 1 2.296 0" }, null, -1)
  ]));
}
const c = /* @__PURE__ */ r(i, [["render", l]]);
export {
  c as I
};
import { openBlock as l, createElementBlock as o, createElementVNode as t } from "vue";
const n = {
  xmlns: "http://www.w3.org/2000/svg",
  width: "24",
  height: "24",
  viewBox: "0 0 24 24",
  fill: "currentColor",
  style: { width: "1em", "min-width": "1em", height: "1em", "min-height": "1em", fill: "currentColor" }
};
function r(i, e) {
  return l(), o("svg", n, e[0] || (e[0] = [
    t("path", { d: "M20 3a1 1 0 0 1 0 2h-16a1 1 0 1 1 0 -2z" }, null, -1),
    t("path", { d: "M13 7a3 3 0 0 1 3 3v8a3 3 0 0 1 -3 3h-2a3 3 0 0 1 -3 -3v-8a3 3 0 0 1 3 -3z" }, null, -1)
  ]));
}
const a = { render: r };
export {
  a as default,
  r as render
};

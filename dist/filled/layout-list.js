import { openBlock as n, createElementBlock as o, createElementVNode as t } from "vue";
const l = {
  xmlns: "http://www.w3.org/2000/svg",
  width: "24",
  height: "24",
  viewBox: "0 0 24 24",
  fill: "currentColor",
  style: { width: "1em", "min-width": "1em", height: "1em", "min-height": "1em" }
};
function r(a, e) {
  return n(), o("svg", l, e[0] || (e[0] = [
    t("path", { d: "M18 3a3 3 0 0 1 3 3v2a3 3 0 0 1 -3 3h-12a3 3 0 0 1 -3 -3v-2a3 3 0 0 1 3 -3z" }, null, -1),
    t("path", { d: "M18 13a3 3 0 0 1 3 3v2a3 3 0 0 1 -3 3h-12a3 3 0 0 1 -3 -3v-2a3 3 0 0 1 3 -3z" }, null, -1)
  ]));
}
const i = { render: r };
export {
  i as default,
  r as render
};

import { openBlock as l, createElementBlock as o, createElementVNode as t } from "vue";
const r = {
  xmlns: "http://www.w3.org/2000/svg",
  width: "24",
  height: "24",
  viewBox: "0 0 24 24",
  fill: "currentColor",
  style: { width: "1em", "min-width": "1em", height: "1em", "min-height": "1em", fill: "currentColor" }
};
function n(i, e) {
  return l(), o("svg", r, e[0] || (e[0] = [
    t("path", { d: "M20 3a1 1 0 0 1 0 2h-16a1 1 0 1 1 0 -2z" }, null, -1),
    t("path", { d: "M20 19a1 1 0 0 1 0 2h-16a1 1 0 0 1 0 -2z" }, null, -1),
    t("path", { d: "M16 8a3 3 0 0 1 3 3v2a3 3 0 0 1 -3 3h-8a3 3 0 0 1 -3 -3v-2a3 3 0 0 1 3 -3z" }, null, -1)
  ]));
}
const h = { render: n };
export {
  h as default,
  n as render
};

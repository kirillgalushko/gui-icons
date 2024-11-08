import { openBlock as a, createElementBlock as l, createElementVNode as t } from "vue";
const n = {
  xmlns: "http://www.w3.org/2000/svg",
  width: "24",
  height: "24",
  viewBox: "0 0 24 24",
  fill: "currentColor",
  style: { width: "1em", "min-width": "1em", height: "1em", "min-height": "1em", fill: "currentColor" }
};
function h(o, e) {
  return a(), l("svg", n, e[0] || (e[0] = [
    t("path", { d: "M10 3a1 1 0 0 1 0 2h-6a1 1 0 1 1 0 -2z" }, null, -1),
    t("path", { d: "M20 3a1 1 0 0 1 0 2h-6a1 1 0 0 1 0 -2z" }, null, -1),
    t("path", { d: "M8 7a3 3 0 0 1 3 3v8a3 3 0 0 1 -3 3h-2a3 3 0 0 1 -3 -3v-8a3 3 0 0 1 3 -3z" }, null, -1),
    t("path", { d: "M18 7a3 3 0 0 1 3 3v2a3 3 0 0 1 -3 3h-2a3 3 0 0 1 -3 -3v-2a3 3 0 0 1 3 -3z" }, null, -1)
  ]));
}
const i = { render: h };
export {
  i as default,
  h as render
};

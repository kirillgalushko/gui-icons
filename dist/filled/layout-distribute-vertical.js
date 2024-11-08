import { openBlock as l, createElementBlock as r, createElementVNode as t } from "vue";
const a = {
  xmlns: "http://www.w3.org/2000/svg",
  width: "24",
  height: "24",
  viewBox: "0 0 24 24",
  fill: "currentColor",
  style: { width: "1em", "min-width": "1em", height: "1em", "min-height": "1em", fill: "currentColor" }
};
function n(o, e) {
  return l(), r("svg", a, e[0] || (e[0] = [
    t("path", { d: "M4 3a1 1 0 0 1 1 1v16a1 1 0 0 1 -2 0v-16a1 1 0 0 1 1 -1" }, null, -1),
    t("path", { d: "M20 3a1 1 0 0 1 1 1v16a1 1 0 0 1 -2 0v-16a1 1 0 0 1 1 -1" }, null, -1),
    t("path", { d: "M13 5a3 3 0 0 1 3 3v8a3 3 0 0 1 -3 3h-2a3 3 0 0 1 -3 -3v-8a3 3 0 0 1 3 -3z" }, null, -1)
  ]));
}
const h = { render: n };
export {
  h as default,
  n as render
};

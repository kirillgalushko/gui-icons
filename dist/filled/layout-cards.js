import { openBlock as r, createElementBlock as l, createElementVNode as t } from "vue";
const o = {
  xmlns: "http://www.w3.org/2000/svg",
  width: "24",
  height: "24",
  viewBox: "0 0 24 24",
  fill: "currentColor",
  style: { width: "1em", "min-width": "1em", height: "1em", "min-height": "1em", fill: "currentColor" }
};
function n(a, e) {
  return r(), l("svg", o, e[0] || (e[0] = [
    t("path", { d: "M8 3a3 3 0 0 1 3 3v12a3 3 0 0 1 -3 3h-2a3 3 0 0 1 -3 -3v-12a3 3 0 0 1 3 -3z" }, null, -1),
    t("path", { d: "M18 3a3 3 0 0 1 3 3v6a3 3 0 0 1 -3 3h-2a3 3 0 0 1 -3 -3v-6a3 3 0 0 1 3 -3z" }, null, -1)
  ]));
}
const i = { render: n };
export {
  i as default,
  n as render
};

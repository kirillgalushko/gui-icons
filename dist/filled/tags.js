import { openBlock as l, createElementBlock as a, createElementVNode as t } from "vue";
const r = {
  xmlns: "http://www.w3.org/2000/svg",
  width: "24",
  height: "24",
  viewBox: "0 0 24 24",
  fill: "currentColor",
  style: { width: "1em", "min-width": "1em", height: "1em", "min-height": "1em", fill: "currentColor" }
};
function n(o, e) {
  return l(), a("svg", r, e[0] || (e[0] = [
    t("path", { d: "M9.172 5a3 3 0 0 1 2.121 .879l5.71 5.71a3.41 3.41 0 0 1 0 4.822l-3.592 3.592a3.41 3.41 0 0 1 -4.822 0l-5.71 -5.71a3 3 0 0 1 -.879 -2.121v-4.172a3 3 0 0 1 3 -3zm-2.172 4h-.01a1 1 0 1 0 .01 2a1 1 0 0 0 0 -2" }, null, -1),
    t("path", { d: "M14.293 5.293a1 1 0 0 1 1.414 0l4.593 4.592a5.82 5.82 0 0 1 0 8.23l-1.592 1.592a1 1 0 0 1 -1.414 -1.414l1.592 -1.592a3.82 3.82 0 0 0 0 -5.402l-4.592 -4.592a1 1 0 0 1 0 -1.414" }, null, -1)
  ]));
}
const h = { render: n };
export {
  h as default,
  n as render
};

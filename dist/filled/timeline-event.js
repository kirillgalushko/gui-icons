import { openBlock as h, createElementBlock as l, createElementVNode as t } from "vue";
const n = {
  xmlns: "http://www.w3.org/2000/svg",
  width: "24",
  height: "24",
  viewBox: "0 0 24 24",
  fill: "currentColor",
  style: { width: "1em", "min-width": "1em", height: "1em", "min-height": "1em" }
};
function i(o, e) {
  return h(), l("svg", n, e[0] || (e[0] = [
    t("path", { d: "M12 17c1.306 0 2.418 .835 2.83 2h5.17a1 1 0 0 1 0 2h-5.171a3.001 3.001 0 0 1 -5.658 0h-5.171a1 1 0 0 1 0 -2h5.17a3.001 3.001 0 0 1 2.83 -2z" }, null, -1),
    t("path", { d: "M17 2a2 2 0 0 1 2 2v8a2 2 0 0 1 -2 2h-2.586l-1.707 1.707a1 1 0 0 1 -1.32 .083l-.094 -.083l-1.708 -1.707h-2.585a2 2 0 0 1 -1.995 -1.85l-.005 -.15v-8a2 2 0 0 1 2 -2h10z" }, null, -1)
  ]));
}
const a = { render: i };
export {
  a as default,
  i as render
};

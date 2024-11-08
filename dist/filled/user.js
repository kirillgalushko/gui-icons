import { openBlock as r, createElementBlock as l, createElementVNode as t } from "vue";
const n = {
  xmlns: "http://www.w3.org/2000/svg",
  width: "24",
  height: "24",
  viewBox: "0 0 24 24",
  fill: "currentColor",
  style: { width: "1em", "min-width": "1em", height: "1em", "min-height": "1em", fill: "currentColor" }
};
function o(h, e) {
  return r(), l("svg", n, e[0] || (e[0] = [
    t("path", { d: "M12 2a5 5 0 1 1 -5 5l.005 -.217a5 5 0 0 1 4.995 -4.783z" }, null, -1),
    t("path", { d: "M14 14a5 5 0 0 1 5 5v1a2 2 0 0 1 -2 2h-10a2 2 0 0 1 -2 -2v-1a5 5 0 0 1 5 -5h4z" }, null, -1)
  ]));
}
const a = { render: o };
export {
  a as default,
  o as render
};

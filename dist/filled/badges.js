import { openBlock as l, createElementBlock as a, createElementVNode as t } from "vue";
const n = {
  xmlns: "http://www.w3.org/2000/svg",
  width: "24",
  height: "24",
  viewBox: "0 0 24 24",
  fill: "currentColor",
  style: { width: "1em", "min-width": "1em", height: "1em", "min-height": "1em" }
};
function o(r, e) {
  return l(), a("svg", n, e[0] || (e[0] = [
    t("path", { d: "M16.486 12.143l-4.486 2.69l-4.486 -2.69a1 1 0 0 0 -1.514 .857v4a1 1 0 0 0 .486 .857l5 3a1 1 0 0 0 1.028 0l5 -3a1 1 0 0 0 .486 -.857v-4a1 1 0 0 0 -1.514 -.857z" }, null, -1),
    t("path", { d: "M16.486 3.143l-4.486 2.69l-4.486 -2.69a1 1 0 0 0 -1.514 .857v4a1 1 0 0 0 .486 .857l5 3a1 1 0 0 0 1.028 0l5 -3a1 1 0 0 0 .486 -.857v-4a1 1 0 0 0 -1.514 -.857z" }, null, -1)
  ]));
}
const h = { render: o };
export {
  h as default,
  o as render
};
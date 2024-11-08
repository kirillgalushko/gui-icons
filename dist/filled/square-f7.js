import { openBlock as l, createElementBlock as t, createElementVNode as h } from "vue";
const r = {
  xmlns: "http://www.w3.org/2000/svg",
  width: "24",
  height: "24",
  viewBox: "0 0 24 24",
  fill: "currentColor",
  style: { width: "1em", "min-width": "1em", height: "1em", "min-height": "1em" }
};
function a(n, e) {
  return l(), t("svg", r, e[0] || (e[0] = [
    h("path", { d: "M18.333 2c1.96 0 3.56 1.537 3.662 3.472l.005 .195v12.666c0 1.96 -1.537 3.56 -3.472 3.662l-.195 .005h-12.666a3.667 3.667 0 0 1 -3.662 -3.472l-.005 -.195v-12.666c0 -1.96 1.537 -3.56 3.472 -3.662l.195 -.005h12.666zm-2.333 6h-3l-.117 .007a1 1 0 0 0 -.883 .993l.007 .117a1 1 0 0 0 .993 .883h1.718l-1.188 4.757l-.022 .115a1 1 0 0 0 1.962 .37l1.5 -6l.021 -.11a1 1 0 0 0 -.991 -1.132zm-6 0h-2l-.117 .007a1 1 0 0 0 -.883 .993v6l.007 .117a1 1 0 0 0 .993 .883l.117 -.007a1 1 0 0 0 .883 -.993v-2h1l.117 -.007a1 1 0 0 0 -.117 -1.993h-1v-1h1l.117 -.007a1 1 0 0 0 -.117 -1.993z" }, null, -1)
  ]));
}
const i = { render: a };
export {
  i as default,
  a as render
};

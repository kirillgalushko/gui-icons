import { openBlock as e, createElementBlock as t, createElementVNode as h } from "vue";
const a = {
  xmlns: "http://www.w3.org/2000/svg",
  width: "24",
  height: "24",
  viewBox: "0 0 24 24",
  fill: "currentColor",
  style: { width: "1em", "min-width": "1em", height: "1em", "min-height": "1em" }
};
function r(n, l) {
  return e(), t("svg", a, l[0] || (l[0] = [
    h("path", { d: "M18.333 2c1.96 0 3.56 1.537 3.662 3.472l.005 .195v12.666c0 1.96 -1.537 3.56 -3.472 3.662l-.195 .005h-12.666a3.667 3.667 0 0 1 -3.662 -3.472l-.005 -.195v-12.666c0 -1.96 1.537 -3.56 3.472 -3.662l.195 -.005h12.666zm-2.333 6a1 1 0 0 0 -.993 .883l-.007 .117v2h-1v-2l-.007 -.117a1 1 0 0 0 -1.986 0l-.007 .117v2l.005 .15a2 2 0 0 0 1.838 1.844l.157 .006h1v2l.007 .117a1 1 0 0 0 1.986 0l.007 -.117v-6l-.007 -.117a1 1 0 0 0 -.993 -.883zm-6 0h-2l-.117 .007a1 1 0 0 0 -.876 .876l-.007 .117v6l.007 .117a1 1 0 0 0 .876 .876l.117 .007l.117 -.007a1 1 0 0 0 .876 -.876l.007 -.117v-2h1l.117 -.007a1 1 0 0 0 0 -1.986l-.117 -.007h-1v-1h1l.117 -.007a1 1 0 0 0 0 -1.986l-.117 -.007z" }, null, -1)
  ]));
}
const i = { render: r };
export {
  i as default,
  r as render
};

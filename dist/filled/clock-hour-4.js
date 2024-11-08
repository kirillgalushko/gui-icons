import { openBlock as l, createElementBlock as t, createElementVNode as o } from "vue";
const r = {
  xmlns: "http://www.w3.org/2000/svg",
  width: "24",
  height: "24",
  viewBox: "0 0 24 24",
  fill: "currentColor",
  style: { width: "1em", "min-width": "1em", height: "1em", "min-height": "1em" }
};
function n(i, e) {
  return l(), t("svg", r, e[0] || (e[0] = [
    o("path", { d: "M17 3.34a10 10 0 1 1 -15 8.66l.005 -.324a10 10 0 0 1 14.995 -8.336m-5 2.66a1 1 0 0 0 -1 1v5.026l.009 .105l.02 .107l.04 .129l.048 .102l.046 .078l.042 .06l.069 .08l.088 .083l.083 .062l3 2a1 1 0 1 0 1.11 -1.664l-2.555 -1.704v-4.464a1 1 0 0 0 -.883 -.993z" }, null, -1)
  ]));
}
const h = { render: n };
export {
  h as default,
  n as render
};

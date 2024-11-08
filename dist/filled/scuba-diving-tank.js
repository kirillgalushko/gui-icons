import { openBlock as n, createElementBlock as a, createElementVNode as t } from "vue";
const h = {
  xmlns: "http://www.w3.org/2000/svg",
  width: "24",
  height: "24",
  viewBox: "0 0 24 24",
  fill: "currentColor",
  style: { width: "1em", "min-width": "1em", height: "1em", "min-height": "1em" }
};
function i(l, e) {
  return n(), a("svg", h, e[0] || (e[0] = [
    t("path", { d: "M17 17v2a3 3 0 0 1 -3 3h-4a3 3 0 0 1 -3 -3v-2z" }, null, -1),
    t("path", { d: "M8 2a2 2 0 0 1 1.732 1h1.15a1.496 1.496 0 0 1 2.236 0h1.882a1 1 0 0 1 0 2l-1.883 .001a2 2 0 0 1 -.115 .116v.983a5 5 0 0 1 3.998 4.9v4h-10v-4a5 5 0 0 1 4 -4.9v-.983a2 2 0 0 1 -.117 -.116h-1.151a2 2 0 1 1 -1.732 -3.001" }, null, -1)
  ]));
}
const r = { render: i };
export {
  r as default,
  i as render
};

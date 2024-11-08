import { openBlock as a, createElementBlock as l, createElementVNode as t } from "vue";
const n = {
  xmlns: "http://www.w3.org/2000/svg",
  width: "24",
  height: "24",
  viewBox: "0 0 24 24",
  fill: "currentColor",
  style: { width: "1em", "min-width": "1em", height: "1em", "min-height": "1em", fill: "currentColor" }
};
function o(r, e) {
  return a(), l("svg", n, e[0] || (e[0] = [
    t("path", { d: "M19 4a4 4 0 0 1 4 4v8a4 4 0 0 1 -4 4h-14a4 4 0 0 1 -4 -4v-8a4 4 0 0 1 4 -4zm-13 5a1 1 0 0 0 -1 1v4a1 1 0 0 0 2 0v-4a1 1 0 0 0 -1 -1m5 0a3 3 0 0 0 0 6a1 1 0 0 0 .117 -1.993l-.117 -.007a1 1 0 0 1 -.117 -1.993l.117 -.007a1 1 0 0 0 0 -2m5 0a3 3 0 0 0 -2.995 2.824l-.005 .176a3 3 0 1 0 3 -3" }, null, -1),
    t("path", { d: "M16 11a1 1 0 1 0 0 2a1 1 0 0 0 0 -2" }, null, -1)
  ]));
}
const m = { render: o };
export {
  m as default,
  o as render
};

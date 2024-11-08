import { openBlock as o, createElementBlock as l, createElementVNode as t } from "vue";
const r = {
  xmlns: "http://www.w3.org/2000/svg",
  width: "24",
  height: "24",
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  "stroke-width": "2",
  "stroke-linecap": "round",
  "stroke-linejoin": "round",
  style: { width: "1em", "min-width": "1em", height: "1em", "min-height": "1em", fill: "currentColor" }
};
function n(i, e) {
  return o(), l("svg", r, e[0] || (e[0] = [
    t("path", { d: "M6.697 12.071l11.313 -7.071l-7.07 11.314z" }, null, -1),
    t("path", { d: "M8.743 14.475l-2.121 2.121c-1.886 1.886 .943 4.715 2.828 2.829" }, null, -1)
  ]));
}
const h = { render: n };
export {
  h as default,
  n as render
};

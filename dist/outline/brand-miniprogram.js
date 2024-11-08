import { openBlock as r, createElementBlock as n, createElementVNode as t } from "vue";
const o = {
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
function i(l, e) {
  return r(), n("svg", o, e[0] || (e[0] = [
    t("path", { d: "M21 12a9 9 0 1 1 -18 0a9 9 0 0 1 18 0z" }, null, -1),
    t("path", { d: "M8 11.503a2.5 2.5 0 1 0 4 2v-3a2.5 2.5 0 1 1 4 2" }, null, -1)
  ]));
}
const h = { render: i };
export {
  h as default,
  i as render
};

import { openBlock as r, createElementBlock as l, createElementVNode as t } from "vue";
const n = {
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
function o(i, e) {
  return r(), l("svg", n, e[0] || (e[0] = [
    t("path", { d: "M6 7.5l-4 9.5h4l6 -15z" }, null, -1),
    t("path", { d: "M22 20l-7 -15l-3 7l4 5l-8 3z" }, null, -1)
  ]));
}
const h = { render: o };
export {
  h as default,
  o as render
};

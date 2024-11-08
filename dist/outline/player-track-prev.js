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
  style: { width: "1em", "min-width": "1em", height: "1em", "min-height": "1em" }
};
function l(i, e) {
  return r(), n("svg", o, e[0] || (e[0] = [
    t("path", { d: "M21 5v14l-8 -7z" }, null, -1),
    t("path", { d: "M10 5v14l-8 -7z" }, null, -1)
  ]));
}
const h = { render: l };
export {
  h as default,
  l as render
};

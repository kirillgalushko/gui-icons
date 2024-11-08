import { openBlock as l, createElementBlock as o, createElementVNode as t } from "vue";
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
function r(i, e) {
  return l(), o("svg", n, e[0] || (e[0] = [
    t("path", { d: "M12 6l-8 4l8 4l8 -4l-8 -4" }, null, -1),
    t("path", { d: "M4 14l8 4l8 -4" }, null, -1)
  ]));
}
const h = { render: r };
export {
  h as default,
  r as render
};

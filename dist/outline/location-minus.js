import { openBlock as n, createElementBlock as o, createElementVNode as t } from "vue";
const l = {
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
function r(i, e) {
  return n(), o("svg", l, e[0] || (e[0] = [
    t("path", { d: "M12 18l-2 -4l-7 -3.5a.55 .55 0 0 1 0 -1l18 -6.5l-4.347 12.038" }, null, -1),
    t("path", { d: "M16 19h6" }, null, -1)
  ]));
}
const d = { render: r };
export {
  d as default,
  r as render
};

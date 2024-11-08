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
    t("path", { d: "M3 14v1a6 6 0 1 0 12 0v-9a3 3 0 0 1 6 0" }, null, -1),
    t("path", { d: "M9 16c-.663 0 -1.3 -.036 -1.896 -.102l-.5 -.064c-2.123 -.308 -3.604 -1.013 -3.604 -1.834c0 -.82 1.482 -1.526 3.603 -1.834l.5 -.064a17.27 17.27 0 0 1 1.897 -.102c.663 0 1.3 .036 1.896 .102l.5 .064c2.123 .308 3.604 1.013 3.604 1.834c0 .82 -1.482 1.526 -3.603 1.834l-.5 .064a17.27 17.27 0 0 1 -1.897 .102z" }, null, -1)
  ]));
}
const d = { render: r };
export {
  d as default,
  r as render
};

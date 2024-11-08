import { openBlock as n, createElementBlock as r, createElementVNode as t } from "vue";
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
function i(l, e) {
  return n(), r("svg", o, e[0] || (e[0] = [
    t("path", { d: "M16.007 7.54a5.965 5.965 0 0 0 -4.008 -1.54a6 6 0 0 0 -5.992 6c0 3.314 2.682 6 5.992 6a5.965 5.965 0 0 0 4 -1.536c.732 -.66 1.064 -2.148 1 -4.464h-5" }, null, -1),
    t("path", { d: "M12 20v-16" }, null, -1)
  ]));
}
const d = { render: i };
export {
  d as default,
  i as render
};

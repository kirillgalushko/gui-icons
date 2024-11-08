import { openBlock as n, createElementBlock as o, createElementVNode as t } from "vue";
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
  style: { width: "1em", "min-width": "1em", height: "1em", "min-height": "1em" }
};
function i(l, e) {
  return n(), o("svg", r, e[0] || (e[0] = [
    t("path", { d: "M12 6m-7 0a7 3 0 1 0 14 0a7 3 0 1 0 -14 0" }, null, -1),
    t("path", { d: "M5 6v12c0 1.657 3.134 3 7 3s7 -1.343 7 -3v-12" }, null, -1)
  ]));
}
const h = { render: i };
export {
  h as default,
  i as render
};

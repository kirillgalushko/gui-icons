import { openBlock as o, createElementBlock as r, createElementVNode as t } from "vue";
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
  style: { width: "1em", "min-width": "1em", height: "1em", "min-height": "1em" }
};
function i(l, e) {
  return o(), r("svg", n, e[0] || (e[0] = [
    t("path", { d: "M12 3h5v5" }, null, -1),
    t("path", { d: "M17 3l-7.536 7.536a5 5 0 0 0 -1.464 3.534v6.93" }, null, -1)
  ]));
}
const d = { render: i };
export {
  d as default,
  i as render
};

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
    t("path", { d: "M12 4v3m-4 -3v6m8 -6v6" }, null, -1),
    t("path", { d: "M12 18.5l-3 1.5l.5 -3.5l-2 -2l3 -.5l1.5 -3l1.5 3l3 .5l-2 2l.5 3.5z" }, null, -1)
  ]));
}
const m = { render: r };
export {
  m as default,
  r as render
};

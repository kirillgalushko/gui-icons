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
    t("path", { d: "M18.316 5h-12.632l-3.418 4.019a1.089 1.089 0 0 0 .019 1.447l9.714 10.534l9.715 -10.49a1.09 1.09 0 0 0 .024 -1.444l-3.422 -4.066z" }, null, -1),
    t("path", { d: "M9 11l3 3l3 -3" }, null, -1)
  ]));
}
const h = { render: r };
export {
  h as default,
  r as render
};

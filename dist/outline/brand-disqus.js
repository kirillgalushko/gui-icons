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
    t("path", { d: "M11.847 21c-2.259 0 -4.323 -.667 -5.919 -2h-3.928l1.708 -3.266c-.545 -1.174 -.759 -2.446 -.758 -3.734c0 -4.97 3.84 -9 8.898 -9c5.052 0 9.152 4.03 9.152 9c0 4.972 -4.098 9 -9.153 9z" }, null, -1),
    t("path", { d: "M11.485 15h-1.485v-6h1.485c2.112 0 3.515 .823 3.515 2.981v.035c0 2.18 -1.403 2.984 -3.515 2.984z" }, null, -1)
  ]));
}
const c = { render: i };
export {
  c as default,
  i as render
};

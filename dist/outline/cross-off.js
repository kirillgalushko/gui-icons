import { openBlock as o, createElementBlock as n, createElementVNode as t } from "vue";
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
function h(i, e) {
  return o(), n("svg", r, e[0] || (e[0] = [
    t("path", { d: "M16 12h3v-4h-5v-5h-4v3m-2 2h-3v4h5v9h4v-7" }, null, -1),
    t("path", { d: "M3 3l18 18" }, null, -1)
  ]));
}
const s = { render: h };
export {
  s as default,
  h as render
};

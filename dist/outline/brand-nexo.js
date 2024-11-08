import { openBlock as l, createElementBlock as n, createElementVNode as t } from "vue";
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
function r(i, e) {
  return l(), n("svg", o, e[0] || (e[0] = [
    t("path", { d: "M17 3l5 3v12l-5 3l-10 -6v-6l10 6v-6l-5 -3z" }, null, -1),
    t("path", { d: "M12 6l-5 -3l-5 3v12l5 3l4.7 -3.13" }, null, -1)
  ]));
}
const h = { render: r };
export {
  h as default,
  r as render
};

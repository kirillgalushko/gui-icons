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
function h(i, e) {
  return n(), o("svg", r, e[0] || (e[0] = [
    t("path", { d: "M7 11v8a1 1 0 0 1 -1 1h-2a1 1 0 0 1 -1 -1v-7a1 1 0 0 1 1 -1h3a3.987 3.987 0 0 0 2.828 -1.172m1.172 -2.828v-1a2 2 0 1 1 4 0v5h3a2 2 0 0 1 2 2c-.222 1.112 -.39 1.947 -.5 2.503m-.758 3.244c-.392 .823 -1.044 1.312 -1.742 1.253h-7a3 3 0 0 1 -3 -3" }, null, -1),
    t("path", { d: "M3 3l18 18" }, null, -1)
  ]));
}
const m = { render: h };
export {
  m as default,
  h as render
};

import { openBlock as r, createElementBlock as t, createElementVNode as e } from "vue";
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
function n(i, l) {
  return r(), t("svg", o, l[0] || (l[0] = [
    e("path", { d: "M15 11l1 -9l5 .5l-1 13.5l-3 6l-12.5 -2.5l-1.5 -6l7 -1.5l-1.5 -7.5l4.5 -1z" }, null, -1),
    e("circle", {
      cx: "15.5",
      cy: "15.5",
      r: "1",
      fill: "currentColor"
    }, null, -1),
    e("circle", {
      cx: "11.5",
      cy: "14.5",
      r: "1",
      fill: "currentColor"
    }, null, -1)
  ]));
}
const d = { render: n };
export {
  d as default,
  n as render
};

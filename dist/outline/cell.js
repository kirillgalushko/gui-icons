import { openBlock as t, createElementBlock as n, createElementVNode as e } from "vue";
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
  style: { width: "1em", "min-width": "1em", height: "1em", "min-height": "1em", fill: "currentColor" }
};
function r(i, l) {
  return t(), n("svg", o, l[0] || (l[0] = [
    e("path", { d: "M8 4l-4 2v5l4 2l4 -2v-5z" }, null, -1),
    e("path", { d: "M12 11l4 2l4 -2v-5l-4 -2l-4 2" }, null, -1),
    e("path", { d: "M8 13v5l4 2l4 -2v-5" }, null, -1)
  ]));
}
const h = { render: r };
export {
  h as default,
  r as render
};

import { openBlock as t, createElementBlock as o, createElementVNode as n } from "vue";
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
  return t(), o("svg", r, e[0] || (e[0] = [
    n("path", { d: "M10 21h4v-9h5v-4h-5v-5h-4v5h-5v4h5z" }, null, -1)
  ]));
}
const s = { render: h };
export {
  s as default,
  h as render
};

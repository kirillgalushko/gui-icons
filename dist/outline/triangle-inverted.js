import { openBlock as t, createElementBlock as n, createElementVNode as o } from "vue";
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
  return t(), n("svg", r, e[0] || (e[0] = [
    o("path", { d: "M10.363 20.405l-8.106 -13.534a1.914 1.914 0 0 1 1.636 -2.871h16.214a1.914 1.914 0 0 1 1.636 2.871l-8.106 13.534a1.914 1.914 0 0 1 -3.274 0z" }, null, -1)
  ]));
}
const h = { render: i };
export {
  h as default,
  i as render
};

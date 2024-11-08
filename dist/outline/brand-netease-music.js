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
function i(s, e) {
  return t(), n("svg", r, e[0] || (e[0] = [
    o("path", { d: "M9 4c-2.93 1.346 -5 5.046 -5 8.492c0 4.508 4 7.508 8 7.508s8 -3 8 -7c0 -3.513 -3.5 -5.513 -6 -5.513s-5 1.513 -5 4.513c0 2 1.5 3 3 3s3 -1 3 -3c0 -3.513 -2 -4.508 -2 -6.515c0 -3.504 3.5 -2.603 4 -1.502" }, null, -1)
  ]));
}
const l = { render: i };
export {
  l as default,
  i as render
};

import { openBlock as n, createElementBlock as r, createElementVNode as e } from "vue";
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
function l(i, t) {
  return n(), r("svg", o, t[0] || (t[0] = [
    e("path", { d: "M3.227 14c.917 4 4.497 7 8.773 7c4.277 0 7.858 -3 8.773 -7" }, null, -1),
    e("path", { d: "M20.78 10a9 9 0 0 0 -8.78 -7a8.985 8.985 0 0 0 -8.782 7" }, null, -1),
    e("path", { d: "M12 12m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" }, null, -1)
  ]));
}
const h = { render: l };
export {
  h as default,
  l as render
};

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
  style: { width: "1em", "min-width": "1em", height: "1em", "min-height": "1em" }
};
function r(i, l) {
  return t(), n("svg", o, l[0] || (l[0] = [
    e("path", { d: "M9 3h6l3 7l-6 2l-6 -2z" }, null, -1),
    e("path", { d: "M12 12l-3 -9" }, null, -1),
    e("path", { d: "M15 11l-3 -8" }, null, -1),
    e("path", { d: "M12 19.5l-3 1.5l.5 -3.5l-2 -2l3 -.5l1.5 -3l1.5 3l3 .5l-2 2l.5 3.5z" }, null, -1)
  ]));
}
const h = { render: r };
export {
  h as default,
  r as render
};

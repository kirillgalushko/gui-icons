import { openBlock as n, createElementBlock as l, createElementVNode as e } from "vue";
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
function r(i, t) {
  return n(), l("svg", o, t[0] || (t[0] = [
    e("path", { d: "M16.653 13.086l-4.653 -10.086l-7.97 17.275c-.07 .2 -.017 .424 .135 .572c.15 .148 .374 .193 .57 .116l6.246 -2.117" }, null, -1),
    e("path", { d: "M20 21l2 -2l-2 -2" }, null, -1),
    e("path", { d: "M17 17l-2 2l2 2" }, null, -1)
  ]));
}
const h = { render: r };
export {
  h as default,
  r as render
};

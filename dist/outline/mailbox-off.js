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
function h(r, t) {
  return n(), l("svg", o, t[0] || (t[0] = [
    e("path", { d: "M10 21v-6.5a3.5 3.5 0 0 0 -7 0v6.5h18m0 -4v-2a4 4 0 0 0 -4 -4h-2m-4 0h-4.5" }, null, -1),
    e("path", { d: "M12 8v-5h4l2 2l-2 2h-4" }, null, -1),
    e("path", { d: "M6 15h1" }, null, -1),
    e("path", { d: "M3 3l18 18" }, null, -1)
  ]));
}
const d = { render: h };
export {
  d as default,
  h as render
};

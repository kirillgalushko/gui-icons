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
    e("path", { d: "M7 17m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" }, null, -1),
    e("path", { d: "M15.584 15.588a2 2 0 0 0 2.828 2.83" }, null, -1),
    e("path", { d: "M5 17h-2v-6l2 -5h1m4 0h4l4 5h1a2 2 0 0 1 2 2v4m-6 0h-6m-6 -6h8m4 0h3m-6 -3v-2" }, null, -1),
    e("path", { d: "M3 3l18 18" }, null, -1)
  ]));
}
const m = { render: h };
export {
  m as default,
  h as render
};

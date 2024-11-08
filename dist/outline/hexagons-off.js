import { openBlock as e, createElementBlock as o, createStaticVNode as h } from "vue";
const l = {
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
function n(r, t) {
  return e(), o("svg", l, t[0] || (t[0] = [
    h('<path d="M4 18v-5l4 -2l4 2v5l-4 2z"></path><path d="M8 11v-3m1.332 -2.666l2.668 -1.334l4 2v5"></path><path d="M12 13l.661 -.331"></path><path d="M15.345 11.328l.655 -.328l4 2v3m-1.334 2.667l-2.666 1.333l-4 -2"></path><path d="M3 3l18 18"></path>', 5)
  ]));
}
const a = { render: n };
export {
  a as default,
  n as render
};

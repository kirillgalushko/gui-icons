import { openBlock as e, createElementBlock as o, createStaticVNode as h } from "vue";
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
  style: { width: "1em", "min-width": "1em", height: "1em", "min-height": "1em", fill: "currentColor" }
};
function n(i, t) {
  return e(), o("svg", r, t[0] || (t[0] = [
    h('<path d="M3 6h18"></path><path d="M4 6v13"></path><path d="M20 19v-13"></path><path d="M4 10h16"></path><path d="M15 6v8a2 2 0 0 0 2 2h3"></path>', 5)
  ]));
}
const a = { render: n };
export {
  a as default,
  n as render
};

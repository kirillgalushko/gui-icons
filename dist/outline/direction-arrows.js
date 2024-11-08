import { openBlock as e, createElementBlock as o, createStaticVNode as r } from "vue";
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
  style: { width: "1em", "min-width": "1em", height: "1em", "min-height": "1em", fill: "currentColor" }
};
function n(h, t) {
  return e(), o("svg", l, t[0] || (t[0] = [
    r('<path d="M3 12a9 9 0 1 0 18 0a9 9 0 0 0 -18 0"></path><path d="M8 11l-1 1l1 1"></path><path d="M11 8l1 -1l1 1"></path><path d="M16 11l1 1l-1 1"></path><path d="M11 16l1 1l1 -1"></path>', 5)
  ]));
}
const a = { render: n };
export {
  a as default,
  n as render
};

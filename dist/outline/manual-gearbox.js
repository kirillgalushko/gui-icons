import { openBlock as a, createElementBlock as e, createStaticVNode as h } from "vue";
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
function r(n, t) {
  return a(), e("svg", o, t[0] || (t[0] = [
    h('<path d="M5 6m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0"></path><path d="M12 6m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0"></path><path d="M19 6m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0"></path><path d="M5 18m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0"></path><path d="M12 18m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0"></path><path d="M5 8l0 8"></path><path d="M12 8l0 8"></path><path d="M19 8v2a2 2 0 0 1 -2 2h-12"></path>', 8)
  ]));
}
const d = { render: r };
export {
  d as default,
  r as render
};

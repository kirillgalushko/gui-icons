import { openBlock as e, createElementBlock as r, createStaticVNode as h } from "vue";
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
function a(n, t) {
  return e(), r("svg", o, t[0] || (t[0] = [
    h('<path d="M12 5m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0"></path><path d="M5 19m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0"></path><path d="M17.585 17.587a2 2 0 0 0 2.813 2.843"></path><path d="M6.5 17.5l5.5 -4.5l5.5 4.5"></path><path d="M12 7v1m0 4v1"></path><path d="M3 3l18 18"></path>', 6)
  ]));
}
const d = { render: a };
export {
  d as default,
  a as render
};

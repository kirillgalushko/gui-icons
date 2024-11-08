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
  style: { width: "1em", "min-width": "1em", height: "1em", "min-height": "1em" }
};
function a(n, t) {
  return e(), o("svg", r, t[0] || (t[0] = [
    h('<path d="M5 5v16"></path><path d="M19 5v9"></path><path d="M7.641 3.645a5 5 0 0 1 4.359 1.355a5 5 0 0 0 7 0"></path><path d="M5 14a5 5 0 0 1 7 0a4.984 4.984 0 0 0 3.437 1.429m3.019 -.966c.19 -.14 .371 -.294 .544 -.463"></path><path d="M3 3l18 18"></path>', 5)
  ]));
}
const d = { render: a };
export {
  d as default,
  a as render
};

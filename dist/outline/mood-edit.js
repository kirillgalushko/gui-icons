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
function n(i, t) {
  return e(), o("svg", r, t[0] || (t[0] = [
    h('<path d="M20.955 11.104a9 9 0 1 0 -9.895 9.847"></path><path d="M9 10h.01"></path><path d="M15 10h.01"></path><path d="M9.5 15c.658 .672 1.56 1 2.5 1c.126 0 .251 -.006 .376 -.018"></path><path d="M18.42 15.61a2.1 2.1 0 0 1 2.97 2.97l-3.39 3.42h-3v-3l3.42 -3.39z"></path>', 5)
  ]));
}
const a = { render: n };
export {
  a as default,
  n as render
};

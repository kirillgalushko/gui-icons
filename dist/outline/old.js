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
function h(n, t) {
  return e(), o("svg", l, t[0] || (t[0] = [
    r('<path d="M11 21l-1 -4l-2 -3v-6"></path><path d="M5 14l-1 -3l4 -3l3 2l3 .5"></path><path d="M8 4m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0"></path><path d="M7 17l-2 4"></path><path d="M16 21v-8.5a1.5 1.5 0 0 1 3 0v.5"></path>', 5)
  ]));
}
const a = { render: h };
export {
  a as default,
  h as render
};
import { openBlock as e, createElementBlock as h, createStaticVNode as l } from "vue";
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
function r(a, t) {
  return e(), h("svg", o, t[0] || (t[0] = [
    l('<path d="M16 4l4 0l0 4"></path><path d="M14 10l6 -6"></path><path d="M8 20l-4 0l0 -4"></path><path d="M4 20l6 -6"></path><path d="M16 20l4 0l0 -4"></path><path d="M14 14l6 6"></path><path d="M8 4l-4 0l0 4"></path><path d="M4 4l6 6"></path>', 8)
  ]));
}
const n = { render: r };
export {
  n as default,
  r as render
};

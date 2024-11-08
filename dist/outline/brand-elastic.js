import { openBlock as e, createElementBlock as l, createStaticVNode as o } from "vue";
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
function a(h, t) {
  return e(), l("svg", r, t[0] || (t[0] = [
    o('<path d="M14 2a5 5 0 0 1 5 5c0 .712 -.232 1.387 -.5 2c1.894 .042 3.5 1.595 3.5 3.5c0 1.869 -1.656 3.4 -3.5 3.5c.333 .625 .5 1.125 .5 1.5a2.5 2.5 0 0 1 -2.5 2.5c-.787 0 -1.542 -.432 -2 -1c-.786 1.73 -2.476 3 -4.5 3a5 5 0 0 1 -4.583 -7a3.5 3.5 0 0 1 -.11 -6.992l.195 0a2.5 2.5 0 0 1 2 -4c.787 0 1.542 .432 2 1c.786 -1.73 2.476 -3 4.5 -3z"></path><path d="M8.5 9l-3 -1"></path><path d="M9.5 5l-1 4l1 2l5 2l4 -4"></path><path d="M18.499 16l-3 -.5l-1 -2.5"></path><path d="M14.5 19l1 -3.5"></path><path d="M5.417 15l4.083 -4"></path>', 6)
  ]));
}
const i = { render: a };
export {
  i as default,
  a as render
};

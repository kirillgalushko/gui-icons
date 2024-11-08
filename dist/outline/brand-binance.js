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
function n(h, t) {
  return e(), l("svg", r, t[0] || (t[0] = [
    o('<path d="M6 8l2 2l4 -4l4 4l2 -2l-6 -6z"></path><path d="M6 16l2 -2l4 4l3.5 -3.5l2 2l-5.5 5.5z"></path><path d="M20 10l2 2l-2 2l-2 -2z"></path><path d="M4 10l2 2l-2 2l-2 -2z"></path><path d="M12 10l2 2l-2 2l-2 -2z"></path>', 5)
  ]));
}
const a = { render: n };
export {
  a as default,
  n as render
};
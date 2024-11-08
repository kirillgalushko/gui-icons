import { openBlock as h, createElementBlock as e, createStaticVNode as o } from "vue";
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
  return h(), e("svg", r, t[0] || (t[0] = [
    o('<path d="M5 2h5v4h-5z"></path><path d="M15 10h5v4h-5z"></path><path d="M5 18h5v4h-5z"></path><path d="M5 10h5v4h-5z"></path><path d="M10 12h5"></path><path d="M7.5 6v4"></path><path d="M7.5 14v4"></path>', 7)
  ]));
}
const d = { render: a };
export {
  d as default,
  a as render
};

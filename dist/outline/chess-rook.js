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
  style: { width: "1em", "min-width": "1em", height: "1em", "min-height": "1em", fill: "currentColor" }
};
function n(l, t) {
  return e(), o("svg", r, t[0] || (t[0] = [
    h('<path d="M8 16l-1.447 .724a1 1 0 0 0 -.553 .894v2.382h12v-2.382a1 1 0 0 0 -.553 -.894l-1.447 -.724h-8z"></path><path d="M8 16l1 -9h6l1 9"></path><path d="M6 4l.5 3h11l.5 -3"></path><path d="M10 4v3"></path><path d="M14 4v3"></path>', 5)
  ]));
}
const a = { render: n };
export {
  a as default,
  n as render
};

import { openBlock as e, createElementBlock as h, createStaticVNode as o } from "vue";
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
function n(i, t) {
  return e(), h("svg", r, t[0] || (t[0] = [
    o('<path d="M12 12h-8v4h12m4 0v-4h-4"></path><path d="M6 16v4h4v-4"></path><path d="M10 12v-2m0 -4l-2 -2m-2 2v6"></path><path d="M14 16v4h4v-2"></path><path d="M18 12v-6l-2 -2l-2 2v4"></path><path d="M3 3l18 18"></path>', 6)
  ]));
}
const a = { render: n };
export {
  a as default,
  n as render
};

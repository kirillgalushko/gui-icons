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
function a(n, t) {
  return e(), h("svg", r, t[0] || (t[0] = [
    o('<path d="M12 3v5m0 4v8"></path><path d="M5.641 5.631a9 9 0 1 0 12.719 12.738m1.68 -2.318a9 9 0 0 0 -12.074 -12.098"></path><path d="M16 12h5"></path><path d="M13 9h7"></path><path d="M12 6h6"></path><path d="M12 18h6"></path><path d="M12 15h3m4 0h1"></path><path d="M3 3l18 18"></path>', 8)
  ]));
}
const d = { render: a };
export {
  d as default,
  a as render
};

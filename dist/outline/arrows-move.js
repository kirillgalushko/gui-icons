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
function a(l, t) {
  return e(), h("svg", r, t[0] || (t[0] = [
    o('<path d="M18 9l3 3l-3 3"></path><path d="M15 12h6"></path><path d="M6 9l-3 3l3 3"></path><path d="M3 12h6"></path><path d="M9 18l3 3l3 -3"></path><path d="M12 15v6"></path><path d="M15 6l-3 -3l-3 3"></path><path d="M12 3v6"></path>', 8)
  ]));
}
const p = { render: a };
export {
  p as default,
  a as render
};

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
  style: { width: "1em", "min-width": "1em", height: "1em", "min-height": "1em" }
};
function a(n, t) {
  return e(), h("svg", r, t[0] || (t[0] = [
    o('<path d="M19 5v14a2 2 0 0 1 -2 2h-10a2 2 0 0 1 -2 -2v-14a2 2 0 0 1 2 -2h10a2 2 0 0 1 2 2"></path><path d="M8 6h.01"></path><path d="M16 18h.01"></path><path d="M9 9v6"></path><path d="M12 13c0 1.105 .672 2 1.5 2s1.5 -.895 1.5 -2v-2c0 -1.105 -.672 -2 -1.5 -2s-1.5 .895 -1.5 2z"></path>', 5)
  ]));
}
const d = { render: a };
export {
  d as default,
  a as render
};

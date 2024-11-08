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
    o('<path d="M12 3v7l3 -3"></path><path d="M9 7l3 3"></path><path d="M12 21v-7l3 3"></path><path d="M9 17l3 -3"></path><path d="M18 9h1a2 2 0 0 1 2 2v2a2 2 0 0 1 -2 2h-1"></path><path d="M6 9h-1a2 2 0 0 0 -2 2v2a2 2 0 0 0 2 2h1"></path>', 6)
  ]));
}
const l = { render: a };
export {
  l as default,
  a as render
};

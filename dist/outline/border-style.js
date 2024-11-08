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
    o('<path d="M4 20v-14a2 2 0 0 1 2 -2h14"></path><path d="M20 8v.01"></path><path d="M20 12v.01"></path><path d="M20 16v.01"></path><path d="M8 20v.01"></path><path d="M12 20v.01"></path><path d="M16 20v.01"></path><path d="M20 20v.01"></path>', 8)
  ]));
}
const d = { render: a };
export {
  d as default,
  a as render
};

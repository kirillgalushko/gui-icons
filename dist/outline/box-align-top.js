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
function n(a, t) {
  return e(), h("svg", r, t[0] || (t[0] = [
    o('<path d="M4 10.005h16v-5a1 1 0 0 0 -1 -1h-14a1 1 0 0 0 -1 1v5z"></path><path d="M4 15.005v-.01"></path><path d="M4 20.005v-.01"></path><path d="M9 20.005v-.01"></path><path d="M15 20.005v-.01"></path><path d="M20 20.005v-.01"></path><path d="M20 15.005v-.01"></path>', 7)
  ]));
}
const p = { render: n };
export {
  p as default,
  n as render
};

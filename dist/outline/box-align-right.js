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
  style: { width: "1em", "min-width": "1em", height: "1em", "min-height": "1em", fill: "currentColor" }
};
function n(a, t) {
  return h(), e("svg", r, t[0] || (t[0] = [
    o('<path d="M13.998 20.003v-16h5a1 1 0 0 1 1 1v14a1 1 0 0 1 -1 1h-5z"></path><path d="M8.998 20.003h.01"></path><path d="M3.997 20.003h.011"></path><path d="M3.997 15.002h.011"></path><path d="M3.997 9.002h.011"></path><path d="M3.997 4.002h.011"></path><path d="M8.998 4.002h.01"></path>', 7)
  ]));
}
const p = { render: n };
export {
  p as default,
  n as render
};

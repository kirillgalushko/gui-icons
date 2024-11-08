import { openBlock as e, createElementBlock as h, createStaticVNode as o } from "vue";
const a = {
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
function n(r, t) {
  return e(), h("svg", a, t[0] || (t[0] = [
    o('<path d="M15 11a2 2 0 0 1 2 2m3 3v-7l-3 -3"></path><path d="M4 20v-14c0 -.548 .22 -1.044 .577 -1.405m3.423 -.595h4a2 2 0 0 1 2 2v4m0 4v6"></path><path d="M3 20h12"></path><path d="M18 7v1a1 1 0 0 0 1 1h1"></path><path d="M4 11h7"></path><path d="M3 3l18 18"></path>', 6)
  ]));
}
const d = { render: n };
export {
  d as default,
  n as render
};

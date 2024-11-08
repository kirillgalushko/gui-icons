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
  style: { width: "1em", "min-width": "1em", height: "1em", "min-height": "1em" }
};
function n(a, t) {
  return h(), e("svg", r, t[0] || (t[0] = [
    o('<path d="M6 15h-3v-4h3"></path><path d="M15 15h-3v-4h3"></path><path d="M9 15v-4"></path><path d="M15 11v7h-3"></path><path d="M6 7v8"></path><path d="M21 15h-3v-4h3"></path><path d="M21 11v7h-3"></path>', 7)
  ]));
}
const i = { render: n };
export {
  i as default,
  n as render
};

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
    o('<path d="M3 5h2m4 0h12"></path><path d="M3 19h16"></path><path d="M4 9l2 6h1l2 -6"></path><path d="M12 12v3"></path><path d="M16 12v-3h2a2 2 0 1 1 0 4h-1"></path><path d="M3 3l18 18"></path>', 6)
  ]));
}
const p = { render: n };
export {
  p as default,
  n as render
};

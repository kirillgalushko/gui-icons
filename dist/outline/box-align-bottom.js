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
    o('<path d="M4 14h16v5a1 1 0 0 1 -1 1h-14a1 1 0 0 1 -1 -1v-5z"></path><path d="M4 9v.01"></path><path d="M4 4v.01"></path><path d="M9 4v.01"></path><path d="M15 4v.01"></path><path d="M20 4v.01"></path><path d="M20 9v.01"></path>', 7)
  ]));
}
const p = { render: n };
export {
  p as default,
  n as render
};

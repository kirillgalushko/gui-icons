import { openBlock as e, createElementBlock as o, createStaticVNode as h } from "vue";
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
  return e(), o("svg", r, t[0] || (t[0] = [
    h('<path d="M4 19a2 2 0 1 0 4 0a2 2 0 0 0 -4 0"></path><path d="M12 17h-6v-14h-2"></path><path d="M6 5l14 1l-.857 5.998m-3.643 1.002h-9.5"></path><path d="M19 19m-3 0a3 3 0 1 0 6 0a3 3 0 1 0 -6 0"></path><path d="M17 21l4 -4"></path>', 5)
  ]));
}
const l = { render: n };
export {
  l as default,
  n as render
};
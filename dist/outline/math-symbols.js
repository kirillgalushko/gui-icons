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
  style: { width: "1em", "min-width": "1em", height: "1em", "min-height": "1em", fill: "currentColor" }
};
function l(r, t) {
  return e(), h("svg", a, t[0] || (t[0] = [
    o('<path d="M3 12l18 0"></path><path d="M12 3l0 18"></path><path d="M16.5 4.5l3 3"></path><path d="M19.5 4.5l-3 3"></path><path d="M6 4l0 4"></path><path d="M4 6l4 0"></path><path d="M18 16l.01 0"></path><path d="M18 20l.01 0"></path><path d="M4 18l4 0"></path>', 9)
  ]));
}
const n = { render: l };
export {
  n as default,
  l as render
};

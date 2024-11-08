import { openBlock as e, createElementBlock as l, createStaticVNode as o } from "vue";
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
function h(n, t) {
  return e(), l("svg", r, t[0] || (t[0] = [
    o('<path d="M3 15l9 6l9 -6l-9 -6l-9 6"></path><path d="M3 9l9 6l9 -6l-9 -6l-9 6"></path><path d="M3 9l0 6"></path><path d="M21 9l0 6"></path><path d="M12 3l0 6"></path><path d="M12 15l0 6"></path>', 6)
  ]));
}
const i = { render: h };
export {
  i as default,
  h as render
};

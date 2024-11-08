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
  style: { width: "1em", "min-width": "1em", height: "1em", "min-height": "1em" }
};
function a(n, t) {
  return e(), h("svg", r, t[0] || (t[0] = [
    o('<path d="M12 5m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0"></path><path d="M5 19m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0"></path><path d="M19 19m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0"></path><path d="M6.5 17.5l5.5 -4.5l5.5 4.5"></path><path d="M12 7l0 6"></path>', 5)
  ]));
}
const d = { render: a };
export {
  d as default,
  a as render
};

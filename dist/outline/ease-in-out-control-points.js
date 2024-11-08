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
    o('<path d="M17 20a2 2 0 1 0 4 0a2 2 0 0 0 -4 0z"></path><path d="M17 20h-2"></path><path d="M7 4a2 2 0 1 1 -4 0a2 2 0 0 1 4 0z"></path><path d="M7 4h2"></path><path d="M14 4h-2"></path><path d="M12 20h-2"></path><path d="M3 20c8 0 10 -16 18 -16"></path>', 7)
  ]));
}
const p = { render: n };
export {
  p as default,
  n as render
};

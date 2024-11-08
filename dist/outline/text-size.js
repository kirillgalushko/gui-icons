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
function n(i, t) {
  return e(), h("svg", r, t[0] || (t[0] = [
    o('<path d="M3 7v-2h13v2"></path><path d="M10 5v14"></path><path d="M12 19h-4"></path><path d="M15 13v-1h6v1"></path><path d="M18 12v7"></path><path d="M17 19h2"></path>', 6)
  ]));
}
const d = { render: n };
export {
  d as default,
  n as render
};

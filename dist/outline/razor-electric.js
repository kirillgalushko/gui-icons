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
function n(a, t) {
  return e(), h("svg", r, t[0] || (t[0] = [
    o('<path d="M8 3v2"></path><path d="M12 3v2"></path><path d="M16 3v2"></path><path d="M9 12v6a3 3 0 0 0 6 0v-6h-6z"></path><path d="M8 5h8l-1 4h-6z"></path><path d="M12 17v1"></path>', 6)
  ]));
}
const d = { render: n };
export {
  d as default,
  n as render
};

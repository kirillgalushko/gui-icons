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
    o('<path d="M19 8h-14"></path><path d="M5 12h7"></path><path d="M12 16h-7"></path><path d="M16 14l4 4"></path><path d="M20 14l-4 4"></path>', 5)
  ]));
}
const d = { render: n };
export {
  d as default,
  n as render
};

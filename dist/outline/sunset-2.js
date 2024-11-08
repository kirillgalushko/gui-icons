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
function r(p, t) {
  return e(), h("svg", a, t[0] || (t[0] = [
    o('<path d="M3 13h1"></path><path d="M20 13h1"></path><path d="M5.6 6.6l.7 .7"></path><path d="M18.4 6.6l-.7 .7"></path><path d="M8 13a4 4 0 1 1 8 0"></path><path d="M3 17h18"></path><path d="M7 20h5"></path><path d="M16 20h1"></path><path d="M12 5v-1"></path>', 9)
  ]));
}
const d = { render: r };
export {
  d as default,
  r as render
};

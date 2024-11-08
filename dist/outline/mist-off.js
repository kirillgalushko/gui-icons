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
  style: { width: "1em", "min-width": "1em", height: "1em", "min-height": "1em", fill: "currentColor" }
};
function n(i, t) {
  return e(), h("svg", r, t[0] || (t[0] = [
    o('<path d="M12 5h9"></path><path d="M3 10h7"></path><path d="M18 10h1"></path><path d="M5 15h5"></path><path d="M14 15h1m4 0h2"></path><path d="M3 20h9m4 0h3"></path><path d="M3 3l18 18"></path>', 7)
  ]));
}
const p = { render: n };
export {
  p as default,
  n as render
};

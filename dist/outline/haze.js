import { openBlock as e, createElementBlock as h, createStaticVNode as a } from "vue";
const o = {
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
function p(r, t) {
  return e(), h("svg", o, t[0] || (t[0] = [
    a('<path d="M3 12h1"></path><path d="M12 3v1"></path><path d="M20 12h1"></path><path d="M5.6 5.6l.7 .7"></path><path d="M18.4 5.6l-.7 .7"></path><path d="M8 12a4 4 0 1 1 8 0"></path><path d="M3 16h18"></path><path d="M3 20h18"></path>', 8)
  ]));
}
const d = { render: p };
export {
  d as default,
  p as render
};
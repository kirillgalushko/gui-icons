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
    a('<path d="M12 12m-9 0a9 9 0 1 0 18 0a9 9 0 1 0 -18 0"></path><path d="M12 12m-3 0a3 3 0 1 0 6 0a3 3 0 1 0 -6 0"></path><path d="M3 12h6"></path><path d="M15 12h6"></path><path d="M13.6 9.4l3.4 -4.8"></path><path d="M10.4 14.6l-3.4 4.8"></path><path d="M7 4.6l3.4 4.8"></path><path d="M13.6 14.6l3.4 4.8"></path>', 8)
  ]));
}
const d = { render: p };
export {
  d as default,
  p as render
};

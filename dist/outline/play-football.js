import { openBlock as e, createElementBlock as o, createStaticVNode as l } from "vue";
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
function a(h, t) {
  return e(), o("svg", r, t[0] || (t[0] = [
    l('<path d="M11 4a1 1 0 1 0 2 0a1 1 0 0 0 -2 0"></path><path d="M3 17l5 1l.75 -1.5"></path><path d="M14 21v-4l-4 -3l1 -6"></path><path d="M6 12v-3l5 -1l3 3l3 1"></path><path d="M19.5 20a.5 .5 0 1 0 0 -1a.5 .5 0 0 0 0 1z" fill="currentColor"></path>', 5)
  ]));
}
const i = { render: a };
export {
  i as default,
  a as render
};

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
function a(n, t) {
  return e(), h("svg", r, t[0] || (t[0] = [
    o('<path d="M12 19m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0"></path><path d="M12 17v-11.5"></path><path d="M7 10v3l5 3"></path><path d="M12 14.5l5 -2v-2.5"></path><path d="M16 10h2v-2h-2z"></path><path d="M7 9m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0"></path><path d="M10 5.5h4l-2 -2.5z"></path>', 7)
  ]));
}
const p = { render: a };
export {
  p as default,
  a as render
};

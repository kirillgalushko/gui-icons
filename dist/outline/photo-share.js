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
    o('<path d="M15 8h.01"></path><path d="M12 21h-6a3 3 0 0 1 -3 -3v-12a3 3 0 0 1 3 -3h12a3 3 0 0 1 3 3v7"></path><path d="M3 16l5 -5c.928 -.893 2.072 -.893 3 0l3 3"></path><path d="M14 14l1 -1c.928 -.893 2.072 -.893 3 0"></path><path d="M16 22l5 -5"></path><path d="M21 21.5v-4.5h-4.5"></path>', 6)
  ]));
}
const l = { render: a };
export {
  l as default,
  a as render
};

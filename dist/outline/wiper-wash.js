import { openBlock as a, createElementBlock as e, createStaticVNode as h } from "vue";
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
  style: { width: "1em", "min-width": "1em", height: "1em", "min-height": "1em", fill: "currentColor" }
};
function r(p, t) {
  return a(), e("svg", o, t[0] || (t[0] = [
    h('<path d="M12 20m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0"></path><path d="M3 11l5.5 5.5a5 5 0 0 1 7 0l5.5 -5.5a12 12 0 0 0 -18 0"></path><path d="M12 20l0 -14"></path><path d="M4 6a4 4 0 0 1 .4 -1.8"></path><path d="M7 2.1a4 4 0 0 1 2 0"></path><path d="M12 6a4 4 0 0 0 -.4 -1.8"></path><path d="M12 6a4 4 0 0 1 .4 -1.8"></path><path d="M15 2.1a4 4 0 0 1 2 0"></path><path d="M20 6a4 4 0 0 0 -.4 -1.8"></path>', 9)
  ]));
}
const d = { render: r };
export {
  d as default,
  r as render
};

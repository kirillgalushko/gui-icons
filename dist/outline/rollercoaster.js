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
function a(n, t) {
  return e(), h("svg", r, t[0] || (t[0] = [
    o('<path d="M3 21a5.55 5.55 0 0 0 5.265 -3.795l.735 -2.205a8.775 8.775 0 0 1 8.325 -6h3.675"></path><path d="M20 9v12"></path><path d="M8 21v-3"></path><path d="M12 21v-10"></path><path d="M16 9.5v11.5"></path><path d="M15 3h5v3h-5z"></path><path d="M6 8l4 -3l2 2.5l-4 3l-1.8 -.5z"></path>', 7)
  ]));
}
const d = { render: a };
export {
  d as default,
  a as render
};

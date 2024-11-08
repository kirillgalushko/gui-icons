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
    o('<path d="M5.65 5.623a9 9 0 1 0 12.71 12.745m1.684 -2.328a9 9 0 0 0 -12.094 -12.08"></path><path d="M12 3v4"></path><path d="M12 21v-3"></path><path d="M3 12h4"></path><path d="M21 12h-3"></path><path d="M12 12v.01"></path><path d="M3 3l18 18"></path>', 7)
  ]));
}
const d = { render: a };
export {
  d as default,
  a as render
};

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
function n(a, t) {
  return e(), h("svg", r, t[0] || (t[0] = [
    o('<path d="M8 12a4 4 0 0 0 4 4m0 -8a4 4 0 0 0 -4 4"></path><path d="M3 12h1"></path><path d="M12 3v1"></path><path d="M12 20v1"></path><path d="M5.6 5.6l.7 .7"></path><path d="M6.3 17.7l-.7 .7"></path><path d="M20 7l-3 5h4l-3 5"></path>', 7)
  ]));
}
const l = { render: n };
export {
  l as default,
  n as render
};

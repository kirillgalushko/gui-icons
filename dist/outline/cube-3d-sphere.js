import { openBlock as h, createElementBlock as e, createStaticVNode as p } from "vue";
const a = {
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
function l(d, t) {
  return h(), e("svg", a, t[0] || (t[0] = [
    p('<path d="M6 17.6l-2 -1.1v-2.5"></path><path d="M4 10v-2.5l2 -1.1"></path><path d="M10 4.1l2 -1.1l2 1.1"></path><path d="M18 6.4l2 1.1v2.5"></path><path d="M20 14v2.5l-2 1.12"></path><path d="M14 19.9l-2 1.1l-2 -1.1"></path><path d="M12 12l2 -1.1"></path><path d="M18 8.6l2 -1.1"></path><path d="M12 12l0 2.5"></path><path d="M12 18.5l0 2.5"></path><path d="M12 12l-2 -1.12"></path><path d="M6 8.6l-2 -1.1"></path>', 12)
  ]));
}
const r = { render: l };
export {
  r as default,
  l as render
};

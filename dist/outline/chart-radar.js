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
function l(n, t) {
  return e(), h("svg", r, t[0] || (t[0] = [
    o('<path d="M12 3l9.5 7l-3.5 11h-12l-3.5 -11z"></path><path d="M12 7.5l5.5 4l-2.5 5.5h-6.5l-2 -5.5z"></path><path d="M2.5 10l9.5 3l9.5 -3"></path><path d="M12 3v10l6 8"></path><path d="M6 21l6 -8"></path>', 5)
  ]));
}
const i = { render: l };
export {
  i as default,
  l as render
};

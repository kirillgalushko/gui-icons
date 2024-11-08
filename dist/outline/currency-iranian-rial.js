import { openBlock as e, createElementBlock as h, createStaticVNode as r } from "vue";
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
function n(o, t) {
  return e(), h("svg", a, t[0] || (t[0] = [
    r('<path d="M9 4v9a2 2 0 0 1 -2 2h-1a3 3 0 0 1 -3 -3v-1"></path><path d="M12 5v8a1 1 0 0 0 1 1h1a2 2 0 0 0 2 -2v-1"></path><path d="M21 14v1.096a5 5 0 0 1 -3.787 4.85l-.213 .054"></path><path d="M11 18h.01"></path><path d="M14 18h.01"></path>', 5)
  ]));
}
const d = { render: n };
export {
  d as default,
  n as render
};

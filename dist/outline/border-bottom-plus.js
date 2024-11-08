import { openBlock as h, createElementBlock as a, createStaticVNode as e } from "vue";
const p = {
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
function d(o, t) {
  return h(), a("svg", p, t[0] || (t[0] = [
    e('<path d="M4 20h16"></path><path d="M4 16v-.01"></path><path d="M20 16v-.01"></path><path d="M4 12v-.01"></path><path d="M20 12v-.01"></path><path d="M4 8v-.01"></path><path d="M20 8v-.01"></path><path d="M4 4v-.01"></path><path d="M8 4v-.01"></path><path d="M12 4v-.01"></path><path d="M16 4v-.01"></path><path d="M20 4v-.01"></path><path d="M15 12h-6"></path><path d="M12 9v6"></path>', 14)
  ]));
}
const n = { render: d };
export {
  n as default,
  d as render
};

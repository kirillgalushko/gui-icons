import { openBlock as e, createElementBlock as h, createStaticVNode as a } from "vue";
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
  style: { width: "1em", "min-width": "1em", height: "1em", "min-height": "1em" }
};
function n(p, t) {
  return e(), h("svg", o, t[0] || (t[0] = [
    a('<path d="M20 3h-2a2 2 0 0 0 -2 2v14a2 2 0 0 0 2 2h2a2 2 0 0 0 2 -2v-14a2 2 0 0 0 -2 -2z"></path><path d="M16 4h-11a3 3 0 0 0 -3 3v10a3 3 0 0 0 3 3h11"></path><path d="M12 8h-6v3h6z"></path><path d="M12 14v.01"></path><path d="M9 14v.01"></path><path d="M6 14v.01"></path><path d="M12 17v.01"></path><path d="M9 17v.01"></path><path d="M6 17v.01"></path>', 9)
  ]));
}
const r = { render: n };
export {
  r as default,
  n as render
};

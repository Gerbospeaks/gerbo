import { __esmMin as e } from "./rolldown-runtime.wPLyQg-T.mjs";
import {
  Y as t,
  ae as n,
  init_jsx_runtime as r,
  init_npm_react_18_2 as i,
  p as a,
  pe as o,
  re as s,
  se as c,
  u as l,
  x as u,
} from "./react.Cd8yx0tA.mjs";
import {
  LayoutGroup as d,
  MotionConfigContext as f,
  init_framer_motion_5EXT2AMG as p,
  motion as m,
} from "./motion.BvMEYU-E.mjs";
import {
  ControlType as h,
  Instance as g,
  RichText as _,
  addFonts as v,
  addPropertyControls as y,
  cx as b,
  getFontsFromSharedStyle as x,
  init_framer_MRKGI23E as S,
  useComponentViewport as C,
  useLocaleInfo as w,
  useVariantState as T,
  withCSS as E,
} from "./framer.DERDik75.mjs";
import {
  className$1 as D,
  css$1 as O,
  fonts$1 as k,
  init_cH8AiB6P_ as A,
} from "./UMunwn2ac.C0Obwu4t.mjs";
import { Icon as j, init_Xx_sbLkzD as M } from "./Xx_sbLkzD.sjj4YZuO.mjs";
import {
  className$1 as N,
  css$1 as P,
  fonts$1 as F,
  init_pdnK4tFIz as I,
} from "./Z4rzRSIez.B9wmqB7A.mjs";
function L(e, ...t) {
  let n = {};
  return t?.forEach((t) => t && Object.assign(n, e[t])), n;
}
var R,
  z,
  B,
  V,
  H,
  U,
  W,
  G,
  K,
  q,
  J,
  Y,
  X = e(() => {
    r(),
      S(),
      p(),
      i(),
      M(),
      A(),
      I(),
      (R = [`wzIzdQABf`, `Yc883RX6d`, `hQ4t4lw2S`]),
      (z = `framer-4EUxt`),
      (B = {
        hQ4t4lw2S: `framer-v-6yigvk`,
        wzIzdQABf: `framer-v-13qpo4o`,
        Yc883RX6d: `framer-v-1vrol3m`,
      }),
      (V = { bounce: 0.2, delay: 0, duration: 0.4, type: `spring` }),
      (H = ({ value: e, children: t }) => {
        let n = s(f),
          r = e ?? n.transition,
          i = c(() => ({ ...n, transition: r }), [JSON.stringify(r)]);
        return a(f.Provider, { value: i, children: t });
      }),
      (U = m.create(u)),
      (W = {
        "service heading": `hQ4t4lw2S`,
        "Variant 1": `wzIzdQABf`,
        "Variant 2": `Yc883RX6d`,
      }),
      (G = ({ height: e, icon: t, id: n, title: r, width: i, ...a }) => ({
        ...a,
        auWbiJpKe: t ?? a.auWbiJpKe ?? j,
        NMnyt2y6k: r ?? a.NMnyt2y6k ?? `Real-Time Insights`,
        variant: W[a.variant] ?? a.variant ?? `wzIzdQABf`,
      })),
      (K = (e, t) =>
        e.layoutDependency ? t.join(`-`) + e.layoutDependency : t.join(`-`)),
      (q = t(function (e, t) {
        let r = o(null),
          i = t ?? r,
          s = n(),
          { activeLocale: c, setLocale: f } = w();
        C();
        let {
            style: p,
            className: h,
            layoutId: v,
            variant: y,
            auWbiJpKe: x,
            NMnyt2y6k: S,
            ...E
          } = G(e),
          {
            baseVariant: O,
            classNames: k,
            clearLoadingGesture: A,
            gestureHandlers: j,
            gestureVariant: M,
            isLoading: P,
            setGestureState: F,
            setVariant: I,
            variants: W,
          } = T({
            cycleOrder: R,
            defaultVariant: `wzIzdQABf`,
            ref: i,
            variant: y,
            variantClassNames: B,
          }),
          q = K(e, W),
          J = [N, D],
          Y = b(z, ...J),
          X = () => O !== `hQ4t4lw2S`;
        return a(d, {
          id: v ?? s,
          children: a(U, {
            animate: W,
            initial: !1,
            children: a(H, {
              value: V,
              children: l(m.div, {
                ...E,
                ...j,
                className: b(Y, `framer-13qpo4o`, h, k),
                "data-framer-name": `Variant 1`,
                layoutDependency: q,
                layoutId: `wzIzdQABf`,
                ref: i,
                style: { ...p },
                ...L(
                  {
                    hQ4t4lw2S: { "data-framer-name": `service heading` },
                    Yc883RX6d: { "data-framer-name": `Variant 2` },
                  },
                  O,
                  M,
                ),
                children: [
                  X() &&
                    a(g, {
                      animated: !0,
                      className: `framer-q8wehq`,
                      Component: x,
                      layoutDependency: q,
                      layoutId: `EWcJlRUOH`,
                      style: {
                        "--1m6trwb": 0.2,
                        "--21h8s6": `var(--token-e4409358-08fe-4ba3-8dc3-7989b447f0b6, rgb(255, 215, 0))`,
                        "--pgex8v": 1.5,
                      },
                      variants: {
                        Yc883RX6d: {
                          "--1m6trwb": 0,
                          "--21h8s6": `var(--token-6396e7f2-0645-4f69-9a36-80e94f8ee015, rgb(14, 28, 41))`,
                        },
                      },
                    }),
                  a(_, {
                    __fromCanvasComponent: !0,
                    children: a(u, {
                      children: a(m.h4, {
                        className: `framer-styles-preset-8b8zds`,
                        "data-styles-preset": `pdnK4tFIz`,
                        children: `Real-Time Insights`,
                      }),
                    }),
                    className: `framer-1e77uz`,
                    fonts: [`Inter`],
                    layoutDependency: q,
                    layoutId: `VlOReWFck`,
                    style: {
                      "--framer-link-text-color": `rgb(0, 153, 255)`,
                      "--framer-link-text-decoration": `underline`,
                      opacity: 1,
                    },
                    text: S,
                    variants: {
                      hQ4t4lw2S: { opacity: 1 },
                      Yc883RX6d: { opacity: 0.8 },
                    },
                    verticalAlignment: `top`,
                    withExternalLayout: !0,
                    ...L(
                      {
                        Yc883RX6d: {
                          children: a(u, {
                            children: a(m.p, {
                              className: `framer-styles-preset-1khckfh`,
                              "data-styles-preset": `cH8AiB6P_`,
                              children: `Real-Time Insights`,
                            }),
                          }),
                        },
                      },
                      O,
                      M,
                    ),
                  }),
                ],
              }),
            }),
          }),
        });
      })),
      (J = [
        `@supports (aspect-ratio: 1) { body { --framer-aspect-ratio-supported: auto; } }`,
        `.framer-4EUxt.framer-ehl83r, .framer-4EUxt .framer-ehl83r { display: block; }`,
        `.framer-4EUxt.framer-13qpo4o { align-content: center; align-items: center; display: flex; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: flex-start; overflow: hidden; padding: 0px; position: relative; width: min-content; }`,
        `.framer-4EUxt .framer-q8wehq { flex: none; height: var(--framer-aspect-ratio-supported, 32px); position: relative; width: 32px; }`,
        `.framer-4EUxt .framer-1e77uz { flex: none; height: auto; position: relative; white-space: pre-wrap; width: 213px; word-break: break-word; word-wrap: break-word; }`,
        ...P,
        ...O,
      ]),
      (Y = E(q, J, `framer-4EUxt`)),
      (Y.displayName = `icon & text`),
      (Y.defaultProps = { height: 36, width: 255 }),
      y(Y, {
        variant: {
          options: [`wzIzdQABf`, `Yc883RX6d`, `hQ4t4lw2S`],
          optionTitles: [`Variant 1`, `Variant 2`, `service heading`],
          title: `Variant`,
          type: h.Enum,
        },
        auWbiJpKe: {
          defaultValue: {
            identifier: `module:oMiuMYAdxzz5yk7pBqrm/FToqm3dwiHuJofBRASRI/Xx_sbLkzD.js:default`,
            moduleId: `oMiuMYAdxzz5yk7pBqrm`,
          },
          setModuleId: `omX0gWFPqDwhaiWwf6ab`,
          title: `Icon`,
          type: h.VectorSetItem,
        },
        NMnyt2y6k: {
          defaultValue: `Real-Time Insights`,
          displayTextArea: !1,
          title: `title`,
          type: h.String,
        },
      }),
      v(
        Y,
        [
          {
            explicitInter: !0,
            fonts: [
              {
                family: `Inter`,
                source: `framer`,
                style: `normal`,
                unicodeRange: `U+0460-052F, U+1C80-1C88, U+20B4, U+2DE0-2DFF, U+A640-A69F, U+FE2E-FE2F`,
                url: `/assets/5vvr9Vy74if2I6bQbJvbw7SY1pQ.woff2`,
                weight: `400`,
              },
              {
                family: `Inter`,
                source: `framer`,
                style: `normal`,
                unicodeRange: `U+0301, U+0400-045F, U+0490-0491, U+04B0-04B1, U+2116`,
                url: `/assets/EOr0mi4hNtlgWNn9if640EZzXCo.woff2`,
                weight: `400`,
              },
              {
                family: `Inter`,
                source: `framer`,
                style: `normal`,
                unicodeRange: `U+1F00-1FFF`,
                url: `/assets/Y9k9QrlZAqio88Klkmbd8VoMQc.woff2`,
                weight: `400`,
              },
              {
                family: `Inter`,
                source: `framer`,
                style: `normal`,
                unicodeRange: `U+0370-03FF`,
                url: `/assets/OYrD2tBIBPvoJXiIHnLoOXnY9M.woff2`,
                weight: `400`,
              },
              {
                family: `Inter`,
                source: `framer`,
                style: `normal`,
                unicodeRange: `U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF`,
                url: `/assets/JeYwfuaPfZHQhEG8U5gtPDZ7WQ.woff2`,
                weight: `400`,
              },
              {
                family: `Inter`,
                source: `framer`,
                style: `normal`,
                unicodeRange: `U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD`,
                url: `/assets/vQyevYAyHtARFwPqUzQGpnDs.woff2`,
                weight: `400`,
              },
              {
                family: `Inter`,
                source: `framer`,
                style: `normal`,
                unicodeRange: `U+0102-0103, U+0110-0111, U+0128-0129, U+0168-0169, U+01A0-01A1, U+01AF-01B0, U+1EA0-1EF9, U+20AB`,
                url: `/assets/b6Y37FthZeALduNqHicBT6FutY.woff2`,
                weight: `400`,
              },
            ],
          },
          ...x(F),
          ...x(k),
        ],
        { supportsExplicitInterCodegen: !0 },
      );
  });
export { Y as FramerlkRgZeUOs, X as init_lkRgZeUOs };
//# sourceMappingURL=lkRgZeUOs.CE8qq1oV.mjs.map

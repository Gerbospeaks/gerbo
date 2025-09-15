import { __esmMin as e } from "./rolldown-runtime.wPLyQg-T.mjs";
import {
  Y as t,
  ae as ee,
  init_jsx_runtime as n,
  init_npm_react_18_2 as r,
  p as i,
  pe as a,
  se as o,
  u as s,
  x as c,
} from "./react.Cd8yx0tA.mjs";
import {
  LayoutGroup as te,
  init_framer_motion_5EXT2AMG as l,
  motion as ne,
} from "./motion.BvMEYU-E.mjs";
import {
  ComponentViewportProvider as u,
  Container as d,
  GeneratedComponentContext as re,
  PropertyOverrides2 as f,
  RichText as p,
  SVG as m,
  addFonts as h,
  cx as g,
  getFonts as _,
  getFontsFromSharedStyle as v,
  init_framer_MRKGI23E as y,
  useComponentViewport as ie,
  useCustomCursors as ae,
  useHydratedBreakpointVariants as oe,
  useIsOnFramerCanvas as b,
  useLocaleInfo as se,
  useMetadata as ce,
  useRouteElementId as x,
  withCSS as S,
  withVariantAppearEffect as C,
} from "./framer.DERDik75.mjs";
import {
  FramerYwA1diXfH as w,
  FramerlicEmhkfK as T,
  init_YwA1diXfH as E,
  init_licEmhkfK as D,
} from "./shared-lib.BgYLzAGg.mjs";
import {
  SmoothScroll as O,
  init_SmoothScroll_Prod as le,
} from "./SmoothScroll_Prod.BFCicXDY.mjs";
import {
  className as ue,
  className$1 as de,
  css as k,
  css$1 as A,
  fonts as j,
  fonts$1 as M,
  init_Z4rzRSIez as N,
  init_pdnK4tFIz as P,
} from "./Z4rzRSIez.B9wmqB7A.mjs";
import {
  className as fe,
  css as pe,
  fonts as me,
  init_gTtZK0Q4d as F,
} from "./gTtZK0Q4d.BgsrqHgO.mjs";
import {
  className as I,
  css as L,
  fonts as R,
  init_ECTXUYyOQ as he,
} from "./ECTXUYyOQ.G2rndKpB.mjs";
import { init_I7UNmcwR8 as ge, metadata as _e } from "./I7UNmcwR8.BIJgSRoW.mjs";
var z,
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
  X,
  Z,
  Q,
  $,
  ve = e(() => {
    n(),
      y(),
      l(),
      r(),
      le(),
      D(),
      E(),
      he(),
      F(),
      P(),
      N(),
      ge(),
      (z = _(w)),
      (B = C(w)),
      (V = _(T)),
      (H = _(O)),
      (U = {
        bVr834Nr_: `(max-width: 809px)`,
        w4mrvUjxH: `(min-width: 1200px)`,
        wQW0TXPmh: `(min-width: 810px) and (max-width: 1199px)`,
      }),
      (W = `framer-EGSwy`),
      (G = {
        bVr834Nr_: `framer-v-6bkm1x`,
        w4mrvUjxH: `framer-v-tuemzh`,
        wQW0TXPmh: `framer-v-9hjtts`,
      }),
      (K = (e, t) => `translateX(-50%) ${t}`),
      (q = ({ value: e }) => {
        let t = b();
        return t
          ? null
          : i(`style`, {
              dangerouslySetInnerHTML: { __html: e },
              "data-framer-html-style": ``,
            });
      }),
      (J = { Desktop: `w4mrvUjxH`, Phone: `bVr834Nr_`, Tablet: `wQW0TXPmh` }),
      (Y = ({ height: e, id: t, width: ee, ...n }) => ({
        ...n,
        variant: J[n.variant] ?? n.variant ?? `w4mrvUjxH`,
      })),
      (X = t(function (e, t) {
        let n = a(null),
          r = t ?? n,
          l = ee(),
          { activeLocale: h, setLocale: _ } = se(),
          v = ie(),
          { style: y, className: b, layoutId: S, variant: C, ...w } = Y(e),
          E = o(() => _e(void 0, h), [void 0, h]);
        ce(E);
        let [D, le] = oe(C, U, !1),
          k = [ue, de, I, fe],
          A = g(W, ...k),
          j = a(null),
          M = x(`diFu9uNuc`),
          N = x(`s3TBLbAss`),
          P = a(null);
        return (
          ae({}),
          i(re.Provider, {
            value: { primaryVariantId: `w4mrvUjxH`, variantClassNames: G },
            children: s(te, {
              id: S ?? l,
              children: [
                i(q, {
                  value: `html body { background: var(--token-781d11f5-bf5d-4746-9aec-b794f5ae2c6e, rgb(216, 223, 229)); }`,
                }),
                s(ne.div, {
                  ...w,
                  className: g(A, `framer-tuemzh`, b),
                  ref: r,
                  style: { ...y },
                  children: [
                    i(f, {
                      breakpoint: D,
                      overrides: {
                        bVr834Nr_: {
                          width: `calc(${v?.width || `100vw`} - 20px)`,
                        },
                      },
                      children: i(u, {
                        height: 62,
                        y: 10,
                        children: i(f, {
                          breakpoint: D,
                          overrides: {
                            bVr834Nr_: { transformTemplate: void 0 },
                          },
                          children: i(d, {
                            className: `framer-167h72g-container`,
                            layoutScroll: !0,
                            nodeId: `wEH2DaMKo`,
                            rendersWithMotion: !0,
                            scopeId: `I7UNmcwR8`,
                            transformTemplate: K,
                            children: i(f, {
                              breakpoint: D,
                              overrides: {
                                bVr834Nr_: {
                                  __framer__variantAppearEffectEnabled: void 0,
                                  style: { width: `100%` },
                                  variant: `rqcL3VnZ6`,
                                },
                                wQW0TXPmh: { variant: `JiVdFNcDQ` },
                              },
                              children: i(B, {
                                __framer__animateOnce: !1,
                                __framer__targets: [
                                  { ref: j, target: `Iwzg9GxlV` },
                                ],
                                __framer__threshold: 0,
                                __framer__variantAppearEffectEnabled: !0,
                                height: `100%`,
                                id: `wEH2DaMKo`,
                                layoutId: `wEH2DaMKo`,
                                variant: `eaBCOesTw`,
                                width: `100%`,
                              }),
                            }),
                          }),
                        }),
                      }),
                    }),
                    i(`section`, {
                      className: `framer-1jsti2g`,
                      "data-framer-name": `privacy policy`,
                      children: s(`div`, {
                        className: `framer-veockt`,
                        "data-framer-name": `container`,
                        children: [
                          s(`div`, {
                            className: `framer-1kux9wo`,
                            children: [
                              s(`div`, {
                                className: `framer-2p48ko`,
                                "data-framer-name": `headings`,
                                id: M,
                                ref: j,
                                children: [
                                  i(p, {
                                    __fromCanvasComponent: !0,
                                    children: i(c, {
                                      children: i(`h1`, {
                                        className: `framer-styles-preset-bdsobh`,
                                        "data-styles-preset": `Z4rzRSIez`,
                                        style: {
                                          "--framer-text-alignment": `left`,
                                        },
                                        children: `Terms Of Services`,
                                      }),
                                    }),
                                    className: `framer-1g13c5e`,
                                    "data-framer-name": `Title`,
                                    fonts: [`Inter`],
                                    verticalAlignment: `top`,
                                    withExternalLayout: !0,
                                  }),
                                  i(p, {
                                    __fromCanvasComponent: !0,
                                    children: i(c, {
                                      children: i(`h4`, {
                                        className: `framer-styles-preset-8b8zds`,
                                        "data-styles-preset": `pdnK4tFIz`,
                                        children: `Last updated on 25th July 2025`,
                                      }),
                                    }),
                                    className: `framer-jtgqzb`,
                                    "data-framer-name": `Date`,
                                    fonts: [`Inter`],
                                    verticalAlignment: `top`,
                                    withExternalLayout: !0,
                                  }),
                                ],
                              }),
                              i(p, {
                                __fromCanvasComponent: !0,
                                children: i(c, {
                                  children: i(`p`, {
                                    className: `framer-styles-preset-mpr3v6`,
                                    "data-styles-preset": `ECTXUYyOQ`,
                                    children: `Welcome to Gerbo. By using our website, demo, or service, you agree to the terms outlined below. Please read them carefully.`,
                                  }),
                                }),
                                className: `framer-plh22e`,
                                fonts: [`Inter`],
                                verticalAlignment: `top`,
                                withExternalLayout: !0,
                              }),
                            ],
                          }),
                          s(`div`, {
                            className: `framer-jnuf9i`,
                            "data-framer-name": `Text Container`,
                            children: [
                              i(`div`, {
                                className: `framer-15k87ro`,
                                "data-framer-name": `Separator Line`,
                                children: i(m, {
                                  className: `framer-ae3255`,
                                  "data-framer-name": `Separator Line`,
                                  opacity: 0.5,
                                  svg: `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 1 2"><path d="M 0.001 0.5 L 1.001 0.5" fill="transparent" stroke="rgba(NaN,NaN,NaN,0.3)" stroke-miterlimit="10" stroke-dasharray=""></path></svg>`,
                                  svgContentId: 10875031224,
                                  withExternalLayout: !0,
                                }),
                              }),
                              i(p, {
                                __fromCanvasComponent: !0,
                                children: i(c, {
                                  children: i(`h3`, {
                                    className: `framer-styles-preset-bn74vv`,
                                    "data-styles-preset": `gTtZK0Q4d`,
                                    children: `1. Who we are`,
                                  }),
                                }),
                                className: `framer-15cta2m`,
                                fonts: [`Inter`],
                                verticalAlignment: `top`,
                                withExternalLayout: !0,
                              }),
                              i(p, {
                                __fromCanvasComponent: !0,
                                children: s(c, {
                                  children: [
                                    i(`p`, {
                                      className: `framer-styles-preset-mpr3v6`,
                                      "data-styles-preset": `ECTXUYyOQ`,
                                      style: {
                                        "--framer-text-alignment": `left`,
                                        "--framer-text-color": `rgb(14, 28, 41)`,
                                      },
                                      children: `Gerbo is an AI-powered call answering agent for small businesses, provided by [Insert Company Name], a company registered in the UK.`,
                                    }),
                                    i(`p`, {
                                      className: `framer-styles-preset-mpr3v6`,
                                      "data-styles-preset": `ECTXUYyOQ`,
                                      style: {
                                        "--framer-text-alignment": `left`,
                                        "--framer-text-color": `rgb(14, 28, 41)`,
                                      },
                                      children: `If you have any questions, reach out to us at:`,
                                    }),
                                    i(`p`, {
                                      className: `framer-styles-preset-mpr3v6`,
                                      "data-styles-preset": `ECTXUYyOQ`,
                                      style: {
                                        "--framer-text-alignment": `left`,
                                        "--framer-text-color": `rgb(14, 28, 41)`,
                                      },
                                      children: `📧 support@gerbospeaks.com`,
                                    }),
                                  ],
                                }),
                                className: `framer-luha1t`,
                                fonts: [`Inter`],
                                verticalAlignment: `top`,
                                withExternalLayout: !0,
                              }),
                            ],
                          }),
                          s(`div`, {
                            className: `framer-1b4m54r`,
                            "data-framer-name": `Text Container`,
                            children: [
                              i(`div`, {
                                className: `framer-d9k6b9`,
                                "data-framer-name": `Separator Line`,
                                children: i(m, {
                                  className: `framer-gl1tf6`,
                                  "data-framer-name": `Separator Line`,
                                  opacity: 0.5,
                                  svg: `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 1 2"><path d="M 0.001 0.5 L 1.001 0.5" fill="transparent" stroke="rgba(NaN,NaN,NaN,0.3)" stroke-miterlimit="10" stroke-dasharray=""></path></svg>`,
                                  svgContentId: 10875031224,
                                  withExternalLayout: !0,
                                }),
                              }),
                              i(p, {
                                __fromCanvasComponent: !0,
                                children: i(c, {
                                  children: i(`h3`, {
                                    className: `framer-styles-preset-bn74vv`,
                                    "data-styles-preset": `gTtZK0Q4d`,
                                    children: `2. Using Gerbo`,
                                  }),
                                }),
                                className: `framer-1r41cyz`,
                                fonts: [`Inter`],
                                verticalAlignment: `top`,
                                withExternalLayout: !0,
                              }),
                              i(f, {
                                breakpoint: D,
                                overrides: {
                                  bVr834Nr_: {
                                    children: s(c, {
                                      children: [
                                        i(`p`, {
                                          className: `framer-styles-preset-mpr3v6`,
                                          "data-styles-preset": `ECTXUYyOQ`,
                                          children: `When you visit our website:`,
                                        }),
                                        i(`p`, {
                                          className: `framer-styles-preset-mpr3v6`,
                                          "data-styles-preset": `ECTXUYyOQ`,
                                          children: `•IP address and browser type (for analytics and security)`,
                                        }),
                                        i(`p`, {
                                          className: `framer-styles-preset-mpr3v6`,
                                          "data-styles-preset": `ECTXUYyOQ`,
                                          children: `•Device information`,
                                        }),
                                        s(`p`, {
                                          className: `framer-styles-preset-mpr3v6`,
                                          "data-styles-preset": `ECTXUYyOQ`,
                                          children: [
                                            `•Pages visited and time spent (via cookies)`,
                                            i(`br`, {}),
                                            i(`br`, {}),
                                            `When you use our demo or sign up:`,
                                          ],
                                        }),
                                        i(`p`, {
                                          className: `framer-styles-preset-mpr3v6`,
                                          "data-styles-preset": `ECTXUYyOQ`,
                                          children: `•Your name and business details`,
                                        }),
                                        i(`p`, {
                                          className: `framer-styles-preset-mpr3v6`,
                                          "data-styles-preset": `ECTXUYyOQ`,
                                          children: `•Contact details (email and/or phone number)`,
                                        }),
                                        s(`p`, {
                                          className: `framer-styles-preset-mpr3v6`,
                                          "data-styles-preset": `ECTXUYyOQ`,
                                          children: [
                                            `•Call recordings or summaries generated during demos`,
                                            i(`br`, {}),
                                            i(`br`, {
                                              className: `trailing-break`,
                                            }),
                                          ],
                                        }),
                                        i(`p`, {
                                          className: `framer-styles-preset-mpr3v6`,
                                          "data-styles-preset": `ECTXUYyOQ`,
                                          children: `When your customers call via Gerbo:`,
                                        }),
                                        i(`p`, {
                                          className: `framer-styles-preset-mpr3v6`,
                                          "data-styles-preset": `ECTXUYyOQ`,
                                          children: ` • Caller name (if given)`,
                                        }),
                                        i(`p`, {
                                          className: `framer-styles-preset-mpr3v6`,
                                          "data-styles-preset": `ECTXUYyOQ`,
                                          children: ` • Caller phone number`,
                                        }),
                                        s(`p`, {
                                          className: `framer-styles-preset-mpr3v6`,
                                          "data-styles-preset": `ECTXUYyOQ`,
                                          children: [
                                            ` • Call content and intent summary`,
                                            i(`br`, {}),
                                            i(`br`, {
                                              className: `trailing-break`,
                                            }),
                                          ],
                                        }),
                                        i(`p`, {
                                          className: `framer-styles-preset-mpr3v6`,
                                          "data-styles-preset": `ECTXUYyOQ`,
                                          children: `Note: We only process this data to provide you with the Gerbo service and do not sell it to third parties.`,
                                        }),
                                      ],
                                    }),
                                  },
                                },
                                children: i(p, {
                                  __fromCanvasComponent: !0,
                                  children: s(c, {
                                    children: [
                                      i(`p`, {
                                        className: `framer-styles-preset-mpr3v6`,
                                        "data-styles-preset": `ECTXUYyOQ`,
                                        style: {
                                          "--framer-text-alignment": `left`,
                                          "--framer-text-color": `rgb(14, 28, 41)`,
                                        },
                                        children: `By accessing or using Gerbo, you agree to:`,
                                      }),
                                      i(`p`, {
                                        className: `framer-styles-preset-mpr3v6`,
                                        "data-styles-preset": `ECTXUYyOQ`,
                                        style: {
                                          "--framer-text-alignment": `left`,
                                          "--framer-text-color": `rgb(14, 28, 41)`,
                                        },
                                        children: ` • Use our service only for lawful business purposes`,
                                      }),
                                      i(`p`, {
                                        className: `framer-styles-preset-mpr3v6`,
                                        "data-styles-preset": `ECTXUYyOQ`,
                                        style: {
                                          "--framer-text-alignment": `left`,
                                          "--framer-text-color": `rgb(14, 28, 41)`,
                                        },
                                        children: ` • Provide accurate contact details when requested`,
                                      }),
                                      i(`p`, {
                                        className: `framer-styles-preset-mpr3v6`,
                                        "data-styles-preset": `ECTXUYyOQ`,
                                        style: {
                                          "--framer-text-alignment": `left`,
                                          "--framer-text-color": `rgb(14, 28, 41)`,
                                        },
                                        children: ` • Not misuse, copy, or attempt to reverse-engineer any part of the service`,
                                      }),
                                      i(`p`, {
                                        className: `framer-styles-preset-mpr3v6`,
                                        "data-styles-preset": `ECTXUYyOQ`,
                                        style: {
                                          "--framer-text-alignment": `left`,
                                          "--framer-text-color": `rgb(14, 28, 41)`,
                                        },
                                        children: `We reserve the right to suspend or terminate access if these terms are violated.`,
                                      }),
                                    ],
                                  }),
                                  className: `framer-yyinzc`,
                                  fonts: [`Inter`],
                                  verticalAlignment: `top`,
                                  withExternalLayout: !0,
                                }),
                              }),
                            ],
                          }),
                          s(`div`, {
                            className: `framer-ddx65t`,
                            "data-framer-name": `Text Container`,
                            children: [
                              i(`div`, {
                                className: `framer-1t7gv5w`,
                                "data-framer-name": `Separator Line`,
                                children: i(m, {
                                  className: `framer-k1o990`,
                                  "data-framer-name": `Separator Line`,
                                  opacity: 0.5,
                                  svg: `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 1 2"><path d="M 0.001 0.5 L 1.001 0.5" fill="transparent" stroke="rgba(NaN,NaN,NaN,0.3)" stroke-miterlimit="10" stroke-dasharray=""></path></svg>`,
                                  svgContentId: 10875031224,
                                  withExternalLayout: !0,
                                }),
                              }),
                              i(p, {
                                __fromCanvasComponent: !0,
                                children: i(c, {
                                  children: i(`h3`, {
                                    className: `framer-styles-preset-bn74vv`,
                                    "data-styles-preset": `gTtZK0Q4d`,
                                    children: `3. What Gerbo does (and doesn’t do)`,
                                  }),
                                }),
                                className: `framer-grbtg8`,
                                fonts: [`Inter`],
                                verticalAlignment: `top`,
                                withExternalLayout: !0,
                              }),
                              i(f, {
                                breakpoint: D,
                                overrides: {
                                  bVr834Nr_: {
                                    children: s(c, {
                                      children: [
                                        i(`p`, {
                                          className: `framer-styles-preset-mpr3v6`,
                                          "data-styles-preset": `ECTXUYyOQ`,
                                          style: {
                                            "--framer-text-alignment": `left`,
                                          },
                                          children: `We use your data to:`,
                                        }),
                                        i(`p`, {
                                          className: `framer-styles-preset-mpr3v6`,
                                          "data-styles-preset": `ECTXUYyOQ`,
                                          style: {
                                            "--framer-text-alignment": `left`,
                                          },
                                          children: `•Operate and deliver the Gerbo service`,
                                        }),
                                        i(`p`, {
                                          className: `framer-styles-preset-mpr3v6`,
                                          "data-styles-preset": `ECTXUYyOQ`,
                                          style: {
                                            "--framer-text-alignment": `left`,
                                          },
                                          children: `•Email or text you your call summaries`,
                                        }),
                                        i(`p`, {
                                          className: `framer-styles-preset-mpr3v6`,
                                          "data-styles-preset": `ECTXUYyOQ`,
                                          style: {
                                            "--framer-text-alignment": `left`,
                                          },
                                          children: `•Improve our product through anonymised analytics`,
                                        }),
                                        i(`p`, {
                                          className: `framer-styles-preset-mpr3v6`,
                                          "data-styles-preset": `ECTXUYyOQ`,
                                          style: {
                                            "--framer-text-alignment": `left`,
                                          },
                                          children: `•Respond to your queries or support requests`,
                                        }),
                                        i(`p`, {
                                          className: `framer-styles-preset-mpr3v6`,
                                          "data-styles-preset": `ECTXUYyOQ`,
                                          style: {
                                            "--framer-text-alignment": `left`,
                                          },
                                          children: `•Send occasional updates (if you’ve opted in)`,
                                        }),
                                        i(`p`, {
                                          className: `framer-styles-preset-mpr3v6`,
                                          "data-styles-preset": `ECTXUYyOQ`,
                                          style: {
                                            "--framer-text-alignment": `left`,
                                          },
                                          children: `We only retain data for as long as needed to provide the service or comply with legal obligation`,
                                        }),
                                        i(`p`, {
                                          className: `framer-styles-preset-mpr3v6`,
                                          "data-styles-preset": `ECTXUYyOQ`,
                                          children: i(`br`, {
                                            className: `trailing-break`,
                                          }),
                                        }),
                                      ],
                                    }),
                                  },
                                },
                                children: i(p, {
                                  __fromCanvasComponent: !0,
                                  children: s(c, {
                                    children: [
                                      i(`p`, {
                                        className: `framer-styles-preset-mpr3v6`,
                                        "data-styles-preset": `ECTXUYyOQ`,
                                        style: {
                                          "--framer-text-alignment": `left`,
                                          "--framer-text-color": `rgb(14, 28, 41)`,
                                        },
                                        children: `Gerbo answers calls on your behalf using a natural-sounding AI voice.`,
                                      }),
                                      i(`p`, {
                                        className: `framer-styles-preset-mpr3v6`,
                                        "data-styles-preset": `ECTXUYyOQ`,
                                        style: {
                                          "--framer-text-alignment": `left`,
                                          "--framer-text-color": `rgb(14, 28, 41)`,
                                        },
                                        children: `Currently, Gerbo:`,
                                      }),
                                      i(`p`, {
                                        className: `framer-styles-preset-mpr3v6`,
                                        "data-styles-preset": `ECTXUYyOQ`,
                                        style: {
                                          "--framer-text-alignment": `left`,
                                          "--framer-text-color": `rgb(14, 28, 41)`,
                                        },
                                        children: ` • Captures the caller’s name, intent, and contact details`,
                                      }),
                                      i(`p`, {
                                        className: `framer-styles-preset-mpr3v6`,
                                        "data-styles-preset": `ECTXUYyOQ`,
                                        style: {
                                          "--framer-text-alignment": `left`,
                                          "--framer-text-color": `rgb(14, 28, 41)`,
                                        },
                                        children: ` • Sends you a summary via email and/or SMS`,
                                      }),
                                      i(`p`, {
                                        className: `framer-styles-preset-mpr3v6`,
                                        "data-styles-preset": `ECTXUYyOQ`,
                                        style: {
                                          "--framer-text-alignment": `left`,
                                          "--framer-text-color": `rgb(14, 28, 41)`,
                                        },
                                        children: ` • Operates using a SA-based voice model that’s GDPR-compliant`,
                                      }),
                                      i(`p`, {
                                        className: `framer-styles-preset-mpr3v6`,
                                        "data-styles-preset": `ECTXUYyOQ`,
                                        style: {
                                          "--framer-text-alignment": `left`,
                                          "--framer-text-color": `rgb(14, 28, 41)`,
                                        },
                                        children: `Gerbo does not yet:`,
                                      }),
                                      i(`p`, {
                                        className: `framer-styles-preset-mpr3v6`,
                                        "data-styles-preset": `ECTXUYyOQ`,
                                        style: {
                                          "--framer-text-alignment": `left`,
                                          "--framer-text-color": `rgb(14, 28, 41)`,
                                        },
                                        children: ` • Handle bookings, payments, or orders`,
                                      }),
                                      i(`p`, {
                                        className: `framer-styles-preset-mpr3v6`,
                                        "data-styles-preset": `ECTXUYyOQ`,
                                        style: {
                                          "--framer-text-alignment": `left`,
                                          "--framer-text-color": `rgb(14, 28, 41)`,
                                        },
                                        children: ` • Integrate with your calendar or CRM`,
                                      }),
                                      i(`p`, {
                                        className: `framer-styles-preset-mpr3v6`,
                                        "data-styles-preset": `ECTXUYyOQ`,
                                        style: {
                                          "--framer-text-alignment": `left`,
                                          "--framer-text-color": `rgb(14, 28, 41)`,
                                        },
                                        children: ` • Transfer calls to a human (though this may come in future updates)`,
                                      }),
                                      i(`p`, {
                                        className: `framer-styles-preset-mpr3v6`,
                                        "data-styles-preset": `ECTXUYyOQ`,
                                        style: {
                                          "--framer-text-alignment": `left`,
                                          "--framer-text-color": `rgb(14, 28, 41)`,
                                        },
                                        children: `We’ll always be transparent about what the service can and can’t do.`,
                                      }),
                                    ],
                                  }),
                                  className: `framer-fg8bip`,
                                  fonts: [`Inter`],
                                  verticalAlignment: `top`,
                                  withExternalLayout: !0,
                                }),
                              }),
                            ],
                          }),
                          s(`div`, {
                            className: `framer-7rhywi`,
                            "data-framer-name": `Text Container`,
                            children: [
                              i(`div`, {
                                className: `framer-2mzz2t`,
                                "data-framer-name": `Separator Line`,
                                children: i(m, {
                                  className: `framer-fmjdky`,
                                  "data-framer-name": `Separator Line`,
                                  opacity: 0.5,
                                  svg: `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 1 2"><path d="M 0.001 0.5 L 1.001 0.5" fill="transparent" stroke="rgba(NaN,NaN,NaN,0.3)" stroke-miterlimit="10" stroke-dasharray=""></path></svg>`,
                                  svgContentId: 10875031224,
                                  withExternalLayout: !0,
                                }),
                              }),
                              i(p, {
                                __fromCanvasComponent: !0,
                                children: i(c, {
                                  children: i(`h3`, {
                                    className: `framer-styles-preset-bn74vv`,
                                    "data-styles-preset": `gTtZK0Q4d`,
                                    children: `4. Pricing & Payment`,
                                  }),
                                }),
                                className: `framer-1h5wtt5`,
                                fonts: [`Inter`],
                                verticalAlignment: `top`,
                                withExternalLayout: !0,
                              }),
                              i(f, {
                                breakpoint: D,
                                overrides: {
                                  bVr834Nr_: {
                                    children: s(c, {
                                      children: [
                                        i(`p`, {
                                          className: `framer-styles-preset-mpr3v6`,
                                          "data-styles-preset": `ECTXUYyOQ`,
                                          style: {
                                            "--framer-text-alignment": `left`,
                                          },
                                          children: `Under SA GDPR, our lawful bases include:`,
                                        }),
                                        i(`p`, {
                                          className: `framer-styles-preset-mpr3v6`,
                                          "data-styles-preset": `ECTXUYyOQ`,
                                          style: {
                                            "--framer-text-alignment": `left`,
                                          },
                                          children: `•Performance of a contract – e.g. providing the Gerbo service to you`,
                                        }),
                                        i(`p`, {
                                          className: `framer-styles-preset-mpr3v6`,
                                          "data-styles-preset": `ECTXUYyOQ`,
                                          style: {
                                            "--framer-text-alignment": `left`,
                                          },
                                          children: `•Legitimate interest – e.g. improving our website or preventing fraud`,
                                        }),
                                        i(`p`, {
                                          className: `framer-styles-preset-mpr3v6`,
                                          "data-styles-preset": `ECTXUYyOQ`,
                                          style: {
                                            "--framer-text-alignment": `left`,
                                          },
                                          children: `•Consent – e.g. marketing communications (you can opt out anytime`,
                                        }),
                                        i(`p`, {
                                          className: `framer-styles-preset-mpr3v6`,
                                          "data-styles-preset": `ECTXUYyOQ`,
                                          children: i(`br`, {
                                            className: `trailing-break`,
                                          }),
                                        }),
                                      ],
                                    }),
                                  },
                                },
                                children: i(p, {
                                  __fromCanvasComponent: !0,
                                  children: s(c, {
                                    children: [
                                      i(`p`, {
                                        className: `framer-styles-preset-mpr3v6`,
                                        "data-styles-preset": `ECTXUYyOQ`,
                                        style: {
                                          "--framer-text-alignment": `left`,
                                          "--framer-text-color": `rgb(14, 28, 41)`,
                                        },
                                        children: `If you’re using a paid plan:`,
                                      }),
                                      i(`p`, {
                                        className: `framer-styles-preset-mpr3v6`,
                                        "data-styles-preset": `ECTXUYyOQ`,
                                        style: {
                                          "--framer-text-alignment": `left`,
                                          "--framer-text-color": `rgb(14, 28, 41)`,
                                        },
                                        children: ` • Prices are listed clearly on our website`,
                                      }),
                                      i(`p`, {
                                        className: `framer-styles-preset-mpr3v6`,
                                        "data-styles-preset": `ECTXUYyOQ`,
                                        style: {
                                          "--framer-text-alignment": `left`,
                                          "--framer-text-color": `rgb(14, 28, 41)`,
                                        },
                                        children: ` • Subscriptions are billed in advance, monthly or annually`,
                                      }),
                                      i(`p`, {
                                        className: `framer-styles-preset-mpr3v6`,
                                        "data-styles-preset": `ECTXUYyOQ`,
                                        style: {
                                          "--framer-text-alignment": `left`,
                                          "--framer-text-color": `rgb(14, 28, 41)`,
                                        },
                                        children: ` • You can cancel any time, and access will continue until the end of your billing period`,
                                      }),
                                      i(`p`, {
                                        className: `framer-styles-preset-mpr3v6`,
                                        "data-styles-preset": `ECTXUYyOQ`,
                                        style: {
                                          "--framer-text-alignment": `left`,
                                          "--framer-text-color": `rgb(14, 28, 41)`,
                                        },
                                        children: `No refunds are offered for partial billing periods unless required by law.`,
                                      }),
                                    ],
                                  }),
                                  className: `framer-1g5w761`,
                                  fonts: [`Inter`],
                                  verticalAlignment: `top`,
                                  withExternalLayout: !0,
                                }),
                              }),
                            ],
                          }),
                          s(`div`, {
                            className: `framer-15yacy4`,
                            "data-framer-name": `Text Container`,
                            children: [
                              i(`div`, {
                                className: `framer-vl7liz`,
                                "data-framer-name": `Separator Line`,
                                children: i(m, {
                                  className: `framer-53qiyq`,
                                  "data-framer-name": `Separator Line`,
                                  opacity: 0.5,
                                  svg: `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 1 2"><path d="M 0.001 0.5 L 1.001 0.5" fill="transparent" stroke="rgba(NaN,NaN,NaN,0.3)" stroke-miterlimit="10" stroke-dasharray=""></path></svg>`,
                                  svgContentId: 10875031224,
                                  withExternalLayout: !0,
                                }),
                              }),
                              i(p, {
                                __fromCanvasComponent: !0,
                                children: i(c, {
                                  children: i(`h3`, {
                                    className: `framer-styles-preset-bn74vv`,
                                    "data-styles-preset": `gTtZK0Q4d`,
                                    children: `5. Your responsibilities`,
                                  }),
                                }),
                                className: `framer-xyz4n7`,
                                fonts: [`Inter`],
                                verticalAlignment: `top`,
                                withExternalLayout: !0,
                              }),
                              i(f, {
                                breakpoint: D,
                                overrides: {
                                  bVr834Nr_: {
                                    children: s(c, {
                                      children: [
                                        i(`p`, {
                                          className: `framer-styles-preset-mpr3v6`,
                                          "data-styles-preset": `ECTXUYyOQ`,
                                          style: {
                                            "--framer-text-alignment": `left`,
                                          },
                                          children: `We don’t sell your personal data. We may share it with:`,
                                        }),
                                        i(`p`, {
                                          className: `framer-styles-preset-mpr3v6`,
                                          "data-styles-preset": `ECTXUYyOQ`,
                                          style: {
                                            "--framer-text-alignment": `left`,
                                          },
                                          children: `•Trusted service providers (e.g. Twilio, OpenAI, ElevenLabs) who help power Gerbo`,
                                        }),
                                        i(`p`, {
                                          className: `framer-styles-preset-mpr3v6`,
                                          "data-styles-preset": `ECTXUYyOQ`,
                                          style: {
                                            "--framer-text-alignment": `left`,
                                          },
                                          children: `•Legal authorities, if required to comply with SA law`,
                                        }),
                                        i(`p`, {
                                          className: `framer-styles-preset-mpr3v6`,
                                          "data-styles-preset": `ECTXUYyOQ`,
                                          style: {
                                            "--framer-text-alignment": `left`,
                                          },
                                          children: `•Third-party platforms like email or SMS providers to deliver your call summaries`,
                                        }),
                                        i(`p`, {
                                          className: `framer-styles-preset-mpr3v6`,
                                          "data-styles-preset": `ECTXUYyOQ`,
                                          style: {
                                            "--framer-text-alignment": `left`,
                                          },
                                          children: `All partners are GDPR-compliant and under strict data protection agreements.`,
                                        }),
                                        i(`p`, {
                                          className: `framer-styles-preset-mpr3v6`,
                                          "data-styles-preset": `ECTXUYyOQ`,
                                          children: i(`br`, {
                                            className: `trailing-break`,
                                          }),
                                        }),
                                      ],
                                    }),
                                  },
                                },
                                children: i(p, {
                                  __fromCanvasComponent: !0,
                                  children: s(c, {
                                    children: [
                                      i(`p`, {
                                        className: `framer-styles-preset-mpr3v6`,
                                        "data-styles-preset": `ECTXUYyOQ`,
                                        style: {
                                          "--framer-text-alignment": `left`,
                                          "--framer-text-color": `rgb(14, 28, 41)`,
                                        },
                                        children: `You are responsible for:`,
                                      }),
                                      i(`p`, {
                                        className: `framer-styles-preset-mpr3v6`,
                                        "data-styles-preset": `ECTXUYyOQ`,
                                        style: {
                                          "--framer-text-alignment": `left`,
                                          "--framer-text-color": `rgb(14, 28, 41)`,
                                        },
                                        children: ` • Ensuring your business use of Gerbo complies with applicable laws`,
                                      }),
                                      i(`p`, {
                                        className: `framer-styles-preset-mpr3v6`,
                                        "data-styles-preset": `ECTXUYyOQ`,
                                        style: {
                                          "--framer-text-alignment": `left`,
                                          "--framer-text-color": `rgb(14, 28, 41)`,
                                        },
                                        children: ` • Making your callers aware they are speaking to an AI assistant (especially if required in your industry)`,
                                      }),
                                      i(`p`, {
                                        className: `framer-styles-preset-mpr3v6`,
                                        "data-styles-preset": `ECTXUYyOQ`,
                                        style: {
                                          "--framer-text-alignment": `left`,
                                          "--framer-text-color": `rgb(14, 28, 41)`,
                                        },
                                        children: ` • Keeping your login and contact details secure`,
                                      }),
                                    ],
                                  }),
                                  className: `framer-5iuoai`,
                                  fonts: [`Inter`],
                                  verticalAlignment: `top`,
                                  withExternalLayout: !0,
                                }),
                              }),
                            ],
                          }),
                          s(`div`, {
                            className: `framer-e18v20`,
                            "data-framer-name": `Text Container`,
                            children: [
                              i(`div`, {
                                className: `framer-14023q2`,
                                "data-framer-name": `Separator Line`,
                                children: i(m, {
                                  className: `framer-1b7v8xq`,
                                  "data-framer-name": `Separator Line`,
                                  opacity: 0.5,
                                  svg: `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 1 2"><path d="M 0.001 0.5 L 1.001 0.5" fill="transparent" stroke="rgba(NaN,NaN,NaN,0.3)" stroke-miterlimit="10" stroke-dasharray=""></path></svg>`,
                                  svgContentId: 10875031224,
                                  withExternalLayout: !0,
                                }),
                              }),
                              i(p, {
                                __fromCanvasComponent: !0,
                                children: i(c, {
                                  children: i(`h3`, {
                                    className: `framer-styles-preset-bn74vv`,
                                    "data-styles-preset": `gTtZK0Q4d`,
                                    children: `6. Data & Privacy`,
                                  }),
                                }),
                                className: `framer-1e7f6l1`,
                                fonts: [`Inter`],
                                verticalAlignment: `top`,
                                withExternalLayout: !0,
                              }),
                              i(f, {
                                breakpoint: D,
                                overrides: {
                                  bVr834Nr_: {
                                    children: s(c, {
                                      children: [
                                        i(`p`, {
                                          className: `framer-styles-preset-mpr3v6`,
                                          "data-styles-preset": `ECTXUYyOQ`,
                                          style: {
                                            "--framer-text-alignment": `left`,
                                          },
                                          children: `You have the right to:`,
                                        }),
                                        i(`p`, {
                                          className: `framer-styles-preset-mpr3v6`,
                                          "data-styles-preset": `ECTXUYyOQ`,
                                          style: {
                                            "--framer-text-alignment": `left`,
                                          },
                                          children: `•Access any personal data we hold about you`,
                                        }),
                                        i(`p`, {
                                          className: `framer-styles-preset-mpr3v6`,
                                          "data-styles-preset": `ECTXUYyOQ`,
                                          style: {
                                            "--framer-text-alignment": `left`,
                                          },
                                          children: `•Correct inaccuracies in your data`,
                                        }),
                                        i(`p`, {
                                          className: `framer-styles-preset-mpr3v6`,
                                          "data-styles-preset": `ECTXUYyOQ`,
                                          style: {
                                            "--framer-text-alignment": `left`,
                                          },
                                          children: `•Request deletion of your data (“right to be forgotten”)`,
                                        }),
                                        i(`p`, {
                                          className: `framer-styles-preset-mpr3v6`,
                                          "data-styles-preset": `ECTXUYyOQ`,
                                          style: {
                                            "--framer-text-alignment": `left`,
                                          },
                                          children: `•Object to or restrict how we use your data`,
                                        }),
                                        i(`p`, {
                                          className: `framer-styles-preset-mpr3v6`,
                                          "data-styles-preset": `ECTXUYyOQ`,
                                          style: {
                                            "--framer-text-alignment": `left`,
                                          },
                                          children: `•Withdraw consent at any time (for marketing or non-essential processing)`,
                                        }),
                                        i(`p`, {
                                          className: `framer-styles-preset-mpr3v6`,
                                          "data-styles-preset": `ECTXUYyOQ`,
                                          style: {
                                            "--framer-text-alignment": `left`,
                                          },
                                          children: `To exercise your rights, email us at support@gerbospeaks.com`,
                                        }),
                                      ],
                                    }),
                                  },
                                },
                                children: i(p, {
                                  __fromCanvasComponent: !0,
                                  children: s(c, {
                                    children: [
                                      i(`p`, {
                                        className: `framer-styles-preset-mpr3v6`,
                                        "data-styles-preset": `ECTXUYyOQ`,
                                        style: {
                                          "--framer-text-alignment": `left`,
                                          "--framer-text-color": `rgb(14, 28, 41)`,
                                        },
                                        children: `We respect your data. Please read our full [Privacy Policy] for details on:`,
                                      }),
                                      i(`p`, {
                                        className: `framer-styles-preset-mpr3v6`,
                                        "data-styles-preset": `ECTXUYyOQ`,
                                        style: {
                                          "--framer-text-alignment": `left`,
                                          "--framer-text-color": `rgb(14, 28, 41)`,
                                        },
                                        children: ` • What data we collect`,
                                      }),
                                      i(`p`, {
                                        className: `framer-styles-preset-mpr3v6`,
                                        "data-styles-preset": `ECTXUYyOQ`,
                                        style: {
                                          "--framer-text-alignment": `left`,
                                          "--framer-text-color": `rgb(14, 28, 41)`,
                                        },
                                        children: ` • How we use and store it`,
                                      }),
                                      i(`p`, {
                                        className: `framer-styles-preset-mpr3v6`,
                                        "data-styles-preset": `ECTXUYyOQ`,
                                        style: {
                                          "--framer-text-alignment": `left`,
                                          "--framer-text-color": `rgb(14, 28, 41)`,
                                        },
                                        children: ` • Your rights under SA GDPR`,
                                      }),
                                      i(`p`, {
                                        className: `framer-styles-preset-mpr3v6`,
                                        "data-styles-preset": `ECTXUYyOQ`,
                                        style: {
                                          "--framer-text-alignment": `left`,
                                          "--framer-text-color": `rgb(14, 28, 41)`,
                                        },
                                        children: `By using Gerbo, you consent to our handling of data as described in that policy.`,
                                      }),
                                    ],
                                  }),
                                  className: `framer-url9lw`,
                                  fonts: [`Inter`],
                                  verticalAlignment: `top`,
                                  withExternalLayout: !0,
                                }),
                              }),
                            ],
                          }),
                          s(`div`, {
                            className: `framer-1fqxlhq`,
                            "data-framer-name": `Text Container`,
                            children: [
                              i(`div`, {
                                className: `framer-6f5v5f`,
                                "data-framer-name": `Separator Line`,
                                children: i(m, {
                                  className: `framer-em659x`,
                                  "data-framer-name": `Separator Line`,
                                  opacity: 0.5,
                                  svg: `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 1 2"><path d="M 0.001 0.5 L 1.001 0.5" fill="transparent" stroke="rgba(NaN,NaN,NaN,0.3)" stroke-miterlimit="10" stroke-dasharray=""></path></svg>`,
                                  svgContentId: 10875031224,
                                  withExternalLayout: !0,
                                }),
                              }),
                              i(p, {
                                __fromCanvasComponent: !0,
                                children: i(c, {
                                  children: i(`h3`, {
                                    className: `framer-styles-preset-bn74vv`,
                                    "data-styles-preset": `gTtZK0Q4d`,
                                    children: `7. Service availability`,
                                  }),
                                }),
                                className: `framer-1ivy88y`,
                                fonts: [`Inter`],
                                verticalAlignment: `top`,
                                withExternalLayout: !0,
                              }),
                              i(p, {
                                __fromCanvasComponent: !0,
                                children: s(c, {
                                  children: [
                                    i(`p`, {
                                      className: `framer-styles-preset-mpr3v6`,
                                      "data-styles-preset": `ECTXUYyOQ`,
                                      style: {
                                        "--framer-text-alignment": `left`,
                                        "--framer-text-color": `rgb(14, 28, 41)`,
                                      },
                                      children: `We aim to keep Gerbo running 24/7, but we cannot guarantee uninterrupted access. From time to time, the service may be unavailable due to:`,
                                    }),
                                    i(`p`, {
                                      className: `framer-styles-preset-mpr3v6`,
                                      "data-styles-preset": `ECTXUYyOQ`,
                                      style: {
                                        "--framer-text-alignment": `left`,
                                        "--framer-text-color": `rgb(14, 28, 41)`,
                                      },
                                      children: ` • Maintenance or upgrades`,
                                    }),
                                    i(`p`, {
                                      className: `framer-styles-preset-mpr3v6`,
                                      "data-styles-preset": `ECTXUYyOQ`,
                                      style: {
                                        "--framer-text-alignment": `left`,
                                        "--framer-text-color": `rgb(14, 28, 41)`,
                                      },
                                      children: ` • Network or technical issues beyond our control`,
                                    }),
                                    i(`p`, {
                                      className: `framer-styles-preset-mpr3v6`,
                                      "data-styles-preset": `ECTXUYyOQ`,
                                      style: {
                                        "--framer-text-alignment": `left`,
                                        "--framer-text-color": `rgb(14, 28, 41)`,
                                      },
                                      children: ` • Issues with third-party providers like Twilio or OpenAI`,
                                    }),
                                    i(`p`, {
                                      className: `framer-styles-preset-mpr3v6`,
                                      "data-styles-preset": `ECTXUYyOQ`,
                                      style: {
                                        "--framer-text-alignment": `left`,
                                        "--framer-text-color": `rgb(14, 28, 41)`,
                                      },
                                      children: `We’ll do our best to inform users of planned outages where possible.`,
                                    }),
                                  ],
                                }),
                                className: `framer-10vfi23`,
                                fonts: [`Inter`],
                                verticalAlignment: `top`,
                                withExternalLayout: !0,
                              }),
                            ],
                          }),
                          s(`div`, {
                            className: `framer-jlqn2e`,
                            "data-framer-name": `Text Container`,
                            children: [
                              i(`div`, {
                                className: `framer-4a1lam`,
                                "data-framer-name": `Separator Line`,
                                children: i(m, {
                                  className: `framer-m2rez9`,
                                  "data-framer-name": `Separator Line`,
                                  opacity: 0.5,
                                  svg: `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 1 2"><path d="M 0.001 0.5 L 1.001 0.5" fill="transparent" stroke="rgba(NaN,NaN,NaN,0.3)" stroke-miterlimit="10" stroke-dasharray=""></path></svg>`,
                                  svgContentId: 10875031224,
                                  withExternalLayout: !0,
                                }),
                              }),
                              i(p, {
                                __fromCanvasComponent: !0,
                                children: i(c, {
                                  children: i(`h3`, {
                                    className: `framer-styles-preset-bn74vv`,
                                    "data-styles-preset": `gTtZK0Q4d`,
                                    children: `8. Intellectual property`,
                                  }),
                                }),
                                className: `framer-155ldam`,
                                fonts: [`Inter`],
                                verticalAlignment: `top`,
                                withExternalLayout: !0,
                              }),
                              i(p, {
                                __fromCanvasComponent: !0,
                                children: s(c, {
                                  children: [
                                    i(`p`, {
                                      className: `framer-styles-preset-mpr3v6`,
                                      "data-styles-preset": `ECTXUYyOQ`,
                                      style: {
                                        "--framer-text-alignment": `left`,
                                        "--framer-text-color": `rgb(14, 28, 41)`,
                                      },
                                      children: `All content, branding, software, and voice models used in Gerbo are owned by us or our licensed partners.`,
                                    }),
                                    i(`p`, {
                                      className: `framer-styles-preset-mpr3v6`,
                                      "data-styles-preset": `ECTXUYyOQ`,
                                      style: {
                                        "--framer-text-alignment": `left`,
                                        "--framer-text-color": `rgb(14, 28, 41)`,
                                      },
                                      children: `You may not copy, resell, or create derivative works based on our product.`,
                                    }),
                                  ],
                                }),
                                className: `framer-1xh02nq`,
                                fonts: [`Inter`],
                                verticalAlignment: `top`,
                                withExternalLayout: !0,
                              }),
                            ],
                          }),
                          s(`div`, {
                            className: `framer-yo6462`,
                            "data-framer-name": `Text Container`,
                            children: [
                              i(`div`, {
                                className: `framer-1c3rnzb`,
                                "data-framer-name": `Separator Line`,
                                children: i(m, {
                                  className: `framer-4q233m`,
                                  "data-framer-name": `Separator Line`,
                                  opacity: 0.5,
                                  svg: `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 1 2"><path d="M 0.001 0.5 L 1.001 0.5" fill="transparent" stroke="rgba(NaN,NaN,NaN,0.3)" stroke-miterlimit="10" stroke-dasharray=""></path></svg>`,
                                  svgContentId: 10875031224,
                                  withExternalLayout: !0,
                                }),
                              }),
                              i(p, {
                                __fromCanvasComponent: !0,
                                children: i(c, {
                                  children: i(`h3`, {
                                    className: `framer-styles-preset-bn74vv`,
                                    "data-styles-preset": `gTtZK0Q4d`,
                                    children: `9. Limitation of liability`,
                                  }),
                                }),
                                className: `framer-ubgg1z`,
                                fonts: [`Inter`],
                                verticalAlignment: `top`,
                                withExternalLayout: !0,
                              }),
                              i(p, {
                                __fromCanvasComponent: !0,
                                children: s(c, {
                                  children: [
                                    i(`p`, {
                                      className: `framer-styles-preset-mpr3v6`,
                                      "data-styles-preset": `ECTXUYyOQ`,
                                      style: {
                                        "--framer-text-alignment": `left`,
                                        "--framer-text-color": `rgb(14, 28, 41)`,
                                      },
                                      children: `To the extent permitted by law:`,
                                    }),
                                    i(`p`, {
                                      className: `framer-styles-preset-mpr3v6`,
                                      "data-styles-preset": `ECTXUYyOQ`,
                                      style: {
                                        "--framer-text-alignment": `left`,
                                        "--framer-text-color": `rgb(14, 28, 41)`,
                                      },
                                      children: ` • We are not liable for indirect, incidental, or consequential damages arising from the use of Gerbo`,
                                    }),
                                    i(`p`, {
                                      className: `framer-styles-preset-mpr3v6`,
                                      "data-styles-preset": `ECTXUYyOQ`,
                                      style: {
                                        "--framer-text-alignment": `left`,
                                        "--framer-text-color": `rgb(14, 28, 41)`,
                                      },
                                      children: ` • Our total liability is limited to the amount you’ve paid us in the last 3 months`,
                                    }),
                                    i(`p`, {
                                      className: `framer-styles-preset-mpr3v6`,
                                      "data-styles-preset": `ECTXUYyOQ`,
                                      style: {
                                        "--framer-text-alignment": `left`,
                                        "--framer-text-color": `rgb(14, 28, 41)`,
                                      },
                                      children: `You use Gerbo at your own discretion and risk.`,
                                    }),
                                  ],
                                }),
                                className: `framer-1hkv72y`,
                                fonts: [`Inter`],
                                verticalAlignment: `top`,
                                withExternalLayout: !0,
                              }),
                            ],
                          }),
                          s(`div`, {
                            className: `framer-t6foez`,
                            "data-framer-name": `Text Container`,
                            children: [
                              i(`div`, {
                                className: `framer-1q7r4b5`,
                                "data-framer-name": `Separator Line`,
                                children: i(m, {
                                  className: `framer-12ud6aa`,
                                  "data-framer-name": `Separator Line`,
                                  opacity: 0.5,
                                  svg: `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 1 2"><path d="M 0.001 0.5 L 1.001 0.5" fill="transparent" stroke="rgba(NaN,NaN,NaN,0.3)" stroke-miterlimit="10" stroke-dasharray=""></path></svg>`,
                                  svgContentId: 10875031224,
                                  withExternalLayout: !0,
                                }),
                              }),
                              i(p, {
                                __fromCanvasComponent: !0,
                                children: i(c, {
                                  children: i(`h3`, {
                                    className: `framer-styles-preset-bn74vv`,
                                    "data-styles-preset": `gTtZK0Q4d`,
                                    children: `10. Changes to these terms`,
                                  }),
                                }),
                                className: `framer-12jj42u`,
                                fonts: [`Inter`],
                                verticalAlignment: `top`,
                                withExternalLayout: !0,
                              }),
                              i(p, {
                                __fromCanvasComponent: !0,
                                children: s(c, {
                                  children: [
                                    i(`p`, {
                                      className: `framer-styles-preset-mpr3v6`,
                                      "data-styles-preset": `ECTXUYyOQ`,
                                      style: {
                                        "--framer-text-alignment": `left`,
                                        "--framer-text-color": `rgb(14, 28, 41)`,
                                      },
                                      children: `We may update these Terms from time to time. Any changes will be posted on this page with the new effective date.`,
                                    }),
                                    i(`p`, {
                                      className: `framer-styles-preset-mpr3v6`,
                                      "data-styles-preset": `ECTXUYyOQ`,
                                      style: {
                                        "--framer-text-alignment": `left`,
                                        "--framer-text-color": `rgb(14, 28, 41)`,
                                      },
                                      children: `Continued use of the service after changes means you accept the updated terms.`,
                                    }),
                                  ],
                                }),
                                className: `framer-155el8o`,
                                fonts: [`Inter`],
                                verticalAlignment: `top`,
                                withExternalLayout: !0,
                              }),
                            ],
                          }),
                          s(`div`, {
                            className: `framer-1skvint`,
                            "data-framer-name": `Text Container`,
                            children: [
                              i(`div`, {
                                className: `framer-1cdiems`,
                                "data-framer-name": `Separator Line`,
                                children: i(m, {
                                  className: `framer-12eus9x`,
                                  "data-framer-name": `Separator Line`,
                                  opacity: 0.5,
                                  svg: `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 1 2"><path d="M 0.001 0.5 L 1.001 0.5" fill="transparent" stroke="rgba(NaN,NaN,NaN,0.3)" stroke-miterlimit="10" stroke-dasharray=""></path></svg>`,
                                  svgContentId: 10875031224,
                                  withExternalLayout: !0,
                                }),
                              }),
                              i(p, {
                                __fromCanvasComponent: !0,
                                children: i(c, {
                                  children: i(`h3`, {
                                    className: `framer-styles-preset-bn74vv`,
                                    "data-styles-preset": `gTtZK0Q4d`,
                                    children: `11. Governing law`,
                                  }),
                                }),
                                className: `framer-p9sbhc`,
                                fonts: [`Inter`],
                                verticalAlignment: `top`,
                                withExternalLayout: !0,
                              }),
                              i(p, {
                                __fromCanvasComponent: !0,
                                children: s(c, {
                                  children: [
                                    i(`p`, {
                                      className: `framer-styles-preset-mpr3v6`,
                                      "data-styles-preset": `ECTXUYyOQ`,
                                      style: {
                                        "--framer-text-alignment": `left`,
                                        "--framer-text-color": `rgb(14, 28, 41)`,
                                      },
                                      children: `These Terms are governed by the laws of England and Wales. Any disputes will be subject to the jurisdiction of SA courts.`,
                                    }),
                                    i(`p`, {
                                      className: `framer-styles-preset-mpr3v6`,
                                      "data-styles-preset": `ECTXUYyOQ`,
                                      style: {
                                        "--framer-text-alignment": `left`,
                                        "--framer-text-color": `rgb(14, 28, 41)`,
                                      },
                                      children: `⸻`,
                                    }),
                                    i(`p`, {
                                      className: `framer-styles-preset-mpr3v6`,
                                      "data-styles-preset": `ECTXUYyOQ`,
                                      style: {
                                        "--framer-text-alignment": `left`,
                                        "--framer-text-color": `rgb(14, 28, 41)`,
                                      },
                                      children: `Thank you for choosing Gerbo.`,
                                    }),
                                    i(`p`, {
                                      className: `framer-styles-preset-mpr3v6`,
                                      "data-styles-preset": `ECTXUYyOQ`,
                                      style: {
                                        "--framer-text-alignment": `left`,
                                        "--framer-text-color": `rgb(14, 28, 41)`,
                                      },
                                      children: `We’re here to help your business sound more professional, even when you’re unavailable.`,
                                    }),
                                  ],
                                }),
                                className: `framer-ggbj8`,
                                fonts: [`Inter`],
                                verticalAlignment: `top`,
                                withExternalLayout: !0,
                              }),
                            ],
                          }),
                        ],
                      }),
                    }),
                    i(f, {
                      breakpoint: D,
                      overrides: {
                        bVr834Nr_: { y: (v?.y || 0) + 0 + 13279.4 },
                      },
                      children: i(u, {
                        height: 306,
                        width: v?.width || `100vw`,
                        y: (v?.y || 0) + 0 + 11555.4,
                        children: i(d, {
                          className: `framer-qrgatb-container`,
                          id: N,
                          nodeId: `s3TBLbAss`,
                          ref: P,
                          scopeId: `I7UNmcwR8`,
                          children: i(f, {
                            breakpoint: D,
                            overrides: {
                              bVr834Nr_: { variant: `pOmGhkHnU` },
                              wQW0TXPmh: { variant: `zGNwQKXPE` },
                            },
                            children: i(T, {
                              height: `100%`,
                              id: `s3TBLbAss`,
                              layoutId: `s3TBLbAss`,
                              style: { width: `100%` },
                              variant: `EbpapWQsU`,
                              width: `100%`,
                            }),
                          }),
                        }),
                      }),
                    }),
                    i(u, {
                      children: i(d, {
                        className: `framer-1kl6kj6-container`,
                        isAuthoredByUser: !0,
                        isModuleExternal: !0,
                        nodeId: `qdgXpsNbb`,
                        scopeId: `I7UNmcwR8`,
                        children: i(O, {
                          height: `100%`,
                          id: `qdgXpsNbb`,
                          intensity: 10,
                          layoutId: `qdgXpsNbb`,
                          width: `100%`,
                        }),
                      }),
                    }),
                  ],
                }),
                i(`div`, { id: `overlay` }),
              ],
            }),
          })
        );
      })),
      (Z = [
        `@supports (aspect-ratio: 1) { body { --framer-aspect-ratio-supported: auto; } }`,
        `.framer-EGSwy.framer-rfb5ts, .framer-EGSwy .framer-rfb5ts { display: block; }`,
        `.framer-EGSwy.framer-tuemzh { align-content: center; align-items: center; background-color: var(--token-781d11f5-bf5d-4746-9aec-b794f5ae2c6e, #d8dfe5); display: flex; flex-direction: column; flex-wrap: nowrap; gap: 0px; height: min-content; justify-content: flex-start; overflow: hidden; padding: 0px; position: relative; width: 1200px; }`,
        `.framer-EGSwy .framer-167h72g-container { flex: none; height: auto; left: 50%; position: fixed; top: 10px; transform: translateX(-50%); width: auto; z-index: 9; }`,
        `.framer-EGSwy .framer-1jsti2g { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: center; overflow: hidden; padding: 200px 40px 100px 40px; position: relative; width: 100%; }`,
        `.framer-EGSwy .framer-veockt { align-content: flex-start; align-items: flex-start; display: flex; flex: 1 0 0px; flex-direction: column; flex-wrap: nowrap; gap: 80px; height: min-content; justify-content: flex-start; max-width: 1000px; padding: 0px; position: relative; width: 1px; }`,
        `.framer-EGSwy .framer-1kux9wo { align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 20px; height: min-content; justify-content: center; overflow: hidden; padding: 0px; position: relative; width: 100%; }`,
        `.framer-EGSwy .framer-2p48ko { align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 24px; height: min-content; justify-content: center; overflow: hidden; padding: 0px; position: relative; width: 100%; }`,
        `.framer-EGSwy .framer-1g13c5e { flex: none; height: auto; position: relative; white-space: pre-wrap; width: 100%; word-break: break-word; word-wrap: break-word; }`,
        `.framer-EGSwy .framer-jtgqzb { flex: none; height: auto; opacity: 0.8; position: relative; white-space: pre-wrap; width: 100%; word-break: break-word; word-wrap: break-word; }`,
        `.framer-EGSwy .framer-plh22e, .framer-EGSwy .framer-15cta2m, .framer-EGSwy .framer-luha1t, .framer-EGSwy .framer-1r41cyz, .framer-EGSwy .framer-yyinzc, .framer-EGSwy .framer-grbtg8, .framer-EGSwy .framer-fg8bip, .framer-EGSwy .framer-1h5wtt5, .framer-EGSwy .framer-1g5w761, .framer-EGSwy .framer-xyz4n7, .framer-EGSwy .framer-5iuoai, .framer-EGSwy .framer-1e7f6l1, .framer-EGSwy .framer-url9lw, .framer-EGSwy .framer-1ivy88y, .framer-EGSwy .framer-10vfi23, .framer-EGSwy .framer-155ldam, .framer-EGSwy .framer-1xh02nq, .framer-EGSwy .framer-ubgg1z, .framer-EGSwy .framer-1hkv72y, .framer-EGSwy .framer-12jj42u, .framer-EGSwy .framer-155el8o, .framer-EGSwy .framer-p9sbhc, .framer-EGSwy .framer-ggbj8 { --framer-link-text-color: #0099ff; --framer-link-text-decoration: underline; flex: none; height: auto; position: relative; white-space: pre-wrap; width: 100%; word-break: break-word; word-wrap: break-word; }`,
        `.framer-EGSwy .framer-jnuf9i, .framer-EGSwy .framer-1b4m54r, .framer-EGSwy .framer-ddx65t, .framer-EGSwy .framer-7rhywi, .framer-EGSwy .framer-15yacy4, .framer-EGSwy .framer-e18v20, .framer-EGSwy .framer-1fqxlhq, .framer-EGSwy .framer-jlqn2e, .framer-EGSwy .framer-yo6462, .framer-EGSwy .framer-t6foez, .framer-EGSwy .framer-1skvint { align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: center; overflow: hidden; padding: 0px; position: relative; width: 100%; }`,
        `.framer-EGSwy .framer-15k87ro, .framer-EGSwy .framer-d9k6b9, .framer-EGSwy .framer-1t7gv5w, .framer-EGSwy .framer-2mzz2t, .framer-EGSwy .framer-vl7liz, .framer-EGSwy .framer-14023q2, .framer-EGSwy .framer-6f5v5f, .framer-EGSwy .framer-4a1lam, .framer-EGSwy .framer-1c3rnzb, .framer-EGSwy .framer-1q7r4b5, .framer-EGSwy .framer-1cdiems { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: 3px; justify-content: center; overflow: hidden; padding: 0px; position: relative; width: 100%; z-index: 1; }`,
        `.framer-EGSwy .framer-ae3255, .framer-EGSwy .framer-gl1tf6, .framer-EGSwy .framer-k1o990, .framer-EGSwy .framer-fmjdky, .framer-EGSwy .framer-53qiyq, .framer-EGSwy .framer-1b7v8xq, .framer-EGSwy .framer-em659x, .framer-EGSwy .framer-m2rez9, .framer-EGSwy .framer-4q233m, .framer-EGSwy .framer-12ud6aa, .framer-EGSwy .framer-12eus9x { background-color: var(--token-c630804f-5e50-4893-b680-27b64d932590, rgba(94, 120, 143, 0.5)); flex: 1 0 0px; height: 2px; opacity: 0.5; position: relative; width: 1px; }`,
        `.framer-EGSwy .framer-qrgatb-container { flex: none; height: auto; position: relative; width: 100%; z-index: 1; }`,
        `.framer-EGSwy .framer-1kl6kj6-container { flex: none; height: auto; position: relative; width: auto; }`,
        ...k,
        ...A,
        ...L,
        ...pe,
        `@media (min-width: 810px) and (max-width: 1199px) { .framer-EGSwy.framer-tuemzh { width: 810px; }}`,
        `@media (max-width: 809px) { .framer-EGSwy.framer-tuemzh { width: 390px; } .framer-EGSwy .framer-167h72g-container { left: 10px; right: 10px; transform: unset; width: unset; } .framer-EGSwy .framer-1jsti2g { padding: 160px 20px 100px 20px; }}`,
      ]),
      (Q = S(X, Z, `framer-EGSwy`)),
      (Q.displayName = `Privacy`),
      (Q.defaultProps = { height: 5102.8, width: 1200 }),
      h(
        Q,
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
          ...z,
          ...V,
          ...H,
          ...v(j),
          ...v(M),
          ...v(R),
          ...v(me),
        ],
        { supportsExplicitInterCodegen: !0 },
      ),
      ($ = {
        exports: {
          Props: {
            type: `tsType`,
            annotations: { framerContractVersion: `1` },
          },
          default: {
            type: `reactComponent`,
            name: `FramerI7UNmcwR8`,
            slots: [],
            annotations: {
              framerScrollSections: `{"diFu9uNuc":{"pattern":":diFu9uNuc","name":"header"},"s3TBLbAss":{"pattern":":s3TBLbAss","name":"footer"}}`,
              framerAcceptsLayoutTemplate: `true`,
              framerDisplayContentsDiv: `false`,
              framerColorSyntax: `true`,
              framerImmutableVariables: `true`,
              framerComponentViewportWidth: `true`,
              framerIntrinsicHeight: `5102.8`,
              framerAutoSizeImages: `true`,
              framerResponsiveScreen: ``,
              framerContractVersion: `1`,
              framerCanvasComponentVariantDetails: `{"propertyName":"variant","data":{"default":{"layout":["fixed","auto"]},"wQW0TXPmh":{"layout":["fixed","auto"]},"bVr834Nr_":{"layout":["fixed","auto"]}}}`,
              framerIntrinsicWidth: `1200`,
            },
          },
          __FramerMetadata__: { type: `variable` },
        },
      });
  });
ve();
export { $ as __FramerMetadata__, Q as default };
//# sourceMappingURL=3TC8FYzE-3sjmA2SILWUHZcYsP6IQCDg5_A4zXkQ0N4.CV0b24rs.mjs.map

import i18next from "i18next";

const resources = {
  en: {
    translation: {
      HELLO: "Hello World",
      level1: {
        level2Key1: "Key 1",
        level2Key2: "Key 2",
      },
      name_label: "Name Label",
      "RESOURCES_MARKETING-TOOLS_CARDS": [
        {
          IMAGE:
            "https://cdn0.capterra-static.com/assets/images/marketing-tools/new_bid_calc.webp",
          HEADING: "PPC Bid Calculator",
          PARA: "Find the maximum bid you should pay for a click in any of your ad channels, based on your specific business goals and metrics.",
          ACTION: "Get Started",
          LINK: "https://digital-markets.gartner.com/ppc-calculator",
        },
        {
          IMAGE:
            "https://cdn0.capterra-static.com/assets/images/marketing-tools/new_optimize_lp.webp",
          HEADING: "Landing Page Optimization",
          PARA: "A landing page is a standalone website dedicated to converting traffic to leads for a specific marketing campaign. Follow these 6 steps to increase your conversion rates and get more leads.",
          ACTION: "Get the Tips",
          LINK: "https://www.gartner.com/ngw/globalassets/en/digital-markets/documents/landing-page-infographic.pdf",
        },
      ],
      error: {
        404: "Not Found!",
        unknown: "Something went wrong! Please try later",
      },
      message: "{{what}} is {{- how}}",
      row_one: "row",
      row_other: "rows",
      rowsAffected: '{{count}} $t(row, {"count": {{count}}}) affected',
      rowsAffected_zero: "No $t(row_other) affected",
      cost: "The cost is {{cost, number(maximumFractionDigits: 2)}} {{when, uppercase}}",
      amount: "The total amount is {{amount, currency(INR)}}",
      registerDate: "The registered date is {{registerDate, datetime}}",
    },
    common: {
      name_label: "Namee Labelee",
      SAVE: "save",
      CANCEL: "cancel",
    },
  },
  fr: {
    translation: {
      HELLO: "Hola Amigos!",
      level1: {
        level2Key1: "Keye 1",
        level2Key2: "Keye 2",
      },
    },
  },
};

i18next.init({
  lng: "en",
  fallbackLng: "en",
  fallbackNS: "common",
  resources,
  returnObjects: true,
  interpolation: { escapeValue: false },
});

i18next.services.formatter?.add("uppercase", (value, lng, options) =>
  value.toUpperCase()
);

console.log(i18next.t("HELLO"));
console.log(i18next.t("HELLO", { lng: "fr" }));
console.log(i18next.t("RESOURCES_MARKETING-TOOLS_CARDS.1.HEADING"));

interface CardType {
  IMAGE: string;
  HEADING: string;
  PARA: string;
  ACTION: string;
  LINK: string;
}

const card2: CardType = i18next.t(
  "RESOURCES_MARKETING-TOOLS_CARDS"
)[1] as unknown as CardType;

console.log(card2.HEADING);

console.log(i18next.t("name_label", { ns: "common" }));
console.log(i18next.t("common:name_label"));
console.log(i18next.t("SAVE"));

const code = 403;
console.log(i18next.t([`error.${code}`, "error.unknown"]));

console.log(i18next.t("message", { what: "React", how: "awesome" }));
console.log(i18next.t("rowsAffected", { count: 10 }));
console.log(i18next.t("row", { count: 2 }));

console.log(
  i18next.t("message", {
    what: "React",
    how: "<i>awesome</i>",
    // interpolation: { escapeValue: false },
  })
);

console.log(i18next.t("cost", { cost: 12000.3456, when: "today" }));
console.log(i18next.t("amount", { amount: 1205600.3456 }));
console.log(
  i18next.t("registerDate", {
    registerDate: new Date("03/06/1993"),
    formatParams: {
      registerDate: {
        weekday: "long",
        year: "numeric",
        month: "long",
        day: "numeric",
      },
    },
  })
);

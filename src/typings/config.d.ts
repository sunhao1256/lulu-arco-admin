interface Config {
  theme: ThemeConfig.Config;
  locales: any;
}

declare namespace CurrencyConfig {
  interface Currency {
    label: string;
    decimalDigits: number;
    decimalSeparator: string;
    thousandsSeparator: string;
    currencySymbol: string;
    currencySymbolNumberOfSpaces: number;
    currencySymbolPosition: string;
  }

  interface Config {
    currency: Currency;
    availableCurrencies: Currency[];
  }
}

declare namespace ThemeConfig {
  interface Config {
    primary: string;
    // follow OS theme
    followOs: boolean;

    darkMode: boolean;

    menuWidth: number;
  }
}

declare namespace NavigationConfig {
  interface Menu {
    icon?: string;
    key?: string;
    text?: string;
    link?: string;
    regex?: RegExp;
    disabled?: boolean;
    items?: NonNullable<Menu[]>;
  }

  interface Config {
    menu: Menu[];
    footer: Footer[];
  }

  interface Footer {
    text?: string;
    key: string;
    href?: string;
    target?: string;
  }
}

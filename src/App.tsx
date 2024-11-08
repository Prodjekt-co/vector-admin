import { merge } from "lodash";
import polyglotI18nProvider from "ra-i18n-polyglot";

import { Admin, CustomRoutes, Resource, resolveBrowserLocale } from "react-admin";
import { Route } from "react-router-dom";

import { ImportFeature } from "./components/ImportFeature";
import germanMessages from "./i18n/de";
import englishMessages from "./i18n/en";
import spanishMessages from "./i18n/es";
import frenchMessages from "./i18n/fr";
import italianMessages from "./i18n/it";
import russianMessages from "./i18n/ru";
import chineseMessages from "./i18n/zh";
import LoginPage from "./pages/LoginPage";
import destinations from "./resources/destinations";
import registrationToken from "./resources/registration_tokens";
import reports from "./resources/reports";
import roomDirectory from "./resources/room_directory";
import rooms from "./resources/rooms";
import userMediaStats from "./resources/user_media_statistics";
import users from "./resources/users";
import authProvider from "./synapse/authProvider";
import dataProvider from "./synapse/dataProvider";

// TODO: Can we use lazy loading together with browser locale?
const messages = {
  de: germanMessages,
  en: englishMessages,
  fr: frenchMessages,
  it: italianMessages,
  ru: russianMessages,
  zh: chineseMessages,
  es: spanishMessages,  // Add Spanish
};
const i18nProvider = polyglotI18nProvider(
  locale => (messages[locale] ? merge({}, messages.en, messages[locale]) : messages.en),
  resolveBrowserLocale(),
  [
    { locale: "en", name: "English" },
    { locale: "de", name: "Deutsch" },
    { locale: "fr", name: "Français" },
    { locale: "it", name: "Italiano" },
    { locale: "fa", name: "Persian(فارسی)" },
    { locale: "ru", name: "Russian(Русский)" },
    { locale: "zh", name: "简体中文" },
    { locale: "es", name: "Español" },  // Add Spanish
  ]
);

const darkTheme = {
  palette: {
    mode: 'dark',
    background: {
      default: '#303030',
      paper: '#424242',
    },
    primary: {
      main: '#F99093FF',
    },
    secondary: {
      main: '#CFF48FFF',
    },
  },
};

const App = () => (
  <Admin
    disableTelemetry
    requireAuth
    loginPage={LoginPage}
    authProvider={authProvider}
    dataProvider={dataProvider}
    i18nProvider={i18nProvider}
    darkTheme={{ palette: { mode: "dark" } }}
    theme={darkTheme}       // Changed this line
  >
    <CustomRoutes>
      <Route path="/import_users" element={<ImportFeature />} />
    </CustomRoutes>
    <Resource {...users} />
    <Resource {...rooms} />
    <Resource {...userMediaStats} />
    <Resource {...reports} />
    <Resource {...roomDirectory} />
    <Resource {...destinations} />
    <Resource {...registrationToken} />
    <Resource name="connections" />
    <Resource name="devices" />
    <Resource name="room_members" />
    <Resource name="users_media" />
    <Resource name="joined_rooms" />
    <Resource name="pushers" />
    <Resource name="servernotices" />
    <Resource name="forward_extremities" />
    <Resource name="room_state" />
    <Resource name="destination_rooms" />
  </Admin>
);

export default App;

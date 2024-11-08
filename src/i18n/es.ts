import spanishMessages from "ra-language-spanish"; // Note: you'll need to install this package

import { SynapseTranslationMessages } from ".";

const es: SynapseTranslationMessages = {
  ...spanishMessages,
  synapseadmin: {
    auth: {
      base_url: "URL del servidor",
      welcome: "Bienvenido a Vector Admin",
      server_version: "Versión del servidor",
      supports_specs: "soporta especificaciones Matrix",
      username_error: "Por favor ingrese un ID de usuario completo: '@usuario:dominio'",
      protocol_error: "La URL debe comenzar con 'http://' o 'https://'",
      url_error: "URL del servidor Matrix no válida",
      sso_sign_in: "Iniciar sesión con SSO",
    },
    users: {
      invalid_user_id: "ID de usuario local Matrix sin servidor.",
      tabs: { sso: "SSO" },
    },
    rooms: {
      details: "Detalles de la sala",
      tabs: {
        basic: "Básico",
        members: "Miembros",
        detail: "Detalles",
        permission: "Permisos",
      },
    },
    reports: { tabs: { basic: "Básico", detail: "Detalles" } },
  },
  resources: {
    users: {
      name: "Usuario |||| Usuarios",
      email: "Correo",
      msisdn: "Teléfono",
      threepid: "Correo / Teléfono",
      fields: {
        avatar: "Avatar",
        id: "ID de Usuario",
        name: "Nombre",
        is_guest: "Invitado",
        admin: "Administrador",
        deactivated: "Desactivado",
        guests: "Mostrar invitados",
        show_deactivated: "Mostrar usuarios desactivados",
        user_id: "Buscar usuario",
        displayname: "Nombre visible",
        password: "Contraseña",
        avatar_url: "URL del Avatar",
        medium: "Medio",
        threepids: "3PIDs",
        address: "Dirección",
        creation_ts_ms: "Fecha de creación",
        consent_version: "Versión del consentimiento",
        auth_provider: "Proveedor",
        user_type: "Tipo de usuario",
      },
      helper: {
        password: "Cambiar la contraseña cerrará todas las sesiones del usuario.",
        deactivate: "Debe proporcionar una contraseña para reactivar la cuenta.",
        erase: "Marcar al usuario como borrado según GDPR",
      },
    },
    rooms: {
      name: "Sala |||| Salas",
      fields: {
        room_id: "ID de Sala",
        name: "Nombre",
        canonical_alias: "Alias",
        joined_members: "Miembros",
        joined_local_members: "Miembros locales",
        state_events: "Eventos de estado",
        version: "Versión",
        is_encrypted: "Encriptado",
        encryption: "Encriptación",
        federatable: "Federado",
        public: "Visible en directorio",
        creator: "Creador",
        join_rules: "Reglas de unión",
        guest_access: "Acceso de invitados",
        history_visibility: "Visibilidad del historial",
      },
      enums: {
        join_rules: {
          public: "Público",
          knock: "Solicitar",
          invite: "Invitación",
          private: "Privado",
        },
        guest_access: {
          can_join: "Los invitados pueden unirse",
          forbidden: "Los invitados no pueden unirse",
        },
        history_visibility: {
          invited: "Desde invitación",
          joined: "Desde unión",
          shared: "Desde compartido",
          world_readable: "Cualquiera",
        },
        unencrypted: "Sin encriptar",
      },
    },
  },
};

export default es;

import spanishMessages from "ra-language-spanish";

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
      invalid_user_id: "ID de usuario local Matrix sin servidor",
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
  import_users: {
    error: {
      at_entry: "En la entrada %{entry}: %{message}",
      error: "Error",
      required_field: "El campo requerido '%{field}' no está presente",
      invalid_value: "Valor inválido en la línea %{row}. El campo '%{field}' solo puede ser 'true' o 'false'",
      unreasonably_big: "Se rechazó cargar un archivo demasiado grande de %{size} megabytes",
      already_in_progress: "Ya hay una importación en proceso",
      id_exits: "ID %{id} ya existe",
    },
    title: "Importar usuarios via CSV",
    goToPdf: "Ir al PDF",
    cards: {
      importstats: {
        header: "Importar usuarios",
        users_total: "%{smart_count} usuario en archivo CSV |||| %{smart_count} usuarios en archivo CSV",
        guest_count: "%{smart_count} invitado |||| %{smart_count} invitados",
        admin_count: "%{smart_count} administrador |||| %{smart_count} administradores",
      },
      conflicts: {
        header: "Estrategia de conflictos",
        mode: {
          stop: "Detener en conflicto",
          skip: "Mostrar error y saltar en conflicto",
        },
      },
      ids: {
        header: "IDs",
        all_ids_present: "IDs presentes en cada entrada",
        count_ids_present: "%{smart_count} entrada con ID |||| %{smart_count} entradas con IDs",
        mode: {
          ignore: "Ignorar IDs en CSV y crear nuevos",
          update: "Actualizar registros existentes",
        },
      },
      passwords: {
        header: "Contraseñas",
        all_passwords_present: "Contraseñas presentes en cada entrada",
        count_passwords_present: "%{smart_count} entrada con contraseña |||| %{smart_count} entradas con contraseñas",
        use_passwords: "Usar contraseñas del CSV",
      },
      upload: {
        header: "Archivo CSV de entrada",
        explanation: "Aquí puede cargar un archivo con valores separados por comas que se procesará para crear o actualizar usuarios. El archivo debe incluir los campos 'id' y 'displayname'. Puede descargar y adaptar un archivo de ejemplo aquí: ",
      },
      startImport: {
        simulate_only: "Solo simular",
        run_import: "Importar",
      },
      results: {
        header: "Resultados de la importación",
        total: "%{smart_count} entrada en total |||| %{smart_count} entradas en total",
        successful: "%{smart_count} entradas importadas exitosamente",
        skipped: "%{smart_count} entradas omitidas",
        download_skipped: "Descargar registros omitidos",
        with_error: "%{smart_count} entrada con errores |||| %{smart_count} entradas con errores",
        simulated_only: "La ejecución fue solo simulada",
      },
    },
  },
  delete_media: {
    name: "Medios",
    fields: {
      before_ts: "último acceso antes de",
      size_gt: "Mayor que (en bytes)",
      keep_profiles: "Mantener imágenes de perfil",
    },
    action: {
      send: "Eliminar medios",
      send_success: "Solicitud enviada exitosamente.",
      send_failure: "Ha ocurrido un error.",
    },
    helper: {
      send: "Esta API elimina los medios locales del disco de su servidor. Esto incluye miniaturas locales y copias de medios descargados. Esta API no afectará a los medios que se han subido a repositorios externos.",
    },
  },
  resources: {
    users: {
      name: "Usuario |||| Usuarios",
      email: "Correo electrónico",
      msisdn: "Teléfono",
      threepid: "Correo / Teléfono",
      fields: {
        avatar: "Avatar",
        id: "ID de Usuario",
        name: "Nombre",
        is_guest: "Invitado",
        admin: "Administrador del Servidor",
        locked: "Bloqueado",
        deactivated: "Desactivado",
        erased: "Borrado",
        guests: "Mostrar invitados",
        show_deactivated: "Mostrar usuarios desactivados",
        user_id: "Buscar usuario",
        displayname: "Nombre visible",
        password: "Contraseña",
        avatar_url: "URL del Avatar",
        avatar_src: "Avatar",
        medium: "Medio",
        threepids: "3PIDs",
        address: "Dirección",
        creation_ts_ms: "Fecha de creación",
        consent_version: "Versión de consentimiento",
        auth_provider: "Proveedor",
        user_type: "Tipo de usuario",
      },
      helper: {
        password: "Cambiar la contraseña cerrará todas las sesiones del usuario.",
        deactivate: "Debe proporcionar una contraseña para reactivar la cuenta.",
        erase: "Marcar al usuario como borrado según GDPR",
      },
      action: {
        erase: "Borrar datos de usuario",
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
        joined_local_devices: "Dispositivos locales",
        state_events: "Eventos de estado / Complejidad",
        version: "Versión",
        is_encrypted: "Encriptado",
        encryption: "Encriptación",
        federatable: "Federado",
        public: "Visible en directorio",
        creator: "Creador",
        join_rules: "Reglas de unión",
        guest_access: "Acceso de invitados",
        history_visibility: "Visibilidad del historial",
        topic: "Tema",
        avatar: "Avatar",
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
      action: {
        erase: {
          title: "Eliminar sala",
          content: "¿Está seguro de que desea eliminar la sala? Esto no se puede deshacer. ¡Todos los mensajes y medios compartidos en la sala serán eliminados del servidor!",
        },
      },
    },
    // ... More translations follow the same pattern
  },
};

export default es;

import spanishMessages from "ra-language-spanish";

import { SynapseTranslationMessages } from ".";

const es: SynapseTranslationMessages = {
  ...spanishMessages,
  synapseadmin: {
    auth: {
      base_url: "URL del servidor base",
      welcome: "Bienvenido a Synapse-admin",
      server_version: "Versión de Synapse",
      supports_specs: "soporta especificaciones Matrix",
      username_error: "Por favor, ingrese un ID de usuario completo: '@usuario:dominio'",
      protocol_error: "La URL debe comenzar con 'http://' o 'https://'",
      url_error: "No es una URL válida del servidor Matrix",
      sso_sign_in: "Iniciar sesión con SSO",
    },
    users: {
      invalid_user_id: "Parte local de un ID de usuario Matrix sin servidor base.",
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
      unreasonably_big: "Se rechazó cargar un archivo excesivamente grande de %{size} megabytes",
      already_in_progress: "Ya hay una importación en proceso",
      id_exits: "ID %{id} ya existe",
    },
    title: "Importar usuarios mediante CSV",
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
          skip: "Mostrar error y omitir en conflicto",
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
        explanation:
          "Aquí puede cargar un archivo con valores separados por comas que se procesa para crear o actualizar usuarios. El archivo debe incluir los campos 'id' y 'displayname'. Puede descargar y adaptar un archivo de ejemplo aquí: ",
      },
      startImport: {
        simulate_only: "Solo simular",
        run_import: "Importar",
      },
      results: {
        header: "Resultados de importación",
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
      send: "Esta API elimina los medios locales del disco de su propio servidor. Esto incluye cualquier miniatura local y copias de medios descargados. Esta API no afectará a los medios que se han subido a repositorios de medios externos.",
    },
  },
  resources: {
    users: {
      name: "Usuario |||| Usuarios",
      email: "Correo electrónico",
      msisdn: "Teléfono",
      threepid: "Correo electrónico / Teléfono",
      fields: {
        avatar: "Avatar",
        id: "ID de usuario",
        name: "Nombre",
        is_guest: "Invitado",
        admin: "Administrador del servidor",
        locked: "Bloqueado",
        deactivated: "Desactivado",
        erased: "Borrado",
        guests: "Mostrar invitados",
        show_deactivated: "Mostrar usuarios desactivados",
        user_id: "Buscar usuario",
        displayname: "Nombre visible",
        password: "Contraseña",
        avatar_url: "URL del avatar",
        avatar_src: "Avatar",
        medium: "Medio",
        threepids: "3PIDs",
        address: "Dirección",
        creation_ts_ms: "Marca de tiempo de creación",
        consent_version: "Versión de consentimiento",
        auth_provider: "Proveedor",
        user_type: "Tipo de usuario",
      },
      helper: {
        password: "Cambiar la contraseña cerrará la sesión del usuario en todos los dispositivos.",
        deactivate: "Debe proporcionar una contraseña para reactivar una cuenta.",
        erase: "Marcar al usuario como borrado según GDPR",
      },
      action: {
        erase: "Borrar datos de usuario",
      },
    },
    rooms: {
      name: "Sala |||| Salas",
      fields: {
        room_id: "ID de sala",
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
        public: "Visible en directorio de salas",
        creator: "Creador",
        join_rules: "Reglas de unión",
        guest_access: "Acceso de invitados",
        history_visibility: "Visibilidad del historial",
        topic: "Tema",
        avatar: "Avatar",
      },
      helper: {
        forward_extremities:
          "Las extremidades hacia adelante son los eventos hoja al final de un Grafo Acíclico Dirigido (DAG) en una sala, también conocidos como eventos que no tienen hijos. Cuantos más existan en una sala, más resolución de estado necesitará realizar Synapse (pista: es una operación costosa). Si bien Synapse tiene código para evitar que existan demasiados al mismo tiempo en una sala, los errores a veces pueden hacer que vuelvan a aparecer. Si una sala tiene >10 extremidades hacia adelante, vale la pena verificar qué sala es la culpable y potencialmente eliminarlas usando las consultas SQL mencionadas en #1760.",
      },
      enums: {
        join_rules: {
          public: "Público",
          knock: "Tocar",
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
          content:
            "¿Está seguro de que desea eliminar la sala? Esto no se puede deshacer. ¡Todos los mensajes y medios compartidos en la sala se eliminarán del servidor!",
        },
      },
    },
    reports: {
      name: "Evento reportado |||| Eventos reportados",
      fields: {
        id: "ID",
        received_ts: "hora del reporte",
        user_id: "denunciante",
        name: "nombre de la sala",
        score: "puntuación",
        reason: "razón",
        event_id: "ID del evento",
        event_json: {
          origin: "servidor de origen",
          origin_server_ts: "hora de envío",
          type: "tipo de evento",
          content: {
            msgtype: "tipo de contenido",
            body: "contenido",
            format: "formato",
            formatted_body: "contenido formateado",
            algorithm: "algoritmo",
            url: "URL",
            info: {
              mimetype: "Tipo",
            },
          },
        },
      },
      action: {
        erase: {
          title: "Eliminar evento reportado",
          content: "¿Está seguro de que desea eliminar el evento reportado? Esto no se puede deshacer.",
        },
      },
    },
    connections: {
      name: "Conexiones",
      fields: {
        last_seen: "Fecha",
        ip: "Dirección IP",
        user_agent: "Agente de usuario",
      },
    },
    devices: {
      name: "Dispositivo |||| Dispositivos",
      fields: {
        device_id: "ID de dispositivo",
        display_name: "Nombre del dispositivo",
        last_seen_ts: "Marca de tiempo",
        last_seen_ip: "Dirección IP",
      },
      action: {
        erase: {
          title: "Eliminando %{id}",
          content: '¿Está seguro de que desea eliminar el dispositivo "%{name}"?',
          success: "Dispositivo eliminado exitosamente.",
          failure: "Ha ocurrido un error.",
        },
      },
    },
    users_media: {
      name: "Medios",
      fields: {
        media_id: "ID de medio",
        media_length: "Tamaño de archivo (en bytes)",
        media_type: "Tipo",
        upload_name: "Nombre de archivo",
        quarantined_by: "En cuarentena por",
        safe_from_quarantine: "Seguro de cuarentena",
        created_ts: "Creado",
        last_access_ts: "Último acceso",
      },
      action: {
        open: "Abrir archivo multimedia en nueva ventana",
      },
    },
    protect_media: {
      action: {
        create: "Sin protección, crear protección",
        delete: "Protegido, eliminar protección",
        none: "En cuarentena",
        send_success: "Estado de protección cambiado exitosamente.",
        send_failure: "Ha ocurrido un error.",
      },
    },
    quarantine_media: {
      action: {
        name: "Cuarentena",
        create: "Agregar a cuarentena",
        delete: "En cuarentena, quitar de cuarentena",
        none: "Protegido de cuarentena",
        send_success: "Estado de cuarentena cambiado exitosamente.",
        send_failure: "Ha ocurrido un error.",
      },
    },
    pushers: {
      name: "Notificador |||| Notificadores",
      fields: {
        app: "Aplicación",
        app_display_name: "Nombre visible de la aplicación",
        app_id: "ID de aplicación",
        device_display_name: "Nombre visible del dispositivo",
        kind: "Tipo",
        lang: "Idioma",
        profile_tag: "Etiqueta de perfil",
        pushkey: "Clave de notificación",
        data: { url: "URL" },
      },
    },
    servernotices: {
      name: "Avisos del servidor",
      send: "Enviar avisos del servidor",
      fields: {
        body: "Mensaje",
      },
      action: {
        send: "Enviar aviso",
        send_success: "Aviso del servidor enviado exitosamente.",
        send_failure: "Ha ocurrido un error.",
      },
      helper: {
        send: 'Envía un aviso del servidor a los usuarios seleccionados. La función "Avisos del servidor" debe estar activada en el servidor.',
      },
    },
    user_media_statistics: {
      name: "Medios de usuarios",
      fields: {
        media_count: "Cantidad de medios",
        media_length: "Tamaño de medios",
      },
    },
    forward_extremities: {
      name: "Extremidades hacia adelante",
      fields: {
        id: "ID del evento",
        received_ts: "Marca de tiempo",
        depth: "Profundidad",
        state_group: "Grupo de estado",
      },
    },
    room_state: {
      name: "Eventos de estado",
      fields: {
        type: "Tipo",
        content: "Contenido",
        origin_server_ts: "hora de envío",
        sender: "Remitente",
      },
    },
    room_directory: {
      name: "Directorio de salas",
      fields: {
        world_readable: "usuarios invitados pueden ver sin unirse",
        guest_can_join: "usuarios invitados pueden unirse",
      },
      action: {
        title: "Eliminar sala del directorio |||| Eliminar %{smart_count} salas del directorio",
        content:
          "¿Está seguro de que desea eliminar esta sala del directorio? |||| ¿Está seguro de que desea eliminar estas %{smart_count} salas del directorio?",
        erase: "Eliminar del directorio de salas",
        create: "Publicar en directorio de salas",
        send_success: "Sala publicada exitosamente.",
        send_failure: "Ha ocurrido un error.",
      },
    },
    destinations: {
      name: "Federación",
      fields: {
        destination: "Destino",
        failure_ts: "Marca de tiempo de fallo",
        retry_last_ts: "Marca de tiempo del último reintento",
        retry_interval: "Intervalo de reintento",
        last_successful_stream_ordering: "Último flujo exitoso",
        stream_ordering: "Flujo",
      },
      action: { reconnect: "Reconectar" },
    },
    registration_tokens: {
      name: "Tokens de registro",
      fields: {
        token: "Token",
        valid: "Token válido",
        uses_allowed: "Usos permitidos",
        pending: "Pendiente",
        completed: "Completado",
        expiry_time: "Tiempo de expiración",
        length: "Longitud",
      },
      helper: { length: "Longitud del token si no se proporciona ningún token." },
    },
  },
};
export default es;

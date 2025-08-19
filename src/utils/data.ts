import visibilityDilemma from "../assets/images/visibility-dilemma.jpg";
import engagementGap from "../assets/images/engagement-gap.jpg";
import resultsInHibernation from "../assets/images/results-in-hibernation.jpg";

const services = [
  {
    title: "Precision TargetingGestión de Ventas y Pagos",
    features: [
      "Emisión de recibos impresos o digitales.",
      "Funcionalidades de caja registradora",
    ],
    icon: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" stroke-width="1.5" fill="currentColor" class="w-6 h-6"><path d="M256 0c17.7 0 32 14.3 32 32V42.4c93.7 13.9 167.7 88 181.6 181.6H480c17.7 0 32 14.3 32 32s-14.3 32-32 32H469.6c-13.9 93.7-88 167.7-181.6 181.6V480c0 17.7-14.3 32-32 32s-32-14.3-32-32V469.6C130.3 455.7 56.3 381.7 42.4 288H32c-17.7 0-32-14.3-32-32s14.3-32 32-32H42.4C56.3 130.3 130.3 56.3 224 42.4V32c0-17.7 14.3-32 32-32zM107.4 288c12.5 58.3 58.4 104.1 116.6 116.6V384c0-17.7 14.3-32 32-32s32 14.3 32 32v20.6c58.3-12.5 104.1-58.4 116.6-116.6H384c-17.7 0-32-14.3-32-32s14.3-32 32-32h20.6C392.1 165.7 346.3 119.9 288 107.4V128c0 17.7-14.3 32-32 32s-32-14.3-32-32V107.4C165.7 119.9 119.9 165.7 107.4 224H128c17.7 0 32 14.3 32 32s-14.3 32-32 32H107.4zM256 224a32 32 0 1 1 0 64 32 32 0 1 1 0-64z"/></svg>`,
  },
  {
    title: "Gestión de Inventario",
    features: [
      "Control de inventario en tiempo real",
      "Escaneo de códigos de barras para registrar productos.",
      "Actualizaciones automáticas de stock después de cada venta.",
      "Alertas de bajo inventario.",
    ],
    icon: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" stroke-width="1.5" fill="currentColor" class="w-6 h-6"><path d="M0 80v48c0 17.7 14.3 32 32 32H48 96V80c0-26.5-21.5-48-48-48S0 53.5 0 80zM112 32c10 13.4 16 30 16 48V384c0 35.3 28.7 64 64 64s64-28.7 64-64v-5.3c0-32.4 26.3-58.7 58.7-58.7H480V128c0-53-43-96-96-96H112zM464 480c61.9 0 112-50.1 112-112c0-8.8-7.2-16-16-16H314.7c-14.7 0-26.7 11.9-26.7 26.7V384c0 53-43 96-96 96H368h96z"/></svg>`,
  },
  {
    title: "Gestión de Clientes",
    features: [
      "Creación y gestión de bases de datos de clientes.",
      "Seguimiento del historial de compras.",
      "Implementación de programas de lealtad y recompensas.",
    ],
    icon: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" stroke-width="1.5" fill="currentColor" class="w-6 h-6"><path d="M64 64c0-17.7-14.3-32-32-32S0 46.3 0 64V400c0 44.2 35.8 80 80 80H480c17.7 0 32-14.3 32-32s-14.3-32-32-32H80c-8.8 0-16-7.2-16-16V64zm406.6 86.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L320 210.7l-57.4-57.4c-12.5-12.5-32.8-12.5-45.3 0l-112 112c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L240 221.3l57.4 57.4c12.5 12.5 32.8 12.5 45.3 0l128-128z"/></svg>`,
  },
  {
    title: "Informes y Análisis",
    features: [
      "Reportes de ventas detallados (por producto, empleado, hora, etc.).",
      "Análisis de desempeño del negocio.",
      "Seguimiento de pérdidas y ganancias.",
      "Acceso a datos en tiempo real para una toma de decisiones informada.",
    ],
    icon: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" stroke-width="1.5" fill="currentColor" class="w-6 h-6"><path d="M192 104.8c0-9.2-5.8-17.3-13.2-22.8C167.2 73.3 160 61.3 160 48c0-26.5 28.7-48 64-48s64 21.5 64 48c0 13.3-7.2 25.3-18.8 34c-7.4 5.5-13.2 13.6-13.2 22.8c0 12.8 10.4 23.2 23.2 23.2H336c26.5 0 48 21.5 48 48v56.8c0 12.8 10.4 23.2 23.2 23.2c9.2 0 17.3-5.8 22.8-13.2c8.7-11.6 20.7-18.8 34-18.8c26.5 0 48 28.7 48 64s-21.5 64-48 64c-13.3 0-25.3-7.2-34-18.8c-5.5-7.4-13.6-13.2-22.8-13.2c-12.8 0-23.2 10.4-23.2 23.2V464c0 26.5-21.5 48-48 48H279.2c-12.8 0-23.2-10.4-23.2-23.2c0-9.2 5.8-17.3 13.2-22.8c11.6-8.7 18.8-20.7 18.8-34c0-26.5-28.7-48-64-48s-64 21.5-64 48c0 13.3 7.2 25.3 18.8 34c7.4 5.5 13.2 13.6 13.2 22.8c0 12.8-10.4 23.2-23.2 23.2H48c-26.5 0-48-21.5-48-48V343.2C0 330.4 10.4 320 23.2 320c9.2 0 17.3 5.8 22.8 13.2C54.7 344.8 66.7 352 80 352c26.5 0 48-28.7 48-64s-21.5-64-48-64c-13.3 0-25.3 7.2-34 18.8C40.5 250.2 32.4 256 23.2 256C10.4 256 0 245.6 0 232.8V176c0-26.5 21.5-48 48-48H168.8c12.8 0 23.2-10.4 23.2-23.2z"/></svg>`,
  },
  {
    title: "Gestión de Empleados",
    features: [
      "Configuración de perfiles de usuario y permisos.",
      "Seguimiento de las horas de trabajo y las ventas por empleado.",
      "Gestión de turnos y horarios.",
    ],
    icon: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512" stroke-width="1.5" fill="currentColor" class="w-6 h-6"><path d="M544 248v3.3l69.7-69.7c21.9-21.9 21.9-57.3 0-79.2L535.6 24.4c-21.9-21.9-57.3-21.9-79.2 0L416.3 64.5c-2.7-.3-5.5-.5-8.3-.5H296c-37.1 0-67.6 28-71.6 64H224V248c0 22.1 17.9 40 40 40s40-17.9 40-40V176c0 0 0-.1 0-.1V160l16 0 136 0c0 0 0 0 .1 0H464c44.2 0 80 35.8 80 80v8zM336 192v56c0 39.8-32.2 72-72 72s-72-32.2-72-72V129.4c-35.9 6.2-65.8 32.3-76 68.2L99.5 255.2 26.3 328.4c-21.9 21.9-21.9 57.3 0 79.2l78.1 78.1c21.9 21.9 57.3 21.9 79.2 0l37.7-37.7c.9 0 1.8 .1 2.7 .1H384c26.5 0 48-21.5 48-48c0-5.6-1-11-2.7-16H432c26.5 0 48-21.5 48-48c0-12.8-5-24.4-13.2-33c25.7-5 45.1-27.6 45.2-54.8v-.4c-.1-30.8-25.1-55.8-56-55.8c0 0 0 0 0 0l-120 0z"/></svg>`,
  },
  {
    title: "Funcionalidades para Restaurantes y Cafés",
    features: [
      "Gestión de mesas y cuentas abiertas.",
      "Visualización de órdenes en cocina o barra.",
      "Pedidos móviles y remotos (a través de código QR).",
    ],
    icon: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" stroke-width="1.5" fill="currentColor" class="w-6 h-6"><path d="M464 256A208 208 0 1 0 48 256a208 208 0 1 0 416 0zM0 256a256 256 0 1 1 512 0A256 256 0 1 1 0 256zm306.7 69.1L162.4 380.6c-19.4 7.5-38.5-11.6-31-31l55.5-144.3c3.3-8.5 9.9-15.1 18.4-18.4l144.3-55.5c19.4-7.5 38.5 11.6 31 31L325.1 306.7c-3.2 8.5-9.9 15.1-18.4 18.4zM288 256a32 32 0 1 0 -64 0 32 32 0 1 0 64 0z"/></svg>`,
  },
];

const solutions = [
  {
    title: "Pérdida de tiempo y lentitud en el servicio",
    painPoint:
      "Las transacciones manuales, los cálculos con calculadora y la búsqueda de productos en listas impresas causan largas filas y frustración en los clientes.",
    agitatepainPoint:
      "Tiempos de espera prolongados que llevan a la pérdida de clientes y a una mala reputación. La ineficiencia en el punto de venta crea una experiencia de compra negativa, lo que reduce la posibilidad de que los clientes regresen.",
    solution:
      "Nexus Stores, agiliza el proceso de venta. Con un lector de códigos de barras, el registro de productos es instantáneo. Además, el cálculo de totales y la gestión de pagos se hacen en segundos, mejorando la experiencia del cliente y la rotación de ventas.",
    img: visibilityDilemma,
  },
  {
    title: "Falta de control de inventario",
    painPoint:
      "Sin un sistema automatizado, el control de inventario es impreciso, lo que lleva a la falta de stock de productos populares o al exceso de otros.",
    agitatepainPoint:
      "La pérdida de ventas cuando un producto popular no está disponible y la inmovilización de capital en productos que no tienen alta rotación. Esto afecta directamente la rentabilidad del negocio y la capacidad de satisfacer la demanda de los clientes.",
    solution:
      "Nexus Stores, actualiza el inventario en tiempo real con cada venta, lo que te permite saber exactamente qué productos tienes y cuándo necesitas reabastecerte. También puedes recibir alertas de stock bajo para evitar quiebres.",
    img: engagementGap,
  },
  {
    title: "Dificultad para analizar el rendimiento del negocio",
    painPoint:
      "Con registros en papel o en hojas de cálculo, es casi imposible obtener una visión clara del rendimiento de tu negocio. No puedes identificar fácilmente los productos más vendidos, las horas pico de venta o el desempeño de tus empleados.",
    agitatepainPoint:
      "Se toman decisiones basadas en suposiciones y no en datos, lo que puede resultar en estrategias de negocio ineficaces. Sin información detallada, es difícil optimizar el surtido de productos, los horarios de personal y las promociones.",
    solution:
      "Nexus Stores, genera informes y análisis detallados sobre ventas, inventario y productividad del personal. Tendrás acceso a datos valiosos que te permitirán tomar decisiones estratégicas para optimizar tu negocio y fomentar su crecimiento.",
    img: resultsInHibernation,
  },
  {
    title: "Errores humanos y discrepancias financieras",
    painPoint:
      "Las transacciones manuales son propensas a errores de cálculo, lo que puede llevar a discrepancias en la caja y problemas de contabilidad. La conciliación diaria de ventas es un proceso tedioso y complicado.",
    agitatepainPoint:
      "Pérdidas económicas por descuadres en el inventario y la caja. La falta de precisión en los registros financieros puede generar problemas contables y fiscales, consumiendo tiempo y recursos valiosos que podrían invertirse en otras áreas del negocio.",
    solution:
      "Nexus Stores, realiza todos los cálculos automáticamente y registra cada transacción de forma precisa. Esto minimiza los errores, facilita el cierre de caja y asegura que tus registros financieros sean exactos, dándote tranquilidad y seguridad.",
    img: resultsInHibernation,
  },
];

const faqs = [
  {
    question: "¿Qué es un sistema de Punto de Venta (POS) y por qué lo necesito?",
    answer:
      "Un sistema POS es una herramienta integral que va más allá de una simple caja registradora. Es la tecnología que te permite gestionar ventas, inventario, clientes y empleados de forma eficiente. Lo necesitas para eliminar errores manuales, ahorrar tiempo, obtener datos clave sobre el rendimiento de tu negocio y ofrecer una experiencia de compra más rápida y profesional a tus clientes.",
  },
  {
    question: "¿Mi negocio es muy pequeño. Realmente necesito un POS?",
    answer:
      "Absolutamente! Nexus Stores está diseñado específicamente para pequeñas empresas de retail, como abarrotes, panaderías y restaurantes pequeños. Muchos de los problemas de crecimiento, como la pérdida de control de inventario y la dificultad para analizar ventas, se vuelven más grandes a medida que tu negocio crece. Nuestro sistema te ayuda a sentar las bases para un crecimiento sólido, garantizando que tengas el control desde el primer día.",
  },
  {
    question: "¿Es difícil de usar e implementar un sistema como Nexus Stores?",
    answer:
      "No, en absoluto. Sabemos que el tiempo es tu recurso más valioso. Por eso, Nexus Stores se distingue por su interfaz intuitiva y fácil de usar, diseñada para que tú y tus empleados puedan empezar a operar de inmediato. A diferencia de otras soluciones complejas, nuestra implementación es rápida y nuestro soporte está siempre disponible para ayudarte con cualquier duda, para que te enfoques en lo que realmente importa: tu negocio.",
  },
  {
    question:
      "¿Cómo me ayuda Nexus Stores a competir con negocios más grandes?",
    answer:
      "Con Nexus Stores, obtienes las mismas funcionalidades de gestión y análisis que usan las grandes cadenas, pero a una escala y un precio pensados para ti. Nuestro sistema te permite tener un control de inventario preciso, conocer tus productos más vendidos, y gestionar a tus clientes de manera que puedas competir de forma más inteligente y efectiva en tu mercado.",
  },
  {
    question: "¿Qué diferencia a Nexus Stores de otros sistemas POS en el mercado?",
    answer:
      "Mientras que otros sistemas pueden ser genéricos o demasiado costosos, Nexus Stores se centra en las necesidades reales de los pequeños negocios de retail. No solo te ofrecemos las funciones esenciales de un POS, sino que nuestra solución está optimizada para industrias específicas como la tuya (abarrotes, panaderías, restaurantes pequeños). Además, nuestro servicio de atención al cliente está comprometido a ofrecerte el apoyo que necesitas para garantizar que obtengas el máximo provecho de tu inversión. Elegir Nexus Stores es elegir un aliado de confianza para el éxito de tu negocio.",
  },
  {
    question: "¿Qué tan seguro es un sistema POS para manejar la información de mis clientes?",
    answer:
      "En Nexus Stores, la seguridad es nuestra máxima prioridad. Nuestro sistema está diseñado con las últimas tecnologías de cifrado para proteger la información de tus transacciones y los datos de tus clientes. A diferencia de los métodos manuales, que son vulnerables, nuestro sistema te ayuda a cumplir con los estándares de seguridad de la industria, dándote tranquilidad a ti y a tus clientes.",
  },
  {
    question: "¿Cuál es el costo de un sistema POS? ¿No es demasiado caro para un pequeño negocio?",
    answer:
      "Ofrecemos planes de precios flexibles y accesibles que se adaptan al tamaño y las necesidades de tu negocio. A diferencia de las soluciones costosas y complejas, nuestro modelo de pago te permite evitar grandes inversiones iniciales y pagar solo por lo que usas. Un sistema POS no es un gasto, es una inversión que te ayuda a ahorrar tiempo, reducir errores y aumentar tus ganancias, dándote un rápido retorno de inversión.",
  },
  {
    question:
      "¿Qué pasa si tengo un problema técnico? ¿Recibiré soporte?",
    answer:
      "En Nexus Stores, te acompañamos en cada paso del camino. Nuestro equipo de soporte técnico está disponible para ayudarte a resolver cualquier problema de manera rápida y eficiente. No te dejaremos solo. A diferencia de otras empresas que solo ofrecen soporte limitado, nuestro equipo está comprometido con tu éxito y se asegurará de que tu negocio nunca se detenga.",
  },
  {
    question:
      "¿Puede crecer el sistema Nexus Stores junto con mi negocio?",
    answer:
      "¡Por supuesto! Nuestra solución está diseñada para ser completamente escalable. Ya sea que añadas una nueva sucursal, expandas tu inventario o necesites más terminales, nuestro sistema se adapta a tus necesidades en crecimiento sin requerir una migración complicada. Con Nexus Stores, puedes empezar pequeño y expandirte sin limitaciones tecnológicas.",
  },
  {
    question:
      "¿Necesito hardware costoso para utilizar Nexus Stores?",
    answer:
      "Nuestro sistema es compatible con una amplia variedad de hardware estándar, lo que te permite utilizar equipos que ya tienes o adquirir opciones accesibles en el mercado. A diferencia de otras soluciones que te obligan a comprar hardware propietario y costoso, Nexus Stores te da la flexibilidad de elegir lo que mejor se adapte a tu presupuesto.",
  },
  {
    question:
      "¿Cómo la IA de Nexus Stores puede mejorar mis ventas, mi inventario, el desempeño de mis empleados e incluso sugerir nuevos productos?",
    answer:
      "La IA de Nexus Stores es tu socio estratégico. Para mejorar tus ventas, analiza el historial de compras para identificar patrones y ofrecer recomendaciones personalizadas a tus clientes, aumentando el ticket promedio. En el inventario, predice la demanda con base en la temporalidad y eventos locales, asegurando que siempre tengas los productos correctos y reduciendo el capital inmovilizado. Para el desempeño de tus empleados, la IA identifica los picos de afluencia y sugiere los horarios más eficientes, optimizando la productividad y el servicio. Además, nuestra IA te sugiere nuevos productos analizando las combinaciones de compras más comunes. Por ejemplo, si un grupo de clientes compra café y pasteles con frecuencia, el sistema podría sugerirte ofrecer un combo de desayuno o productos relacionados para aumentar las ventas y satisfacer mejor a tu clientela.",
  },
];

export { services, solutions, faqs };

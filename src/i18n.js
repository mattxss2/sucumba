import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

const resources = {
  pt: {
    translation: {
      "header": { "email": "contato@mineracaocoto.com", "phone": "+55 83 99927-9822", "home": "Home", "about": "Sobre Nós", "collection": "Coleção", "showroom": "Showroom", "contact": "Contato" },
      "home": { "heroCategory": "QUARTZITO", "heroTitle": "Emerald Green", "heroSubtitle": "A força da natureza em veios de beleza inconfundível.", "ctaButton": "Ver Coleção", "sectionTitle": "Excelência em Rochas Naturais", "sectionSubtitle": "Com décadas de experiência, a Mineração Coto é sinônimo de qualidade e exclusividade...", "sectionButton": "Saiba Mais" },
      "footer": { "companyInfo": "Líder na extração e beneficiamento de rochas ornamentais de luxo.", "navigation": "Navegação", "address": "Paraíba, Brasil", "copyright": "© {{year}} Mineração Coto Luxury Stones. Todos os direitos reservados." },
      "collection": { "title": "Coleção de Pedras", "filterAll": "Todos", "filterGranite": "Granitos", "filterQuartzite": "Quartzitos" },
      "stoneDetail": { "origin": "Origem", "finishes": "Acabamentos", "ctaButton": "Solicitar Orçamento" },
      "about": { "title": "Sobre Nós", "subtitle": "Tradição e Inovação no Coração da Natureza", "paragraph1": "Fundada em 1995, a Mineração Coto nasceu de uma paixão familiar pela geologia e pelo design. Ao longo de quase três décadas, nos tornamos referência na extração e beneficiamento de rochas ornamentais de luxo, combinando o respeito pela natureza com a mais alta tecnologia para entregar produtos de excelência.", "paragraph2": "Nossa missão é transformar ambientes através da beleza única de cada pedra, oferecendo consultoria especializada para arquitetos, designers e clientes que buscam exclusividade e qualidade incomparável." },
      "showroom": { "title": "Visite Nosso Espaço", "subtitle": "Um ambiente projetado para que você possa ver, tocar e sentir a beleza única de nossas rochas.", "ctaTitle": "Agende sua Visita", "ctaSubtitle": "Nossa equipe de especialistas está pronta para recebê-lo e apresentar as melhores soluções para o seu projeto.", "addressLabel": "Endereço", "hoursLabel": "Horário", "hoursValue": "Seg-Sex, das 9h às 18h", "phoneLabel": "Telefone", "ctaButton": "Entre em Contato" },
      "contact": { "title": "Contato", "subtitle": "Vamos iniciar uma conversa sobre o seu próximo projeto.", "mainText": "Para orçamentos, dúvidas ou para agendar uma visita ao nosso showroom, utilize um dos canais abaixo. Nossa equipe retornará o mais breve possível." }
    }
  },
  en: {
    translation: {
      "header": { "email": "contato@mineracaocoto.com", "phone": "+55 83 99927-9822", "home": "Home", "about": "About Us", "collection": "Collection", "showroom": "Showroom", "contact": "Contact" },
      "home": { "heroCategory": "QUARTZITE", "heroTitle": "Emerald Green", "heroSubtitle": "The strength of nature in veins of unmistakable beauty.", "ctaButton": "View Collection", "sectionTitle": "Excellence in Natural Stones", "sectionSubtitle": "With decades of experience, Mineração Coto is synonymous with quality and exclusivity...", "sectionButton": "Learn More" },
      "footer": { "companyInfo": "Leader in the extraction and processing of luxury ornamental stones.", "navigation": "Navigation", "address": "Paraíba, Brazil", "copyright": "© {{year}} Mineração Coto Luxury Stones. All rights reserved." },
      "collection": { "title": "Stone Collection", "filterAll": "All", "filterGranite": "Granites", "filterQuartzite": "Quartzites" },
      "stoneDetail": { "origin": "Origin", "finishes": "Finishes", "ctaButton": "Request a Quote" },
      "about": { "title": "About Us", "subtitle": "Tradition and Innovation in the Heart of Nature", "paragraph1": "Founded in 1995, Mineração Coto was born from a family passion for geology and design. Over nearly three decades, we have become a benchmark in the extraction and processing of luxury ornamental stones, combining respect for nature with the highest technology to deliver products of excellence.", "paragraph2": "Our mission is to transform environments through the unique beauty of each stone, offering specialized consulting for architects, designers, and clients seeking exclusivity and unparalleled quality." },
      "showroom": { "title": "Visit Our Space", "subtitle": "An environment designed for you to see, touch, and feel the unique beauty of our rocks.", "ctaTitle": "Schedule Your Visit", "ctaSubtitle": "Our team of experts is ready to welcome you and present the best solutions for your project.", "addressLabel": "Address", "hoursLabel": "Hours", "hoursValue": "Mon-Fri, 9am to 6pm", "phoneLabel": "Phone", "ctaButton": "Get in Touch" },
      "contact": { "title": "Contact", "subtitle": "Let's start a conversation about your next project.", "mainText": "For quotes, questions, or to schedule a visit to our showroom, please use one of the channels below. Our team will get back to you as soon as possible." }
    }
  },
  es: {
    translation: {
      "header": { "email": "contato@mineracaocoto.com", "phone": "+55 83 99927-9822", "home": "Inicio", "about": "Sobre Nosotros", "collection": "Colección", "showroom": "Showroom", "contact": "Contacto" },
      "home": { "heroCategory": "CUARCITA", "heroTitle": "Emerald Green", "heroSubtitle": "La fuerza de la naturaleza en vetas de inconfundible belleza.", "ctaButton": "Ver Colección", "sectionTitle": "Excelencia en Piedras Naturales", "sectionSubtitle": "Con décadas de experiencia, Mineração Coto es sinónimo de calidad y exclusividad en granitos y cuarcitas...", "sectionButton": "Saber Más" },
      "footer": { "companyInfo": "Líder en la extracción y procesamiento de piedras ornamentales de lujo.", "navigation": "Navegación", "address": "Paraíba, Brasil", "copyright": "© {{year}} Mineração Coto Luxury Stones. Todos los derechos reservados." },
      "collection": { "title": "Colección de Piedras", "filterAll": "Todos", "filterGranite": "Granitos", "filterQuartzite": "Cuarcitas" },
      "stoneDetail": { "origin": "Origen", "finishes": "Acabados", "ctaButton": "Solicitar Presupuesto" },
      "about": { "title": "Sobre Nosotros", "subtitle": "Tradición e Innovación en el Corazón de la Naturaleza", "paragraph1": "Fundada en 1995, Mineração Coto nació de una pasión familiar por la geología y el diseño. A lo largo de casi tres décadas, nos hemos convertido en un referente en la extracción y procesamiento de piedras ornamentales de lujo, combinando el respeto por la naturaleza con la más alta tecnología para entregar productos de excelencia.", "paragraph2": "Nuestra misión es transformar ambientes a través de la belleza única de cada piedra, ofreciendo consultoría especializada para arquitectos, diseñadores y clientes que buscan exclusividad y una calidad inigualable." },
      "showroom": { "title": "Visite Nuestro Espacio", "subtitle": "Un ambiente diseñado para que pueda ver, tocar y sentir la belleza única de nuestras rocas.", "ctaTitle": "Programe su Visita", "ctaSubtitle": "Nuestro equipo de expertos está listo para darle la bienvenida y presentarle las mejores soluciones para su proyecto.", "addressLabel": "Dirección", "hoursLabel": "Horario", "hoursValue": "Lun-Vie, de 9h a 18h", "phoneLabel": "Teléfono", "ctaButton": "Contactar" },
      "contact": { "title": "Contacto", "subtitle": "Iniciemos una conversación sobre su próximo proyecto.", "mainText": "Para presupuestos, preguntas o para programar una visita a nuestro showroom, por favor utilice uno de los siguientes canales. Nuestro equipo se pondrá en contacto con usted lo antes posible." }
    }
  },
  it: {
    translation: {
      "header": { "email": "contato@mineracaocoto.com", "phone": "+55 83 99927-9822", "home": "Home", "about": "Chi Siamo", "collection": "Collezione", "showroom": "Showroom", "contact": "Contatti" },
      "home": { "heroCategory": "QUARZITE", "heroTitle": "Emerald Green", "heroSubtitle": "La forza della natura in venature di inconfondibile bellezza.", "ctaButton": "Vedi Collezione", "sectionTitle": "Eccellenza in Pietre Naturali", "sectionSubtitle": "Con decenni di esperienza, Mineração Coto è sinonimo di qualità ed esclusività in graniti e quarziti...", "sectionButton": "Scopri di Più" },
      "footer": { "companyInfo": "Leader nell'estrazione e lavorazione di pietre ornamentali di lusso.", "navigation": "Navigazione", "address": "Paraíba, Brasile", "copyright": "© {{year}} Mineração Coto Luxury Stones. Tutti i diritti riservati." },
      "collection": { "title": "Collezione di Pietre", "filterAll": "Tutti", "filterGranite": "Graniti", "filterQuartzite": "Quarziti" },
      "stoneDetail": { "origin": "Origine", "finishes": "Finiture", "ctaButton": "Richiedi un Preventivo" },
      "about": { "title": "Chi Siamo", "subtitle": "Tradizione e Innovazione nel Cuore della Natura", "paragraph1": "Fondata nel 1995, Mineração Coto nasce da una passione familiare per la geologia e il design. In quasi tre decenni, siamo diventati un punto di riferimento nell'estrazione e lavorazione di pietre ornamentali di lusso, unendo il rispetto per la natura con la più alta tecnologia per fornire prodotti di eccellenza.", "paragraph2": "La nostra missione è trasformare gli ambienti attraverso la bellezza unica di ogni pietra, offrendo consulenza specializzata ad architetti, designer e clienti che cercano esclusività e qualità ineguagliabile." },
      "showroom": { "title": "Visita il Nostro Spazio", "subtitle": "Un ambiente progettato per permettervi di vedere, toccare e sentire la bellezza unica delle nostre rocce.", "ctaTitle": "Pianifica la tua Visita", "ctaSubtitle": "Il nostro team di esperti è pronto ad accogliervi e a presentare le migliori soluzioni per il vostro progetto.", "addressLabel": "Indirizzo", "hoursLabel": "Orari", "hoursValue": "Lun-Ven, dalle 9 alle 18", "phoneLabel": "Telefono", "ctaButton": "Contattaci" },
      "contact": { "title": "Contatti", "subtitle": "Iniziamo una conversazione sul tuo prossimo progetto.", "mainText": "Per preventivi, domande o per fissare una visita al nostro showroom, si prega di utilizzare uno dei canali sottostanti. Il nostro team vi risponderà il prima possibile." }
    }
  },
  zh: {
    translation: {
      "header": { "email": "contato@mineracaocoto.com", "phone": "+55 83 99927-9822", "home": "首页", "about": "关于我们", "collection": "产品系列", "showroom": "展厅", "contact": "联系方式" },
      "home": { "heroCategory": "石英岩", "heroTitle": "翡翠绿", "heroSubtitle": "脉络中蕴含着明确无误的自然之美与力量。", "ctaButton": "查看产品系列", "sectionTitle": "卓越的天然石材", "sectionSubtitle": "凭借数十年的经验，Mineração Coto 已成为花岗岩和石英岩领域质量与独特的代名词...", "sectionButton": "了解更多" },
      "footer": { "companyInfo": "豪华装饰石材开采和加工领域的领导者。", "navigation": "网站导航", "address": "帕拉伊巴, 巴西", "copyright": "© {{year}} Mineração Coto Luxury Stones. 版权所有。" },
      "collection": { "title": "石材系列", "filterAll": "全部", "filterGranite": "花岗岩", "filterQuartzite": "石英岩" },
      "stoneDetail": { "origin": "起源", "finishes": "表面处理", "ctaButton": "询价" },
      "about": { "title": "关于我们", "subtitle": "自然之心的传统与创新", "paragraph1": "Mineração Coto 成立于1995年，源于一个家族对地质学和设计的热情。在近三十年的时间里，我们已成为豪华装饰石材开采和加工领域的标杆，将对自然的尊重与最高技术相结合，提供卓越的产品。", "paragraph2": "我们的使命是通过每块石材的独特之美来改变环境，为寻求独特性和无与伦比质量的建筑师、设计师和客户提供专业咨询。" },
      "showroom": { "title": "参观我们的空间", "subtitle": "一个旨在让您观看、触摸和感受我们岩石独特之美的环境。", "ctaTitle": "安排您的访问", "ctaSubtitle": "我们的专家团队随时准备欢迎您，并为您的项目提供最佳解决方案。", "addressLabel": "地址", "hoursLabel": "营业时间", "hoursValue": "周一至周五，上午9点至下午6点", "phoneLabel": "电话", "ctaButton": "联系我们" },
      "contact": { "title": "联系方式", "subtitle": "让我们开始讨论您的下一个项目。", "mainText": "如需报价、咨询或安排参观我们的展厅，请使用以下渠道之一。我们的团队将尽快给您回复。" }
    }
  }
};

i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: 'pt',
    fallbackLng: 'pt',
    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;
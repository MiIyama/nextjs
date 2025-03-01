const LOG_CATEGORIES = {
  COMPONENTS: {
    ENABLED: false, // Ativa/Desativa todos os logs de componentes
    RenderComponent: false, // Logs específicos do RenderComponent
    SectionBuilder: false, // Logs específicos do SectionBuilder
    jsonParser: false, // Logs específicos do jsonParser
  },
  THEME: false, // Logs relacionados a tema
  API: false, // Logs de requisições API
  PERFORMANCE: false, // Logs de performance e otimização
  ERROR: true, // Ativa logs de erro globalmente
};

const log = {
  component: (subCategory, ...args) => {
    if (LOG_CATEGORIES.COMPONENTS.ENABLED && LOG_CATEGORIES.COMPONENTS[subCategory]) {
      console.log(`🧩 [${subCategory}] \n\n`, ...args);
    }
  },
  theme: (...args) => {
    if (LOG_CATEGORIES.THEME) console.log('🎨 [THEME] \n', ...args);
  },
  api: (...args) => {
    if (LOG_CATEGORIES.API) console.log('🌍 [API] \n\n', ...args);
  },
  performance: (...args) => {
    if (LOG_CATEGORIES.PERFORMANCE) console.log('⚡ [PERFORMANCE] \n\n', ...args);
  },
  error: (...args) => {
    if (LOG_CATEGORIES.ERROR) console.error('❌ [ERROR] \n', ...args);
  },
};

export default log;

export const API_PATHS = {
    AUTH: {
        REGISTER: '/api/auth/register',
        LOGIN: '/api/auth/login',
        ME: '/api/auth/me',
    },
    CATEGORIES: {
        LIST: '/api/categories',
        CREATE: '/api/categories',
        UPDATE: (id) => `/api/categories/${id}`,
        DELETE: (id) => `/api/categories/${id}`,
    },
    TRANSACTIONS: {
        LIST: '/api/transactions',
        CREATE: '/api/transactions',
        GET_BY_ID: (id) => `/api/transactions/${id}`,
        UPDATE: (id) => `/api/transactions/${id}`,
        DELETE: (id) => `/api/transactions/${id}`,
        ANALYZE: '/api/transactions/analyze',
    },
    BUDGETS: {
        LIST: '/api/budgets',
        CREATE: '/api/budgets',
        UPDATE: (id) => `/api/budgets/${id}`,
        DELETE: (id) => `/api/budgets/${id}`,
        ANALYZE: '/api/budgets/analyze',
    },
    DASHBOARD: {
        SUMMARY: '/api/dashboard/summary',
        CATEGORY_BREAKDOWN: '/api/dashboard/category-breakdown',
        MONTHLY_TREND: '/api/dashboard/monthly-trend',
    },
    INSIGHTS: {
        LIST: '/api/insights',
        GENERATE: '/api/insights/generate',
    },
};
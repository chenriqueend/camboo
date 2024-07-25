export const APP_CONFIG = {
  redirects: {
    main: '/feed'
    // main: '/feed-new'
  },
  layout: {
    mainBackgroundColor: '#F9F9F9',
    headerHeight: '96px',
  },
  chat: {
    initialMessagesToLoad: 50,
    initialMessagesCountonScreen: 5,
    timeoutUntilLoadMoreMessages: 2000,
  }
} as const;
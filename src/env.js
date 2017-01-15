export const MODE = "production" // development, production

if (MODE == 'development')
    URL = 'http://192.168.0.101/api/'
else if (MODE == 'production')
    URL = 'https://mysite.com/api/'

export const API_URL = URL
export const PUSHER_KEY = '8b7cead8a3d9a4a75e95'
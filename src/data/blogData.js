import { article1SmartersSmartTv } from './articles/article1SmartersSmartTv';
import { article2MejorIptvEspana } from './articles/article2MejorIptvEspana';
import { article3TivimateFirestick } from './articles/article3TivimateFirestick';
import { article4SolucionarBuffering } from './articles/article4SolucionarBuffering';

export const blogCategories = [
  'Todos',
  'Comparativas & Guías',
  'Smart TV',
  'Fire TV & Dispositivos',
  'Optimización & Redes',
];

export const blogArticles = [
  {
    ...article2MejorIptvEspana,
    featured: true,
    keywords: [
      'mejor IPTV España',
      'comparativa IPTV España',
      'IPTV estable sin cortes',
      'IPTV fútbol 4K 60fps',
      'IPTV Movistar Vodafone Orange',
      'proveedor IPTV España',
      'IPTV calidad premium',
      'servidores IPTV España',
    ],
  },
  {
    ...article1SmartersSmartTv,
    featured: false,
    keywords: [
      'IPTV Smarters Pro Smart TV',
      'instalar IPTV Samsung Tizen',
      'IPTV LG webOS',
      'configurar IPTV Smarters España',
      'Xtream Codes Smart TV',
      'EPG IPTV Smarters horario España',
      'Smarters Player Lite Samsung',
    ],
  },
  {
    ...article3TivimateFirestick,
    featured: false,
    keywords: [
      'TiviMate Firestick',
      'configurar TiviMate España',
      'TiviMate IPTV Player',
      'TiviMate Premium APK',
      'EPG TiviMate Fire TV Stick',
      'Multi-view TiviMate 4 pantallas',
      'TiviMate Android TV',
    ],
  },
  {
    ...article4SolucionarBuffering,
    featured: false,
    keywords: [
      'solucionar buffering IPTV',
      'cortes IPTV solución',
      'evitar cortes IPTV España',
      'DNS IPTV 1.1.1.1 Cloudflare',
      'buffer size IPTV Smarters TiviMate',
      'throttling IPTV España',
      'IPTV no funciona fin de semana fútbol',
    ],
  },
];

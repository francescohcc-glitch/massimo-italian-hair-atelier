export const dynamic = 'force-static';
import type { MetadataRoute } from 'next';
import {site} from '@/config/site';
export default function sitemap():MetadataRoute.Sitemap{return site.domain?[{url:site.domain,changeFrequency:'monthly',priority:1}]:[]}

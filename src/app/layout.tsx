import type { Metadata } from 'next';
import { Cormorant_Garamond, Manrope } from 'next/font/google';
import { site } from '@/config/site';
import './globals.css';
const editorial=Cormorant_Garamond({subsets:['latin'],weight:['400','500'],style:['normal','italic'],variable:'--font-editorial',display:'swap'});
const sans=Manrope({subsets:['latin'],weight:['400','500','600'],variable:'--font-sans',display:'swap'});
export const metadata:Metadata={title:site.seo.title,description:site.seo.description,...(site.domain?{metadataBase:new URL(site.domain),alternates:{canonical:'/'}}:{}),openGraph:{title:site.seo.title,description:site.seo.description,type:'website',locale:'en_US',siteName:`${site.brand} | ${site.subtitle}`},twitter:{card:'summary_large_image',title:site.seo.title,description:site.seo.description},robots:{index:true,follow:true}};
export default function RootLayout({children}:{children:React.ReactNode}){return <html lang="en"><body className={`${editorial.variable} ${sans.variable}`}>{children}</body></html>}

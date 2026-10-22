import Image from 'next/image';
import { site } from '@/config/site';
export default function Portrait({priority=false}:{priority?:boolean}){return <div className={`portrait ${site.images.portraitIsFlyer?'from-reference':''}`}><Image src={site.images.portrait} alt="Massimo, Italian hairstylist in Houston, photographed in a dark suit" fill priority={priority} sizes="(max-width: 700px) 100vw, 55vw"/></div>}

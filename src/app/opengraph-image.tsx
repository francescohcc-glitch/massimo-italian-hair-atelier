export const dynamic = 'force-static';
import {ImageResponse} from 'next/og';
import {site} from '@/config/site';
export const alt='MASSIMO — Italian Hair Atelier, Houston';
export const size={width:1200,height:630};
export const contentType='image/png';
export default function Image(){return new ImageResponse(<div style={{display:'flex',flexDirection:'column',justifyContent:'center',alignItems:'center',background:'#111111',color:'#f5f1e9',width:'100%',height:'100%'}}><div style={{display:'flex',fontSize:110,letterSpacing:18,fontFamily:'serif'}}>{site.brand}</div><div style={{display:'flex',fontSize:19,letterSpacing:9,color:'#b49a68',marginTop:12}}>{site.subtitle.toUpperCase()}</div><div style={{display:'flex',fontSize:46,fontFamily:'serif',marginTop:65}}>{site.headline}</div><div style={{display:'flex',fontSize:17,marginTop:28,color:'#b49a68'}}>{site.location} · For men & women</div></div>,size)}

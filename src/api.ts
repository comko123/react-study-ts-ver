import axios from "axios"
export interface setStateType{[key:string]:string}
export const favorite:setStateType[] = []
const pushing = (parameter:setStateType[]) => {
  for(let i=0; i<6; i++){
  const favor = parameter[i]
  favorite.push(favor)}}
export const productAxios = async(storageBox:(item:setStateType[])=>void,text:string) => {
const {data:{items}} = await axios("/v1/search/shop.json",
{params:{query : text ,display:30},headers:{
  "X-Naver-Client-Id": process.env.REACT_APP_HEATHER_API_KEY as string,
  "X-Naver-Client-Secret":process.env.REACT_APP_HEATHER_API_KEY2 as string}})
  pushing(items);return(storageBox(items))}
import axios from "axios"
export interface setStateType{
[key:string]:string
}
export const favorite:setStateType[] = []
const pushing = (parameter:setStateType[]) => {
    for(let i=0; i<6; i++){
    const favor = parameter[i]
    favorite.push(favor)}}
export const productAxios = async(storageBox:(item:setStateType[])=>void,text:string) => {
const {data:{items}} = await axios("/v1/search/shop.json",
{params:{query : text ,display:30},headers:{
  "X-Naver-Client-Id": "DgxIVVws_iVRpSppgOIW",
  "X-Naver-Client-Secret":"KcFNGsYQ03"}})
  pushing(items);return(storageBox(items))}
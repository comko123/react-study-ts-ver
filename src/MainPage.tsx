/*eslint-disable*/
import { useEffect, useState ,useRef} from "react"
import styled from "styled-components" 
import { productAxios,setStateType} from "./api"
import { favorite } from "./api" 
const PreviousBtn = styled.button`
position:absolute;
bottom:200px;
left:50px;
background-color:#468ee5;
color:white;
border-radius:50px;
border:3px solid #468ee5;
width:50px;
height:50px;
font-size:30px;
box-shadow: 2px 2px 2px 2px gray ;
:active{
    background-color:rgb(28, 81, 195);
    border:3px solid rgb(28, 81, 195);
    transition:background-color 0.1s;
}
`
const NextBtn = styled.button`
position:absolute;
bottom:200px;
right:50px;
background-color:#468ee5;
color:white;
border-radius:50px;
border:3px solid #468ee5;
width:50px;
height:50px;
font-size:30px;
box-shadow: 2px 2px 2px 2px gray ;
:active{
    background-color:rgb(28, 81, 195);
    border:3px solid rgb(28, 81, 195);
    transition:background-color 0.1s;
}
`
const Parents = styled.div`
text-align:center;
overflow:hidden ;
`
const ParentNode = styled.div`
max-width:130px;
margin:10px;
border:5px solid purple;
border-radius: 15px;
a{
    text-decoration:none ;
    color:black;
}
a:visited{
    color:black
}
`
const Child = styled.div`
display:flex; 
`
const DivOne = styled.div`
position: relative;
`
const DivTwo = styled.div`
max-width: 1200px;
display:flex ;
flex-flow: row nowrap;
	overflow: auto;
 a{text-decoration:none;color:black;}
 a:visited{color:black;}
`
const DivThree = styled.div`
display:flex;
margin-left:40px;
flex-wrap:wrap;
max-width:500px;
`
const DivFour = styled.div`
margin: 10px;
display:flex;
max-width:350px ;
border-radius:15px ;
flex-basis:8% ;
flex-shrink: 0;
`
const DivFive = styled.div`
width:300vw;
transition:transform 0.5s ;
`
const DivSix = styled.div`
display:flex;
height:500px;
`
const ImageZero = styled.img`
width:390px;
height:450px;
border-radius:40px;
border:5px solid purple;
margin:10px;
`
const Image = styled.img`
width:100px;
height:100px;
border-radius:15px ;
`
const ImageTwo = styled.img`
width:100px;
height:100px;
border-radius:15px ;
border:5px solid purple;
`
const Title = styled.p`
margin:0px;
padding-left:20px ;
white-space: nowrap;
overflow: hidden;
text-overflow: ellipsis;
`
const Popularity = styled.fieldset`
border-color:gold;
display:flex ;
align-items:center;
justify-content:center ;
`
const Text = styled.legend`
`
const allProduct = (product:setStateType[]) => {
    return (<DivThree>
    {product && product.map((items:setStateType,index:number)=>
     <ParentNode key={index}>
        <a href={items.link}>
        <Image src={items.image}/><br/>
        <Title>{items.title}</Title></a>
        </ParentNode>)}</DivThree>)
}
const minus = (num:number) => {
    return num-100
}
const plus = (num:number) => {
    return num+100
}
const carousel = (result:number,
    change:(parm:number)=>void,
curent:React.RefObject<HTMLDivElement>) => {
        if(!curent.current)return;
        curent.current.style.transform = `translate(${result}vw)`
        change(result)
}
const MainPage = () => {
    const [shoes,setShoes] = useState<setStateType[]>([])
    const [cloth,setCloth] = useState<setStateType[]>([])
    const [phone,setPhone] = useState<setStateType[]>([]) 
    const [move,setMove] = useState(0)
    const curent = useRef<HTMLDivElement>(null)
    useEffect(()=>{
        (async()=>{try{
await Promise.all([productAxios(setShoes ,"신발"),
                   productAxios(setCloth ,"의류"),
                   productAxios(setPhone ,"핸드폰")])
        }catch(e){console.log(e)}})()},[])
        return(
    <Parents><DivFive ref = {curent}>
   <DivSix> {!!favorite.length?favorite.map((item,index)=>
<a href={item?.link} key={index}>
<ImageZero src={item?.image} alt="no_image"/></a>):null}
</DivSix></DivFive>
    
<DivOne>
<PreviousBtn onClick={()=>{ 
    const res = plus(move)
    if(move>-600 && move<0){
    carousel(res,setMove,curent)
    }}}>&larr;</PreviousBtn>

<NextBtn onClick={()=>{
    const res =  minus(move)
    if(move>-500){
    carousel(res,setMove,curent)
    }}}>&rarr;</NextBtn></DivOne>
    <Popularity>
    <Text>인기 상품</Text>
    <DivTwo>{!!favorite.length?favorite.map((item,index)=><DivFour key={index}>
    <a href={item?.link}>
<ImageTwo src={item?.image} alt="no image"/>
</a></DivFour>):null}</DivTwo></Popularity>

<Popularity><Text>전체 상품 목록</Text>
    <Child>
    {allProduct(shoes)}
    {allProduct(cloth)}
    {allProduct(phone)}
  </Child>
  </Popularity>
  </Parents>)}
export default MainPage
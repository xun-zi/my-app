import './WinXinContent.less'
import {Link} from 'react-router-dom'
type WeiXinChatData = {
    id:string;
    picture:string;
    name:string;
    message:string;
    time:object;
    bell:number;
};

function WeiXinChatCard(props:{datas:WeiXinChatData,key:number}){
    const datas = props.datas;
    return(
        <Link to={`/Chat/:${datas.id}`}>
        <div className='WeiXinChatCard'>
            
            <div className='left'> 
                {/* <img src={`${datas.picture}`} alt='' /> */}
            </div>
            <div className='middle'>
                <p><strong>{datas.name}</strong></p>
                <p><small>{datas.message}</small></p>
            </div>
        </div>
        </Link>
    )
}


export default function WinXinContent(props:{datas:WeiXinChatData[]}){
    return(
        <div className='WinXin-Content' >
            {
                props.datas.map((data,index)=>{
                    return <WeiXinChatCard datas={data} key={index}/>
                })
            }

        </div>
    )
}
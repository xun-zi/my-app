import React from 'react';
import './Chat.less';
import indexeddb from '../../indexdb/index'

type Message = {
    sequenceId: string,
    content: string,
    user: number,
}

async function getChatMessage(){
    const db = await indexeddb.openDB('Chat', 1);
    const datas = indexeddb.cursorGetData(db, 'signalChat');
    console.log(datas);
    return datas;
}

function MessageEL(props:{message:Message}) {
    const message = props.message;
    return (
        <div className='MessageEl' id='ChatMessage'>
            <p className={message.sequenceId === '0' ? 'myselfMessage' : 'friendMessage'}>1</p>
        </div>
    )
}


export default class Chat extends React.Component<any,{messages:Message[]}> {
    constructor(props: any) {
        super(props);
        this.state = {
            messages : [],
        }
        this.getChatMessage();
    }

    async getChatMessage(){
        const db = await indexeddb.openDB('Chat', 1);
        const datas = await indexeddb.cursorGetData(db, 'signalChat');
        console.log(datas);
         this.setState({
            messages:datas,
        })
         console.log(this.state.messages);
    }



    render(): React.ReactElement {
        // console.log('render',this.state.messages)
        const message = this.state.messages
        console.log({message})
        return (
            <div className='ChatInterface'>
                {       
                        [{sequenceId: '0', content: '0消息', user: 0},{sequenceId: '0', content: '0消息', user: 0}].map((message:Message,index:number)=>{
                            return <MessageEL message={message} key={index}/>
                        })
                }
                <div>2</div>
            </div>
        )
    }
}
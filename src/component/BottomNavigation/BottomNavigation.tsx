import React from 'react'
import './BottomNavigation.less'
export type data = {
    className:string,
    name:string,
}

class BottomNavigation extends React.Component<{datas:data[]}>{
    datas:data[];
    constructor(props:{datas:data[]}){
        super(props);
        this.datas = props.datas
    }

    render(): React.ReactElement {
        return(
            <div className='BottomNavigation'>
                {
                    this.datas.map((data,index)=>{
                        return (
                            <li key={index}>
                                <i className={data.className} aria-hidden="true"></i>
                                <p>{data.name}</p>
                            </li>
                        )
                    })
                }
            </div>
        )
    }
}

export default BottomNavigation;
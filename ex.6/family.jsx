import React from 'react'
import {ChildrenWithProps} from '../utils/reactUtils'

export default props => (

    <div>
        <h1>Familia</h1>
        {/*{props.children}*/}
        {ChildrenWithProps(props.children, props)}
    </div>
)
import React from 'react'
import "./SidebarRow.css"

const SidebarRow = (props) => {
    const { title, Icon } = props;
    return (
        <div className="row">
            <Icon className="icon" />
            <h4>{title}</h4>
        </div>
    )
}

export default SidebarRow
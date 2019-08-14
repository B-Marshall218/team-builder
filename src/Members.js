import React from "react";

const Members = props => {
    console.log(props)
    return (
        <div>
            {props.memberList.map(item => {
                return (
                    <div key={item.id}>
                        <h3> {item.name} </h3>
                        <p> Email: {item.email}</p>
                        <p> Role: {item.role}</p>
                    </div>
                );
            })}
        </div>
    );
};

export default Members; 
import React from 'react';

interface IPersonProps {
    name: string,
    age?: number,
    isEmployed?: boolean,
};

export const Person: React.FC<IPersonProps> = ({
    name,
    age,
    isEmployed = false,
}) => {
    return (
        <div>
            {name} <br />
            {age} <br />
            {isEmployed.toString()}
        </div>
    )
};
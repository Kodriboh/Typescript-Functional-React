import React, { useState, ChangeEvent} from 'react';

interface IPersonProps {
    name: string,
    age?: number,
    email?: string,
};

export const Person: React.FC<IPersonProps> = ({
    name,
    age,
    email = false,
}) => {
    const [homeCountry, setHomeCountry] = useState<string | null>(null);

    const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
        setHomeCountry(event.target.value);
    };

    return (
        <div>
            <h1>Name: { name }</h1>
            <h1>Email: { email }</h1>
            <h1>Age: { age }</h1>
            <input
                placeholder='Enter your home country...'
                onChange={handleChange}
            />

            <p>Home Country: {homeCountry}</p>
        </div>
    )
};
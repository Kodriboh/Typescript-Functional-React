import React, { useState, ChangeEvent} from 'react';

export enum HairColor {
    Blonde = 'Hair color is blonde',
    Black = 'Jet black hair',
    Grey = 'You sooo old',
};

type GenderType = 'Male' | 'Female';

interface IPersonProps {
    name: string,
    age?: number,
    email?: string,
    gender?: GenderType,
    hairColor?: HairColor,
};

export const Person: React.FC<IPersonProps> = ({
    name,
    age,
    email = false,
    gender,
    hairColor,
}) => {
    const [homeCountry, setHomeCountry] = useState<string | null>(null);

    const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
        setHomeCountry(event.target.value);
    };

    return (
        <div>
            <h1>Name: { name }</h1>
            <h1>Gender: { gender }</h1>
            <h1>Email: { email }</h1>
            <h1>Age: { age }</h1>
            <input
                placeholder='Enter your home country...'
                onChange={handleChange}
            />

            <p>Home Country: {homeCountry}</p>
            <p>Hair Color: {hairColor}</p>
        </div>
    )
};

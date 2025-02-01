import { useState } from "react";

// ejemplo de inicialicacion del hook

// const initialValueForm={
//     'username': '',
//     'email': '',
//     'password': ''
// }

export const useForm = (initialForm = {}) => {

    const [formState, setFormState] = useState(initialForm);

    const onInputChange = ({ target }) => {
        const { name, value } = target;
        setFormState((current) => ({
            ...current,
            [name]: value
        }))
    }

    const onResetForm = () => {
        setFormState(initialForm);
    }

    return {
        ...formState,
        formState,
        onInputChange,
        onResetForm
    }
}
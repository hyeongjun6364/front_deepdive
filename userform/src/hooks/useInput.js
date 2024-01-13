import React ,{ useState } from 'react'

function useInput(defaultValue, validationFn) {
    const [enterValue, setEnterValue] = useState(defaultValue)
    const [didEdit, setDidEdit] = useState(false)

    const valueIsValid = validationFn(enterValue)

    const handleInputChange = (event) => {
        setEnterValue(event.target.value)
        setDidEdit(false)
    }
    function handleInputBlur() {
        setDidEdit(true)
    }


    return {
        value: enterValue,
        handleInputChange,
        handleInputBlur,
        hasError: didEdit && !valueIsValid
    }
}

export default useInput
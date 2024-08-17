'use client';

import {useFormStatus} from 'react-dom';

export default function MealsFormSubmit(){
    const {pending} = useFormStatus(); //status는 다양한 객체가 있어서 하나만 할당받을 수 있다.

    return <button disabled={pending}>{pending ? 'Submitting...' : 'Share Meal'}</button>
}
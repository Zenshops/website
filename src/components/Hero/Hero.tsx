import React, { forwardRef, useState } from 'react'
import SectionContainer from '../Layout/SectionContainer'
// import { ErrorMessage } from '../ui/ErrorMessage'
import { boolean, object, string } from 'zod';
import { Form, useZodForm } from '../../components/ui/Form'
import { Input } from '../../components/ui/Input'
import { Checkbox } from '../../components/ui/Checkbox';
import { supabase } from '~/utils/supabase';
import { ErrorMessage } from '../ui/ErrorMessage';
import Button from '../ui/Button';

const loginSchema = object({
    email: string().email(),
    tac_agreement: boolean()
});

export const Hero: React.FC = () => {

    const [response, setResponse] = useState<any>({})
    const [resError, setResError] = useState<any>({})

    const [checked, setChecked] = useState(false)

    const form = useZodForm({
        schema: loginSchema,
    });

    const handleSubmit = async (formData: any) => {

        const { data, error } = await supabase
            .from('website_subscriptions')
            .insert([
                { email: formData.email, tac_agreement: formData.tac_agreement },
            ])

        setResponse(data)
        setResError(error)
    }

    return (
        <SectionContainer className="flex-col bg-gray-900 sm:text-center md:text-center -mt-20">
            <div className="mt-10">
                <h1 className='text-center text-7xl font-extrabold tracking-tighter leading-[1.1] sm:text-7xl lg:text-7xl xl:text-8xl lg:-mb-8 md:-mb-2 sm:-mb-0.5'>Your <span className="inline-block text-transparent bg-clip-text bg-gradient-to-r from-brand-500 to-indigo-500">online shop</span></h1>
                <br className='hidden lg:block' />
                <h1 className='inline-block text-6xl font-extrabold tracking-tighter leading-[1.1] sm:text-7xl lg:text-7xl xl:text-8xl -mb-10'>in under <span className="inline-block text-transparent bg-clip-text bg-gradient-to-r from-brand-500 to-indigo-500">60 seconds</span></h1>
            </div>
            <p className="sm:mt-4 lg:mb-48 max-w-lg mx-auto mt-6 text-xl font-medium leading-tight text-center text-gray-400 sm:max-w-4xl sm:text-xl md:text-3xl lg:text-4xl">
                Zenshops assists you to grow your business online with a custom dedicated ecommerce solution.
            </p>
            <div className="lg:-mt-32 w-96 md:mt-28 sm:mt-24 text-center">
                Join the waitlist for an early access.
                <Form
                    form={form}
                    onSubmit={({ email, tac_agreement }) =>
                        // login({ variables: { input: { email, password } } })
                        handleSubmit({ email: email, tac_agreement: tac_agreement })
                    }
                    className="mt-3"
                >
                    <ErrorMessage
                        title="Email already exists."
                        error={resError?.details?.replace(/[{()}]/g, '').replace("Key email=", "")}
                    />

                    <Input
                        type="email"
                        label="email"
                        autoComplete="email"
                        autoFocus
                        error="email"
                        placeholder="EMAIL"
                        {...form.register('email')}
                    />
                    <Button
                        className="focus:ring-offset-0 focus:right-0 focus:ring-transparent"
                        disabled={response[0]?.id || !checked}
                        loaderPosition="left"
                    >
                        {response[0]?.id ? "SUBSCRIBED" : "JOIN WAITLIST"}
                    </Button>

                    <Checkbox
                        title="Please accept our Terms & Conditions"
                        disabled={response[0]?.id && checked}
                        {...form.register('tac_agreement', { required: true, onChange: (e) => setChecked(e.target.checked) },)}
                    />
                </Form>
            </div>
        </SectionContainer >
    )
}

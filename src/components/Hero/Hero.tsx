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
        <SectionContainer className="flex-col bg-gray-900 sm:text-center md:text-center">
            <div className="lg:text-5xl font-extrabold md:text-4xl sm:text-3xl">
                Get your <span className="text-brand-700">online shop</span> in under 60 seconds
            </div>
            <div className="lg:text-xl lg:mt-4 sm:mt-4 lg:mb-48 sm:text-lg">
                We bring your customers to you. Grow rich online with us.
            </div>
            <div className="lg:-mt-12 w-96 md:mt-28 sm:mt-24 text-center">
                <span className="">Join the waitlist for an early access.</span>
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

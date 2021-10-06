import React from 'react'
import SectionContainer from '../Layout/SectionContainer'
// import { ErrorMessage } from '../ui/ErrorMessage'
import { object, string } from 'zod';
import { Form, useZodForm } from '../ui/Form'
import { Input } from '../ui/Input'
import Button from '../ui/Button'
import { Checkbox } from '../ui/Checkbox';

const loginSchema = object({
    email: string().email(),
    password: string().min(6),
});

export const Hero = () => {

    const form = useZodForm({
        schema: loginSchema,
    });


    return (
        <SectionContainer className="flex-col m-20 sm:text-center md:text-center">
            <div className="lg:text-6xl mt-72 font-extrabold sm:text-3xl">
                Get your <span className="text-brand-700">online shop</span> in under 60 seconds
            </div>
            <div className="lg:text-xl lg:mt-4 sm:mt-4 lg:mb-48 sm:text-lg">
                We bring your customers to you. Grow rich online with us.
            </div>
            <div className="lg:-mt-24 sm:mt-16 text-center">
                <span className="">Join the waitlist for an early access.</span>
                <Form
                    form={form}
                    onSubmit={({ email, password }) =>
                        // login({ variables: { input: { email, password } } })
                        console.log(email, password)

                    }
                    className="mt-3"
                >
                    {/* <ErrorMessage title="Login failed." error={loginResult.error} /> */}

                    <Input
                        type="email"
                        label="email"
                        autoComplete="email"
                        autoFocus
                        placeholder="EMAIL"
                        {...form.register('email')}
                    />
                    {/* {loginResult.loading ? <Button text="LOGIN" /> : <Button text="LOGIN" />} */}
                    <Button className="focus:ring-offset-0 focus:right-0 focus:ring-transparent" text="JOIN WAITLIST" />
                    <Checkbox title="Please accept our Terms & Conditions" />
                </Form>
            </div>
        </SectionContainer >
    )
}

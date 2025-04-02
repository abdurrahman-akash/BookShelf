"use client";
import { signInSchema } from "@/lib/validations";
import AuthForm from "@/components/auth/AuthForm";

export default function SignUpPage() {
    return (
        <AuthForm
            type="SIGN_UP"
            schema={signInSchema}
            defaultValues={{
                email: "",
                password: "",
                fullName: "",
                universityId: 0,
                universityCard: "",
            }}
            onSubmit= {() => {}}
        />
    )
}
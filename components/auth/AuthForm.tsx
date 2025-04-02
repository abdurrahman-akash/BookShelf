"use client";
import Link from "next/link"
import { zodResolver } from "@hookform/resolvers/zod"
import { DefaultValues, useForm, UseFormReturn, SubmitHandler, FieldValues, Path } from "react-hook-form"
import { object, z } from "zod"
import { Button } from "@/components/ui/button"
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { FIELD_NAMES, FIELD_TYPES } from "@/constants/index";
import ImageUpload from "@/components/upload/Image";

interface Props<T extends FieldValues>{
    schema: z.ZodType<T>;
    defaultValues: T;
    onSubmit: (data: T) => Promise<{ success: boolean, error?: string}>;
    type: "SIGN_IN" | "SIGN_UP";
}

export default function AuthForm <T extends FieldValues>({
    type,
    schema,
    defaultValues,
    onSubmit,
}: Props<T>) {

    const isSignIn = type === "SIGN_IN";

  const form:UseFormReturn<T> = useForm({
    resolver: zodResolver(schema),
    defaultValues: defaultValues as DefaultValues<T>,
  });
 
    const handleSubmit: SubmitHandler<T> = async (data) => {};

    return (
        <div className="flex flex-col gap-4">
            <h2 className="text-2xl font-semibold text-white">
                {isSignIn ? "Welcome back to BookShelf!" : "Create your library account"}
            </h2>
            <p>
                {isSignIn ? "Access the vast collection of books and resources, and stay update" : "Please Complete all the fields and upload your valid ID to gain access to the library."}
            </p>
            <Form {...form}>
                <form onSubmit={form.handleSubmit(handleSubmit)} className="space-y-6 w-full">

                    {Object.keys(defaultValues).map((field) => (
                        <FormField
                        key={field}
                        control={form.control}
                        name={field as Path<T>}
                        render={({ field }) => (
                            <FormItem>
                            <FormLabel className="capitalize">
                                {FIELD_NAMES[field.name as keyof typeof FIELD_NAMES]}
                            </FormLabel>
                            <FormControl>
                                {field.name === "universityCard" ? ( 
                                    <ImageUpload/>
                                ): (    
                                    <Input 
                                     required 
                                     type={
                                        FIELD_TYPES[field.name as keyof typeof FIELD_TYPES]
                                    }
                                        {...field} 
                                        className="form-input"
                                    />
                                )}
                            </FormControl>
                            <FormMessage />
                            </FormItem>
                        )}
                        />
                    ))}
                    <Button className="form-btn" type="submit">
                        {isSignIn ? "sign In" : "Sign Up"}
                    </Button>
                </form>
            </Form>
            
                <p>
                    {isSignIn ? "New to BookShelf?" : "Already have an account?"}
                    {" "}
                    <Link href={isSignIn ? "/sign-up" : "/sign-in"} className="text-primary font-bold hover:underline">
                        {isSignIn ? "Create an account" : "Sign in"}
                    </Link>
                </p>        
        </div>
    )
}
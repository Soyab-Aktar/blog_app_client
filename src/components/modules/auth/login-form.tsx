"use client"
import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import {
  Field,
  FieldDescription,
  FieldError,
  FieldGroup,
  FieldLabel,
} from "@/components/ui/field"
import { Input } from "@/components/ui/input"
import { authClient } from "@/lib/auth-client"
import { useForm } from "@tanstack/react-form"
import { toast } from "sonner"
import * as z from "zod"

const formSchema = z.object({
  email: z.email(),
  password: z.string().min(8, "Minimum length is 8"),
})

export function LoginForm({ ...props }: React.ComponentProps<typeof Card>) {
  const handleGoogleLogin = async () => {
    const data = authClient.signIn.social({
      provider: "google",
      callbackURL: "http://localhost:3000"
    })
  }

  const form = useForm({
    defaultValues: {
      email: "",
      password: "",
    },
    validators: {
      onSubmit: formSchema
    },
    onSubmit: async ({ value }) => {
      const toastId = toast.loading("Creating Account");
      try {
        const { data, error } = await authClient.signIn.email(value);
        if (error) {
          toast.error(error.message, { id: toastId });
          return;
        }
        toast.success("User Login Succssefully", { id: toastId });
      } catch (err) {
        toast.error("Something went wrong, please try again", { id: toastId })
      }

    },
  })

  return (
    <Card {...props}>
      <CardHeader>
        <CardTitle>Login to account</CardTitle>
        <CardDescription>
          Enter your information below to login your account
        </CardDescription>
      </CardHeader>
      <CardContent>
        <form className="flex flex-col gap-3" id="register-form" onSubmit={(e) => {
          e.preventDefault();
          form.handleSubmit();
        }}>
          <FieldGroup>
            <form.Field name="email" children={(field) => {
              const isInvalid =
                field.state.meta.isTouched && !field.state.meta.isValid
              return (
                <Field>
                  <FieldLabel htmlFor={field.name}>Email</FieldLabel>
                  <Input
                    type="email"
                    id={field.name}
                    name={field.name}
                    value={field.state.value}
                    onChange={(e) => field.handleChange(e.target.value)}
                  ></Input>

                  {isInvalid && <FieldError errors={field.state.meta.errors} />}
                </Field>
              );
            }}></form.Field>
          </FieldGroup>
          <FieldGroup>
            <form.Field name="password" children={(field) => {
              const isInvalid =
                field.state.meta.isTouched && !field.state.meta.isValid
              return (
                <Field>
                  <FieldLabel htmlFor={field.name}>Password</FieldLabel>
                  <Input
                    type="password"
                    id={field.name}
                    name={field.name}
                    value={field.state.value}
                    onChange={(e) => field.handleChange(e.target.value)}
                  ></Input>

                  {isInvalid && <FieldError errors={field.state.meta.errors} />}
                </Field>
              );
            }}></form.Field>
          </FieldGroup>
        </form>
      </CardContent>
      <CardFooter className="flex justify-end flex-col gap-4">
        <Button className="w-full" form="register-form" type="submit">Login</Button>
        <Button className="w-full" onClick={() => handleGoogleLogin()} variant="outline" type="button">
          Continue with Google
        </Button>
      </CardFooter>
      <FieldDescription className="text-center">
        Don&apos;t have an account? <a href="/register">register</a>
      </FieldDescription>
    </Card>
  )
}

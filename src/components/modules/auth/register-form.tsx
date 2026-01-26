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
import { useRouter } from "next/navigation"
import { toast } from "sonner"
import * as z from "zod"

const formSchema = z.object({
  name: z.string().min(1, "This field is Required"),
  email: z.email(),
  password: z.string().min(8, "Minimum length is 8"),
})

export function SignupForm({ ...props }: React.ComponentProps<typeof Card>) {
  const handleGoogleLogin = async () => {
    const data = authClient.signIn.social({
      provider: "google",
      callbackURL: "http://localhost:3000"
    })
  }
  const router = useRouter();

  const form = useForm({
    defaultValues: {
      name: "",
      email: "",
      password: "",
    },
    validators: {
      onSubmit: formSchema
    },
    onSubmit: async ({ value }) => {
      const toastId = toast.loading("Creating Account");
      try {
        const { data, error } = await authClient.signUp.email(value);
        if (error) {
          toast.error(error.message, { id: toastId });
          return;
        }

        toast.success("User Created Succssefully", { id: toastId });
        router.push("/");
      } catch (err) {
        toast.error("Something went wrong, please try again", { id: toastId })
      }

    },
  })

  return (
    <Card {...props}>
      <CardHeader>
        <CardTitle>Create an account</CardTitle>
        <CardDescription>
          Enter your information below to create your account
        </CardDescription>
      </CardHeader>
      <CardContent>
        <form className="flex flex-col gap-3" id="register-form" onSubmit={(e) => {
          e.preventDefault();
          form.handleSubmit();
        }}>
          <FieldGroup>
            <form.Field name="name" children={(field) => {
              const isInvalid =
                field.state.meta.isTouched && !field.state.meta.isValid

              return (
                <Field>
                  <FieldLabel htmlFor={field.name}>Name</FieldLabel>
                  <Input
                    type="text"
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
        <Button className="w-full" form="register-form" type="submit">Register</Button>
        <Button className="w-full" onClick={() => handleGoogleLogin()} variant="outline" type="button">
          Register with Google
        </Button>
      </CardFooter>
      <FieldDescription className="text-center">
        Don&apos;t have an account? <a href="/login">Sign in</a>
      </FieldDescription>
    </Card>
  )
}

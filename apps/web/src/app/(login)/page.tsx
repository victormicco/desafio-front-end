"use client";

import React from "react";
import { useRouter } from "next/navigation";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { BackgroundBeams } from "@/components/ui/background-beams";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { useToast } from "@/components/ui/use-toast";
import { zodResolver } from "@hookform/resolvers/zod";

import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";

const FormSchema = z.object({
  username: z.string().min(2, {
    message: "Username tem que ter no mínimo 2 caracteres.",
  }),
  password: z.string().min(3, {
    message: "Password tem que ter no mínimo 3 caracteres.",
  }),
});

export default function Component() {
  const { toast } = useToast();
  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      username: "",
      password: "",
    },
  });
  const router = useRouter();

  function onSubmit(data: z.infer<typeof FormSchema>) {
    try {
      if (data.username !== "admin" || data.password !== "admin") {
        throw new Error("Usuário ou senha inválidos");
      }
      toast({
        title: "Sucesso!",
        description: "Você foi logado com sucesso!",
      });
      router.push("/dashboard");
    } catch (error) {
      toast({
        title: "Erro!",
        description: "Ocorreu um erro ao tentar logar",
        className: "bg-red-500 text-white",
      });
      console.error(error);
    }
  }
  const handleSubmit = (event: React.FormEvent) => {};

  return (
    <div className="flex min-h-screen items-center justify-center bg-blue-100">
      <BackgroundBeams />
      <div className="w-full max-w-md space-y-6 absolute">
        <div className="text-center">
          <h1 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-gray-50">
            Bem-vindo de volta!
          </h1>
          <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">
            Entre com suas credenciais abaixo para acessar sua conta
          </p>
        </div>
        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(onSubmit)}
            className="w-3/3 space-y-6 flex flex-col"
          >
            <FormField
              control={form.control}
              name="username"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Usuário</FormLabel>
                  <FormControl>
                    <Input placeholder="Digite seu Usuário " {...field} />
                  </FormControl>

                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="password"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Senha</FormLabel>
                  <FormControl>
                    <Input placeholder="Digite sua senha " {...field} />
                  </FormControl>

                  <FormMessage />
                </FormItem>
              )}
            />
            <Button type="submit">Entrar</Button>
          </form>
        </Form>
        <p className="text-center text-sm text-gray-600 dark:text-gray-400">
          Não tem uma conta?{" "}
          <Link
            href="#"
            className="font-medium text-gray-900 hover:text-gray-700 dark:text-gray-50 dark:hover:text-gray-300"
            prefetch={false}
          >
            Cadastrar-se
          </Link>
        </p>
      </div>
    </div>
  );
}

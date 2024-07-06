"use client";

import React from "react";
import { useRouter } from "next/navigation"; // Import useRouter from next/navigation
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { BackgroundBeams } from "../../components/ui/background-beams";

export default function Component() {
  const router = useRouter();

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    router.push("/dashboard");
  };

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
        <form className="space-y-4" onSubmit={handleSubmit}>
          <div>
            <Label htmlFor="username">E-mail</Label>
            <Input id="username" type="text" placeholder="Digite seu e-mail" />
          </div>
          <div>
            <div className="flex items-center justify-between">
              <Label htmlFor="password">Senha</Label>
              <Link
                href="#"
                className="text-sm font-medium text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-50"
                prefetch={false}
              >
                Esqueceu sua senha?
              </Link>
            </div>
            <Input
              id="password"
              type="password"
              placeholder="Digite sua senha"
            />
          </div>
          <Button type="submit" className="w-full bg-blue-700">
            Entrar
          </Button>
        </form>
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

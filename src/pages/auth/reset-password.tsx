import { zodResolver } from "@hookform/resolvers/zod";
import { toast } from "sonner";
import { z } from "zod";

import { Helmet } from "react-helmet-async";
import { useForm } from "react-hook-form";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

// 🧠 Validação das senhas
const resetPasswordSchema = z
  .object({
    password: z.string().min(6, {
      message: "A senha deve ter pelo menos 6 caracteres",
    }),
    confirmPassword: z.string(),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "As senhas não coincidem",
    path: ["confirmPassword"],
  });

type ResetPasswordForm = z.infer<typeof resetPasswordSchema>;

export function ResetPassword() {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<ResetPasswordForm>({
    resolver: zodResolver(resetPasswordSchema),
  });

  // Captura o token da URL manualmente
  const urlParams = new URLSearchParams(window.location.search);
  const token = urlParams.get("token");

  async function handleResetPassword(data: ResetPasswordForm) {
    if (!token) {
      toast.error("Token inválido ou ausente.");
      return;
    }

    try {
      console.log("Token:", token);
      console.log("Nova senha:", data.password);

      await new Promise((resolve) => setTimeout(resolve, 2000));

      toast.success("Senha redefinida com sucesso!");
    } catch {
      toast.error("Erro ao redefinir a senha.");
    }
  }

  return (
    <>
      <Helmet>
        <title>Redefinir Senha</title>
      </Helmet>
      <div className="p-8">
        <div className="flex flex-col gap-2 text-center">
          <h1 className="text-2xl font-semibold tracking-tight">
            Redefinir senha
          </h1>
          <p className="text-sm text-muted-foreground pb-4">
            Escolha sua nova senha de acesso.
          </p>
        </div>

        <form
          onSubmit={handleSubmit(handleResetPassword)}
          className="space-y-4"
        >
          <div className="space-y-2">
            <Label htmlFor="password">Nova senha</Label>
            <Input id="password" type="password" {...register("password")} />
            {errors.password && (
              <p className="text-red-500 text-sm">{errors.password.message}</p>
            )}
          </div>

          <div className="space-y-2">
            <Label htmlFor="confirmPassword">Confirmar senha</Label>
            <Input
              id="confirmPassword"
              type="password"
              {...register("confirmPassword")}
            />
            {errors.confirmPassword && (
              <p className="text-red-500 text-sm">
                {errors.confirmPassword.message}
              </p>
            )}
          </div>

          <Button
            disabled={isSubmitting}
            className="w-full cursor-pointer"
            type="submit"
          >
            Redefinir senha
          </Button>
        </form>
      </div>
    </>
  );
}

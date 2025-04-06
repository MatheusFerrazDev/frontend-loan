import { Helmet } from "react-helmet-async";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export function SignIn() {
  return (
    <>
      <Helmet>
        <title>Login</title>
      </Helmet>
      <div className=" p-8">
        <div className="flex w-[320px] flex-col justify-center gap-6"></div>
        <div className="flex flex-col gap-2 text-center">
          <h1 className="text-2xl font-semibold tracking-tight">
            Acessar Painel
          </h1>
          <p className="text-sm text-muted-foreground pb-4">
            Acompanhe suas finanças no seu dashboard.
          </p>
        </div>

        <form className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="email">Seu e-mail</Label>
            <Input id="email" type="email" />
            <Button className="w-full" type="submit">
              Acessar Painel
            </Button>
          </div>
        </form>
      </div>
    </>
  );
}

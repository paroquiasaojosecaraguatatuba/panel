"use client";

import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { useMutation } from "@tanstack/react-query";

import useAuthStore from "@/stores/useAuthStore";
import { refresh } from "@/api/refresh";
import { routeUtils } from "@/utils/routeUtils";
import { useNavigate } from "@/hooks/useNavigate";

const AuthGuardProvider = () => {
  const pathname = usePathname();
  const navigate = useNavigate();
  const { isLogged, email, token, setLogged } = useAuthStore();
  const [sessionChecked, setSessionChecked] = useState(false);
  const [isMounted, setIsMounted] = useState(false);

  const { mutate } = useMutation({
    mutationFn: (signal: AbortSignal) => refresh(signal),
    networkMode: "always",
    retry: 3,
  });

  // Garantir que só roda no cliente após hidratação
  useEffect(() => {
    setIsMounted(true);
  }, []);

  useEffect(() => {
    if (!isMounted) return;

    const controller = new AbortController();

    if (isLogged) {
      setSessionChecked(true);
      return () => controller.abort();
    }

    mutate(controller.signal, {
      onSuccess: ({ statusCode, token }) => {
        if (statusCode === 200) {
          setLogged({ token });
        }

        setSessionChecked(true);
      },
      onError: (error) => {
        console.error(`Initialization Error:  ${JSON.stringify(error)}`);
        setSessionChecked(true);
      },
    });

    return () => {
      controller.abort();
    };
  }, [mutate, setLogged, isLogged, isMounted]);

  useEffect(() => {
    if (!sessionChecked || !isMounted) return;

    const isProtectedRoute = routeUtils.isProtectedRoute(pathname);
    const isAuthRoute = routeUtils.isAuthRoute(pathname);
    const isConfirmCodePage = pathname.includes("/confirm-code");

    if (isLogged && token && isAuthRoute) {
      navigate.replace("/");
      return;
    }

    if (
      (!isLogged && isProtectedRoute) ||
      (isConfirmCodePage && !email && !isAuthRoute)
    ) {
      navigate.replace("/login");
    }
  }, [sessionChecked, isLogged, email, pathname, navigate, token, isMounted]);

  // Não renderiza nada até que o componente esteja montado no cliente
  if (!isMounted) return null;

  return null;
};

export default AuthGuardProvider;

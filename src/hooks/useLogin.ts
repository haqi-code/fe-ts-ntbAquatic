import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useNavigate } from "react-router";
import axios from "axios";
import api from "../libs/api";
import { setAuthData } from "../libs/auth";
import { loginSchema, type LoginFormType } from "../schemas/login.schema";

export default function useLogin () {
     const navigate = useNavigate();
    const [errorMessage, setErrorMessage] = useState<string | null>(null);

    const {
        register,
        handleSubmit,
        setError,
        formState: { errors, isSubmitting },
    } = useForm<LoginFormType>({
        resolver: zodResolver(loginSchema),
    });

    const handleLogin = async (data: LoginFormType) => {
        try {
            const res = await api.post("auth/login", data);
            const { access_token, refresh_token, role } = res.data;

            setAuthData({ access_token, refresh_token, role });

            const routes: Record<string, string> = {
                Admin: "/admin",
                AdminIndependen: "/admin-independen",
                Juri: "/juri",
            };
            if (routes[role]) navigate(routes[role]);
        } catch (error: unknown) {
            if (axios.isAxiosError(error)) {
                const message = error.response?.data?.message;

                if (typeof message === "string") {
                    const [field, text] = message.split(": ");

                    if (field === "password") {
                        setError("password", { type: "server", message: text });
                        return;
                    }
                    if (field === "email") {
                        setError("email", { type: "server", message: text });
                        return;
                    }
                }

                setErrorMessage("Login gagal");
            } else {
                setErrorMessage("Terjadi kesalahan yang tidak diketahui");
            }
        }
    };
    return {handleLogin, handleSubmit, errors, register, errorMessage, isSubmitting }
}

import Button from "../Components/Button";
import useAuth from "../hooks/useLogin";

export default function LoginFormPage() {
   
    const {handleSubmit, handleLogin, register, errors, isSubmitting, errorMessage} = useAuth()

    return (
        <div className="relative flex h-screen w-full items-center justify-center">
            <div className="absolute inset-0 bg-[url('/img/login-bg.jpg')] bg-cover bg-center"></div>
            <div className="absolute inset-0 bg-black opacity-50 z-10"></div>

            <div className="relative z-50 rounded-lg bg-black/80 px-8 py-8 w-full max-w-sm">
                <div className="mx-auto mb-4 flex w-max items-center justify-center rounded-full bg-blue-500/10 p-3">
                    <img src="/img/swimming-icon.png" alt="Swimming Icon" width="50" />
                </div>

                <h1 className="mb-3 w-full text-center text-2xl font-bold text-white">
                    Selamat Datang di Website NTB Aquatic
                </h1>
                <p className="mb-5 text-center text-white">
                    Silahkan masuk ke akun anda!
                </p>

                <form
                    onSubmit={handleSubmit(handleLogin)}
                    className="max-w-sm mx-auto p-6 rounded-lg shadow-md"
                >
                    <label className="block mb-4">
                        <span className="text-gray-300">Email :</span>
                        <input
                            type="email"
                            placeholder="Masukkan email"
                            className="mt-1 w-full rounded-md border bg-white px-3 py-2 focus:border-blue-500 focus:outline-none"
                            {...register("email")}
                        />
                        {errors.email && (
                            <p className="text-sm text-red-500">{errors.email.message}</p>
                        )}
                    </label>

                    <label className="block mb-4">
                        <span className="text-gray-300">Password :</span>
                        <input
                            type="password"
                            placeholder="Masukkan password"
                            className="mt-1 w-full rounded-md border bg-white px-3 py-2 focus:border-blue-500 focus:outline-none"
                            {...register("password")}
                        />
                        {errors.password && (
                            <p className="text-sm text-red-500">{errors.password.message}</p>
                        )}
                    </label>

                    <Button type="submit" value="submit" loading={isSubmitting}>
                        Login
                    </Button>

                    <a
                        href="/"
                        className="flex  py-3 text-sm font-medium text-gray-400 underline hover:text-gray-200"
                    >
                        Lupa Password?
                    </a>

                    {errorMessage && (
                        <p className="mt-2 text-sm text-red-500">{errorMessage}</p>
                    )}


                </form>
            </div>
        </div>
    );
}

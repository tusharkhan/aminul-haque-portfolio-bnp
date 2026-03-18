"use client";

import { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import {
  FaEnvelope,
  FaArrowLeft,
  FaCheckCircle,
  FaKey,
  FaLock,
} from "react-icons/fa";
import { useTranslation } from "../../i18n/I18nProvider";

const API_BASE_URL =
  process.env.NEXT_PUBLIC_API_BASE_URL ||
  "https://admin.nurul-haque-nur.com/api/v1";

type Step = "email" | "otp" | "password" | "success";

export default function ForgetPasswordPage() {
  const { t } = useTranslation();
  const [step, setStep] = useState<Step>("email");
  const [email, setEmail] = useState("");
  const [otp, setOtp] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  const handleSendOtp = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);
    setLoading(true);

    try {
      const res = await fetch(`${API_BASE_URL}/volunteers/forgot-password`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({ email }),
      });
      const data = await res.json();

      if (!res.ok || !data.success) {
        throw new Error(
          data.message || t("volunteerForgotPassword.requestFailed"),
        );
      }

      setStep("otp");
    } catch (err) {
      setError(
        err instanceof Error
          ? err.message
          : t("volunteerForgotPassword.requestFailed"),
      );
    } finally {
      setLoading(false);
    }
  };

  const handleVerifyOtp = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);
    setLoading(true);

    try {
      const res = await fetch(`${API_BASE_URL}/volunteers/verify-otp`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({ email, otp: otp.trim() }),
      });
      const data = await res.json();

      if (!res.ok || !data.success) {
        throw new Error(
          data.message || t("volunteerForgotPassword.requestFailed"),
        );
      }

      setStep("password");
    } catch (err) {
      setError(
        err instanceof Error
          ? err.message
          : t("volunteerForgotPassword.requestFailed"),
      );
    } finally {
      setLoading(false);
    }
  };

  const handleResetPassword = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);

    if (password.length < 6) {
      setError(t("volunteerForgotPassword.passwordMinLength"));
      return;
    }
    if (password !== confirmPassword) {
      setError(t("volunteerForgotPassword.passwordMismatch"));
      return;
    }

    setLoading(true);

    try {
      const res = await fetch(`${API_BASE_URL}/volunteers/reset-password`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          email,
          otp: otp.trim(),
          password,
          password_confirmation: confirmPassword,
        }),
      });
      const data = await res.json();

      if (!res.ok || !data.success) {
        throw new Error(
          data.message || t("volunteerForgotPassword.requestFailed"),
        );
      }

      setStep("success");
    } catch (err) {
      setError(
        err instanceof Error
          ? err.message
          : t("volunteerForgotPassword.requestFailed"),
      );
    } finally {
      setLoading(false);
    }
  };

  const cardContent = (
    <div className="relative">
      <div className="absolute inset-0 bg-gradient-to-r from-red-500 to-red-600 rounded-3xl blur-2xl opacity-20" />
      <div className="relative bg-white rounded-3xl p-8 md:p-12 shadow-2xl border border-slate-200">
        <AnimatePresence mode="wait">
          {step === "email" && (
            <motion.div
              key="email"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 20 }}
              transition={{ duration: 0.3 }}
            >
              <div className="text-center mb-8">
                <h1 className="text-4xl md:text-5xl font-black text-slate-900 mb-4">
                  <span className="bg-gradient-to-r from-red-600 to-red-600 bg-clip-text text-transparent">
                    {t("volunteerForgotPassword.title")}
                  </span>
                </h1>
                <p className="text-slate-600 text-lg">
                  {t("volunteerForgotPassword.subtitle")}
                </p>
              </div>

              <form onSubmit={handleSendOtp} className="space-y-6">
                <div>
                  <label className="block text-slate-700 font-bold mb-3 text-lg flex items-center gap-2">
                    <FaEnvelope className="text-red-600" />
                    {t("volunteerForgotPassword.email")}{" "}
                    <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder={t("volunteerForgotPassword.emailPlaceholder")}
                    className="w-full px-6 py-4 bg-slate-50 text-slate-900 border-2 border-slate-200 rounded-xl focus:outline-none focus:border-red-500 transition-all text-lg"
                    required
                    disabled={loading}
                  />
                </div>

                {error && (
                  <div className="p-4 bg-red-50 border-2 border-red-200 rounded-xl">
                    <p className="text-red-600 font-bold">{error}</p>
                  </div>
                )}

                <button
                  type="submit"
                  disabled={loading}
                  className="w-full px-8 py-4 bg-gradient-to-r from-red-500 to-red-600 text-white font-bold rounded-xl shadow-lg hover:shadow-xl hover:from-red-600 hover:to-red-700 transition-all transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none flex items-center justify-center gap-2"
                >
                  {loading ? (
                    <>
                      <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white" />
                      {t("volunteerForgotPassword.sending")}
                    </>
                  ) : (
                    <>
                      {t("volunteerForgotPassword.sendOtp")}
                      <FaEnvelope />
                    </>
                  )}
                </button>

                <div className="text-center pt-4">
                  <Link
                    href="/volunteer/login"
                    className="inline-flex items-center gap-2 text-red-600 hover:text-red-700 font-bold transition-colors"
                  >
                    <FaArrowLeft />
                    {t("volunteerForgotPassword.backToLogin")}
                  </Link>
                </div>
              </form>
            </motion.div>
          )}

          {step === "otp" && (
            <motion.div
              key="otp"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.3 }}
            >
              <div className="text-center mb-8">
                <h1 className="text-4xl md:text-5xl font-black text-slate-900 mb-4">
                  <span className="bg-gradient-to-r from-red-600 to-red-600 bg-clip-text text-transparent">
                    {t("volunteerForgotPassword.otpTitle")}
                  </span>
                </h1>
                <p className="text-slate-600 text-lg">
                  {t("volunteerForgotPassword.otpSubtitle")}
                </p>
                <p className="text-sm text-slate-500 mt-2 font-medium">
                  {email}
                </p>
              </div>

              <form onSubmit={handleVerifyOtp} className="space-y-6">
                <div>
                  <label className="block text-slate-700 font-bold mb-3 text-lg flex items-center gap-2">
                    <FaKey className="text-red-600" />
                    OTP <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    inputMode="numeric"
                    pattern="[0-9]*"
                    maxLength={6}
                    value={otp}
                    onChange={(e) => setOtp(e.target.value.replace(/\D/g, ""))}
                    placeholder={t("volunteerForgotPassword.otpPlaceholder")}
                    className="w-full px-6 py-4 bg-slate-50 text-slate-900 border-2 border-slate-200 rounded-xl focus:outline-none focus:border-red-500 transition-all text-lg text-center tracking-[0.5em]"
                    required
                    disabled={loading}
                  />
                </div>

                {error && (
                  <div className="p-4 bg-red-50 border-2 border-red-200 rounded-xl">
                    <p className="text-red-600 font-bold">{error}</p>
                  </div>
                )}

                <button
                  type="submit"
                  disabled={loading}
                  className="w-full px-8 py-4 bg-gradient-to-r from-red-500 to-red-600 text-white font-bold rounded-xl shadow-lg hover:shadow-xl hover:from-red-600 hover:to-red-700 transition-all transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none flex items-center justify-center gap-2"
                >
                  {loading ? (
                    <>
                      <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white" />
                      {t("volunteerForgotPassword.verifying")}
                    </>
                  ) : (
                    t("volunteerForgotPassword.verifyOtp")
                  )}
                </button>

                <button
                  type="button"
                  onClick={() => {
                    setStep("email");
                    setOtp("");
                    setError(null);
                  }}
                  className="w-full text-center text-slate-600 hover:text-red-600 font-bold text-sm transition-colors"
                >
                  <FaArrowLeft className="inline mr-2" />
                  {t("volunteerForgotPassword.backToLogin")}
                </button>
              </form>
            </motion.div>
          )}

          {step === "password" && (
            <motion.div
              key="password"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.3 }}
            >
              <div className="text-center mb-8">
                <h1 className="text-4xl md:text-5xl font-black text-slate-900 mb-4">
                  <span className="bg-gradient-to-r from-red-600 to-red-600 bg-clip-text text-transparent">
                    {t("volunteerForgotPassword.passwordTitle")}
                  </span>
                </h1>
                <p className="text-slate-600 text-lg">
                  {t("volunteerForgotPassword.passwordSubtitle")}
                </p>
              </div>

              <form onSubmit={handleResetPassword} className="space-y-6">
                <div>
                  <label className="block text-slate-700 font-bold mb-3 text-lg flex items-center gap-2">
                    <FaLock className="text-red-600" />
                    {t("volunteerForgotPassword.newPassword")}{" "}
                    <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder={t(
                      "volunteerForgotPassword.newPasswordPlaceholder",
                    )}
                    className="w-full px-6 py-4 bg-slate-50 text-slate-900 border-2 border-slate-200 rounded-xl focus:outline-none focus:border-red-500 transition-all text-lg"
                    required
                    minLength={6}
                    disabled={loading}
                  />
                </div>

                <div>
                  <label className="block text-slate-700 font-bold mb-3 text-lg flex items-center gap-2">
                    <FaLock className="text-red-600" />
                    {t("volunteerForgotPassword.confirmPassword")}{" "}
                    <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="password"
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                    placeholder={t(
                      "volunteerForgotPassword.confirmPasswordPlaceholder",
                    )}
                    className="w-full px-6 py-4 bg-slate-50 text-slate-900 border-2 border-slate-200 rounded-xl focus:outline-none focus:border-red-500 transition-all text-lg"
                    required
                    minLength={6}
                    disabled={loading}
                  />
                </div>

                {error && (
                  <div className="p-4 bg-red-50 border-2 border-red-200 rounded-xl">
                    <p className="text-red-600 font-bold">{error}</p>
                  </div>
                )}

                <button
                  type="submit"
                  disabled={loading}
                  className="w-full px-8 py-4 bg-gradient-to-r from-red-500 to-red-600 text-white font-bold rounded-xl shadow-lg hover:shadow-xl hover:from-red-600 hover:to-red-700 transition-all transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none flex items-center justify-center gap-2"
                >
                  {loading ? (
                    <>
                      <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white" />
                      {t("volunteerForgotPassword.resetting")}
                    </>
                  ) : (
                    t("volunteerForgotPassword.verifyAndReset")
                  )}
                </button>

                <button
                  type="button"
                  onClick={() => {
                    setStep("otp");
                    setPassword("");
                    setConfirmPassword("");
                    setError(null);
                  }}
                  className="w-full text-center text-slate-600 hover:text-red-600 font-bold text-sm transition-colors"
                >
                  <FaArrowLeft className="inline mr-2" />
                  {t("volunteerForgotPassword.backToOtp")}
                </button>
              </form>
            </motion.div>
          )}

          {step === "success" && (
            <motion.div
              key="success"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="text-center"
            >
              <div className="inline-flex p-6 bg-gradient-to-br from-red-500 to-red-600 rounded-full mb-6">
                <FaCheckCircle className="text-6xl text-white" />
              </div>
              <h2 className="text-3xl md:text-4xl font-black text-slate-900 mb-4">
                {t("volunteerForgotPassword.resetSuccess")}
              </h2>
              <p className="text-lg text-slate-600 mb-8">
                {t("volunteerForgotPassword.resetSuccessMessage")}
              </p>
              <Link
                href="/volunteer/login"
                className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-red-500 to-red-600 text-white font-bold rounded-xl shadow-lg hover:shadow-xl hover:from-red-600 hover:to-red-700 transition-all transform hover:scale-105"
              >
                <FaArrowLeft />
                {t("volunteerForgotPassword.backToLogin")}
              </Link>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );

  return (
    <main className="bg-gradient-to-b from-slate-50 via-white to-slate-50 min-h-screen flex items-center justify-center px-4 py-20">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="w-full max-w-md"
      >
        {cardContent}
      </motion.div>
    </main>
  );
}

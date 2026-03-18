"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
import {
  FaUser,
  FaEnvelope,
  FaPhone,
  FaMapMarkerAlt,
  FaTools,
  FaTasks,
  FaCalendarAlt,
} from "react-icons/fa";
import { useAuth, type Volunteer } from "../../contexts/AuthContext";
import { useTranslation } from "../../i18n/I18nProvider";

const API_BASE_URL =
  process.env.NEXT_PUBLIC_API_BASE_URL ||
  "https://admin.nurul-haque-nur.com/api/v1";

function parseJsonField(value: string | string[] | null | undefined): string[] {
  if (!value) return [];
  if (Array.isArray(value)) return value;
  try {
    const parsed = JSON.parse(value);
    return Array.isArray(parsed) ? parsed : [];
  } catch {
    return [];
  }
}

export default function VolunteerDashboardPage() {
  const { isAuthenticated, token, loading } = useAuth();
  const router = useRouter();
  const { t } = useTranslation();
  const [profile, setProfile] = useState<Volunteer | null>(null);
  const [fetchingProfile, setFetchingProfile] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (!loading && !isAuthenticated) {
      router.push("/volunteer/login");
    }
  }, [isAuthenticated, loading, router]);

  useEffect(() => {
    if (!token) return;

    const fetchProfile = async () => {
      try {
        const res = await fetch(`${API_BASE_URL}/volunteers/profile`, {
          headers: {
            Accept: "application/json",
            Authorization: `Bearer ${token}`,
          },
        });
        const data = await res.json();

        if (!res.ok || !data.success) {
          throw new Error(data.message || t("dashboard.profileLoadFailed"));
        }

        setProfile(data.data);
      } catch (err) {
        setError(
          err instanceof Error ? err.message : t("dashboard.profileLoadFailed"),
        );
      } finally {
        setFetchingProfile(false);
      }
    };

    fetchProfile();
  }, [token]);

  if (loading || fetchingProfile) {
    return (
      <main className="bg-gradient-to-b from-slate-50 via-white to-slate-50 min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-red-600"></div>
      </main>
    );
  }

  if (!isAuthenticated || !profile) {
    if (error) {
      return (
        <main className="bg-gradient-to-b from-slate-50 via-white to-slate-50 min-h-screen flex items-center justify-center px-4">
          <div className="bg-white rounded-3xl p-8 shadow-2xl border border-red-200 max-w-md text-center">
            <p className="text-red-600 font-bold text-lg mb-4">{error}</p>
            <button
              onClick={() => router.push("/volunteer/login")}
              className="px-6 py-3 bg-red-600 text-white font-bold rounded-xl hover:bg-red-700 transition-all"
            >
              {t("dashboard.loginAgain")}
            </button>
          </div>
        </main>
      );
    }
    return null;
  }

  const skills = parseJsonField(profile.skills);
  const preferredTasks = parseJsonField(profile.preferred_tasks);
  const availability = parseJsonField(profile.availability);

  return (
    <main className="bg-gradient-to-b from-slate-50 via-white to-slate-50 min-h-screen py-20 px-4">
      <div className="mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-5xl md:text-6xl font-black text-slate-900 mb-4">
            <span className="bg-gradient-to-r from-red-600 to-red-600 bg-clip-text text-transparent">
              {t("dashboard.title")}
            </span>
          </h1>
          <p className="text-xl text-slate-600 mb-12">
            {t("dashboard.welcome")}{" "}
            <span className="font-bold text-slate-900">
              {profile.full_name}
            </span>
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Profile Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-2 space-y-8"
          >
            {/* Personal Information */}
            <div className="bg-white rounded-3xl p-8 shadow-2xl border border-slate-200">
              <h2 className="text-3xl font-black text-slate-900 mb-6 flex items-center gap-3">
                <FaUser className="text-red-600" />
                {t("dashboard.personalInfo")}
              </h2>

              <div className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-slate-600 font-bold mb-2 text-sm uppercase tracking-wider">
                      {t("dashboard.fullName")}
                    </label>
                    <p className="text-xl font-bold text-slate-900">
                      {profile.full_name}
                    </p>
                  </div>

                  <div>
                    <label className="block text-slate-600 font-bold mb-2 text-sm uppercase tracking-wider flex items-center gap-2">
                      <FaEnvelope className="text-red-600" />
                      {t("dashboard.email")}
                    </label>
                    <p className="text-xl font-bold text-slate-900">
                      {profile.email}
                    </p>
                  </div>

                  <div>
                    <label className="block text-slate-600 font-bold mb-2 text-sm uppercase tracking-wider flex items-center gap-2">
                      <FaPhone className="text-red-600" />
                      {t("dashboard.mobile")}
                    </label>
                    <p className="text-xl font-bold text-slate-900">
                      {profile.mobile}
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Area Assignment */}
            <div className="bg-white rounded-3xl p-8 shadow-2xl border border-slate-200">
              <h2 className="text-3xl font-black text-slate-900 mb-6 flex items-center gap-3">
                <FaMapMarkerAlt className="text-red-600" />
                {t("dashboard.areaAssignment")}
              </h2>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div>
                  <label className="block text-slate-600 font-bold mb-2 text-sm uppercase tracking-wider">
                    {t("dashboard.district")}
                  </label>
                  <p className="text-xl font-bold text-slate-900">
                    {profile.district || t("dashboard.notAssigned")}
                  </p>
                </div>

                <div>
                  <label className="block text-slate-600 font-bold mb-2 text-sm uppercase tracking-wider">
                    {t("dashboard.upazila")}
                  </label>
                  <p className="text-xl font-bold text-slate-900">
                    {profile.upazila || t("dashboard.notAssigned")}
                  </p>
                </div>

                <div>
                  <label className="block text-slate-600 font-bold mb-2 text-sm uppercase tracking-wider">
                    {t("dashboard.ward")}
                  </label>
                  <p className="text-xl font-bold text-slate-900">
                    {profile.ward || t("dashboard.notAssigned")}
                  </p>
                </div>
              </div>
            </div>

            {/* Skills */}
            {skills.length > 0 && (
              <div className="bg-white rounded-3xl p-8 shadow-2xl border border-slate-200">
                <h2 className="text-3xl font-black text-slate-900 mb-6 flex items-center gap-3">
                  <FaTools className="text-red-600" />
                  {t("dashboard.skills")}
                </h2>
                <div className="flex flex-wrap gap-3">
                  {skills.map((skill, index) => (
                    <span
                      key={index}
                      className="px-4 py-2 bg-red-100 text-red-700 rounded-xl font-bold text-sm"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            )}

            {/* Preferred Tasks */}
            {preferredTasks.length > 0 && (
              <div className="bg-white rounded-3xl p-8 shadow-2xl border border-slate-200">
                <h2 className="text-3xl font-black text-slate-900 mb-6 flex items-center gap-3">
                  <FaTasks className="text-red-600" />
                  {t("dashboard.preferredTasks")}
                </h2>
                <div className="flex flex-wrap gap-3">
                  {preferredTasks.map((task, index) => (
                    <span
                      key={index}
                      className="px-4 py-2 bg-blue-100 text-blue-700 rounded-xl font-bold text-sm"
                    >
                      {task}
                    </span>
                  ))}
                </div>
              </div>
            )}

            {/* Availability */}
            {availability.length > 0 && (
              <div className="bg-white rounded-3xl p-8 shadow-2xl border border-slate-200">
                <h2 className="text-3xl font-black text-slate-900 mb-6 flex items-center gap-3">
                  <FaCalendarAlt className="text-red-600" />
                  {t("dashboard.availability")}
                </h2>
                <div className="space-y-2">
                  {availability.map((avail, index) => (
                    <div
                      key={index}
                      className="px-4 py-2 bg-slate-100 text-slate-700 rounded-xl font-semibold"
                    >
                      {avail}
                    </div>
                  ))}
                </div>
              </div>
            )}
          </motion.div>

          {/* Quick Actions Sidebar */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="space-y-6"
          >
            <div className="bg-gradient-to-br from-red-500 to-red-600 rounded-3xl p-8 shadow-2xl text-white">
              <h3 className="text-2xl font-black mb-4">
                {t("dashboard.quickActions")}
              </h3>
              <div className="space-y-4">
                <a
                  href="/volunteer/tasks"
                  className="block px-6 py-4 bg-white/20 backdrop-blur-sm rounded-xl font-bold hover:bg-white/30 transition-all transform hover:scale-105"
                >
                  {t("dashboard.viewTasks")}
                </a>
                <Link
                  href="/volunteer"
                  className="block px-6 py-4 bg-white/20 backdrop-blur-sm rounded-xl font-bold hover:bg-white/30 transition-all transform hover:scale-105"
                >
                  {t("dashboard.updateProfile")}
                </Link>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </main>
  );
}

// src/components/home/IntakePopup.tsx

"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { ArrowRight, X } from "lucide-react";

type Intake = {
  id: string;
  name: string;
  applicationOpen: boolean;
  applicationDeadline?: string | null;
};

export default function IntakePopup() {
  const [intake, setIntake] = useState<Intake | null>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    let cancelled = false;

    async function loadIntake() {
      try {
        const response = await fetch("/api/intakes/active", {
          cache: "no-store",
        });

        if (!response.ok) return;

        const data = await response.json();

        if (
          !cancelled &&
          data?.intake &&
          data.intake.applicationOpen === true
        ) {
          const dismissed = sessionStorage.getItem(
            `kstti-intake-${data.intake.id}-dismissed`,
          );

          if (!dismissed) {
            setIntake(data.intake);

            const timer = window.setTimeout(() => {
              setVisible(true);
            }, 1800);

            return () => window.clearTimeout(timer);
          }
        }
      } catch {
        // Keep the popup hidden if intake information cannot be loaded.
      }
    }

    loadIntake();

    return () => {
      cancelled = true;
    };
  }, []);

  function closePopup() {
    if (intake) {
      sessionStorage.setItem(
        `kstti-intake-${intake.id}-dismissed`,
        "true",
      );
    }

    setVisible(false);
  }

  if (!visible || !intake) {
    return null;
  }

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center bg-black/35 !px-5 backdrop-blur-[2px]"
      role="dialog"
      aria-modal="true"
      aria-labelledby="intake-popup-title"
    >
      <div className="relative w-full max-w-md overflow-hidden rounded-2xl border border-neutral-200 bg-[#FDFCF9] shadow-2xl">
        <button
          type="button"
          onClick={closePopup}
          aria-label="Close intake announcement"
          className="absolute right-4 top-4 z-10 flex h-9 w-9 items-center justify-center text-neutral-500  transition hover:bg-neutral-100 hover:text-neutral-900 hover:rounded-full"
        >
          <X size={18} />
        </button>

        {/* <div className="h-2.5 bg-[#E5AD23] !p-0" /> */}

        <div className="!px-7 !pb-8 !pt-9 text-center sm:!px-9">
          <div>
            <span className="tagline-center">
              Admissions Open
            </span>
          </div>

          <h2
            id="intake-popup-title"
            className="!mt-5 font-[family:var(--font-serif)] text-3xl font-bold leading-tight text-neutral-900"
          >
            {intake.name} Currently Ongoing
          </h2>

          <p className="!mx-auto !mt-4 max-w-sm text-[0.95rem] leading-7 text-neutral-600">
            Applications are currently open. Start your application today and
            take the next step towards gaining practical skills for your future.
          </p>

          {/* {intake.applicationDeadline && (
            <p className="!mt-4 text-sm font-medium text-neutral-500">
              Applications close on{" "}
              <span className="font-semibold text-neutral-800">
                {new Date(intake.applicationDeadline).toLocaleDateString(
                  "en-KE",
                  {
                    day: "numeric",
                    month: "long",
                    year: "numeric",
                  },
                )}
              </span>
            </p>
          )} */}

          <div className="!mt-7 flex flex-col gap-3 sm:flex-row sm:justify-center">
            <Link
              href="/apply"
              onClick={closePopup}
              className="btn-primary inline-flex items-center justify-center gap-2"
            >
              Apply Now
              <ArrowRight size={17} />
            </Link>

            <Link
              href="/courses"
              onClick={closePopup}
              className="btn-secondary inline-flex items-center justify-center"
            >
              View Courses
            </Link>
          </div>

          <button
            type="button"
            onClick={closePopup}
            className="!mt-5 text-sm font-medium text-neutral-500 transition hover:text-neutral-900"
          >
            Maybe later
          </button>
        </div>
      </div>
    </div>
  );
}
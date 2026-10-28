import { useEffect, useMemo, useRef, useState } from "react";
import { AnimatePresence, motion as Motion } from "framer-motion";
import { AlertCircle, CheckCircle2, Loader2, Send, X, Mail, Info } from "lucide-react";
import { siteData } from "../config/siteData";

// Optional external form services (configured via Vite environment variables)
const FORMSPREE_ENDPOINT = import.meta.env.VITE_FORMSPREE_ENDPOINT || "";
const WEB3FORMS_ACCESS_KEY = import.meta.env.VITE_WEB3FORMS_ACCESS_KEY || "";

function isValidEmail(email) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(String(email).trim());
}

export default function ContactForm() {
  const [values, setValues] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [touched, setTouched] = useState({
    name: false,
    email: false,
    subject: false,
    message: false,
  });

  const [showSuccessModal, setShowSuccessModal] = useState(false);
  const [errorMessage, setErrorMessage] = useState(null);
  const [infoMessage, setInfoMessage] = useState(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const errorTimer = useRef(null);
  const infoTimer = useRef(null);

  useEffect(() => {
    return () => {
      if (errorTimer.current) window.clearTimeout(errorTimer.current);
      if (infoTimer.current) window.clearTimeout(infoTimer.current);
    };
  }, []);

  const errors = useMemo(() => {
    const currentErrors = {};

    if (!values.name.trim()) {
      currentErrors.name = "Full Name is required.";
    } else if (values.name.trim().length < 2) {
      currentErrors.name = "Please enter your full name (at least 2 characters).";
    }

    if (!values.email.trim()) {
      currentErrors.email = "Email Address is required.";
    } else if (!isValidEmail(values.email)) {
      currentErrors.email = "Please enter a valid email address (e.g., name@example.com).";
    }

    if (!values.subject.trim()) {
      currentErrors.subject = "Subject is required.";
    } else if (values.subject.trim().length < 3) {
      currentErrors.subject = "Subject must be at least 3 characters.";
    }

    if (!values.message.trim()) {
      currentErrors.message = "Message is required.";
    } else if (values.message.trim().length < 10) {
      currentErrors.message = "Message must be at least 10 characters.";
    }

    return currentErrors;
  }, [values]);

  const hasErrors = Object.keys(errors).length > 0;

  const setField = (field, value) => {
    setValues((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  const markTouched = (field) => {
    setTouched((prev) => ({
      ...prev,
      [field]: true,
    }));
  };

  const handleCloseSuccess = () => {
    setShowSuccessModal(false);
  };

  const dismissError = () => {
    if (errorTimer.current) {
      window.clearTimeout(errorTimer.current);
      errorTimer.current = null;
    }
    setErrorMessage(null);
  };

  const dismissInfo = () => {
    if (infoTimer.current) {
      window.clearTimeout(infoTimer.current);
      infoTimer.current = null;
    }
    setInfoMessage(null);
  };

  const showError = (msg) => {
    if (errorTimer.current) window.clearTimeout(errorTimer.current);
    setErrorMessage(msg);
    errorTimer.current = window.setTimeout(() => {
      setErrorMessage(null);
      errorTimer.current = null;
    }, 8000);
  };

  const showInfo = (msg) => {
    if (infoTimer.current) window.clearTimeout(infoTimer.current);
    setInfoMessage(msg);
    infoTimer.current = window.setTimeout(() => {
      setInfoMessage(null);
      infoTimer.current = null;
    }, 8000);
  };

  const handleSendViaMailto = () => {
    const recipient = siteData.email || "jaseermohamed86@gmail.com";
    const subjectText = values.subject.trim() || (values.name ? `Portfolio Inquiry from ${values.name}` : "Junior QS Opportunity Inquiry");
    const bodyText = `Name: ${values.name || "N/A"}\nEmail: ${values.email || "N/A"}\n\nMessage:\n${values.message || ""}`;

    const mailtoUrl = `mailto:${encodeURIComponent(recipient)}?subject=${encodeURIComponent(subjectText)}&body=${encodeURIComponent(bodyText)}`;
    window.location.href = mailtoUrl;
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    setTouched({
      name: true,
      email: true,
      subject: true,
      message: true,
    });

    if (hasErrors || isSubmitting) {
      return;
    }

    setIsSubmitting(true);

    try {
      // 1. Check if Formspree endpoint is configured
      if (FORMSPREE_ENDPOINT) {
        const response = await fetch(FORMSPREE_ENDPOINT, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
          },
          body: JSON.stringify({
            name: values.name,
            email: values.email,
            subject: values.subject,
            message: values.message,
          }),
        });

        if (response.ok) {
          setValues({ name: "", email: "", subject: "", message: "" });
          setTouched({ name: false, email: false, subject: false, message: false });
          setShowSuccessModal(true);
        } else {
          showError("Online form delivery failed. Click below to send directly via your email app.");
        }
      }
      // 2. Check if Web3Forms key is configured
      else if (WEB3FORMS_ACCESS_KEY) {
        const formData = new FormData();
        formData.append("access_key", WEB3FORMS_ACCESS_KEY);
        formData.append("name", values.name);
        formData.append("email", values.email);
        formData.append("subject", values.subject);
        formData.append("message", values.message);
        formData.append("from_name", "Mohamed Jeseer Portfolio");

        const response = await fetch("https://api.web3forms.com/submit", {
          method: "POST",
          body: formData,
        });

        const data = await response.json();
        if (data.success) {
          setValues({ name: "", email: "", subject: "", message: "" });
          setTouched({ name: false, email: false, subject: false, message: false });
          setShowSuccessModal(true);
        } else {
          showError("Online form delivery service returned an error. Click below to send via your email app.");
        }
      }
      // 3. Fallback when no external service endpoint is configured in .env
      else {
        handleSendViaMailto();
        showInfo(
          `Opening your email client to send to ${siteData.email}. (To enable direct online submissions, configure your Formspree endpoint in .env)`
        );
      }
    } catch {
      showError("Could not reach online message service. Please click below to send via your email app.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="surface rounded-2xl p-6 sm:p-7">
      <h3 className="text-xl font-extrabold tracking-tight text-(--text)">
        Send a Message
      </h3>

      <p className="mt-2 text-sm text-muted">
        Fill out the form below or contact directly via email.
      </p>

      <form onSubmit={handleSubmit} className="mt-6 space-y-4" noValidate>
        {/* Full Name */}
        <div>
          <label className="form-label" htmlFor="name">
            Full Name <span className="text-red-500" aria-hidden="true">*</span>
          </label>

          <input
            id="name"
            name="name"
            type="text"
            required
            value={values.name}
            onChange={(e) => setField("name", e.target.value)}
            onBlur={() => markTouched("name")}
            className={
              touched.name && errors.name
                ? "form-input form-error"
                : "form-input"
            }
            placeholder="e.g. John Smith"
            autoComplete="name"
            aria-required="true"
            aria-invalid={touched.name && Boolean(errors.name)}
            aria-describedby={touched.name && errors.name ? "name-error" : undefined}
            disabled={isSubmitting}
          />

          {touched.name && errors.name && (
            <p id="name-error" className="form-help" role="alert">
              {errors.name}
            </p>
          )}
        </div>

        {/* Email Address */}
        <div>
          <label className="form-label" htmlFor="email">
            Email Address <span className="text-red-500" aria-hidden="true">*</span>
          </label>

          <input
            id="email"
            name="email"
            type="email"
            required
            value={values.email}
            onChange={(e) => setField("email", e.target.value)}
            onBlur={() => markTouched("email")}
            className={
              touched.email && errors.email
                ? "form-input form-error"
                : "form-input"
            }
            placeholder="e.g. john.smith@company.com"
            autoComplete="email"
            aria-required="true"
            aria-invalid={touched.email && Boolean(errors.email)}
            aria-describedby={touched.email && errors.email ? "email-error" : undefined}
            disabled={isSubmitting}
          />

          {touched.email && errors.email && (
            <p id="email-error" className="form-help" role="alert">
              {errors.email}
            </p>
          )}
        </div>

        {/* Subject */}
        <div>
          <label className="form-label" htmlFor="subject">
            Subject <span className="text-red-500" aria-hidden="true">*</span>
          </label>

          <input
            id="subject"
            name="subject"
            type="text"
            required
            value={values.subject}
            onChange={(e) => setField("subject", e.target.value)}
            onBlur={() => markTouched("subject")}
            className={
              touched.subject && errors.subject
                ? "form-input form-error"
                : "form-input"
            }
            placeholder="e.g. Junior Quantity Surveyor Opportunity — UAE"
            aria-required="true"
            aria-invalid={touched.subject && Boolean(errors.subject)}
            aria-describedby={touched.subject && errors.subject ? "subject-error" : undefined}
            disabled={isSubmitting}
          />

          {touched.subject && errors.subject && (
            <p id="subject-error" className="form-help" role="alert">
              {errors.subject}
            </p>
          )}
        </div>

        {/* Message */}
        <div>
          <label className="form-label" htmlFor="message">
            Message <span className="text-red-500" aria-hidden="true">*</span>
          </label>

          <textarea
            id="message"
            name="message"
            required
            value={values.message}
            onChange={(e) => setField("message", e.target.value)}
            onBlur={() => markTouched("message")}
            className={
              touched.message && errors.message
                ? "form-textarea form-error"
                : "form-textarea"
            }
            placeholder="Describe your project, role requirements, or inquiry..."
            rows={5}
            aria-required="true"
            aria-invalid={touched.message && Boolean(errors.message)}
            aria-describedby={touched.message && errors.message ? "message-error" : undefined}
            disabled={isSubmitting}
          />

          {touched.message && errors.message && (
            <p id="message-error" className="form-help" role="alert">
              {errors.message}
            </p>
          )}
        </div>

        {/* Spam protection honeypot */}
        <input
          type="checkbox"
          name="_gotcha"
          className="hidden"
          style={{ display: "none" }}
          tabIndex="-1"
          autoComplete="off"
        />

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-3 pt-2">
          {/* Primary "Send a Message" button */}
          <button
            type="submit"
            className="btn-primary inline-flex flex-1 items-center justify-center gap-2 rounded-xl px-6 py-3 text-sm font-semibold shadow-md transition-transform hover:-translate-y-0.5 disabled:cursor-not-allowed disabled:opacity-60 disabled:hover:translate-y-0"
            disabled={isSubmitting}
          >
            {isSubmitting ? (
              <>
                <Loader2 className="h-4 w-4 animate-spin" />
                <span>Sending Message...</span>
              </>
            ) : (
              <>
                <Send className="h-4 w-4" />
                <span>Send a Message</span>
              </>
            )}
          </button>

          {/* Direct Email Application fallback */}
          <button
            type="button"
            onClick={handleSendViaMailto}
            className="surface surface-hover inline-flex items-center justify-center gap-2 rounded-xl px-5 py-3 text-sm font-semibold text-(--text)"
            title="Open in your default email application"
          >
            <Mail className="h-4 w-4 text-(--primary)" />
            <span>Send via Email App</span>
          </button>
        </div>
      </form>

      {/* Success Modal */}
      <AnimatePresence>
        {showSuccessModal && (
          <Motion.div
            key="modal-backdrop"
            role="presentation"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            onClick={handleCloseSuccess}
            className="fixed inset-0 z-80 flex items-center justify-center bg-black/70 backdrop-blur-md p-4"
          >
            <Motion.div
              key="modal-card"
              role="dialog"
              aria-modal="true"
              aria-labelledby="success-modal-title"
              aria-describedby="success-modal-desc"
              initial={{ scale: 0.92, opacity: 0, y: 12 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.92, opacity: 0, y: 12 }}
              transition={{ duration: 0.25, ease: "easeOut" }}
              onClick={(e) => e.stopPropagation()}
              className="relative w-full max-w-md rounded-3xl border border-(--border) bg-(--bg) p-6 sm:p-8 shadow-2xl text-center"
            >
              <button
                type="button"
                onClick={handleCloseSuccess}
                className="absolute right-4 top-4 rounded-xl p-2 text-muted transition-colors hover:bg-black/5 hover:text-(--text) dark:hover:bg-white/10"
                aria-label="Close success message"
              >
                <X className="h-5 w-5" />
              </button>

              <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-emerald-500/10 text-emerald-500 ring-8 ring-emerald-500/5 mb-5 dark:bg-emerald-500/20 dark:text-emerald-400">
                <CheckCircle2 className="h-8 w-8" />
              </div>

              <h3
                id="success-modal-title"
                className="text-xl sm:text-2xl font-extrabold tracking-tight text-(--text)"
              >
                Message Sent Successfully!
              </h3>

              <p
                id="success-modal-desc"
                className="mt-2.5 text-sm text-muted leading-relaxed"
              >
                Thank you for reaching out. Your message has been delivered to Mohamed Jeseer, and I will get back to you promptly.
              </p>

              <div className="mt-6">
                <button
                  type="button"
                  onClick={handleCloseSuccess}
                  className="btn-primary inline-flex w-full items-center justify-center gap-2 rounded-xl px-6 py-3 text-sm font-semibold shadow-md transition-transform hover:-translate-y-0.5"
                >
                  <span>Close</span>
                </button>
              </div>
            </Motion.div>
          </Motion.div>
        )}
      </AnimatePresence>

      {/* Floating Info Notification */}
      <AnimatePresence>
        {infoMessage && (
          <Motion.div
            role="status"
            aria-live="polite"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 10 }}
            transition={{ duration: 0.25, ease: "easeOut" }}
            className="fixed bottom-6 left-4 right-4 z-70 mx-auto flex max-w-md items-start gap-3.5 rounded-2xl border border-blue-500/20 bg-(--bg) backdrop-blur-xl p-4 shadow-xl sm:left-auto sm:right-6 sm:mx-0 sm:w-96"
          >
            <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-blue-500/10 text-blue-500 dark:bg-blue-500/20 dark:text-blue-400">
              <Info className="h-5 w-5" />
            </div>

            <div className="min-w-0 flex-1 pt-0.5">
              <p className="text-sm font-bold tracking-tight text-(--text)">Notice</p>
              <p className="mt-1 text-xs leading-relaxed text-muted">{infoMessage}</p>
            </div>

            <button
              type="button"
              onClick={dismissInfo}
              className="shrink-0 rounded-lg p-1 text-muted transition-colors hover:bg-black/5 hover:text-(--text) dark:hover:bg-white/10"
              aria-label="Close notification"
            >
              <X className="h-4 w-4" />
            </button>
          </Motion.div>
        )}
      </AnimatePresence>

      {/* Floating Error Toast */}
      <AnimatePresence>
        {errorMessage && (
          <Motion.div
            role="alert"
            aria-live="assertive"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 10 }}
            transition={{ duration: 0.25, ease: "easeOut" }}
            className="fixed bottom-6 left-4 right-4 z-70 mx-auto flex max-w-md items-start gap-3.5 rounded-2xl border border-red-500/20 bg-(--bg) backdrop-blur-xl p-4 shadow-xl sm:left-auto sm:right-6 sm:mx-0 sm:w-96"
          >
            <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-red-500/10 text-red-500 dark:bg-red-500/20 dark:text-red-400">
              <AlertCircle className="h-5 w-5" />
            </div>

            <div className="min-w-0 flex-1 pt-0.5">
              <p className="text-sm font-bold tracking-tight text-(--text)">Notice</p>
              <p className="mt-1 text-xs leading-relaxed text-muted">{errorMessage}</p>
              <button
                type="button"
                onClick={handleSendViaMailto}
                className="mt-2 text-xs font-semibold text-(--primary) underline underline-offset-2"
              >
                Send directly via Email App &rarr;
              </button>
            </div>

            <button
              type="button"
              onClick={dismissError}
              className="shrink-0 rounded-lg p-1 text-muted transition-colors hover:bg-black/5 hover:text-(--text) dark:hover:bg-white/10"
              aria-label="Close error notification"
            >
              <X className="h-4 w-4" />
            </button>
          </Motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

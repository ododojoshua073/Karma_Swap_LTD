import { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import emailjs from "@emailjs/browser";
import { toast } from "sonner";
import { createClient } from "@supabase/supabase-js";

const supabase = createClient(
  import.meta.env.VITE_SUPABASE_URL,
  import.meta.env.VITE_SUPABASE_ANON_KEY,
);

const roles = [
  "Software Developer",
  "Community Manager",
  "Product Designer",
  "Marketing & Growth",
  "Operations",
  "Other",
];

const CareersSection = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    role: "",
    message: "",
  });

  const [fileName, setFileName] = useState("");
  const [fileData, setFileData] = useState<File | null>(null);
  const [loading, setLoading] = useState(false);
  const [selectedRole, setSelectedRole] = useState("");

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setFileName(file.name);
      setFileData(file);
    }
  };

  const uploadFile = async (): Promise<string | null> => {
    if (!fileData) return null;

    const fileExt = fileData.name.split(".").pop();
    const fileName = `cv_${Date.now()}_${Math.random().toString(36).slice(2)}.${fileExt}`;

    const { error } = await supabase.storage
      .from("csv")
      .upload(fileName, fileData, {
        contentType: fileData.type,
        upsert: false,
      });

    if (error) throw new Error(error.message);

    const { data } = supabase.storage.from("csv").getPublicUrl(fileName);
    return data.publicUrl;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    setLoading(true);
    try {
      const fileUrl = fileData ? await uploadFile() : null;

      await emailjs.send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID_CAREERS,
        {
          from_name: form.name,
          from_email: form.email,
          role: selectedRole || form.role,
          message: form.message,
          resume_url: fileUrl || "No CV uploaded",
        },
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY,
      );

      toast.success("Application submitted! We'll be in touch.");
      setForm({ name: "", email: "", role: "", message: "" });
      setFileName("");
      setFileData(null);
      setSelectedRole("");
    } catch (error) {
      console.error(error);
      toast.error("Failed to submit. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section
      id="careers"
      className="py-24 bg-muted/50 relative overflow-hidden"
    >
      {/* Subtle background accent */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] rounded-full bg-green-500/5 blur-3xl pointer-events-none" />

      <div className="container relative">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-2xl mx-auto text-center mb-14"
        >
          <span className="inline-block text-xs font-semibold tracking-widest uppercase text-green-600 dark:text-green-400 mb-3 px-3 py-1 rounded-full border border-green-200 dark:border-green-800 bg-green-50 dark:bg-green-950">
            We're Hiring
          </span>
          <h2 className="text-4xl sm:text-5xl font-bold text-foreground mb-5 leading-tight">
            Join the Karma
            <br />
            Movement
          </h2>
          <p className="text-muted-foreground text-base leading-relaxed">
            We're a small, passionate team looking for builders who believe in
            sustainability and community. Remote-friendly · Ibadan/Lagos base
            preferred.
          </p>
        </motion.div>

        {/* Role pills */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="flex flex-wrap justify-center gap-2 mb-12"
        >
          {roles.map((role) => (
            <button
              key={role}
              type="button"
              onClick={() => setSelectedRole(role === selectedRole ? "" : role)}
              className={`px-4 py-1.5 rounded-full text-sm font-medium border transition-all duration-200 ${
                selectedRole === role
                  ? "bg-green-600 text-white border-green-600"
                  : "border-border text-muted-foreground hover:border-green-500 hover:text-green-600"
              }`}
            >
              {role}
            </button>
          ))}
        </motion.div>

        {/* Form card */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="max-w-xl mx-auto bg-background border border-border rounded-2xl p-8 shadow-sm"
        >
          <form onSubmit={handleSubmit} className="space-y-5">
            {/* Name + Email row */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="space-y-1.5">
                <label className="text-xs font-medium text-muted-foreground uppercase tracking-wide">
                  Full Name
                </label>
                <Input
                  placeholder="Ada Okonkwo"
                  required
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                />
              </div>
              <div className="space-y-1.5">
                <label className="text-xs font-medium text-muted-foreground uppercase tracking-wide">
                  Email
                </label>
                <Input
                  type="email"
                  placeholder="ada@example.com"
                  required
                  value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                />
              </div>
            </div>

            {/* Role field - shows if no pill selected */}
            {!selectedRole && (
              <div className="space-y-1.5">
                <label className="text-xs font-medium text-muted-foreground uppercase tracking-wide">
                  Role Interest
                </label>
                <Input
                  placeholder="e.g. Frontend Developer"
                  value={form.role}
                  onChange={(e) => setForm({ ...form, role: e.target.value })}
                />
              </div>
            )}

            {selectedRole && (
              <div className="flex items-center gap-2 text-sm text-green-600 dark:text-green-400 font-medium">
                <span className="w-2 h-2 rounded-full bg-green-500 inline-block" />
                Applying for: {selectedRole}
              </div>
            )}

            {/* Message */}
            <div className="space-y-1.5">
              <label className="text-xs font-medium text-muted-foreground uppercase tracking-wide">
                About You
              </label>
              <Textarea
                placeholder="Tell us what makes you a great fit..."
                rows={4}
                value={form.message}
                onChange={(e) => setForm({ ...form, message: e.target.value })}
              />
            </div>

            {/* File upload */}
            <div className="space-y-1.5">
              <label className="text-xs font-medium text-muted-foreground uppercase tracking-wide">
                CV / Resume(optional)
              </label>
              <label
                className={`flex items-center justify-between w-full border rounded-lg px-4 py-3 cursor-pointer transition-colors ${
                  fileName
                    ? "border-green-500 bg-green-50 dark:bg-green-950/30"
                    : "border-border hover:border-green-400"
                }`}
              >
                <div className="flex items-center gap-3">
                  <div
                    className={`w-8 h-8 rounded-md flex items-center justify-center text-xs font-bold ${
                      fileName
                        ? "bg-green-600 text-white"
                        : "bg-muted text-muted-foreground"
                    }`}
                  >
                    {fileName ? "PDF" : "↑"}
                  </div>
                  <span
                    className={`text-sm ${fileName ? "text-foreground font-medium" : "text-muted-foreground"}`}
                  >
                    {fileName || "Upload PDF, DOC or DOCX"}
                  </span>
                </div>
                <span className="text-xs text-muted-foreground border border-border rounded px-2 py-1">
                  Browse
                </span>
                <input
                  type="file"
                  accept=".pdf,.doc,.docx"
                  className="hidden"
                  onChange={handleFileChange}
                />
              </label>
            </div>

            <Button
              type="submit"
              size="lg"
              className="w-full bg-green-600 hover:bg-green-700 text-white font-semibold rounded-lg h-12"
              disabled={loading}
            >
              {loading ? (
                <span className="flex items-center gap-2">
                  <span className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                  Submitting...
                </span>
              ) : (
                "Submit Application →"
              )}
            </Button>
          </form>
        </motion.div>
      </div>
    </section>
  );
};

export default CareersSection;

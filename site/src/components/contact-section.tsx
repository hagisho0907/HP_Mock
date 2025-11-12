'use client';

import { useState } from "react";

import { Checkbox } from "./ui/checkbox";
import { Input } from "./ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue
} from "./ui/select";
import { Textarea } from "./ui/textarea";

type ContactFormData = {
  name: string;
  company: string;
  email: string;
  country: string;
  industry: string;
  inquiryType: string;
  message: string;
  privacyAgreed: boolean;
};

export function ContactSection() {
  const [formData, setFormData] = useState<ContactFormData>({
    name: "",
    company: "",
    email: "",
    country: "",
    industry: "",
    inquiryType: "",
    message: "",
    privacyAgreed: false
  });

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (!formData.industry) {
      alert("業種を選択してください。");
      return;
    }

    if (!formData.privacyAgreed) {
      alert("プライバシーポリシーに同意してください。");
      return;
    }

    console.log("Form submitted:", formData);
    alert("お問い合わせありがとうございます。（デモ版のため送信されません）");
  };

  return (
    <section id="contact" className="relative bg-black px-4 py-16 sm:px-6 lg:py-24">
      <div className="container mx-auto max-w-3xl">
        <div className="mb-12 space-y-3 text-center">
          <p className="text-xs uppercase tracking-[0.4em] text-white/50">Contact</p>
          <h2 className="text-[clamp(42px,9vw,104px)] leading-none tracking-tight text-white">
            お問い合わせ
          </h2>
          <p className="text-sm leading-relaxed text-white/70 sm:text-base">
            モバイルでも入力しやすい1カラムフォーム。最小限のスクロールで完結できます。
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6 rounded-[32px] bg-white/5 p-6 backdrop-blur-sm sm:p-8">
          <div className="grid gap-6 sm:grid-cols-2">
            <div>
              <label className="mb-2 block text-xs uppercase tracking-[0.3em] text-white/70">
                お名前 <span className="text-red-400">*</span>
              </label>
              <Input
                type="text"
                required
                value={formData.name}
                onChange={(event) => setFormData({ ...formData, name: event.target.value })}
                className="h-12 rounded-xl border-0 bg-white/90 text-black"
              />
            </div>

            <div>
              <label className="mb-2 block text-xs uppercase tracking-[0.3em] text-white/70">
                会社名 <span className="text-red-400">*</span>
              </label>
              <Input
                type="text"
                required
                value={formData.company}
                onChange={(event) => setFormData({ ...formData, company: event.target.value })}
                className="h-12 rounded-xl border-0 bg-white/90 text-black"
              />
            </div>
          </div>

          <div className="grid gap-6 sm:grid-cols-2">
            <div>
              <label className="mb-2 block text-xs uppercase tracking-[0.3em] text-white/70">
                メールアドレス <span className="text-red-400">*</span>
              </label>
              <Input
                type="email"
                required
                value={formData.email}
                onChange={(event) => setFormData({ ...formData, email: event.target.value })}
                className="h-12 rounded-xl border-0 bg-white/90 text-black"
              />
            </div>

            <div>
              <label className="mb-2 block text-xs uppercase tracking-[0.3em] text-white/70">居住国</label>
              <Input
                type="text"
                value={formData.country}
                onChange={(event) => setFormData({ ...formData, country: event.target.value })}
                className="h-12 rounded-xl border-0 bg-white/90 text-black"
              />
            </div>
          </div>

          <div className="grid gap-6 sm:grid-cols-2">
            <div>
              <label className="mb-2 block text-xs uppercase tracking-[0.3em] text-white/70">
                業種 <span className="text-red-400">*</span>
              </label>
              <Select
                required
                value={formData.industry}
                onValueChange={(value) => setFormData({ ...formData, industry: value })}
              >
                <SelectTrigger className="h-12 rounded-xl border-0 bg-white/90 text-gray-600">
                  <SelectValue placeholder="選択してください" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="it">IT・通信</SelectItem>
                  <SelectItem value="manufacturing">製造業</SelectItem>
                  <SelectItem value="service">サービス業</SelectItem>
                  <SelectItem value="entertainment">エンターテインメント</SelectItem>
                  <SelectItem value="education">教育</SelectItem>
                  <SelectItem value="real-estate">不動産</SelectItem>
                  <SelectItem value="finance">金融</SelectItem>
                  <SelectItem value="other">その他</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div>
              <label className="mb-2 block text-xs uppercase tracking-[0.3em] text-white/70">
                お問い合わせ種別
              </label>
              <Select
                value={formData.inquiryType}
                onValueChange={(value) => setFormData({ ...formData, inquiryType: value })}
              >
                <SelectTrigger className="h-12 rounded-xl border-0 bg-white/90 text-gray-600">
                  <SelectValue placeholder="選択してください" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="service">サービスについて</SelectItem>
                  <SelectItem value="recruit">採用について</SelectItem>
                  <SelectItem value="partnership">業務提携について</SelectItem>
                  <SelectItem value="media">取材・メディア掲載について</SelectItem>
                  <SelectItem value="other">その他</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>

          <div>
            <label className="mb-2 block text-xs uppercase tracking-[0.3em] text-white/70">
              お問い合わせ内容 <span className="text-red-400">*</span>
            </label>
            <Textarea
              required
              value={formData.message}
              onChange={(event) => setFormData({ ...formData, message: event.target.value })}
              className="min-h-40 rounded-2xl border-0 bg-white/90 text-black"
            />
          </div>

          <div className="flex flex-col gap-3 rounded-2xl bg-white/5 p-4 sm:flex-row sm:items-center">
            <Checkbox
              id="privacy"
              checked={formData.privacyAgreed}
              onCheckedChange={(checked) =>
                setFormData({ ...formData, privacyAgreed: Boolean(checked) })
              }
              className="border-white bg-transparent data-[state=checked]:bg-white data-[state=checked]:text-black"
            />
            <label htmlFor="privacy" className="text-sm text-white/80">
              プライバシーポリシーに同意して送信する
            </label>
          </div>

          <button
            type="submit"
            className="w-full rounded-full bg-white/90 py-4 text-sm font-semibold uppercase tracking-[0.4em] text-black transition hover:bg-white"
          >
            この内容で送信する
          </button>
        </form>

        <footer className="mt-16 border-t border-white/10 pt-10 text-center">
          <nav className="mb-6 flex flex-wrap justify-center gap-4 text-xs uppercase tracking-[0.3em] text-white/60">
            <a href="#home" className="hover:text-white">
              HOME
            </a>
            <a href="#news" className="hover:text-white">
              NEWS
            </a>
            <a href="#service" className="hover:text-white">
              SERVICE
            </a>
            <a href="/works" className="hover:text-white">
              WORKS
            </a>
            <a href="#recruit" className="hover:text-white">
              RECRUIT
            </a>
            <a href="#about" className="hover:text-white">
              ABOUT
            </a>
            <a href="#contact" className="hover:text-white">
              CONTACT
            </a>
          </nav>
          <a href="#" className="mb-3 block text-white text-sm hover:opacity-70">
            PRIVACY POLICY
          </a>
          <p className="text-white/70 text-sm">(c)2024 toito.inc</p>
        </footer>
      </div>
    </section>
  );
}

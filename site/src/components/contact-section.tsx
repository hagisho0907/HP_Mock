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
    <section id="contact" className="relative bg-black py-20 px-6">
      <div className="container mx-auto max-w-3xl">
        <h2 className="text-[clamp(48px,10vw,104px)] leading-none tracking-tight text-white mb-16">CONTACT</h2>

        <form onSubmit={handleSubmit} className="space-y-8">
          <div>
            <label className="text-white mb-3 block">
              お名前 <span className="text-red-500">*</span>
            </label>
            <Input
              type="text"
              required
              value={formData.name}
              onChange={(event) => setFormData({ ...formData, name: event.target.value })}
              className="bg-white text-black border-0 h-12 rounded-md"
            />
          </div>

          <div>
            <label className="text-white mb-3 block">
              会社名 <span className="text-red-500">*</span>
            </label>
            <Input
              type="text"
              required
              value={formData.company}
              onChange={(event) => setFormData({ ...formData, company: event.target.value })}
              className="bg-white text-black border-0 h-12 rounded-md"
            />
          </div>

          <div>
            <label className="text-white mb-3 block">
              メールアドレス <span className="text-red-500">*</span>
            </label>
            <Input
              type="email"
              required
              value={formData.email}
              onChange={(event) => setFormData({ ...formData, email: event.target.value })}
              className="bg-white text-black border-0 h-12 rounded-md"
            />
          </div>

          <div>
            <label className="text-white mb-3 block">居住国</label>
            <Input
              type="text"
              value={formData.country}
              onChange={(event) => setFormData({ ...formData, country: event.target.value })}
              className="bg-white text-black border-0 h-12 rounded-md"
            />
          </div>

          <div>
            <label className="text-white mb-3 block">
              業種 <span className="text-red-500">*</span>
            </label>
            <Select
              required
              value={formData.industry}
              onValueChange={(value) => setFormData({ ...formData, industry: value })}
            >
              <SelectTrigger className="bg-white text-gray-500 border-0 h-12 rounded-md">
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
            <label className="text-white mb-3 block">お問い合わせ種別</label>
            <Select
              value={formData.inquiryType}
              onValueChange={(value) => setFormData({ ...formData, inquiryType: value })}
            >
              <SelectTrigger className="bg-white text-gray-500 border-0 h-12 rounded-md">
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

          <div>
            <label className="text-white mb-3 block">
              お問い合わせ内容 <span className="text-red-500">*</span>
            </label>
            <Textarea
              required
              value={formData.message}
              onChange={(event) => setFormData({ ...formData, message: event.target.value })}
              className="bg-white text-black border-0 rounded-md min-h-40 resize-none"
            />
          </div>

          <div className="flex items-center gap-3">
            <Checkbox
              id="privacy"
              checked={formData.privacyAgreed}
              onCheckedChange={(checked) =>
                setFormData({ ...formData, privacyAgreed: Boolean(checked) })
              }
              className="border-white bg-transparent data-[state=checked]:bg-white data-[state=checked]:text-black"
            />
            <label htmlFor="privacy" className="text-white text-sm cursor-pointer">
              プライバシーポリシーに同意して送信する
            </label>
          </div>

          <div className="flex justify-center pt-4">
            <button
              type="submit"
              className="bg-gray-700 text-white px-12 py-4 rounded-md hover:bg-gray-600 transition-colors inline-flex items-center gap-2"
            >
              この内容で送信する <span>{">"}</span>
            </button>
          </div>
        </form>

        <footer className="mt-20 pt-12 border-t border-white/20">
          <nav className="flex flex-wrap justify-center gap-6 mb-6">
            <a href="#home" className="text-white text-sm hover:opacity-70 transition-opacity">
              HOME
            </a>
            <a href="#news" className="text-white text-sm hover:opacity-70 transition-opacity">
              NEWS
            </a>
            <a href="#service" className="text-white text-sm hover:opacity-70 transition-opacity">
              SERVICE
            </a>
            <a href="/works" className="text-white text-sm hover:opacity-70 transition-opacity">
              WORKS
            </a>
            <a href="#recruit" className="text-white text-sm hover:opacity-70 transition-opacity">
              RECRUIT
            </a>
            <a href="#about" className="text-white text-sm hover:opacity-70 transition-opacity">
              ABOUT US
            </a>
            <a href="#contact" className="text-white text-sm hover:opacity-70 transition-opacity">
              CONTACT
            </a>
          </nav>
          <div className="text-center">
            <a href="#" className="text-white text-sm hover:opacity-70 transition-opacity block mb-4">
              PRIVACY POLICY
            </a>
            <p className="text-white text-sm">(c)2024 NO MORE Inc.</p>
          </div>
        </footer>
      </div>
    </section>
  );
}

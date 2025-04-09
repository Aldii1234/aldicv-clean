import SmartChatbot from "../components/SmartChatbot";

export default function SettingPage() {
  return (
    <main className="p-6 min-h-screen bg-gray-100 dark:bg-black transition-colors">
      <h1 className="text-3xl font-bold text-center mb-6 text-black dark:text-white">
        Pengaturan Web & Chatbot 🤖
      </h1>
      <p className="text-center text-gray-600 dark:text-gray-300 mb-4">
        Tanyakan sesuatu atau ubah tema dengan perintah seperti "dark mode" atau "light mode".
      </p>
      <SmartChatbot />
    </main>
  );
}

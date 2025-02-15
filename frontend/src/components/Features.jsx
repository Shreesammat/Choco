import { CloudIcon, MoonIcon, PencilIcon, TagIcon } from "lucide-react";

const features = [
  {
    icon: PencilIcon,
    title: "Rich text editing",
    description: "Create beautiful notes with formatting options at your fingertips.",
  },
  {
    icon: CloudIcon,
    title: "Secure cloud sync",
    description: "Access your notes from any device with end-to-end encryption.",
  },
  {
    icon: MoonIcon,
    title: "Dark & Light mode",
    description: "Choose the perfect theme for your eyes, day or night.",
  },
  {
    icon: TagIcon,
    title: "Organize with tags and colors",
    description: "Keep your notes organized and easily searchable.",
  },
];

export default function Features() {
  return (
    <section id="features" className="py-20 px-24 bg-white dark:bg-gray-900 w-full">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center text-gray-800 dark:text-white mb-12">
          Key Features
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md dark:shadow-lg hover:shadow-lg dark:hover:shadow-xl transition-shadow"
            >
              <feature.icon className="w-12 h-12 text-blue-600 dark:text-blue-400 mb-4" />
              <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-2">
                {feature.title}
              </h3>
              <p className="text-gray-600 dark:text-gray-300">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

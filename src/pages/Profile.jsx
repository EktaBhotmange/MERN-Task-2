
import { useState } from 'react';
import { UserRound, Mail, GraduationCap, Code2, Save } from 'lucide-react';

const defaultProfile = {
  name: 'Ekta Bhotmange',
  email: 'ekta@example.com',
  role: 'Computer Engineering Student',
  bio: 'Aspiring Software Developer passionate about building modern web applications and solving real-world problems.',
  skills: 'React.js, JavaScript, Node.js, Express.js, MongoDB, C++, Java, Python',
};

function Profile() {
  const [profile, setProfile] = useState(() => {
    try {
      const saved = localStorage.getItem('taskDashboardProfile');
      return saved ? { ...defaultProfile, ...JSON.parse(saved) } : defaultProfile;
    } catch {
      return defaultProfile;
    }
  });

  const [message, setMessage] = useState('');

  const handleChange = (event) => {
    const { name, value } = event.target;

    setProfile((previous) => ({
      ...previous,
      [name]: value,
    }));

    setMessage('');
  };

  const handleSave = (event) => {
    event.preventDefault();

    try {
      localStorage.setItem('taskDashboardProfile', JSON.stringify(profile));
      setMessage('Profile saved successfully!');
    } catch {
      setMessage('Unable to save your profile. Please try again.');
    }
  };

  const inputClass =
    'mt-2 w-full rounded-xl border border-gray-200 bg-white px-4 py-3 text-gray-900 outline-none transition focus:border-indigo-500 focus:ring-2 focus:ring-indigo-100 dark:border-gray-700 dark:bg-gray-900 dark:text-white dark:focus:ring-indigo-900';

  return (
    <div className="mx-auto max-w-4xl space-y-6">
      <div>
        <h1 className="text-3xl font-bold">My Profile</h1>
        <p className="mt-2 text-gray-500 dark:text-gray-400">
          Manage your personal information and skills.
        </p>
      </div>

      <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm dark:border-gray-800 dark:bg-gray-900 sm:p-8">
        <div className="mb-8 flex items-center gap-4">
          <div className="flex h-20 w-20 items-center justify-center rounded-full bg-indigo-100 text-indigo-600 dark:bg-indigo-950 dark:text-indigo-300">
            <UserRound size={38} />
          </div>

          <div>
            <h2 className="text-xl font-bold">{profile.name}</h2>
            <p className="mt-1 text-gray-500 dark:text-gray-400">
              {profile.role}
            </p>
          </div>
        </div>

        <form onSubmit={handleSave} className="space-y-5">
          <div>
            <label htmlFor="name" className="font-medium">
              Full Name
            </label>
            <div className="relative">
              <UserRound
                size={18}
                className="absolute left-3 top-6 text-gray-400"
              />
              <input
                id="name"
                name="name"
                value={profile.name}
                onChange={handleChange}
                className={`${inputClass} pl-10`}
                placeholder="Enter your name"
                required
              />
            </div>
          </div>

          <div>
            <label htmlFor="email" className="font-medium">
              Email Address
            </label>
            <div className="relative">
              <Mail
                size={18}
                className="absolute left-3 top-6 text-gray-400"
              />
              <input
                id="email"
                name="email"
                type="email"
                value={profile.email}
                onChange={handleChange}
                className={`${inputClass} pl-10`}
                placeholder="Enter your email"
                required
              />
            </div>
          </div>

          <div>
            <label htmlFor="role" className="font-medium">
              Role / Education
            </label>
            <div className="relative">
              <GraduationCap
                size={18}
                className="absolute left-3 top-6 text-gray-400"
              />
              <input
                id="role"
                name="role"
                value={profile.role}
                onChange={handleChange}
                className={`${inputClass} pl-10`}
                placeholder="Enter your role"
                required
              />
            </div>
          </div>

          <div>
            <label htmlFor="bio" className="font-medium">
              About Me
            </label>
            <textarea
              id="bio"
              name="bio"
              value={profile.bio}
              onChange={handleChange}
              className={inputClass}
              rows={4}
              placeholder="Write a short introduction"
            />
          </div>

          <div>
            <label htmlFor="skills" className="font-medium">
              <span className="inline-flex items-center gap-2">
                <Code2 size={18} />
                Skills
              </span>
            </label>
            <textarea
              id="skills"
              name="skills"
              value={profile.skills}
              onChange={handleChange}
              className={inputClass}
              rows={3}
              placeholder="Enter skills separated by commas"
            />
          </div>

          <div className="flex flex-wrap items-center gap-4 pt-2">
            <button
              type="submit"
              className="inline-flex items-center gap-2 rounded-xl bg-indigo-600 px-6 py-3 font-semibold text-white transition hover:bg-indigo-700"
            >
              <Save size={18} />
              Save Changes
            </button>

            {message && (
              <p
                role="status"
                className={
                  message.startsWith('Profile saved')
                    ? 'text-sm text-green-600'
                    : 'text-sm text-red-500'
                }
              >
                {message}
              </p>
            )}
          </div>
        </form>
      </div>
    </div>
  );
}

export default Profile;

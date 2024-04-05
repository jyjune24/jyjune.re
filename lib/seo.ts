export const seo = {
  title: 're-jyjune｜自说自话',
  description:
    '',
  url: new URL(
    process.env.NODE_ENV === 'production'
      ? 'https://jyjune-re.vercel.app/'
      : 'http://localhost:3000'
  ),
} as const

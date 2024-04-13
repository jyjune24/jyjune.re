export const seo = {
  title: 're-jyjune',
  description:
    '',
  url: new URL(
    process.env.NODE_ENV === 'production'
      ? 'https://jyjune-re.vercel.app/'
      : 'http://localhost:3000'
  ),
} as const

import { type IconProps } from '~/assets'

export function JikeIcon(props: IconProps = {}) {
  return (
    <svg viewBox="0 0 48 48" className="mr-2 h-5" {...props}>
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M23.4967 6V27.7895C23.4967 34.4211 14.023 34.4211 14.023 34.4211L15.9177 42C15.9177 42 32.023 41.0526 32.023 27.7895V6H23.4967Z"
        fill="currentColor"
      ></path>
    </svg>
  )
}

export default function Favicon() {
  return (
    <div tw="flex size-full items-center justify-center rounded-lg bg-slate-900 text-amber-500">
      <svg fill="none" viewBox="0 0 32 32" tw="size-9">
        <path
          d="M17.6482 10.1305L15.8785 7.02583L7.02979 22.5499H10.5278L17.6482 10.1305ZM19.8798 14.0457L18.11 17.1983L19.394 19.4511H16.8453L15.1056 22.5499H24.7272L19.8798 14.0457Z"
          fill="currentColor"
          fillRule="evenodd"
          clipRule="evenodd"
        />
      </svg>
    </div>
  );
}
export function Logo({ size = "1em" }) {
  return (
    <div className="text-primary flex h-full w-full items-center justify-center rounded-lg">
      <svg fill="none" viewBox="0 0 32 32" className={size}>
        <path
          d="M17.6482 10.1305L15.8785 7.02583L7.02979 22.5499H10.5278L17.6482 10.1305ZM19.8798 14.0457L18.11 17.1983L19.394 19.4511H16.8453L15.1056 22.5499H24.7272L19.8798 14.0457Z"
          fill="currentColor"
          fillRule="evenodd"
          clipRule="evenodd"
        />
      </svg>
    </div>
  );
}

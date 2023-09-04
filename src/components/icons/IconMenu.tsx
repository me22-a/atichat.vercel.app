interface ItemProps {
  class?: string;
}

export default (props: ItemProps) => {
  const { class: className } = props;
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="32"
      height="32"
      viewBox="0 0 24 24"
      class={`${className}`}
    >
      <path
        fill="none"
        stroke="currentColor"
        stroke-linecap="round"
        stroke-width="2"
        d="M5 9h14M5 15h14"
      />
    </svg>
  );
};

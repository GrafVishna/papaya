import { Round } from "../Icons.jsx";

export default function RButton({
  className,
  tag,
  onClick,
  children,
  active,
  rotate,
}) {
  const Tag = tag || "span";
  const activeClass = "opacity-0 group-[.parent-active]:opacity-100";
  const defaultClass =
    "rounded-full overflow-hidden relative flex items-center justify-center flex-grow-0 flex-shrink-0 group";

  return (
    <Tag
      onClick={onClick}
      className={`${className ? className : ""} ${defaultClass}`}
    >
      {children}
      <Round
        size="100%"
        rotate={rotate}
        active={active}
        className={`absolute top-0 left-0   `}
      />
    </Tag>
  );
}

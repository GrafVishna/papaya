import { Round } from "../Icons.jsx";

export default function RButton({
  className,
  tag,
  onClick,
  children,
  visible,
}) {
  const Tag = tag || "span";
  const defaultClass =
    "rounded-full overflow-hidden relative z-30 flex items-center justify-center flex-grow-0 flex-shrink-0 group";

  return (
    <Tag
      onClick={onClick}
      className={`${className ? className : ""} ${defaultClass}`}
    >
      {children}
      <Round
        size="100%"
        visible={visible}
        className={`round-gradient absolute top-0 left-0   `}
      />
    </Tag>
  );
}

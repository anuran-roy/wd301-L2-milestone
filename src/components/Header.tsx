import logo from "../logo.svg";

export default function Header(props: { title: string }) {
  return (
    <div className="flex items-center gap-2">
      <img
        className="h-16 w-16"
        src={logo}
        alt="logo"
        style={{ animation: "spin 2s infinite linear" }}
      />
      <h1 className="text-center text-xl">{props.title}</h1>
    </div>
  );
}

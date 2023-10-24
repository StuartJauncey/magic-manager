import Link from "next/link";

type Props = {
  title: string;
  config: {
    options: Array<Option>;
  };
};

type Option = {
  name: string;
  link: string;
};

const Menu = (props: Props) => {
  const { title, config } = props;

  return (
    <div className={"flex flex-col items-center text-center"}>
      <h1 className={"mb-5 text-3xl"}>{title}</h1>
      <div className={"flex flex-col gap-4 w-72"}>
        {config.options.map((option: Option) => {
          return (
            <Link
              key={option.name}
              className="btn btn-primary"
              href={option.link}
            >
              {option.name}
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default Menu;

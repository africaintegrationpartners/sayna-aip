import classes from "./style.module.css";

type Props = {
  title: string;
  subtitle: string;
};
const PageSectionTitle = (props: Props) => {
  const { title, subtitle } = props;

  return (
    <section className={classes.textWrapper + " mb-5 pb-4 text-center"}>
      <h2 className="mb-4 h4">{title}</h2>
      <p>{subtitle}</p>
    </section>
  );
};

export default PageSectionTitle;

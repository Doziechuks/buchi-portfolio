import classes from "./Playground.module.css";
import playgroundImg from "../../../assets/landing-page/playground.webp";

const Playground = () => {
  return (
    <div id="Playground" className={classes.container}>
      <img className={classes.heading} src={playgroundImg} alt="" />
      <div className={classes.description}>
        A collection of concepts, experiments, and other side-projects I&apos;ve
        worked on.
      </div>
      <div className={classes.funProjectContainer}>
        <div className={classes.funProject}>
          <div data-index="01" className={classes.text}>
            Fun Project I
          </div>
          <div className={classes.bg}></div>
        </div>
        <div className={classes.funProject}>
          <div data-index="02" className={classes.text}>
            Fun Project II
          </div>
          <div className={classes.bg}></div>
        </div>
        <div className={classes.funProject}>
          <div data-index="03" className={classes.text}>
            Fun Project III
          </div>
          <div className={classes.bg}></div>
        </div>
      </div>
    </div>
  );
};

export default Playground;

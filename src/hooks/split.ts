import SplitType from "split-type";

const Split = (...classes: Array<string>) => {
  classes.map((item) => {
    new SplitType(item, {
      types: "words, chars",
    });
  });
};

export default Split;

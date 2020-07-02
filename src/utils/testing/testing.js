export const doWithoutPropTypes = (components, action) => {
  const propTypes = [];

  components.forEach((it) => {
    propTypes.push(it.propTypes);

    it.propTypes = undefined;
  });

  action();

  components.forEach((it, i) => {
    it.propTypes = propTypes[i];
  });
};

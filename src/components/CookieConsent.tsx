import React from "react";

const F: React.FC = () => (
  <p>
    This website uses cookies. By continuing to use our site, you agree to our
    use of cookies.
  </p>
);

interface Props {
  readonly showWarning: boolean;
}

const cookieName = "accepted-cookies";

const Comp: React.FC = () => {
  const [state] = React.useState<Props>(() => {
    if (typeof document === "undefined") {
      return { showWarning: false };
    }

    const hasCookie =
      document.cookie
        .split(";")
        .filter(item => item.indexOf(`${cookieName}=`) >= 0).length > 0;
    return { showWarning: !hasCookie };
  });
  React.useEffect(() => {
    if (typeof document !== "undefined" && state.showWarning) {
      // eslint-disable-next-line functional/immutable-data
      document.cookie = `${cookieName}=1`;
    }
  }, [state.showWarning]);
  return state.showWarning ? <F /> : null;
};

export default Comp;

export const Footer = () => {
  const date = new Date();
  const today = date.getFullYear();

  return (
    <div className="footer">
      <a href="https://github.com/rafa1st" target="_blank">rafa1st@{today}</a>
    </div>
  );
};

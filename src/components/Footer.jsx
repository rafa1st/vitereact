export const Footer = () => {
  const today = new Date();

  return (
    <div className="footer">
      <a href="https://github.com/rafa1st" target="_blank">rafa1st@{today.getFullYear()}</a>
    </div>
  );
};

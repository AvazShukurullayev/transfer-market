import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer py-3 bg-warning shadow mt-5">
      <div className="container">
        <h5 className="text-center">
          &copy; CopyRight Reserved {new Date().getFullYear()}
        </h5>
      </div>
    </footer>
  );
};

export default Footer;

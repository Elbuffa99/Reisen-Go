import Nav from '../pages/Nav';
import Footer from '../pages/Footer';

const DefaultLayout = ({ children }) => (
  <>
    <Nav />
    <main>{children}</main>
    <Footer />
  </>
);

export default DefaultLayout;
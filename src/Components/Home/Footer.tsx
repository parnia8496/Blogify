const Footer = () => {
  return (
    <footer className="mt-20 bg-gray-800 px-8 py-12 text-gray-400">
      <div className="w-full ">
        {}
        <div className="mb-12 max-w-md">
          <img
            src="logo_light-DzgmMZ9Z.svg"
            alt="Blogify"
            className="w-40 mb-6"
          />

          <p className="leading-8">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Rerum unde
            quaerat eveniet cumque accusamus atque qui error quo enim fugiat?
          </p>
        </div>

        {}
        <div className="grid grid-cols-3 gap-20">
          <div>
            <h3 className="mb-5 text-lg font-semibold text-white">
              Quick Links
            </h3>

            <ul className="space-y-3">
              <li>Home</li>
              <li>Best Sellers</li>
              <li>Offers & Deals</li>
              <li>Contact Us</li>
              <li>FAQs</li>
            </ul>
          </div>

          <div>
            <h3 className="mb-5 text-lg font-semibold text-white">
              Need Help?
            </h3>

            <ul className="space-y-3">
              <li>Delivery Information</li>
              <li>Return & Refund Policy</li>
              <li>Payment Methods</li>
              <li>Track your Order</li>
              <li>Contact Us</li>
            </ul>
          </div>

          <div>
            <h3 className="mb-5 text-lg font-semibold text-white">Follow Us</h3>

            <ul className="space-y-3">
              <li>Instagram</li>
              <li>Twitter</li>
              <li>Facebook</li>
              <li>YouTube</li>
            </ul>
          </div>
        </div>

        {}
        <div className="mt-12 border-t border-gray-800 pt-6 text-center">
          Copyright 2026 © Blogify GreatStack - All Right Reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;

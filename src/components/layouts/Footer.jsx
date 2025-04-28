import React from "react";

function Footer() {
  return (
    <div className="w-full">
      <div className="max-w-6xl mx-auto px-4 py-8">
        <div className="mb-6">
          <div className="mb-8 text-[#0649E7]">
            <img src="/LogoFooter.png" alt="Footer Logo" />
          </div>

          <hr className="border-t border-[1px] border-gray-200 w-[30%]" />

          <div className="grid grid-cols-1 md:grid-cols-4 gap-4 py-6">
            <div>
              <h5 className="text-sm text-[#0649E7] mb-2 font-medium">
                Address
              </h5>
              <p className="text-base text-[#0649E7] font-medium">
                975 Mission St Ste 103 #450
                <br />
                San Francisco, CA 94103
              </p>
            </div>

            <div>
              <h4 className="text-sm font-medium text-[#0649E7] mb-2">Email</h4>
              <a
                href="mailto:finance@mobulsengine.ai"
                className="text-sm text-[#0649E7] font-medium hover:underline"
              >
                finance@mobulsengine.ai
              </a>
            </div>

            <div>
              <h4 className="text-sm font-medium text-[#0649E7] mb-2">
                Telephone
              </h4>
              <a
                href="tel:650-889-6026"
                className="text-sm text-[#0649E7] font-medium"
              >
                650-889-6026
              </a>
            </div>

            <div>
              <h4 className="text-sm font-medium text-[#0649E7] mb-2">
                Socials
              </h4>
              <div className="flex gap-2">
                <a
                  href="#"
                  className="w-8 h-8 rounded-full border bg-white border-[#0649E7] hover:bg-[#0649E7] flex items-center justify-center"
                >
                  <p className="text-[#0649E7] hover:text-white font-medium">
                    in
                  </p>
                </a>
                <a
                  href="#"
                  className="w-8 h-8 rounded-full border bg-white border-[#0649E7] hover:bg-[#0649E7] flex items-center justify-center"
                >
                  <p className="text-[#0649E7] hover:text-white font-medium">
                    in
                  </p>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-[#0649E7] py-2 text-white">
        <div className="max-w-6xl mx-auto px-4 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm font-medium">© 2023 Mobulsservices LLC</p>
          <div className="flex gap-6">
            <a href="#" className="text-sm font-medium hover:underline">
              Terms & Conditions
            </a>
            <a href="#" className="text-sm hover:underline font-medium">
              Privacy Policy
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;

import React, { useState } from "react";
import { Alert, Button,} from "react-bootstrap";

const BannerSection = () => {   
    const [show, setShow] = useState(true);
  return (
    <>
    {show && (
      <Alert
        variant="light"
        className="d-flex justify-content-center align-items-center px-4 py-2 shadow-sm m-0"
        style={{
          background: "linear-gradient(to right, #f5e9ff, #e7f0ff)",
          border: "none",
          fontSize: "0.9rem",
        }}
      >
        <div className="d-flex justify-content-center align-items-center w-100 flex-wrap">
          <div className="text-center me-3">
            <strong>International Franchise Expo</strong> · Join us in SMX Convention Center Manila from April 25 – 27, 2025.
          </div>
          <div className="d-flex align-items-center gap-2">
            <Button
              variant="dark"
              size="sm"
              className="rounded-pill fw-semibold"
              href="https://register.franchiseasia.com.ph/register/expo/"
            >
              Register now →
            </Button>
          </div>
        </div>
        <Button
          variant="link"
          className="text-info p-0 mx-2 position-absolute end-0 top-50 translate-middle-y text-decoration-none"
          onClick={() => setShow(false)}
          aria-label="Close"
        >
          ✕
        </Button>
      </Alert>
    )}
  </>
   
  )
}

export default BannerSection
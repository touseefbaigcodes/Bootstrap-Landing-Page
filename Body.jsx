import React from 'react'
import "../index.css"

export default function Body() {
  return (
    <div>
          <div className="mt-3">
        <div className="w-25 m-auto">
          <div>
            <button className="btn border rounded-5 ">
              Get Security Updates for Bootstrap 3 & 4 &#8594;
            </button>
          </div>
        </div>
      </div>
      <div className="mt-5">
        <div className="w-50 m-auto ">
          <div>
            <img
              src="bootstrap-logo-shadow.png"
              width="200"
              height="165"
              alt="Bootstrap"
              className="d-none d-sm-block mx-auto mb-3"
            />
            <h1 className="mb-3 fw-semibold text-center">
              Build fast, responsive sites with&nbsp;Bootstrap
            </h1>
            <h4 className="mb-3 text-center fs-5 text-secondary-emphasis">
              Powerful, extensible, and feature-packed frontend toolkit. Build
              and customize with Sass, utilize prebuilt grid system and
              components, and bring projects to life with powerful JavaScript
              plugins.
            </h4>
          </div>
        </div>
      </div>
    </div>
  )
}

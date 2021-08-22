import React from "react";
import SendIcon from "@material-ui/icons/Send";
import { useDispatch, useSelector } from "react-redux";
import {
  isAuthenticatedSelector,
  logoutUser,
} from "../../store/reducers/userSlice";
const Footer = () => {
  const isAuthenticated = useSelector(isAuthenticatedSelector);
  return (
    <>
      {!isAuthenticated && (
        <>
          <footer class="bg-white wrap-footer">
            <div class="container py-5 footer-warp-left">
              <div class="row py-4">
                <div class="col-lg-4 col-md-6 mb-4 mb-lg-0">
                  <p class="font-italic text-muted">
                    This is an lern english website created by DucDeTe
                  </p>
                  <ul class="list-inline mt-4">
                    <li class="list-inline-item">
                      <i class="fa fa-twitter"></i>
                    </li>
                    <li class="list-inline-item">
                      <i class="fa fa-facebook"></i>
                    </li>
                    <li class="list-inline-item">
                      <i class="fa fa-instagram"></i>
                    </li>
                    <li class="list-inline-item">
                      <i class="fa fa-pinterest"></i>
                    </li>
                    <li class="list-inline-item">
                      <i class="fa fa-vimeo"></i>
                    </li>
                  </ul>
                </div>
                <div class="col-lg-2 col-md-6 mb-4 mb-lg-0">
                  <h6 class="text-uppercase font-weight-bold mb-4">Features</h6>
                  <ul class="list-unstyled mb-0">
                    <li class="mb-2">Lern English Vocabulary</li>
                    <li class="mb-2">Today Vocabulary</li>
                    <li class="mb-2">Stores</li>
                    <li class="mb-2">Our Blog</li>
                  </ul>
                </div>
                <div class="col-lg-2 col-md-6 mb-4 mb-lg-0">
                  <h6 class="text-uppercase font-weight-bold mb-4">Company</h6>
                  <ul class="list-unstyled mb-0">
                    <li class="mb-2">Login</li>
                    <li class="mb-2">Register</li>
                    <li class="mb-2">Wishlist</li>
                    <li class="mb-2">Our Products</li>
                  </ul>
                </div>
                <div class="col-lg-4 col-md-6 mb-lg-0">
                  <h6 class="text-uppercase font-weight-bold mb-4">
                    Newsletter
                  </h6>
                  <p class="text-muted mb-4">
                    Thank you for visiting my store, if you have any questions
                    please email me
                  </p>
                  <div class="p-1 rounded border">
                    <div class="input-group">
                      <input
                        type="email"
                        placeholder="Enter your email address"
                        aria-describedby="button-addon1"
                        class="form-control border-0 shadow-0"
                      />
                      <div class="input-group-append">
                        <button
                          id="button-addon1"
                          type="submit"
                          class="btn btn-link"
                        >
                          <SendIcon style={{ color: "white" }} />
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </footer>
        </>
      )}
    </>
  );
};

export default Footer;

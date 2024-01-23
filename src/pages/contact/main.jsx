import React, { useState } from "react";
import Header from "../../components/header";
import contactMainPic from "../../images/contact-main-image1.png";
import contactMobileMainPic from "../../small-images/contact-mobile-main-pic.png";
import contactMainPic2 from "../../images/contact-image2.png";

import { Box, Typography, TextField } from "@mui/material";
import { MdLocationPin } from "react-icons/md";
import { MdPhoneEnabled } from "react-icons/md";
import { FaEnvelope } from "react-icons/fa";
import { RxAvatar } from "react-icons/rx";
import { BsCardText } from "react-icons/bs";
import DownloadApp from "../home/downloadApp";
import Footer from "../../components/footer";
import { useFormik } from "formik";
import { toast } from "react-toastify";
import { CircularProgress } from "@mui/material";
import { sendEmail } from "../../NetworkServices/services";
import { InputField } from "../../components/formsField";

const ContactMain = () => {
  const [isLoading, setIsLoading] = useState(false);

  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      body: "",
    },
    onSubmit: (values) => {
      setIsLoading(true);
      const data = {
        userEmail: values.email,
        zikoraEmail: "customer.service@zikoramfb.com",
        subject: `Contact Support`,
        body: `Name: ${values.name}, Content: ${values.body}`,
      };

      sendEmail(data).then((val) => {
        setIsLoading(false);
        if (val.status === 200) {
          toast.success(val.data?.message);
        } else toast.error(val.data?.message);
      });
    },
    validate: (values) => {
      const errors = {};

      if (!values.name) {
        errors.name = "Name is required";
      } else if (!values.email) {
        errors.email = "Email is required";
      } else if (!values.body) {
        errors.body = "Body is required";
      }

      return errors;
    },
  });

  return (
    <Box
      sx={{
        minHeight: "130vh",
        background: "rgba(232, 236, 227, 0.33)",
        paddingTop: "2rem",

        fontFamily: "Circular Std",
        backgroundImage: `url(${contactMainPic})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "100%",
        "@media (max-width: 639px)": {
          padding: 0,
          backgroundImage: `url(${contactMobileMainPic})`,
        },
      }}
    >
      <Box
        sx={{
          paddingLeft: "5rem",
          paddingRight: "5rem",
          "@media (max-width: 639px)": {
            padding: 0,
          },
        }}
      >
        <Header />

        {/* Row */}
        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            marginTop: "4rem",
            "@media (max-width: 639px)": {
              flexDirection: "column",
              marginTop: "0",
              //
            },
          }}
        >
          {/* first column */}
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
            }}
          >
            {/* row 1 */}
            <Box
              sx={{
                display: "flex",
                flexDirection: "row",
                marginTop: "2rem",
                padding: "0 1rem",
                "@media (max-width: 639px)": {
                  alignItems: "center",
                  //
                },
              }}
            >
              <CustomIconns color="white">
                <Box
                  sx={{
                    backgroundImage: `url(${contactMainPic2})`,
                    backgroundRepeat: "no-repeat",
                    width: "100%",
                    height: "100%",
                    backgroundPosition: "center",
                    "@media (max-width: 639px)": {
                      backgroundSize: "1.5rem",
                    },
                  }}
                ></Box>
              </CustomIconns>

              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  width: "50%",
                  marginLeft: "3rem",
                  "@media (max-width: 639px)": {
                    width: "70%",
                    marginLeft: "1rem",
                  },
                }}
              >
                <p className="text-[38px] font-[700]  text-[#404040] sm:text-[24px]">
                  Contact us
                </p>

                <p className="text-[16px] text-[#5E5E5E] sm:text-[14px] mt-[0.8rem]">
                  Zikora is a people-first bank, serving communities in Nigeria
                </p>
              </Box>
            </Box>

            {/* second row */}
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                padding: "2.2rem",
                width: "65%",
                gap: "2rem",
                borderRadius: "0.8rem",
                backgroundColor: "#404040",
                color: "white",
                marginTop: "12rem",
                "@media (max-width: 639px)": {
                  width: "100%",
                  display: "none",
                },
              }}
            >
              <Typography sx={{ fontSize: "22px", fontWeight: "bold" }}>
                Get in touch
              </Typography>
              <CustomTile>
                <MdLocationPin />
                <>
                  <p className="text-[14px] sm:text-[12px]">
                    Zikora House, Abatete-Oraukwu Road,
                  </p>
                  <p className="text-[14px] sm:text-[12px]">
                    Abatete, Ekeagu Roundabout,
                  </p>
                  <p className="text-[14px] sm:text-[12px]">
                    Anambra State, Nigeria
                  </p>
                </>
              </CustomTile>

              <CustomTile>
                <MdPhoneEnabled />
                <>
                  <p className="text-[14px] sm:text-[12px]">
                    {" "}
                    <a href="tel:+2349120363787">+2349120363787</a>{" "}
                  </p>
                  <p className="text-[14px] sm:text-[12px]">
                    {" "}
                    <a href="tel:+2349120363788">+2349120363788</a>
                  </p>
                </>
              </CustomTile>

              <CustomTile>
                <FaEnvelope />
                <>
                  <p className="text-[14px] sm:text-[12px]">
                    <a href="mailto:info@zikoramfb.com">info@zikoramfb.com </a>
                  </p>
                </>
              </CustomTile>
            </Box>
          </Box>

          {/* second column */}
          <Box
            sx={{
              width: "45%",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              gap: "2rem",
              paddingTop: "4rem",
              backgroundColor: "white",
              borderRadius: "1rem",
              marginTop: "2rem",
              border: "1px solid #CCCCCC",
              "@media (max-width: 639px)": {
                width: "100%",
                borderRadius: "0",
                border: "none",
                marginTop: "6rem",
              },
            }}
          >
            <Typography
              sx={{
                fontSize: "22px ",
                fontWeight: "500",
                color: "#404040",
                "@media (max-width: 639px)": {
                  display: "none",
                },
              }}
            >
              How Can We Help?
            </Typography>

            <CustomTextField
              title="Full name here..."
              formik={formik}
              name={"name"}
            >
              <RxAvatar />
            </CustomTextField>
            <CustomTextField
              title="Email address..."
              formik={formik}
              name={"email"}
            >
              <FaEnvelope />
            </CustomTextField>
            <CustomTextField
              title="Write here..."
              multiline={true}
              formik={formik}
              name={"body"}
            >
              <BsCardText />
            </CustomTextField>

            <button
              disabled={isLoading}
              className={`rounded-sm text-[white] text-[18px] font-semibold w-[80%] sm:w-[90%] py-2 ${
                isLoading ? "bg-slate-300" : "bg-[#66A681]"
              } `}
              onClick={formik.handleSubmit}
            >
              {!isLoading ? "Submit Message" : <CircularProgress size={22} />}
            </button>

            {/* second row */}
            <Box
              sx={{
                display: "none",
                "@media (max-width: 639px)": {
                  display: "flex",
                  flexDirection: "column",
                  padding: "1rem 1rem 0.5rem 1rem",
                  gap: "2rem",
                  borderRadius: "0.3rem",
                  backgroundColor: "#404040",
                  color: "white",
                  marginTop: "3rem",
                  width: "90%",
                  marginBottom: "5rem", //
                },
              }}
            >
              <Typography sx={{ fontSize: "22px", fontWeight: "bold" }}>
                Get in touch
              </Typography>
              <CustomTile>
                <MdLocationPin />
                <>
                  <p className="text-[14px] sm:text-[14px]">
                    Zikora House, Abatete-Oraukwu Road,
                  </p>
                  <p className="text-[14px] sm:text-[14px]">
                    Abatete, Ekeagu Roundabout,
                  </p>
                  <p className="text-[14px] sm:text-[14px]">
                    Anambra State, Nigeria
                  </p>
                </>
              </CustomTile>

              <CustomTile>
                <MdPhoneEnabled />
                <>
                  <p className="text-[14px] sm:text-[14px]">
                    {" "}
                    <a href="tel:+2349120363787">+2349120363787</a>{" "}
                  </p>
                  <p className="text-[14px] sm:text-[14px]">
                    {" "}
                    <a href="tel:+2349120363788">+2349120363788</a>
                  </p>
                </>
              </CustomTile>

              <CustomTile>
                <FaEnvelope />
                <>
                  <p className="text-[14px] sm:text-[14px]">
                    <a href="mailto:info@zikoramfb.com">info@zikoramfb.com </a>
                  </p>
                </>
              </CustomTile>
            </Box>
          </Box>
        </Box>
      </Box>

      <DownloadApp />
      <Footer />
    </Box>
  );
};

const CustomIconns = ({ color, children }) => {
  return (
    <Box
      sx={{
        backgroundColor: color,
        width: "120px",
        height: "120px",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        borderRadius: "6rem",
        color: "white",
        "@media (max-width: 639px)": {
          width: "60px",
          height: "60px",
          borderRadius: "3rem",
        },
      }}
    >
      {children}
    </Box>
  );
};

const CustomIcon = ({ color, children }) => {
  return (
    <Box
      sx={{
        backgroundColor: color,
        width: "2.5rem",
        height: "2.5rem",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        borderRadius: "1.5rem",
        color: "#66A681",
      }}
    >
      {children}
    </Box>
  );
};
const CustomTile = ({ color, children }) => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "row",
        gap: "1rem",
        alignItems: "center",
      }}
    >
      <CustomIcon color="white">{children[0]}</CustomIcon>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          fontSize: "16px",
        }}
      >
        {children[1]}
      </Box>
    </Box>
  );
};

const CustomTextField = ({ title, children, multiline, name, formik }) => {
  return (
    <Box
      sx={{
        border:
          formik.touched[name] && formik.errors[name]
            ? "1px solid red"
            : "1px solid #66A681",
        width: "80%",
        display: "flex",
        flexDirection: "row",
        gap: "0.5rem",
        padding: "1rem 1rem",
        paddingBottom: "1rem",
        borderRadius: "0.5rem",
        "@media (max-width: 639px)": {
          width: "90%",
          borderRadius: "0.2rem",
        },
      }}
    >
      <Box className="text-[28px] sm:text[16px] text-[#CCCCCC]">{children}</Box>

      <InputField
        multiline={multiline}
        name={name}
        formik={formik}
        title={title}
      />
    </Box>
  );
};

export default ContactMain;

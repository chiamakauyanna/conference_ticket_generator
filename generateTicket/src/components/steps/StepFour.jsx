import { useContext, useState } from "react";
import { useFormik } from "formik";
import { WiCloudDown } from "react-icons/wi";
import { MdOutlineEmail } from "react-icons/md";
import * as yup from "yup";
import { TicketContext } from "../../context/FormContext";
import { useNavigate } from "react-router-dom";
import Button from "../common/Button";

// Yup Validation Schema
const schema = yup.object().shape({
  name: yup.string().required("Name is required"),
  email: yup.string().email("Invalid email").required("Email is required"),
  avatar: yup.string().required("Profile picture is required"),
  request: yup.string().optional(),
});

const StepTwo = () => {
  const { formData, setFormData } = useContext(TicketContext);
  const [uploading, setUploading] = useState(false);
  const [preview, setPreview] = useState(formData.avatar || "");
  const [hovered, setHovered] = useState(false);
  const navigate = useNavigate();

  // Initialize Formik
  const formik = useFormik({
    initialValues: {
      name: formData.name || "",
      email: formData.email || "",
      avatar: formData.avatar || "",
      request: formData.request || "",
    },
    validationSchema: schema,
    onSubmit: (values) => {
      setFormData(values);
      console.log("Form submitted:", values);
      navigate("/step-three");
    },
  });

  // Handle Cloudinary Upload
  const handleFileUpload = async (event) => {
    const file = event.target.files[0];
    if (!file) return;

    setUploading(true);
    const formData = new FormData();
    formData.append("file", file);
    formData.append("upload_preset", "react-form-upload");

    try {
      const response = await fetch(
        "https://api.cloudinary.com/v1_1/dskug0dvt/image/upload",
        {
          method: "POST",
          body: formData,
        }
      );

      const data = await response.json();
      setPreview(data.secure_url);
      formik.setFieldValue("avatar", data.secure_url);
      setFormData((prev) => ({ ...prev, avatar: data.secure_url }));
    } catch (error) {
      console.error("Upload failed", error);
    } finally {
      setUploading(false);
    }
  };

  return (
    <div className="lg:w-[700px] md:w-[700px] w-[370px] bg-[#041E23] p-4 mx-auto border border-[#0E464F] my-7 rounded-4xl">
      <div className="flex lg:justify-between md:justify-between lg:flex-row md:flex-row flex-col">
        <h1
          className="lg:text-[32px] md:text-[32px] text-[24px]"
          style={{ fontFamily: '"Nanum Myeongjo", serif' }}
        >
          Attendee Details
        </h1>
        <p>Step 2/3</p>
      </div>
      <div className="border border-[#24A0B5] mt-3 mb-8 mx-2 h-[4px]"></div>

      <form
        onSubmit={formik.handleSubmit}
        className="m-4 bg-[#08252B] border border-[#0E464F] lg:p-8 md:p-6 p-4 rounded-3xl space-y-6"
      >
        {/* Profile Picture Upload */}
        <section className="border border-[#0E464F] rounded-3xl py-6 bg-[#052228]">
          <label htmlFor="profilePicture" className="p-6 block text-center">
            Upload Profile Picture
          </label>

          <label
            htmlFor="profilePicture"
            className="flex justify-center flex-col gap-2 w-[240px] h-[240px] mt-6 transition outline-4 outline-[#24A0B5] rounded-2xl bg-[#0E464F] mx-auto cursor-pointer relative"
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
          >
            {preview && (
              <img
                src={preview}
                alt="Profile Preview"
                className="w-full h-full object-cover rounded-2xl"
              />
            )}
            {(hovered || !preview) && (
              <div className="absolute inset-0 flex flex-col items-center justify-center bg-black opacity-50 text-white text-center">
                <WiCloudDown size={32} className="mb-2" />
                <p>
                  {uploading
                    ? "Uploading..."
                    : "Drag & drop or click to upload"}
                </p>
              </div>
            )}
          </label>

          <input
            type="file"
            className="hidden"
            id="profilePicture"
            accept="image/*"
            onChange={handleFileUpload}
          />
          {formik.errors.avatar && (
            <p className="text-red-500 text-sm text-center">
              {formik.errors.avatar}
            </p>
          )}
        </section>

        <div className="border border-[#0E464F] my-8 mx-2 h-[4px]"></div>

        {/* Name Field */}
        <div>
          <label htmlFor="name">Enter your name</label>
          <input
            type="text"
            name="name"
            id="name"
            value={formik.values.name}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            className="border border-[#07373F] w-full p-3 rounded-xl mt-2 invalid:border-red-500"
          />
          {formik.errors.name && formik.touched.name && (
            <p className="text-red-500 text-sm">{formik.errors.name}</p>
          )}
        </div>

        {/* Email Field */}
        <div>
          <label htmlFor="email">Enter your email</label>
          <div className="flex items-center border border-[#07373F] rounded-xl w-full p-3 gap-2 mt-2">
            <MdOutlineEmail size={24} />
            <input
              type="email"
              name="email"
              id="email"
              placeholder="hello@example.com"
              value={formik.values.email}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              className="w-full outline-none bg-transparent"
            />
          </div>
          {formik.errors.email && formik.touched.email && (
            <p className="text-red-500 text-sm">{formik.errors.email}</p>
          )}
        </div>

        {/* Request Field */}
        <div>
          <label htmlFor="request">Special request?</label>
          <textarea
            name="request"
            id="request"
            placeholder="Enter request (optional)"
            value={formik.values.request}
            onChange={formik.handleChange}
            className="border border-[#07373F] w-full p-3 rounded-xl mt-2 h-[127px]"
          ></textarea>
        </div>

        {/* Buttons */}
        <div className="mt-8 mb-4 flex justify-center items-center gap-6 lg:flex-row md:flex-row flex-col">
          <Button
            text="Back"
            className="border border-[#24A0B5] text-[#24A0B5] w-[266px] py-4"
          />
          <Button
            text="Get My Free Ticket"
            className="text-gray-100 bg-[#24A0B5] w-[266px] py-4"
            type="submit"
          />
        </div>
      </form>
    </div>
  );
};

export default StepTwo;

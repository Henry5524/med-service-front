import React from "react";
import { FooterIcon } from "flowbite-react";
import { ContactInfo } from "@/helpers/Contact";
import { useFormik } from "formik";
import * as Yup from "yup";

export default function index() {
  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      phone: "",
      message: "",
    },
    validationSchema: Yup.object({
      name: Yup.string().required("Please enter name"),
      email: Yup.string()
        .email("Invalid email address")
        .required("Email is required"),
    }),
    onSubmit: (values, { resetForm }) => {
      console.log(values);
      resetForm();
    },
  });

  return (
    <div className="lg:flex items-center gap-32 mt-12 mb-12 bg-white p-8 rounded-xl w-full">
      <div className="lg:w-96 flex flex-col">
        <h1 className="text-gray-900 text-4xl not-italic font-bold m-0 mb-5">
          Давай поговорим
        </h1>
        <p className="text-gray-600 text-xl not-italic font-normal m-0 mb-12">
          У вас есть какая-то большая идея или бренд, который нужно развивать, и
          вам нужна помощь? Тогда обратитесь мы будем рады услышать о вашем
          проекте и оказать помощь
        </p>

        {ContactInfo.map((i: any) => (
          <div key={`${i.id}+${i.name}`}>
            <h2 className="text-gray-800 text-3xl not-italic font-bold m-0 mb-2">
              {i.name}
            </h2>

            <p className="text-blue-600 text-xl not-italic font-normal m-0 mb-5 hover:underline">
              {i.value}
            </p>

            {i.links && (
              <div className={"flex items-center gap-4 mb-10"}>
                {i.links.map((link: any) => (
                  <FooterIcon key={link.name} href="#" icon={link.icon} />
                ))}
              </div>
            )}
          </div>
        ))}
      </div>

      <div className={"lg:w-96 flex flex-col items-start"}>
        <form className={"w-full flex flex-col"}>
          <label className="custom-label">Имя</label>
          <input
            id="name"
            name="name"
            className="custon-input"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.name}
          />

          <label className="custom-label">Почта</label>
          <input
            id="email"
            name="email"
            className="custon-input"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.email}
          />

          <label className="custom-label">Телефон</label>
          <input
            id="phone"
            name="phone"
            className="custon-input"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.phone}
          />

          <label className="custom-label">Сообщение</label>
          <textarea
            id="message"
            name="message"
            rows={6}
            className="w-full mb-6 bg-gray-200 rounded-md px-4 py-2 text-gray-900 focus:outline-none"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.message}
          />
        </form>

        <button
          className="custom-send-btn"
          type="submit"
          onClick={() => formik.handleSubmit()}
        >
          Отправлять
        </button>
      </div>
    </div>
  );
}

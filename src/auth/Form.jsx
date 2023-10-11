import { useForm } from "react-hook-form";
import styled, { css } from "styled-components";
import { EyeIcon, EyeSlashIcon } from "@heroicons/react/24/solid";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { userLogin, userSignup } from "../featrures/auth/authActions";
import { useNavigate } from "react-router-dom";
import { ClipLoader } from "react-spinners";
import { toast } from "react-hot-toast";

const Form = ({ pathname }) => {
  const { user, isLoading, isError, isSuccess, message } = useSelector(
    (state) => state.auth
  );
  const navigate = useNavigate();
  const effectRan = useRef(false);
  const dispath = useDispatch();

  const inputStyle = {
    width: "100%",
    height: "50px",
    backgroundColor: "#333",
    borderRadius: "5px",
    padding: "0 20px",
    fontSize: "16px",
    color: "#fff",
  };
  const signupSchema = z
    .object({
      email: z
        .string()
        .min(1, { message: "Email is Required" })
        .email({ message: "Must be Valid Email" }),
      password: z
        .string()
        .min(6, { message: "Password Must be at Least 6 Characters" }),
      confirmPassword: z
        .string()
        .min(6, { message: "Password Must be at Least 6 Characters" }),
    })
    .refine((data) => data.password === data.confirmPassword, {
      message: "Password do not match",
      path: ["confirmPassword"],
    });
  const loginSchema = z.object({
    email: z
      .string()
      .min(1, { message: "Email is Required" })
      .email({ message: "Must be Valid Email" }),
    password: z
      .string()
      .min(6, { message: "Password Must be at Least 6 Characters" }),
  });

  const [openPasswordEye, setOpenPasswordEye] = useState(false);
  const [openConfirmPasswordEye, setOpenConfirmPasswordEye] = useState(false);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm({
    resolver: zodResolver(
      pathname === "/auth/signup" ? signupSchema : loginSchema
    ),
  });

  const onSubmit = (data) => {
    if (pathname === "/auth/login") {
      // post data to /auth/login
      dispath(userLogin(data));
    } else if (pathname === "/auth/signup") {
      // post data to /auth/signup
      dispath(userSignup(data));
      toast.success(message);
    }
  };

  useEffect(() => {
    if (
      effectRan.current === true &&
      import.meta.VITE_NODE_ENV !== "development"
    ) {
      // React 18 Strict Mode
      if (isError) {
        console.log(message);
        toast.error(message);
      }
      if (isSuccess || user) {
        navigate("/");
      }
      // dispatch(reset());
    }
    return () => (effectRan.current = true);
  }, [user, isSuccess, isError, message, navigate]);
  return (
    <FormContainer onSubmit={handleSubmit(onSubmit)}>
      <div style={{ marginBottom: "15px" }}>
        <Email
          type="email"
          required
          style={inputStyle}
          {...register("email", { required: true })}
          name="email"
          placeholder="Enter your email"
        />
        {errors.email && (
          <span style={{ color: "red" }}>{errors.email.message}</span>
        )}
      </div>
      <PasswordBox>
        <Password
          type={openPasswordEye ? "text" : "password"}
          required
          name="password"
          style={inputStyle}
          placeholder="Enter Your Password"
          {...register("password", { required: true })}
        />
        {errors.password && (
          <span style={{ color: "red" }}>{errors.password.message}</span>
        )}
        <Eye
          style={{ userSelect: "none" }}
          onClick={() => setOpenPasswordEye(!openPasswordEye)}
        >
          {openPasswordEye ? (
            <EyeIcon width={24} height={24} />
          ) : (
            <EyeSlashIcon width={24} height={24} />
          )}
        </Eye>
      </PasswordBox>
      {pathname === "/auth/signup" && (
        <PasswordBox>
          <Password
            type={openConfirmPasswordEye ? "text" : "password"}
            required
            name="password"
            placeholder="Confirm Your password"
            {...register("confirmPassword", { required: true })}
            style={inputStyle}
          />

          {errors.confirmPassword && (
            <span style={{ color: "red" }}>
              {errors.confirmPassword.message}
            </span>
          )}
          <Eye
            style={{ userSelect: "none" }}
            onClick={() => setOpenConfirmPasswordEye(!openConfirmPasswordEye)}
          >
            {openConfirmPasswordEye ? (
              <EyeIcon width={24} height={24} />
            ) : (
              <EyeSlashIcon width={24} height={24} />
            )}
          </Eye>
        </PasswordBox>
      )}
      <Submit disabled={isLoading} type="submit">
        {isSubmitting || isLoading ? (
          <ClipLoader color="#000" size={20} />
        ) : pathname === "/auth/login" ? (
          "Sign In"
        ) : (
          "Sign Up"
        )}
      </Submit>
    </FormContainer>
  );
};

const FormContainer = styled.form``;
const Email = styled.input`
  &::placeholder {
    color: #777;
  }
  margin-bottom: 5px;
`;
const PasswordBox = styled.div`
  display: block;
  align-items: center;
  margin-bottom: 15px;
  position: relative;
`;
const Password = styled.input`
  &::placeholder {
    color: #777;
  }
  margin-bottom: 5px;
`;
const Submit = styled.button`
  margin-top: 30px;
  width: 100%;
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 15px;
  border-radius: 5px;
  font-size: 18px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
  &:hover {
    transition: all 0.3s ease;
    background-color: #cc062f;
  }
  ${(props) =>
    props.isSubmitting || props.isLoading
      ? css`
          background-color: #666666;
        `
      : css`
          background-color: var(--main-color);
        `}
`;
const Eye = styled.div`
  position: absolute;
  top: 12px;
  right: 20px;
  cursor: pointer;
`;
export default Form;

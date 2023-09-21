import React, { useEffect, useMemo, useState } from "react";
import Backdrop from "@mui/material/Backdrop";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import { useSpring, animated } from "@react-spring/web";
import Input from "src/components/Input";
import { message, Steps, theme } from "antd";
import ListAltIcon from "@mui/icons-material/ListAlt";
import { useAppDispatch, useAppSelector } from "src/hooks/useRedux";
import {
  FormProvider,
  useForm,
  useFormContext,
  Controller,
} from "react-hook-form";
import SelectCustom from "src/components/Select";
import { yupResolver } from "@hookform/resolvers/yup";
import { schema, schemaAddCar } from "src/utils/rules";
import Button from "src/components/Button";
import { toast } from "react-toastify";
import { ErrorResponse } from "src/types/utils.type";
import { getAvatarUrl, isAxiosUnprocessableEntityError } from "src/utils/utils";
import { unwrapResult } from "@reduxjs/toolkit";

import { isAccessTokenExpired } from "src/store/user/userSlice";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import { CircularProgress, OutlinedInput } from "@mui/material";
import AddPhotoAlternateIcon from "@mui/icons-material/AddPhotoAlternate";
import InputFile from "src/components/InputFile";

interface FadeProps {
  children: React.ReactElement;
  in?: boolean;
  onClick?: any;
  onEnter?: (node: HTMLElement, isAppearing: boolean) => void;
  onExited?: (node: HTMLElement, isAppearing: boolean) => void;
  ownerState?: any;
}

const Fade = React.forwardRef<HTMLDivElement, FadeProps>(
  function Fade(props, ref) {
    const {
      children,
      in: open,
      onClick,
      onEnter,
      onExited,
      ownerState,
      ...other
    } = props;
    const style = useSpring({
      from: { opacity: 0 },
      to: { opacity: open ? 1 : 0 },
      onStart: () => {
        if (open && onEnter) {
          onEnter(null as any, true);
        }
      },
      onRest: () => {
        if (!open && onExited) {
          onExited(null as any, true);
        }
      },
    });

    return (
      <animated.div ref={ref} style={style} {...other}>
        {React.cloneElement(children, { onClick })}
      </animated.div>
    );
  }
);
const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
};

const style = {
  position: "absolute" as "absolute",
  top: "50%",
  left: "50%",
  height: "90%",
  overflowY: "scroll",
  scroll: "smooth",
  transform: "translate(-50%, -50%)",
  width: 600,
  bgcolor: "background.paper",
  boxShadow: 24,
  p: 4,
  borderRadius: 2,
};

type Props = {
  open: boolean;
  onChange: () => void;
};
interface FormData {
  license_plate: string;
  phoneOwner: string;
  vinNumber: string;
  carBrand: string;
  carYear: string;
  carSeri: string;
  carType: string;
  carLicense: string;
  currentLocation: string;
}

export default function AddUser() {
  // const {
  //   carLicense,
  //   carType,
  //   carsBrand,
  //   carsModel,
  //   carsYear,
  //   carsSeri,
  //   carRegis,
  // } = useAppSelector((state) => state.car);
  const { userId } = useAppSelector((state) => state?.user);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const methods = ({} = useForm({
    resolver: yupResolver(schemaAddCar),
  }));
  const {
    handleSubmit,
    formState: { errors },
    setError,
    register,
    setValue,
    watch,
    getValues,
    control,
  } = methods;
  const dispatch = useAppDispatch();
  const [disabled, setDisabled] = useState<boolean>(false);
  const [disabledModel, setDisabledModel] = useState<boolean>(false);
  const [disabledSeri, setDisabledSeri] = useState<boolean>(false);
  const [valueYear, setValueYear] = useState<string>("");
  const [file, setFile] = useState<File[]>();
  const imageArray = file || []; // Mảng chứa các đối tượng ảnh (File hoặc Blob)

  // Tạo một mảng chứa các URL tạm thời cho ảnh
  const imageUrls: string[] = [];

  for (const image of imageArray) {
    const imageUrl = URL.createObjectURL(image);
    imageUrls.push(imageUrl);
  }

  const avatar = watch("image");

  useEffect(() => {
    setValue("carBrand", "");
    setValue("carLicense", "");
    setValue("carSeri", "");
    setValue("carYear", "");
    setValue("carType", "");
    setValue("currentLocation", "");
    setValue("license_plate", "");
    setValue("phoneOwner", "");
    setValue("vinNumber", "");
  }, []);

  const onSubmit = handleSubmit(async (data) => {
    const body = JSON.stringify({
      userUuid: isAccessTokenExpired().userUuid,
      currentLocationInHCM: data.currentLocation,
      license_plate: data.license_plate,
      phone_owner: data.phoneOwner,
      vin_number: data.vinNumber,
      user_id: userId,
      car_brand_id: data.carBrand,
      car_model_id: data.carYear,
      car_seri_id: data.carSeri,
      vehicle_type_id: data.carType,
      car_license_id: data.carLicense,
      regis: data.regis,
    });
    if (file) {
      const form = new FormData();
      form.append("file", file[0]);
      for (let i = 0; i < file.length; i++) {
        form.append("image", file[i]);
      }
    } else {
      toast.warning("Cần chọn ảnh");
    }

    try {
      // setIsSubmitting(true);
      // const res = await dispatch(addCars(body));
      // unwrapResult(res);
      // const d = res?.payload?.data;
      // if (d?.status !== 200) return toast.error(d?.message);
      // await toast.success("Thêm xe thành công ");
      // await dispatch(getCars(""));
      // await setDisabled(false);
      // (await onChange) && onChange();
    } catch (error: any) {
      if (isAxiosUnprocessableEntityError<ErrorResponse<FormData>>(error)) {
        const formError = error.response?.data.data;
        if (formError) {
          Object.keys(formError).forEach((key) => {
            setError(key as keyof FormData, {
              message: formError[key as keyof FormData],
              type: "Server",
            });
          });
        }
      }
    } finally {
      setIsSubmitting(false);
    }
  });

  const onClickHuy = () => {
    setValue("carBrand", "");
    setValue("carLicense", "");
    setValue("carYear", "");
    setValue("carSeri", "");
    setValue("carType", "");
    setValue("currentLocation", "");
    setValue("license_plate", "");
    setValue("phoneOwner", "");
    setValue("vinNumber", "");
    setOpenModalUpload(true);
  };
  const [openModalUpload, setOpenModalUpload] = useState<boolean>(false);
  let _form = () => (
    <div>
      <FormProvider {...methods}>
        <form className="profile-form__wrapper" autoComplete="off" noValidate>
          {/* <span className='text-2xl p-4 pl-0  mb-8'>Thêm xe </span> */}
          <p className="mb-3">
            (<span className="text-red-500 mb-2"> * </span>)Trường bắt buộc
          </p>
          <div className="flex items-center w-full space-x-2">
            <div className="w-1/2">
              {/* <h1 className='text-sm mb-2 text-[#29303b] font-medium text-left '></h1> */}
              <Input
                classNameInput="p-3 w-full text-black outline-none border border-gray-300 focus:border-gray-500 rounded-md focus:shadow-sm"
                name="license_plate"
                register={register}
                type="text"
                className=""
                errorMessage={errors.license_plate?.message}
                placeholder="Biển số xe"
              />
            </div>
            <div className="w-1/2">
              <Input
                classNameInput="p-3 w-full text-black outline-none border border-gray-300 focus:border-gray-500 rounded-md focus:shadow-sm"
                name="phoneOwner"
                register={register}
                type="text"
                className=""
                errorMessage={errors.phoneOwner?.message}
                placeholder="Số điện thoại "
              />
            </div>
          </div>
          <Input
            classNameInput="p-3 w-full text-black outline-none border border-gray-300 focus:border-gray-500 rounded-md focus:shadow-sm"
            name="vinNumber"
            register={register}
            type="text"
            className=""
            errorMessage={errors.vinNumber?.message}
            placeholder="Số khung "
          />
          <Input
            classNameInput="p-3 w-full text-black outline-none border border-gray-300 focus:border-gray-500 rounded-md focus:shadow-sm"
            name="currentLocation"
            register={register}
            type="text"
            className=""
            errorMessage={errors.currentLocation?.message}
            placeholder="Vị trí hiện tại"
          />
          <div className="rounded-2xl">
            <h1 className="text-sm mb-2 text-[#29303b] font-medium text-left ">
              Phương thức đăng ký
              <span className="text-red-500 text-sm font-medium ">*</span>
            </h1>
            <FormControl fullWidth>
              <Select
                // labelId='demo-multiple-checkbox-label'
                multiple
                placeholder="Chọn 1 hoặc nhiều phương thức ĐK"
                // value={personName}
                defaultValue={[]}
                // input={<OutlinedInput label='Phương thức đăng ký' />}
                MenuProps={MenuProps}
                {...register("regis")}
                displayEmpty
                inputProps={{ "aria-label": "Without label" }}
              >
                {/* <MenuItem value=''>
                        <p className='text-left text-[#777777]'>Phương thức đăng ký</p>
                      </MenuItem> */}
              </Select>
              <p className="text-red-500 text-left text-sm">
                {errors.regis?.message}
              </p>
            </FormControl>
          </div>
          {/* <SelectCustom
          className={'flex-1'}
          id='carModel'
          label='Kiểu xe'
          placeholder='Vui lòng chọn'
          defaultValue={''}
          options={carsModel}
          register={register}
          isModel={true}
          disabled={false}
          onChange={() => {}}
        >
          {errors.carModel?.message}
        </SelectCustom> */}
          <div className="space-x-2 flex flex-row  justify-between mt-2">
            <SelectCustom
              className={"flex-1"}
              id="carBrand"
              label="Hãng xe"
              placeholder="Vui lòng chọn"
              defaultValue={""}
              // options={carsBrand}
              register={register}
              isBrand={true}
              disabled={false}

              // onChange={handleOnChangeCarBrand}
            >
              {errors.carBrand?.message}
            </SelectCustom>
            <div className="flex-1">
              <h1 className="text-sm mb-2 text-[#29303b] font-medium text-left ">
                Năm sản xuất
                <span className="text-red-500 text-sm font-medium ">*</span>
              </h1>
              <FormControl fullWidth disabled={disabledModel}>
                <Select
                  // labelId='demo-multiple-checkbox-label'
                  placeholder="Chọn năm sản xuất"
                  // value={personName}
                  defaultValue={[]}
                  // input={<OutlinedInput label='Phương thức đăng ký' />}
                  MenuProps={MenuProps}
                  {...register("carYear")}
                  displayEmpty
                  inputProps={{ "aria-label": "Without label" }}
                >
                  {/* <MenuItem value=''>
                        <p className='text-left text-[#777777]'>Phương thức đăng ký</p>
                      </MenuItem> */}
                  {/* {carsYear.map((item) => {
                    return (
                      <MenuItem
                        onClick={() => {
                          // console.log(item.brandID)
                          // console.log(item.releaseYearID)
                          // handleOnChangeYear({ idBrand: item.brandID, idYear: item.releaseYearID })
                        }}
                        value={item.year}
                        key={item.releaseYearID}
                        className="text-black"
                      >
                        {item.year}
                      </MenuItem>
                    );
                  })} */}
                </Select>
                <p className="text-red-500 text-left text-sm">
                  {errors.regis?.message}
                </p>
              </FormControl>
            </div>
          </div>
          <SelectCustom
            className={"mt-2"}
            id="carSeri"
            label="Dòng xe"
            placeholder="Vui lòng chọn"
            defaultValue={""}
            // options={carsSeri}
            register={register}
            isCarSeri={true}
            disabled={disabledSeri}
            // onChange={() => {}}
          >
            {errors.carSeri?.message}
          </SelectCustom>

          <div className="space-x-2 mt-2 flex flex-row justify-between w-full">
            <SelectCustom
              className={""}
              id="carType"
              label="Loại phương tiện"
              placeholder="Vui lòng chọn"
              defaultValue={""}
              // options={carType}
              register={register}
              isCarType={true}
              disabled={false}
              // onChange={() => {}}
            >
              {errors.carType?.message}
            </SelectCustom>
            <SelectCustom
              className={""}
              id="carLicense"
              label="Loại biển xe"
              placeholder="Vui lòng chọn"
              defaultValue={""}
              // options={carLicense}
              register={register}
              isCarLicense={true}
              disabled={false}
              // onChange={() => {}}
            >
              {errors.carLicense?.message}
            </SelectCustom>
          </div>
          <div className="flex space-x-2 mt-6">
            {current === 0 && (
              <Button
                onClick={onClickHuy}
                // type='submit'
                className="flex w-1/2 items-center justify-center rounded-xl bg-red-500 py-4 px-2 text-base text-white hover:opacity-80"
              >
                Hủy
              </Button>
            )}
            {
              <Button
                type="button"
                onClick={() => {
                  next();
                }}
                className={`flex w-1/2 items-center justify-center rounded-xl bg-mainColor py-4 px-2 text-base text-white hover:opacity-80 ${
                  disabled == true && "disabled"
                }`}
              >
                {isSubmitting ? (
                  <CircularProgress
                    sx={{ width: "25px", height: "25px" }}
                    disableShrink
                  />
                ) : (
                  "Thêm người dùng"
                )}
              </Button>
            }
          </div>
        </form>
      </FormProvider>
    </div>
  );
  const handleChangeFile = (file?: File[]) => {
    setFile(file);
  };
  // const onDrop = (acceptedFiles: File[]) => {}
  // const { getRootProps, getInputProps } = useDropzone({ onDrop })

  const { token } = theme.useToken();
  const [current, setCurrent] = useState(0);

  const next = () => {
    setCurrent(current + 1);
  };

  const prev = () => {
    setCurrent(current - 1);
  };

  const contentStyle: React.CSSProperties = {
    // textAlign: 'center',
    color: token.colorTextTertiary,
    backgroundColor: token.colorFillAlter,
    borderRadius: token.borderRadiusLG,
    // border: `1px dashed ${token.colorBorder}`,
    marginTop: 16,
  };
  return (
    <div>
      <_form />
    </div>
  );
}

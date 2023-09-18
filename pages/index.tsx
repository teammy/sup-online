"use client";
import {
  Button,Select, SelectSection, SelectItem
} from "@nextui-org/react";

import React, { useState } from "react";
import { ThaiDatePicker } from "thaidatepicker-react";
import dayjs from "dayjs";
import "dayjs/locale/th";
dayjs.locale("th");
import { fontThai } from "@/config/fonts";
import { clsx } from "clsx";
import dynamic from "next/dynamic";
import MyDocument from "@/components/mydocument";

const PDFViewer = dynamic(
  () => import("@react-pdf/renderer").then((mod) => mod.PDFViewer),
  {
    ssr: false,
    loading: () => <p>Loading...</p>,
  }
);

const Index = () => {
  const [selectedDate, setSelectedDate] = useState();
  const [selectedThaiDate, setSelectedThaiDate] = useState();

  const handleDatePickerChange = (christDate: any, buddhistDate: any) => {
    console.log(christDate);
    console.log(buddhistDate);
    setSelectedDate(christDate);
    setSelectedThaiDate(buddhistDate);
  };

  return (
    <>
		<div>
	
		</div>
		
      <div className="flex w-full flex-wrap md:flex-nowrap gap-4 justify-center items-center">
        <div className="w-full md:w-1/2 mt-10 flex gap-4 justify-center items-center">
          <ThaiDatePicker
            value={selectedDate}
            placeholder="เลือกวัน"
            inputProps={{
              displayFormat: "D MMM YYYY",
              className:
                "max-w-xs text-[#05060f] p-3 border border-[#cfcfcf] rounded-lg",
            }}
            onChange={handleDatePickerChange}
          />
          <Select
    variant='bordered'
    size='sm'
    placeholder="เวร"
    className="max-w-xs font-bold text-[#05060f] bg-white rounded-lg border-[#cfcfcf] text-base text-center"
>
    <SelectItem value="1" className="text-center">ทุกเวร</SelectItem>
    <SelectItem value="2" className="text-center">ดึก</SelectItem>
    <SelectItem value="3" className="text-center">เช้า</SelectItem>
    <SelectItem value="4" className="text-center">บ่าย</SelectItem>
</Select>

          <Button
            className={clsx(
              "bg-[#5528FF] text-white text-lg font-bold px-3 py-2 rounded-lg",
              fontThai.className
            )}
          >
            แสดงข้อมูล
          </Button>
        </div>
      </div>

      <hr className="mt-4 w-full border-[#cfcfcf]" />
      <div className="flex w-full justify-center items-center mt-4">
        <PDFViewer width={1600} height={900}>
          <MyDocument />
        </PDFViewer>
      </div>
    </>
  );
};

export default Index;

import { CardBody,Card,Select, SelectSection, SelectItem,Button} from '@nextui-org/react'
import React, { useState } from "react";
import { ThaiDatePicker } from "thaidatepicker-react";
import dayjs from "dayjs";
import "dayjs/locale/th";
dayjs.locale("th");
import { fontThai } from "@/config/fonts";
import {clsx} from 'clsx';


const Index = () => {
	const [selectedDate, setSelectedDate] = useState();
  const [selectedThaiDate, setSelectedThaiDate] = useState();

	const handleDatePickerChange = (christDate:any, buddhistDate:any) => {
    console.log(christDate);
    console.log(buddhistDate);
    setSelectedDate(christDate);
    setSelectedThaiDate(buddhistDate);
  };

	return (
		<div>
			 <div className="flex w-full flex-wrap md:flex-nowrap gap-4 justify-center">
				<div className='w-full md:w-1/2 mt-10 flex gap-4'>
				<ThaiDatePicker
        value={selectedDate}
				placeholder='เลือกวัน'
				inputProps={{
					displayFormat: "D MMM YYYY",
					className: "max-w-xs text-[#05060f] p-3 border border-[#cfcfcf] rounded-lg",
				}}
        onChange={handleDatePickerChange}
      />
      <Select
			variant='bordered'
			size='sm'
        placeholder="เวร"
        className="max-w-xs font-bold text-[#05060f] bg-white rounded-lg border-[#cfcfcf] text-base"
      >
       <SelectItem value="1">ทุกเวร</SelectItem>
				<SelectItem value="2">ดึก</SelectItem>
				<SelectItem value="3">เช้า</SelectItem>
				<SelectItem value="3">บ่าย</SelectItem>
      </Select>
			<Button className={clsx("bg-[#5528FF] text-white text-lg font-bold p-6",fontThai.className)}>
      แสดงข้อมูล
    </Button>

				</div>
			 
    </div>
			<Card className='m-10 bg-white shadow-md'>
				<CardBody>
					Hello World
				</CardBody>
			</Card>
		</div>
	)
}

export default Index


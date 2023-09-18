import React from 'react'
import {Select, SelectSection, SelectItem} from "@nextui-org/react";


const SelectPage = () => {
  return (
    <div>
      <Select
        label="Animal"
        className="max-w-xs"
        labelPlacement="outside"
        placeholder="Select an animal"
        classNames={{
          value: "text-danger",
        }}
      >
        <SelectSection label="Pets">
          <SelectItem value="dog">Dog</SelectItem>
          <SelectItem value="cat">Cat</SelectItem>
          <SelectItem value="hamster">Hamster</SelectItem>
        </SelectSection>

      </Select>
    </div>
  )
}

export default SelectPage
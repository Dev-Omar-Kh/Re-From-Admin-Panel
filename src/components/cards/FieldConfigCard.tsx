import React from 'react'
import { LuCalendar, LuEye, LuFiles, LuGripVertical, LuImages, LuLayoutList, LuTrash } from 'react-icons/lu'
import MainBtn from '../buttons/MainBtn'
import ListInput from '../inputs/ListInput';
import { RxText } from 'react-icons/rx';
import { BiParagraph } from 'react-icons/bi';
import { HiOutlineHashtag, HiOutlineMail } from 'react-icons/hi';
import { MdOutlineLinearScale } from 'react-icons/md';
import { FaRegStarHalfStroke } from 'react-icons/fa6';
import { IoIosArrowDropdown, IoMdTime } from 'react-icons/io';
import { CgEditBlackPoint } from 'react-icons/cg';
import { BsUiChecksGrid, BsUiRadiosGrid } from 'react-icons/bs';
import ToggleBtn from './../buttons/ToggleBtn';
import RegularInput from '../inputs/RegularInput';
import FilesInput from '../inputs/FilesInput';

const fieldsType = [
    {value: 'text', label: 'Text', icon: RxText},
    {value: 'paragraph', label: 'Paragraph', icon: BiParagraph},
    {value: 'email', label: 'Email', icon: HiOutlineMail},
    {value: 'number', label: 'Number', icon: HiOutlineHashtag},

    {value: 'files', label: 'Files', icon: LuFiles},
    {value: 'image', label: 'Images', icon: LuImages},

    {value: 'linearScale', label: 'Linear Scale', icon: MdOutlineLinearScale},
    {value: 'rating', label: 'Rating', icon: FaRegStarHalfStroke},
    {value: 'dropSown', label: 'Drop Down', icon: IoIosArrowDropdown},
    {value: 'multiChoice', label: 'Multiple Choice', icon: CgEditBlackPoint},
    {value: 'checkboxes', label: 'Checkboxes', icon: LuLayoutList},

    {value: 'multiChoiceGrid', label: 'Multiple Choice Grid', icon: BsUiRadiosGrid},
    {value: 'checkboxesGrid', label: 'Checkboxes Grid', icon: BsUiChecksGrid},

    {value: 'date', label: 'Date', icon: IoMdTime},
    {value: 'time', label: 'Time', icon: LuCalendar},
]

export default function FieldConfigCard() {

    return <React.Fragment>

        <div className='p-5 rounded-lg bg-[var(--white-color)] border-2 border-[var(--gray-color)] space-y-2.5'>

            <div className='flex flex-wrap items-center justify-between'>

                <div className='flex items-center gap-2.5'>
                    <LuGripVertical className='text-2xl text-[var(--secondary-color)]/50 cursor-move shrink-0' />
                    <p className='text-lg font-semibold text-[var(--secondary-color)]'>Field 1</p>
                </div>

                <div className='flex items-center gap-2.5'>
                    <MainBtn icon={LuEye} isPrimary={true} isSmall={true} />
                    <MainBtn icon={LuTrash} isPrimary={false} isDanger={true} isSmall={true} />
                </div>

            </div>

            <div className='flex flex-wrap items-center justify-between gap-5'>

                <ListInput
                    id="fieldType"
                    label="Field Type"
                    placeholder='Select the type of this field'
                    value=''
                    options={fieldsType}
                    // value={[selectedCountry]}
                    // onChange={(e) => setSelectedCountry(e.target.value)}
                />

                <div className='flex flex-wrap items-center gap-2.5'>

                    <ToggleBtn id={'isRequired'} title='Required' />

                    <ListInput
                        id="step"
                        // label="Step"
                        placeholder='Step'
                        value=''
                        options={[{label: '1', value: '1'}, {label: '2', value: '2'}, {label: '3', value: '3'}]}
                        // value={[selectedCountry]}
                        // onChange={(e) => setSelectedCountry(e.target.value)}
                    />

                </div>

            </div>

            <div className='grid grid-cols-2 gap-2.5 max-[730px]:grid-cols-1'>

                <RegularInput id='label' label='Field Label' placeholder="Enter a label for this field" />
                <RegularInput id='placeholder' label='Field Placeholder' placeholder="Enter a placeholder for this field" />

                <div className='col-span-2 space-y-2.5 max-[730px]:col-span-1'>

                    <RegularInput id='description' label='Field Description' placeholder="Enter a description for this field (optional)" />

                    <FilesInput 
                        id='inlineImage' fileType='image' 
                        maxFiles={1} label='Field Inline Image' 
                        description='Add an inline image to this field (optional)' 
                        onFilesChange={() => console.log('image uploaded')}
                    />

                </div>

            </div>

        </div>

    </React.Fragment>

}
